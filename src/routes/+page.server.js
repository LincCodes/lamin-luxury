// @ts-nocheck
import { error } from '@sveltejs/kit';
import { supabaseClient } from '$lib/db'
 
// @ts-ignore
export async function load({ params }) {
  const data = await supabaseClient
  .from('RoomType')
  .select(`
    id,img1,name,price,size,capacity,bed,services
  `)
  .limit(4)
  const data2 = await supabaseClient
  .from('Event')
  .select(`
    id,img2,title,type,date
  `)
  //console.log(data.data);
  if (data.data && data2.data) {
    return {"1":data,"2":data2};
  }
 
  //throw error(404, 'Not found');
}