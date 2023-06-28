<template>
  <div :to="{name: 'products', params: {id: product.id}}" >
    <div class="Card">
      <img :src="product.Image" :alt="product.name" id="product-imgs" />
      <h3>{{ product.name }}</h3>
      <p>R {{ product.price }}</p>
      <button @click="addToCart(product.id)" class="addbtn mb-5">
        Add to cart
      </button>
    </div>
</div>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style>
#product-imgs {
  width: 256px !important;
  height: 300px !important;
}

.Card{
 color: #f5e6e8 ;
}

.addbtn{
    width: 100%;
    font-size: 20px !important;
    color: #f5e6e8;
    background-color: #192a51;
    border: none ;
  }

  .Filter{
    position: absolute !important;
    left: 35%!important;

    
    color: #f5e6e8;
    border-radius: 0 !important;
    border: none
  }
  .category-button{
    background-color: #192a51 !important;
    color: #f5e6e8 !important;
    border: none !important;
  }
  .All-btn{
    background-color: #192a51 !important;
    color: #f5e6e8 !important;
    border: none !important;
  }
  h3{
    font-size: 18px !important;
  }
 
  h1{
    color: #192a51 !important;
  }

  #product-img:hover{
    border: #192a51 2px solid ;
  }

  .addbtn:hover{
   color: #192a51;
   background-color: transparent !important;
   transition: 0.6s;
  }
</style>
