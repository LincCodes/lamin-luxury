<script>
// @ts-nocheck

    export let data;
    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Nav></Nav>
  
<!-- Blog Details Hero Section Begin -->
{#await data["0"] then value}
<section class="blog-details-hero set-bg" data-setbg="{value.img1}">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 offset-lg-1" style="text-shadow: 2px 2px 4px #000">
                <div class="bd-hero-text">
                    <span>{value.type}</span>
                    <h2>{value.title}</h2>
                    <ul>
                        <li class="b-time"><i class="icon_clock_alt"></i>{value.date}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Blog Details Hero End -->

<!-- Blog Details Section Begin -->
<section class="blog-details-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <div class="blog-details-text">
                    <div class="bd-title">
                        <p>{value.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Blog Details Section End -->
{/await}

<Footer></Footer>