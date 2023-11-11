export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string | undefined
                    updated_at: string | null
                    username: string | null
                    full_name: string | null
                    avatar_url: string | null
                    website: string | null
                }
                Insert: {
                    id: string | undefined
                    updated_at?: string | null
                    username?: string | null
                    full_name?: string | null
                    avatar_url?: string | null
                    website?: string | null
                }
                Update: {
                    id?: string | undefined
                    updated_at?: string | null
                    username?: string | null
                    full_name?: string | null
                    avatar_url?: string | null
                    website?: string | null
                }
            },
            sets: {
                Row: {
                    id: string | undefined
                    updated_at: string | null
                    title: string | null
                    description: string | null
                    user_id: string | null
                }
                Insert: {
                    id: string | undefined
                    updated_at?: string | null
                    title?: string | null
                    description?: string | null
                    user_id?: string | null
                }
                Update: {
                    id?: string | undefined
                    updated_at?: string | null
                    title?: string | null
                    description?: string | null
                    user_id?: string | null
                }
            },
            cards: {
                Row: {
                    id: string | undefined
                    updated_at: string | null
                    term: string | null
                    definition: string | null
                    set_id: string | null
                }
                Insert: {
                    id: string | undefined
                    updated_at?: string | null
                    term?: string | null
                    definition?: string | null
                    set_id?: string | null
                }
                Update: {
                    id?: string | undefined
                    updated_at?: string | null
                    term?: string | null
                    definition?: string | null
                    set_id?: string | null
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
    }
}