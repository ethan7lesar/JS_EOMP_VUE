<template>
  <h1 class="text-center">Products :</h1>

  <div class="Filter">
    <h6>Filter:</h6>
    <button
      class="All-btn"
      onclick="displayProducts(products);
  "
    >
      All
    </button>
    <button class="category-button" data-category="rolex">Rolex</button>
    <button class="category-button" data-category="rm">Richard Mille</button>
    <button class="category-button" data-category="AP">Audemars Piguet</button>
    <button class="category-button" data-category="PP">Patek Philippe</button>
  </div>
  <div
    v-if="products"
    class="p-3 row row-cols-md-4 row-cols-sm-1 mx-auto products container-fluid"
    id="products"
  >
    <CardComp
      v-for="product of products"
      :key="product.id"
      :product="product"
    ></CardComp>
  </div>
  <div v-else>Not working</div>
</template>
<script>
import CardComp from "@/components/CardComp.vue";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },

  components: { CardComp },
};
</script>
<style>
.Filter {
  position: absolute !important;
  left: 35% !important;

  color: #f5e6e8;
  border-radius: 0 !important;
  border: none;
}
.category-button {
  background-color: #192a51 !important;
  color: #f5e6e8 !important;
  border: none !important;
}
.All-btn {
  background-color: #192a51 !important;
  color: #f5e6e8 !important;
  border: none !important;
}
</style>
