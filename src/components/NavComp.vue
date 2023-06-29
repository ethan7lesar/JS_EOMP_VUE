<template>
  <nav class="navbar sticky-top bg-body-tertiary p-0">
    <div class="container-fluid NAV">
      <div
        class="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div class="p-4">
          <a class="nav-link" href="/Pages/products.html">Products</a>
          <a class="nav-link" href="/Pages/about.html">About</a>
          <a class="nav-link" href="/Pages/contact.html">Contact</a>
        </div>
      </div>
      <a class="navbar-brand" href="/index.html">
        <img
          src="https://i.postimg.cc/Jzp20Xry/Grey-Matter.png"
          alt="Logo"
          width="50px"
          height="50px"
          class="d-inline-block align-text-top Logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="nav justify-content-center align-text-center mx-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>

      <button
        type="button"
        class="btn bg-none mx-5"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        id="cart-btn"
      >
        <svg
          fill="#F5E6E8"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="55px"
          height="55px"
          viewBox="-90.29 -90.29 1083.44 1083.44"
          xml:space="preserve"
          stroke="#F5E6E8"
          transform="matrix(1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                ></path>
                <path
                  d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  </nav>
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Added Items</h4>
          <button type="button" class="btn" data-bs-dismiss="modal">
            Close
          </button>
        </div>
        <div id="cart-body">
          <div id="results"><h5>Total</h5></div>
        </div>
        <div class="modal-footer">
          <button class="checkout-btn" onclick="checkout()">Checkout</button>
          <p>Total: <span id="total"></span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.NAV {
  background-color: #192a51 !important ;
}

.nav-link {
  color: #f5e6e8 !important;
  padding-left: 50px !important ;
  padding-right: 50px !important;
  font-size: 20px !important;
}
.navbar-toggler {
  display: none !important;
}
.modal-content{
  background-color: #967aa1 !important;
  color: #F5E6E8 !important;
  border: none
  !important;
  border-radius: 0 !important;
}

.rembutton{
  background-color: #192a51 !important;
  color: #f5e6e8 !important;
} 
.modal{
  border: none !important;
  border-radius: 0 !important;
}

</style>
