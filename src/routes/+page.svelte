<script>
// @ts-nocheck

    
    import Nav from "$lib/Nav.svelte"; 
    import Footer from "$lib/Footer.svelte";
    import { validate_each_argument } from "svelte/internal";

    // @ts-ignore
    export let data;
    //console.log(data);
</script>

<body>
    <Nav/>
    <!-- Hero Section Begin -->
    <section class="hero-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hero-text text-center">
                        <h1>Sona A Luxury Hotel</h1>
                        <p>Here are the best hotel booking sites, including recommendations for international
                            travel and for finding low-priced hotel rooms.</p>
                        <a href="rooms" class="primary-btn">View Rooms</a>

                    </div>
                </div>
            </div>
        </div>
        <div class="hero-slider owl-carousel">
            <div class="hs-item set-bg" data-setbg="img/hero/hero-1.jpg"></div>
            <div class="hs-item set-bg" data-setbg="img/hero/hero-2.jpg"></div>
            <div class="hs-item set-bg" data-setbg="img/hero/hero-3.jpg"></div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- About Us Section Begin -->
    <section class="aboutus-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-text">
                        <div class="section-title">
                            <span>About Us</span>
                            <h2>Intercontinental LA <br />Westlake Hotel</h2>
                        </div>
                        <p class="f-para">Sona.com is a leading online accommodation site. We’re passionate about
                            travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
                            languages.</p>
                        <p class="s-para">So when it comes to booking the perfect hotel, vacation rental, resort,
                            apartment, guest house, or tree house, we’ve got you covered.</p>
                        <a href="about" class="primary-btn about-btn">Read More</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-pic">
                        <div class="row">
                            <div class="col-sm-6">
                                <img src="img/about/about-1.jpg" alt="">
                            </div>
                            <div class="col-sm-6">
                                <img src="img/about/about-2.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Us Section End -->

    <!-- Home Room Section Begin -->
    <section class="hp-room-section">
        <div class="container-fluid">
            <div class="hp-room-items">
                <div class="row">
                    {#await data["1"] then value}
                    {#each data["1"].data as value}
                            
                        <div class="col-lg-3 col-md-6" style="text-shadow: 2px 2px 4px #000">
                            <div class="hp-room-item set-bg" data-setbg="{value.img1}">
                                <div class="hr-text">
                                    <h3>{value.name}</h3>
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
                                    <a href="/rooms/{value.id}" class="primary-btn">More Details</a>
                                </div>
                            </div>
                        </div>
                    {/each}
                    {/await}
                </div>
            </div>
        </div>
    </section>
    <!-- Home Room Section End -->

    <!-- Blog Section Begin -->
    <section class="blog-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Hotel News</span>
                        <h2>Our Events</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                {#await data["2"] then value}
                    {#each data["2"].data as value}
                    <div class="col-lg-4 col-md-6" style="text-shadow: 2px 2px 4px #000">
                        <div class="blog-item set-bg" data-setbg="{value.img2}">
                            <div class="bi-text">
                                <span class="b-tag">{value.type}</span>
                                <h4><a href="/events/{value.id}">{value.title}</a></h4>
                                <div class="b-time"><i class="icon_clock_alt"></i>{value.date}</div>
                            </div>
                        </div>
                    </div>
                    {/each}
                {/await}
            </div>
        </div>
    </section>
    <!-- Blog Section End -->
    <Footer/>
</body>