<template>
  <div class="explore">
    <freeshippingnavbar />
    <productoverview class="prod" />
  </div>
</template>

<script>
import freeshippingnavbar from "../pages/freeshippingnavbar";
import productoverview from "../home-components/productoverview";
export default {
  name: "explore",
  components: {
    freeshippingnavbar,
    productoverview,
  },
};
</script>

<style scoped>
.prod {
  margin-top: 50px;
}
</style>
