<script>
// @ts-nocheck

    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
    import { validate_each_argument } from "svelte/internal";
    export let data;
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
{#await data["0"] then value}
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
                        <form action="#">
                            <div class="check-date">
                                <label for="date-in">Check In:</label>
                                <input type="date" id="date-in">
                            </div>
                            <div class="check-date">
                                <label for="date-out">Check Out:</label>
                                <input type="date" id="date-out">
                            </div>
                            <button type="submit">Booking Now</button>
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