<script>
// @ts-nocheck

    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
    export let data;
</script>

<Nav></Nav>

<!-- Breadcrumb Section Begin -->
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

<!-- Rooms Section Begin -->
<section class="rooms-section spad">
    <div class="container">
        <div class="row">
            {#await data then value}
                {#each data.data as value}
            <div class="col-lg-4 col-md-6">
                <div class="room-item">
                    <img src="{value.img2}" alt="">
                    <div class="ri-text">
                        <h4>{value.name}</h4>
                        <h3>{value.price}<span>/Pernight</span></h3>
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
                        <a href="/rooms/{value.id}" class="primary-btn">More Details</a>
                    </div>
                </div>
            </div>
            {/each}
            {/await}
        </div>
    </div>
</section>
<!-- Rooms Section End -->

<Footer></Footer>