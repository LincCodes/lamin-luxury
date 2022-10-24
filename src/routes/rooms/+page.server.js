// @ts-nocheck
import { error } from '@sveltejs/kit';
import { supabaseClient } from '$lib/db'
 
// @ts-ignore
export async function load({ params }) {
  const data = await supabaseClient
  .from('RoomType')
  .select(`
    id,img2,name,price,size,capacity,bed,services
  `)
  //console.log(data.data);
  if (data.data) {
    return data;
  }
 
  //throw error(404, 'Not found');
}