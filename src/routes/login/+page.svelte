
<script>
    
    import { supabaseClient } from '../../lib/db'
    import {goto} from '$app/navigation';
        
    let hide = "d-none";
    let err = '';

    function hiding() {
        hide = "d-none";
    }
    
    // @ts-ignore
    async function login(e) {
        hide = "d-none";
        const email = e.target.email.value;
        const password = e.target.password.value;

        // @ts-ignore
        const { user, error } = await supabaseClient.auth.signInWithPassword({email,password})
        if (error) {
            hide = "d-inline-block";
            err = error.message + ", check your email app";
        } else {
            goto("/")
        }
    }

</script>


    <!-- Section: Login  Block -->
<section class="text-center">
    <!-- Background image -->
    <div class="p-5 bg-image" style="
            background-color: #dd8731;
            height: 300px;
            "></div>
    <!-- Background image -->
    
    <div class="card mx-4 mx-md-5 shadow-5-strong" style="
            margin-top: -200px;
            background: hsla(0, 0%, 100%, 0.8);
            backdrop-filter: blur(30px);
            ">
        <div class="card-body py-5 px-md-5">
    
        <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
            <h2 class="fw-bold mb-5">Log In</h2>
            <form on:submit|preventDefault={login}>

                <!-- Email input -->
                <button class="btn btn-danger mb-4 {hide}" on:click|preventDefault={hiding}>{err}</button>
                <div class="form-outline mb-4">
                <input type="email" class="form-control" placeholder="Email address" name="email" required/>
                </div>
    
                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" class="form-control" placeholder="Password" name="password" required/>
                </div>
    
                <!-- Submit button -->
                <button type="submit" class="btn btn-block mb-4" style="
                background-color: #dd8731;
                ">
                Log In
                </button>

                <a href="/register" class="btn btn-link">Create a new account here</a>
    
            </form>
            </div>
        </div>
        </div>
    </div>
    </section>
    <!-- Section: Design Block -->