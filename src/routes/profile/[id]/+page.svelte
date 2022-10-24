
<script>
// @ts-nocheck

    import { page } from "$app/stores";
    import Footer from "$lib/Footer.svelte";
    import Nav from "$lib/Nav.svelte";

    export let data;
    
</script>

{#if $page.data.session.user.email}
    
<Nav></Nav>

{#await data[0]["0"] then value}
<div class="container emp-profile">
    <form method="post">
        <div class="row">
            <div class="col-md-6">
                <div class="profile-head">
                            <h2>
                                {value.name}
                            </h2>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <div class="col-md-2">
                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
            </div> -->
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{value.name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{value.id}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{value.phone}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Gender</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{value.gender}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>City</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{value.city}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Country</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{value.country}</p>
                                    </div>
                                </div>
                    </div><!-- 
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Experience</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Hourly Rate</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>10$/hr</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Total Projects</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>230</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>English Level</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Availability</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>6 months</p>
                                    </div>
                                </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label>Your Bio</label><br/>
                                <p>Your detail description</p>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </form>           
</div>


<div>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h4>Booking</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Check In</th>
                            <th>Check out</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#await data[1].data then value}
                        {#each data[1].data as v}
                        <tr>
                            <td>{v.room_name}</td>
                            <td>{v.check_in}</td>
                            <td>{v.check_out}</td>
                            <td>{v.status}</td>
                            {#if v.status == "Not Paid"}
                            <td><button class="btn btn-danger" type="button">Check Out</button></td>
                            {:else}
                            <td><button class="btn btn-warning" type="button" disabled>Already Paid</button></td>

                            {/if}
                        </tr>
                        {/each}
                        {/await}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

{/await}
<Footer></Footer>
{/if}


<style>
    .emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}
.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
</style>
