import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
export const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string;

export const FIREBASE_API = process.env.NEXT_PUBLIC_FIREBASE_API as string;
export const FIREBASE_TOKEN_PHONE = process.env.NEXT_PUBLIC_FIREBASE_TOKEN_PHONE as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)