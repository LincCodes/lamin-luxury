// @ts-nocheck
import { error } from '@sveltejs/kit';
import { supabaseClient } from '$lib/db'
import { page } from '$app/stores';
 
// @ts-ignore
export async function load({ params }) {
  const {data} = await supabaseClient
  .from('Customer')
  .select()
  .eq("id", params.id/* $page.data.session.user.email */)


  const data2 = await supabaseClient
  .from('Booking')
  .select()
  .eq("id", params.id/* $page.data.session.user.email */)

  if (data && data2.data) {
    return [data, data2]
  }
 
  //throw error(404, 'Not found');
}