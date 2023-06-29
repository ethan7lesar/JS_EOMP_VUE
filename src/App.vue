<template>
  <NavComp />
  <router-view />
 <FooterComp/>

</template>
<script>

import NavComp from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";


export default {
  components: { NavComp, FooterComp , },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

* {
  font-family: "Righteous", cursive;
}
#app {
  background-color: #967aa1 !important;
}
</style>
