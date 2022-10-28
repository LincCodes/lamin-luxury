<script>
    import { page } from '$app/stores';
    import {goto} from '$app/navigation';
    import { supabaseClient } from './db'

    async function signout() {
        const { error } = await supabaseClient.auth.signOut()
        if (error) {
            alert(error.message)
        }
        goto("/")
    }

    function login() {
        goto("/login")
    }

    function register() {
        goto("/register")
    }
</script>

<!-- Offcanvas Menu Section Begin -->
<div class="offcanvas-menu-overlay"></div>
<div class="canvas-open">
    <i class="icon_menu"></i>
</div>
<div class="offcanvas-menu-wrapper">
    <nav class="mainmenu mobile-menu">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/events">Events</a>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            {#if !$page.data.session}
            <li><button on:click={login} class="btn btn-link">Log In</button></li>
            <li><button on:click={register} class="btn btn-primary">Register</button></li>
            {:else}
            <li><a href="/profile"><i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i></a></li>
            <li><button class="btn btn-success" on:click={signout}>Sign Out</button></li>
            {/if}
        </ul>
    </nav>
    <div id="mobile-menu-wrap"></div>
</div>
<!-- Offcanvas Menu Section End -->

<!-- Header Section Begin -->
<header class="header-section">
    <div class="menu-item">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="logo">
                        <a href="/">
                            <h2>Lamin</h2>
                        </a>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="nav-menu">
                        <nav class="mainmenu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/rooms">Rooms</a></li>
                                <li><a href="/events">Events</a>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact</a></li>
                                {#if !$page.data.session}
                                <li><button on:click={login} class="btn btn-link">Log In</button></li>
                                <li><button on:click={register} class="btn btn-primary">Register</button></li>
                                {:else}
                                <li><a href="/profile/{$page.data.session.user.email}"><i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i></a></li>
                                <li><button class="btn btn-success" on:click={signout}>Sign Out</button></li>
                                {/if}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Header End -->


