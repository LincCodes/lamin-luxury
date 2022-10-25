<script>
// @ts-nocheck
import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { supabaseClient } from '$lib/db';
    import { v4 as uuidv4 } from 'uuid';

    
    async function pay(e) {
        const name = e.target.name.value;
        const card = e.target.card.value;
        const date = e.target.date.value;
        const cvv = e.target.cvv.value;
        let path = $page.url.pathname.split("/").pop()
        console.log(path);
        if(!$page.data.session){
            goto("/login")
        }else{
            const { error } = await supabaseClient
            .from('Payment')
            .insert({ payment_id: uuidv4(), card, date, id: $page.data.session.user.email, cvv, card_name: name})
            if (!error) {
                const { error } = await supabaseClient
                .from('Room')
                .update({ occupied: false })
                .eq('room_type', $page.url.pathname.split("/").pop()) 
                if (!error) {
                    const { error } = await supabaseClient
                    .from('Booking')
                    .update({ status: "Paid" })
                    .eq('room_type', $page.url.pathname.split("/").pop()) 
                    if (!error) {
                        goto("/profile/" + $page.data.session.user.email)
                    }
                }
            }
        }
        
    }
</script>

{#if $page.data.session}
    
<div class="card mt-50 mb-50">
    <div class="card-title mx-auto">
        Billing
    </div>
    <div class="nav">
        <ul class="mx-auto">
            <li class="active">Payment</li>
        </ul>
    </div>
    <form on:submit|preventDefault={pay}>
        <span id="card-header">Add new card:</span>
        <div class="row-1">
            <div class="row row-2">
                <span id="card-inner">Card holder name</span>
            </div>
            <div class="row row-2">
                <input type="text" placeholder="John Doe" name="name" required>
            </div>
        </div>
        <div class="row three">
            <div class="col-7">
                <div class="row-1">
                    <div class="row row-2">
                        <span id="card-inner">Card number</span>
                    </div>
                    <div class="row row-2">
                        <input type="text" placeholder="5134-5264-4" name="card" required>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <input type="text" placeholder="Exp. date" name="date" required>
            </div>
            <div class="col-2">
                <input type="text" placeholder="CVV" name="cvv" required>
            </div>
        </div>
        <button type="submit" class="btn d-flex mx-auto"><b>PAY NOW</b></button>
    </form>
</div>
{/if}

<style>
    body{
    background: #ddd;
    min-height: 100vh;
    vertical-align: middle;
    display: flex;
    
}
.card{
    margin: auto;
    width: 600px;
    padding: 3rem 3.5rem;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.mt-50 {
    margin-top: 50px
}

.mb-50 {
    margin-bottom: 50px
}


@media(max-width:767px){
    .card{
        width: 90%;
        padding: 1.5rem;
    }
}
@media(height:1366px){
    .card{
        width: 90%;
        padding: 8vh;
    }
}
.card-title{
    font-weight: 700;
    font-size: 2.5em;
}
.nav{
    display: flex;
}
.nav ul{
    list-style-type: none;
    display: flex;
    padding-inline-start: unset;
    margin-bottom: 6vh;
}
.nav li{
    padding: 1rem;
}
.nav li a{
    color: black;
    text-decoration: none;
}
.active{
    border-bottom: 2px solid black;
    font-weight: bold;
}

input{
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    width: 100%;
    min-width: unset;
    background-color: transparent;
    border-color: transparent;
    margin: 0;
}
form a{
    color:grey;
    text-decoration: none;
    font-size: 0.87rem;
    font-weight: bold;
}
form a:hover{
    color:grey;
    text-decoration: none;
}
form .row{
    margin: 0;
    overflow: hidden;
}
form .row-1{
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 0.5rem;
    outline: none;
    width: 100%;
    min-width: unset;
    border-radius: 5px;
    background-color: rgba(221, 228, 236, 0.301);
    border-color: rgba(221, 228, 236, 0.459);
    margin: 2vh 0;
    overflow: hidden;
}
form .row-2{
    border: none;
    outline: none;
    background-color: transparent;
    margin: 0;
    padding: 0 0.8rem;
}
form .row .row-2{
    border: none;
    outline: none;
    background-color: transparent;
    margin: 0;
    padding: 0 0.8rem;
}
form .row .col-2,.col-7,.col-3{
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 1vh;
}
form .row .col-2{
    padding-right: 0;
}

#card-header{
    font-weight: bold;
    font-size: 0.9rem;
}
#card-inner{
    font-size: 0.7rem;
    color: gray;
}
.three .col-7{
    padding-left: 0;
}
.three{
    overflow: hidden;
    justify-content: space-between;
}
.three .col-2{
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 0.5rem;
    outline: none;
    width: 100%;
    min-width: unset;
    border-radius: 5px;
    background-color: rgba(221, 228, 236, 0.301);
    border-color: rgba(221, 228, 236, 0.459);
    margin: 2vh 0;
    width: fit-content;
    overflow: hidden; 
}
.three .col-2 input{
    font-size: 0.7rem;
    margin-left: 1vh;
}
.btn{
    width: 100%;
    background-color: rgb(65, 202, 127);
    border-color: rgb(65, 202, 127);
    color: white;
    justify-content: center;
    padding: 2vh 0;
    margin-top: 3vh;
}
.btn:focus{
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    transition: none; 
}
.btn:hover{
    color: white;
}
input:focus::-webkit-input-placeholder { 
    color:transparent; 
}
input:focus:-moz-placeholder { 
    color:transparent; 
} 
input:focus::-moz-placeholder { 
    color:transparent; 
} 
input:focus:-ms-input-placeholder { 
    color:transparent; 
}
</style>