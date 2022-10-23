// import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

// @ts-ignore
export async function load(event) {
  return {
    session: await getServerSession(event)
  };
}