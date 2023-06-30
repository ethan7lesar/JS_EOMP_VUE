<template>
  <footer>
    <div class="container-fluid nav-bottom d-flex justify-content-between">
      <div class="mt-4 contact-text">
        <h5>Contact</h5>
        <ul class="list-s">
          <li>email: ethanlesar11@gmail.com</li>
          <li>Call: 0744661587</li>
        </ul>
      </div>
      <div class="Copyright-container mt-5">
        <p>@Copyright Grey Matter 2023 by Ethan Lesar</p>
        <div class="d-flex justify-content-center">
          <i
            class="fa-brands fa-instagram px-3 fa-2xl"
            style="color: #192a51"
          ></i>
          <i
            class="fa-brands fa-facebook px-3 fa-2xl"
            style="color: #192a51"
          ></i>
          <i
            class="fa-brands fa-linkedin px-3 fa-2xl"
            style="color: #192a51"
          ></i>
          <i class="fa-brands fa-tiktok px-3 fa-2xl" style="color: #192a51"></i>
        </div>
      </div>
      <div class="admin mt-5">
        <router-link to="/admin"><div class="btn admin-btn">Admin</div></router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  background-color: #d5c6e0 !important;
  color: #192a51 !important;
}

i {
  width: 50px !important;
  height: 50px !important;
}
</style>
