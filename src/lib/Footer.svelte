<script>
// @ts-nocheck
    import { supabaseClient } from './db'

    async function sub(e) {
        const email = e.target.email.value;
        const { error } = await supabaseClient
            .from('Subscription')
            .insert({ email})
        if (!error) {
            alert("Thanks for subscribing")
        }else{
            if ('duplicate key value violates unique constraint "Subscription_pkey"' == error.message) { 
                alert("Already subscribed")
            }
        }
        //RESET A FORM
        e.target.reset()
            
    }

</script>

<!-- Footer Section Begin -->
<footer class="footer-section">
    <div class="container">
        <div class="footer-text">
            <div class="row">
                <div class="col-lg-4">
                    <div class="ft-about">
                        <div class="logo">
                            <a href="/">
                                <h2 class="text-white">Lamin</h2>
                            </a>
                        </div>
                        <p>We inspire and reach millions of travelers</p>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1">
                    <div class="ft-contact">
                        <h6>Contact Us</h6>
                        <ul>
                            <li>+260 977 234 567</li>
                            <li>laminluxury@gmail.com</li>
                            <li>Some place at UNZA</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1">
                    <div class="ft-newslatter">
                        <h6>New latest</h6>
                        <p>Get the latest updates and offers.</p>
                        <form on:submit|preventDefault={sub} class="fn-form">
                            <input type="text" placeholder="Email" name="email">
                            <button type="submit"><i class="fa fa-send"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center align-items-center">
                    <div class="co-text"><p>Copyright &copy;2022 All rights reserved | Lamin Luxury</p></div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Footer Section End -->