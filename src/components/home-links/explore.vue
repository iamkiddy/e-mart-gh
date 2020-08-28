<template>
  <div class="explore">
    <freeshippingnavbar />
    <productoverview />
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

<style></style>
