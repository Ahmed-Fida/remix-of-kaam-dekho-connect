export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      conversations: {
        Row: {
          created_at: string
          id: string
          last_message_at: string | null
          participant_1: string
          participant_2: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_message_at?: string | null
          participant_1: string
          participant_2: string
        }
        Update: {
          created_at?: string
          id?: string
          last_message_at?: string | null
          participant_1?: string
          participant_2?: string
        }
        Relationships: []
      }
      employer_profiles: {
        Row: {
          company_name: string | null
          company_type: string | null
          created_at: string
          id: string
          is_verified: boolean | null
          rating: number | null
          total_hires: number | null
          total_reviews: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          company_name?: string | null
          company_type?: string | null
          created_at?: string
          id?: string
          is_verified?: boolean | null
          rating?: number | null
          total_hires?: number | null
          total_reviews?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          company_name?: string | null
          company_type?: string | null
          created_at?: string
          id?: string
          is_verified?: boolean | null
          rating?: number | null
          total_hires?: number | null
          total_reviews?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string
          employer_id: string
          id: string
          worker_id: string
        }
        Insert: {
          created_at?: string
          employer_id: string
          id?: string
          worker_id: string
        }
        Update: {
          created_at?: string
          employer_id?: string
          id?: string
          worker_id?: string
        }
        Relationships: []
      }
      hires: {
        Row: {
          created_at: string
          employer_id: string
          end_date: string | null
          id: string
          job_id: string | null
          payment_amount: number | null
          payment_status: string | null
          start_date: string | null
          status: string | null
          updated_at: string
          worker_id: string
        }
        Insert: {
          created_at?: string
          employer_id: string
          end_date?: string | null
          id?: string
          job_id?: string | null
          payment_amount?: number | null
          payment_status?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string
          worker_id: string
        }
        Update: {
          created_at?: string
          employer_id?: string
          end_date?: string | null
          id?: string
          job_id?: string | null
          payment_amount?: number | null
          payment_status?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string
          worker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "hires_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_applications: {
        Row: {
          created_at: string
          id: string
          job_id: string
          message: string | null
          status: string | null
          worker_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          job_id: string
          message?: string | null
          status?: string | null
          worker_id: string
        }
        Update: {
          created_at?: string
          id?: string
          job_id?: string
          message?: string | null
          status?: string | null
          worker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          address: string | null
          city: string
          created_at: string
          description: string | null
          employer_id: string
          id: string
          job_type: string | null
          requirements: string[] | null
          role_type: string
          salary_max: number | null
          salary_min: number | null
          status: string | null
          title: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          city: string
          created_at?: string
          description?: string | null
          employer_id: string
          id?: string
          job_type?: string | null
          requirements?: string[] | null
          role_type: string
          salary_max?: number | null
          salary_min?: number | null
          status?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          city?: string
          created_at?: string
          description?: string | null
          employer_id?: string
          id?: string
          job_type?: string | null
          requirements?: string[] | null
          role_type?: string
          salary_max?: number | null
          salary_min?: number | null
          status?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string
          id: string
          is_read: boolean | null
          receiver_id: string
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          receiver_id: string
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          receiver_id?: string
          sender_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          city: string | null
          created_at: string
          email: string | null
          full_name: string
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          full_name: string
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string
          id: string
          job_id: string | null
          rating: number
          review_type: string
          reviewed_id: string
          reviewer_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: string
          job_id?: string | null
          rating: number
          review_type: string
          reviewed_id: string
          reviewer_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: string
          job_id?: string | null
          rating?: number
          review_type?: string
          reviewed_id?: string
          reviewer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      worker_profiles: {
        Row: {
          availability: string | null
          availability_schedule: Json | null
          bio: string | null
          cnic_number: string | null
          created_at: string
          experience_years: number | null
          id: string
          id_document_url: string | null
          is_bg_checked: boolean | null
          is_verified: boolean | null
          portfolio_images: string[] | null
          rating: number | null
          role_type: string | null
          salary_max: number | null
          salary_min: number | null
          skills: string[] | null
          total_jobs: number | null
          total_reviews: number | null
          updated_at: string
          user_id: string
          work_history: Json | null
        }
        Insert: {
          availability?: string | null
          availability_schedule?: Json | null
          bio?: string | null
          cnic_number?: string | null
          created_at?: string
          experience_years?: number | null
          id?: string
          id_document_url?: string | null
          is_bg_checked?: boolean | null
          is_verified?: boolean | null
          portfolio_images?: string[] | null
          rating?: number | null
          role_type?: string | null
          salary_max?: number | null
          salary_min?: number | null
          skills?: string[] | null
          total_jobs?: number | null
          total_reviews?: number | null
          updated_at?: string
          user_id: string
          work_history?: Json | null
        }
        Update: {
          availability?: string | null
          availability_schedule?: Json | null
          bio?: string | null
          cnic_number?: string | null
          created_at?: string
          experience_years?: number | null
          id?: string
          id_document_url?: string | null
          is_bg_checked?: boolean | null
          is_verified?: boolean | null
          portfolio_images?: string[] | null
          rating?: number | null
          role_type?: string | null
          salary_max?: number | null
          salary_min?: number | null
          skills?: string[] | null
          total_jobs?: number | null
          total_reviews?: number | null
          updated_at?: string
          user_id?: string
          work_history?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "employer" | "worker"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "employer", "worker"],
    },
  },
} as const
