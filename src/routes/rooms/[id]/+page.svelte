<script>
// @ts-nocheck
    import { page } from '$app/stores';
    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
    import { goto } from '$app/navigation';
    import { supabaseClient } from '$lib/db';
    import { v4 as uuidv4 } from 'uuid';
    export let data;
    async function book(e) {
        const inn = e.target.in.value;
        const out = e.target.out.value;
        const room = e.target.room.value;
        const name = e.target.name.value;
        console.log(inn, out, room);
        if(!$page.data.session){
            goto("/login")
        }else{
            const { error } = await supabaseClient
            .from('Booking')
            .insert({ booking_id: uuidv4(), check_in: inn, check_out: out, id: $page.data.session.user.email, room_type:room, room_name: name, status: "Not Paid"})
            if (!error) {
                const { error } = await supabaseClient
                .from('Room')
                .update({ occupied: true })
                .eq('room_type', room) 
                if (!error) {
                    goto("/profile/" + $page.data.session.user.email)
                }
            }
        }
        
    }
</script>
  
<!-- Breadcrumb Section Begin -->
<Nav></Nav>
<div class="breadcrumb-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb-text">
                    <h2>Our Rooms</h2>
                    <div class="bt-option">
                        <a href="./home.html">Home</a>
                        <span>Rooms</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb Section End -->

<!-- Room Details Section Begin -->
{#await data[0]["0"] then value}
<section class="room-details-section spad">
    <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="room-details-item">
                        <img src="{value.img2}" alt="">
                        <div class="rd-text">
                            <div class="rd-title">
                                <h3>{value.name}</h3>
                            </div>
                            <h2>{value.price}<span>/Pernight</span></h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="r-o">Size:</td>
                                        <td>{value.size}</td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Capacity:</td>
                                        <td>Max persion {value.capacity}</td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Bed:</td>
                                        <td>{value.bed}</td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Services:</td>
                                        <td>{value.services}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="f-para">{value.description}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="room-booking">
                        <h3>Your Reservation</h3>
                        <form on:submit|preventDefault={book}>
                            <div class="check-date">
                                <label for="date-in">Check In:</label>
                                <input type="date" id="date-in" name="in" required>
                            </div>
                            <div class="check-date">
                                <label for="date-out">Check Out:</label>
                                <input type="date" id="date-out" name="out" required>
                            </div>
                            <input type="text" value="{value.id}" style="display: none;" name="room">
                            <input type="text" value="{value.name}" style="display: none;" name="name">
                            {#await data[1]["0"] then v}
                                {#if v.occupied == true}

                                <button class="btn btn-warning" disabled>Unavailable</button>
                                  {:else}  
                                  <button type="submit">Booking Now</button>
                                {/if}
                            {/await}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/await}
<!-- Room Details Section End -->

<Footer></Footer>

<style>
    img{
        width: 100%;
    }
</style>