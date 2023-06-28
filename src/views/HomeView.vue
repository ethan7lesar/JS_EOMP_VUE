<template>
  <HeroComp />
  <FeaturedComp />
</template>

<script>
// @ is an alias to /src
import HeroComp from "@/components/HeroComp.vue";
import FeaturedComp from "@/components/FeaturedComp.vue";
export default {
  components: { HeroComp, FeaturedComp },
};
</script>
