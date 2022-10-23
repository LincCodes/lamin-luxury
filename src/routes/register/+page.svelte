
<script>
    
    import { supabaseClient } from '../../lib/db'
    import {goto} from '$app/navigation';
        
    let hide = "d-none";
    let err = '';

    function hiding() {
        hide = "d-none";
    }
    
        // @ts-ignore
    async function register(e) {
        const email = e.target.email.value;
        const password = e.target.password.value;
        const pass = e.target.pass.value;
        const name = e.target.first.value + " " + e.target.last.value;
        const phone = e.target.phone.value;
        const gender = e.target.gender.value;
        const address = e.target.address.value;
        const city = e.target.city.value;
        const country = e.target.country.value;

        
        if(password==pass){
            // @ts-ignore
            const { user, error } = await supabaseClient.auth.signUp({email,password})
            if (error) {
                hide = "d-inline-block";
                err = error.message;
            } else {
                const { data, error } = await supabaseClient.from('Customer').insert([
                    // @ts-ignore
                    { id: email,name,phone,city,country, address, gender  }
                ])
                if (data) {
                    alert("Please check your email app to verify your email")
                    goto("/")
                } else if(error) {
                    hide = "d-inline-block";
                    err = error.message;
                }
            }
        }else{
            hide = "d-inline-block";
            err = "The Password is not the same";
        }
        
    }
</script>
<!-- Section: Register Block -->
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
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form on:submit|preventDefault={register}>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <button class="btn btn-danger mb-4 {hide}" on:click|preventDefault={hiding}>{err}</button>
                <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="text" class="form-control" placeholder="First name" name="first" required/>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="text" class="form-control" placeholder="Last name" name="last" required/>
                    </div>
                </div>
                </div>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="email" class="form-control" placeholder="Email address" name="email" required/>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="text" class="form-control" placeholder="Address" name="address" required/>
                    </div>
                </div>

                </div>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="tel" class="form-control" placeholder="Phone" name="phone" required/>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <select class="form-select" name="gender">
                        <optgroup label="Select a gender">
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </optgroup>
                    </select>
                </div>

                </div>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="text" class="form-control" placeholder="City" name="city" required/>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="text" class="form-control" placeholder="Country" name="country" required/>
                    </div>
                </div>

                </div>
    
                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" class="form-control" placeholder="Password" name="password" required/>
                </div>
    
                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" class="form-control" placeholder="Confirm Password" name="pass" required/>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-block mb-4" style="background-color: #dd8731;">
                Sign up
                </button>

                <a href="/login" class="btn btn-link">Already have an account, click here</a>
    
            </form>
            </div>
        </div>
        </div>
    </div>
    </section>

    <!-- Section: Design Block -->

