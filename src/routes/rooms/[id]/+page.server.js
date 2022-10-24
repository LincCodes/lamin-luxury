// @ts-nocheck
import { error } from '@sveltejs/kit';
import { supabaseClient } from '$lib/db'
 
// @ts-ignore
export async function load({ params }) {
  const data = await supabaseClient
  .from('RoomType')
  .select(`
    id,img2,name,price,size,capacity,bed,services,description
  `).eq('id', params.id)

  const data2 = await supabaseClient
  .from('Room')
  .select()
  .eq('room_type', params.id)
  if (data.data && data2.data) {
    return [data.data, data2.data]
  }
 
  //throw error(404, 'Not found');
}