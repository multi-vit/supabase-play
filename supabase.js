import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(process.env.DB_URI, process.env.DB_API_KEY)