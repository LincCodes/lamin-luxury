import { createClient } from '@supabase/auth-helpers-sveltekit';
// or use the static env
// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabaseClient = createClient(
    "https://gpavswvcinztdxsvfuxg.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwYXZzd3ZjaW56dGR4c3ZmdXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzNjI3NTMsImV4cCI6MTk4MTkzODc1M30.LvVuFrEE-jleg8B0egoKQ0S2jzAg-orbtdm1ruZ5VAc"
    );