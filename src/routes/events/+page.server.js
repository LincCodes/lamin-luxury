// @ts-nocheck
import { error } from '@sveltejs/kit';
import { supabaseClient } from '$lib/db'
 
// @ts-ignore
export async function load({ params }) {
  const data = await supabaseClient
  .from('Event')
  .select(`
    id,img2,title,type,date
  `)
  if (data.data) {
    return data;
  }
 
  //throw error(404, 'Not found');
}