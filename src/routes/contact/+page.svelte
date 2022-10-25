<script>
// @ts-nocheck

    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
    import { v4 as uuidv4 } from 'uuid';
    import { supabaseClient } from "$lib/db";

    async function contact(e) {
        const email = e.target.email.value;
        const name = e.target.name.value;
        const message = e.target.message.value;
        const { error } = await supabaseClient
            .from('Contact')
            .insert({  contact_id: uuidv4(),email, name, message })
        if (!error) {
            alert("Thanks for Contacting Us")
        }
        console.log(error)
        e.target.reset()
    }
</script>

<Nav></Nav>

<!-- Contact Section Begin -->
<section class="contact-section spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="contact-text">
                    <h2>Contact Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                    <table>
                        <tbody>
                            <tr>
                                <td class="c-o">Address:</td>
                                <td>Some Place at UNZA</td>
                            </tr>
                            <tr>
                                <td class="c-o">Phone:</td>
                                <td>+260 977 234 567</td>
                            </tr>
                            <tr>
                                <td class="c-o">Email:</td>
                                <td>laminluxury@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-7 offset-lg-1">
                <form on:submit|preventDefault={contact} class="contact-form">
                    <div class="row">
                        <div class="col-lg-6">
                            <input type="text" placeholder="Your Name" name="name" required>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" placeholder="Your Email" name="email" required>
                        </div>
                        <div class="col-lg-12">
                            <textarea placeholder="Your Message" name="message" required></textarea>
                            <button type="submit" class="btn btn-warning">Submit Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="map">
            <!-- svelte-ignore a11y-missing-attribute -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15386.615079825428!2d28.32235411352056!3d-15.395226241428004!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szm!4v1666389487697!5m2!1sen!2szm" width="600" height="470" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</section>
<!-- Contact Section End -->


<Footer></Footer>