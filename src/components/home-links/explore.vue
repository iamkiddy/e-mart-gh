<template>
  <div class="explore">
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <freeshippingnavbar />
    <productoverview class="prod" />
    <homefooter />
  </div>
</template>

<script>
import freeshippingnavbar from "../pages/freeshippingnavbar";
import productoverview from "../home-components/productoverview";
import homefooter from "../home-components/home-footer";
export default {
  name: "explore",
  components: {
    freeshippingnavbar,
    productoverview,
    homefooter,
  },
  mounted() {
    this.$refs.topProgress.start();

    // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.topProgress.done();
    }, 2000);
  },
  created: function () {
    const loading = this.$vs.loading({ text: "Welcome to Explore" });
    setTimeout(() => {
      loading.close();
    }, 5000);
  },
};
</script>

<style scoped>
.prod {
  margin-top: 50px;
}
</style>
