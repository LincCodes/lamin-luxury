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
                    <h2>Blog</h2>
                    <div class="bt-option">
                        <a href="./home.html">Home</a>
                        <span>Blog Grid</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb Section End -->

<!-- Blog Section Begin -->
<section class="blog-section blog-page spad">
    <div class="container">
        <div class="row">
            {#await data then value}
                {#each data.data as value}
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


<Footer></Footer>