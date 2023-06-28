<template>
    <div class="card m-2 p-3 contact mx-auto">
        <form action="https://formspree.io/f/xqkorznj" method="POST">
        <h1 class="card p-3 text-center heading-text">Contact Us</h1>
        <div class="mb-3 text-center">
            <label class="form-label"> Full Name: </label>
            <input type="text" class="form-control border-2" name="Name" placeholder="Your Full Name" required />
        </div>
        
        <div class="mb-3 text-center">
            <label class="form-label"> Email: </label>
            <input type="email" class="form-control border-2" name="Email" placeholder="Valid Email Address" required />
        </div>
        
        <div class="mb-3 text-center">
            <label class="form-label"> Contact Number: </label>
            <input type="tel" class="form-control border-2" name="Contact" placeholder="Mobile / Telephone Number" required/>
        </div>
        
        <div class="mb-3 text-center">
            <label class="form-label"> Leave Us a Message: </label>
            <textarea name="message" class="form-control border-2" rows="5" ></textarea>
        </div>
        
        <button type="submit" class="btn btn-outline-danger text-center btn-submit">Submit</button>
    </form>
</div>
</template>

<script>
export default{

}
</script>

<style>
.contact {
    display: flex !important;
    flex-direction: column !important;
  background-color: #192a51 !important;
  border: none !important;
  color: #aaa1c8 !important;
  border-radius: 0;
  width: 400px !important;
  border-radius: 0 !important;
  
}


input{
  border: none !important;
  background-color: #f5e6e8;
  border-radius: 0 !important;
}

.heading-text{
    background: none !important;
    border: none !important;
    color: #aaa1c8 !important;
}

textarea{
    border-radius: 0 !important;
    background-color: #f5e6e8;
}

.btn-submit{
    position: relative;
    left: 40%;

    color: #f5e6e8 !important;
    background-color: #aaa1c8 !important;
    border: none !important;
    border-radius: 0 !important;
}
</style>