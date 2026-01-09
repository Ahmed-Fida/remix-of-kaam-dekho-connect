-- Fix user role assignment during signup/login recovery
-- Existing policies on user_roles were RESTRICTIVE and blocked non-admin inserts.

DO $$
BEGIN
  -- Drop existing policies (if present)
  EXECUTE 'DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles';
  EXECUTE 'DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles';
  EXECUTE 'DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles';
END $$;

-- Recreate policies as PERMISSIVE so they compose correctly

-- Users can always read their own role rows
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Users can set their initial role for themselves (but never admin)
CREATE POLICY "Users can set their own role (non-admin)"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id
  AND role IN ('worker'::public.app_role, 'employer'::public.app_role)
);

-- Admins can read all roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- Admins can manage roles (insert/update/delete)
CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
