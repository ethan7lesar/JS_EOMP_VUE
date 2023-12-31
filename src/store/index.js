import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
     product: null,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    // setProduct: (state, product) => {
    //   state.product = product;
    // },
  },
  actions: {
    getProducts: async (context) => {
      fetch("https://ethan7lesar.github.io/data/db.json")
        .then((res) => res.json())
        .then((data) => context.commit("setProducts", data.products));
    },
    // getProduct: async (context, id) => {
    //   fetch(" http://localhost:3000/products/" + id)
    //     .then((res) => res.json())
    //     .then((product) => context.commit("setProduct", product));
    // },
  },
});
