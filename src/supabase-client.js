import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ibhhzgtxaqwdykedhtvk.supabase.co';
const supabaseAnonKey = 'sb_publishable_Aicdv3GPUOAdE04R9YVHpw_dA18Knik';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);