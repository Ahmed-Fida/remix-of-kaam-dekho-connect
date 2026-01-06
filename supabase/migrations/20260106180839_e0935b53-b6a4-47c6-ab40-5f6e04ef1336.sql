-- Create app_role enum for role-based access
CREATE TYPE public.app_role AS ENUM ('admin', 'employer', 'worker');

-- Create user_roles table for role management (CRITICAL: roles MUST be in separate table)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Create profiles table for all users
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  avatar_url TEXT,
  city TEXT,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create worker_profiles table for worker-specific info
CREATE TABLE public.worker_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  bio TEXT,
  experience_years INTEGER DEFAULT 0,
  skills TEXT[] DEFAULT '{}',
  role_type TEXT, -- Maid, Driver, Cook, etc.
  salary_min INTEGER,
  salary_max INTEGER,
  availability TEXT DEFAULT 'Full-time', -- Full-time, Part-time, On-call
  is_verified BOOLEAN DEFAULT false,
  is_bg_checked BOOLEAN DEFAULT false,
  id_document_url TEXT,
  cnic_number TEXT,
  rating DECIMAL(2,1) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  total_jobs INTEGER DEFAULT 0,
  availability_schedule JSONB DEFAULT '{}',
  portfolio_images TEXT[] DEFAULT '{}',
  work_history JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.worker_profiles ENABLE ROW LEVEL SECURITY;

-- Create employer_profiles table
CREATE TABLE public.employer_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  company_name TEXT,
  company_type TEXT, -- household, office, business
  is_verified BOOLEAN DEFAULT false,
  total_hires INTEGER DEFAULT 0,
  rating DECIMAL(2,1) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.employer_profiles ENABLE ROW LEVEL SECURITY;

-- Create jobs table
CREATE TABLE public.jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  role_type TEXT NOT NULL,
  city TEXT NOT NULL,
  address TEXT,
  salary_min INTEGER,
  salary_max INTEGER,
  job_type TEXT DEFAULT 'Full-time', -- Full-time, Part-time, On-call
  requirements TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'open', -- open, in_progress, completed, cancelled
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Create job_applications table
CREATE TABLE public.job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE NOT NULL,
  worker_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, accepted, rejected
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (job_id, worker_id)
);

ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Create messages table for in-platform chat
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  receiver_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create conversations table for chat management
CREATE TABLE public.conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_1 UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  participant_2 UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  last_message_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (participant_1, participant_2)
);

ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

-- Create reviews table (two-way reviews)
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reviewer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  reviewed_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  job_id UUID REFERENCES public.jobs(id) ON DELETE SET NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  review_type TEXT NOT NULL, -- 'employer_to_worker' or 'worker_to_employer'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create favorites table (employers can save workers)
CREATE TABLE public.favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  worker_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (employer_id, worker_id)
);

ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Create hires table for tracking completed hires
CREATE TABLE public.hires (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  worker_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  job_id UUID REFERENCES public.jobs(id) ON DELETE SET NULL,
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active', -- active, completed, terminated
  payment_amount INTEGER,
  payment_status TEXT DEFAULT 'pending', -- pending, paid, disputed
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.hires ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- user_roles policies
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- profiles policies
CREATE POLICY "Profiles are viewable by everyone"
ON public.profiles FOR SELECT
USING (true);

CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = user_id);

-- worker_profiles policies
CREATE POLICY "Worker profiles are viewable by everyone"
ON public.worker_profiles FOR SELECT
USING (true);

CREATE POLICY "Workers can insert their own profile"
ON public.worker_profiles FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Workers can update their own profile"
ON public.worker_profiles FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Admins can update worker profiles"
ON public.worker_profiles FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- employer_profiles policies
CREATE POLICY "Employer profiles are viewable by everyone"
ON public.employer_profiles FOR SELECT
USING (true);

CREATE POLICY "Employers can insert their own profile"
ON public.employer_profiles FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Employers can update their own profile"
ON public.employer_profiles FOR UPDATE
USING (auth.uid() = user_id);

-- jobs policies
CREATE POLICY "Jobs are viewable by everyone"
ON public.jobs FOR SELECT
USING (true);

CREATE POLICY "Employers can create jobs"
ON public.jobs FOR INSERT
WITH CHECK (auth.uid() = employer_id);

CREATE POLICY "Employers can update their own jobs"
ON public.jobs FOR UPDATE
USING (auth.uid() = employer_id);

CREATE POLICY "Employers can delete their own jobs"
ON public.jobs FOR DELETE
USING (auth.uid() = employer_id);

-- job_applications policies
CREATE POLICY "Workers can view their own applications"
ON public.job_applications FOR SELECT
USING (auth.uid() = worker_id);

CREATE POLICY "Employers can view applications for their jobs"
ON public.job_applications FOR SELECT
USING (EXISTS (
  SELECT 1 FROM public.jobs 
  WHERE jobs.id = job_applications.job_id 
  AND jobs.employer_id = auth.uid()
));

CREATE POLICY "Workers can apply to jobs"
ON public.job_applications FOR INSERT
WITH CHECK (auth.uid() = worker_id);

CREATE POLICY "Employers can update application status"
ON public.job_applications FOR UPDATE
USING (EXISTS (
  SELECT 1 FROM public.jobs 
  WHERE jobs.id = job_applications.job_id 
  AND jobs.employer_id = auth.uid()
));

-- messages policies
CREATE POLICY "Users can view their own messages"
ON public.messages FOR SELECT
USING (auth.uid() = sender_id OR auth.uid() = receiver_id);

CREATE POLICY "Users can send messages"
ON public.messages FOR INSERT
WITH CHECK (auth.uid() = sender_id);

CREATE POLICY "Users can update their received messages (mark as read)"
ON public.messages FOR UPDATE
USING (auth.uid() = receiver_id);

-- conversations policies
CREATE POLICY "Users can view their own conversations"
ON public.conversations FOR SELECT
USING (auth.uid() = participant_1 OR auth.uid() = participant_2);

CREATE POLICY "Users can create conversations"
ON public.conversations FOR INSERT
WITH CHECK (auth.uid() = participant_1 OR auth.uid() = participant_2);

CREATE POLICY "Users can update their conversations"
ON public.conversations FOR UPDATE
USING (auth.uid() = participant_1 OR auth.uid() = participant_2);

-- reviews policies
CREATE POLICY "Reviews are viewable by everyone"
ON public.reviews FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can create reviews"
ON public.reviews FOR INSERT
WITH CHECK (auth.uid() = reviewer_id);

-- favorites policies
CREATE POLICY "Employers can view their favorites"
ON public.favorites FOR SELECT
USING (auth.uid() = employer_id);

CREATE POLICY "Employers can add favorites"
ON public.favorites FOR INSERT
WITH CHECK (auth.uid() = employer_id);

CREATE POLICY "Employers can remove favorites"
ON public.favorites FOR DELETE
USING (auth.uid() = employer_id);

-- hires policies
CREATE POLICY "Users can view their own hires"
ON public.hires FOR SELECT
USING (auth.uid() = employer_id OR auth.uid() = worker_id);

CREATE POLICY "Employers can create hires"
ON public.hires FOR INSERT
WITH CHECK (auth.uid() = employer_id);

CREATE POLICY "Employers can update their hires"
ON public.hires FOR UPDATE
USING (auth.uid() = employer_id);

CREATE POLICY "Admins can view all hires"
ON public.hires FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Enable realtime for messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;

-- Function to automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', 'User'),
    NEW.email
  );
  RETURN NEW;
END;
$$;

-- Trigger for automatic profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_worker_profiles_updated_at
  BEFORE UPDATE ON public.worker_profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_employer_profiles_updated_at
  BEFORE UPDATE ON public.employer_profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_jobs_updated_at
  BEFORE UPDATE ON public.jobs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_hires_updated_at
  BEFORE UPDATE ON public.hires
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to update worker rating when a new review is added
CREATE OR REPLACE FUNCTION public.update_worker_rating()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  UPDATE public.worker_profiles
  SET 
    rating = (
      SELECT ROUND(AVG(rating)::numeric, 1)
      FROM public.reviews
      WHERE reviewed_id = NEW.reviewed_id
      AND review_type = 'employer_to_worker'
    ),
    total_reviews = (
      SELECT COUNT(*)
      FROM public.reviews
      WHERE reviewed_id = NEW.reviewed_id
      AND review_type = 'employer_to_worker'
    )
  WHERE user_id = NEW.reviewed_id;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_review_added
  AFTER INSERT ON public.reviews
  FOR EACH ROW
  WHEN (NEW.review_type = 'employer_to_worker')
  EXECUTE FUNCTION public.update_worker_rating();