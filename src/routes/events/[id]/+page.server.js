// @ts-nocheck
import { error } from '@sveltejs/kit';
import { supabaseClient } from '$lib/db'
 
// @ts-ignore
export async function load({ params }) {
  const {data} = await supabaseClient
  .from('Event')
  .select(`
    img1,title,date,description,type
  `).eq('id', params.id)
  console.log(data);
  if (data) {
    return data;
  }
 
  //throw error(404, 'Not found');
}