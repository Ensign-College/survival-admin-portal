// src/services/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string;

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;
