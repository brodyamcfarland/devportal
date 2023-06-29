export type Json =
     | string
     | number
     | boolean
     | null
     | { [key: string]: Json | undefined }
     | Json[];

export interface Database {
     public: {
          Tables: {
               Application: {
                    Row: {
                         created_at: string | null;
                         dev_id: string | null;
                         employer_id: string | null;
                         id: string;
                    };
                    Insert: {
                         created_at?: string | null;
                         dev_id?: string | null;
                         employer_id?: string | null;
                         id: string;
                    };
                    Update: {
                         created_at?: string | null;
                         dev_id?: string | null;
                         employer_id?: string | null;
                         id?: string;
                    };
                    Relationships: [
                         {
                              foreignKeyName: "Application_dev_id_fkey";
                              columns: ["dev_id"];
                              referencedRelation: "DevAccounts";
                              referencedColumns: ["id"];
                         },
                         {
                              foreignKeyName: "Application_employer_id_fkey";
                              columns: ["employer_id"];
                              referencedRelation: "EmployerAccounts";
                              referencedColumns: ["id"];
                         }
                    ];
               };
               DevAccounts: {
                    Row: {
                         avatar_url: string | null;
                         bio: string | null;
                         country: string | null;
                         dev_type: string | null;
                         email: string;
                         github_url: string | null;
                         id: string;
                         state: string | null;
                         updated_at: string | null;
                         username: string | null;
                         website_links: string[] | null;
                    };
                    Insert: {
                         avatar_url?: string | null;
                         bio?: string | null;
                         country?: string | null;
                         dev_type?: string | null;
                         email: string;
                         github_url?: string | null;
                         id: string;
                         state?: string | null;
                         updated_at?: string | null;
                         username?: string | null;
                         website_links?: string[] | null;
                    };
                    Update: {
                         avatar_url?: string | null;
                         bio?: string | null;
                         country?: string | null;
                         dev_type?: string | null;
                         email?: string;
                         github_url?: string | null;
                         id?: string;
                         state?: string | null;
                         updated_at?: string | null;
                         username?: string | null;
                         website_links?: string[] | null;
                    };
                    Relationships: [
                         {
                              foreignKeyName: "DevAccounts_id_fkey";
                              columns: ["id"];
                              referencedRelation: "users";
                              referencedColumns: ["id"];
                         }
                    ];
               };
               EmployerAccounts: {
                    Row: {
                         bio: string | null;
                         company_name: string;
                         company_website: string | null;
                         country: string | null;
                         created_at: string | null;
                         email: string;
                         id: string;
                         state: string | null;
                    };
                    Insert: {
                         bio?: string | null;
                         company_name: string;
                         company_website?: string | null;
                         country?: string | null;
                         created_at?: string | null;
                         email: string;
                         id: string;
                         state?: string | null;
                    };
                    Update: {
                         bio?: string | null;
                         company_name?: string;
                         company_website?: string | null;
                         country?: string | null;
                         created_at?: string | null;
                         email?: string;
                         id?: string;
                         state?: string | null;
                    };
                    Relationships: [];
               };
               JobPosts: {
                    Row: {
                         applications: string[] | null;
                         company: string | null;
                         created_at: string | null;
                         description: string | null;
                         id: string;
                         industry: string | null;
                         stack: string[] | null;
                         title: string | null;
                    };
                    Insert: {
                         applications?: string[] | null;
                         company?: string | null;
                         created_at?: string | null;
                         description?: string | null;
                         id: string;
                         industry?: string | null;
                         stack?: string[] | null;
                         title?: string | null;
                    };
                    Update: {
                         applications?: string[] | null;
                         company?: string | null;
                         created_at?: string | null;
                         description?: string | null;
                         id?: string;
                         industry?: string | null;
                         stack?: string[] | null;
                         title?: string | null;
                    };
                    Relationships: [
                         {
                              foreignKeyName: "JobPosts_company_fkey";
                              columns: ["company"];
                              referencedRelation: "EmployerAccounts";
                              referencedColumns: ["id"];
                         }
                    ];
               };
          };
          Views: {
               [_ in never]: never;
          };
          Functions: {
               [_ in never]: never;
          };
          Enums: {
               [_ in never]: never;
          };
          CompositeTypes: {
               [_ in never]: never;
          };
     };
}
