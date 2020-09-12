<template>
<<<<<<< HEAD
  <div id="app">
    <div class="whole-app">
      <freeshippingnavbar />
      <navcarousel />
      <itemssection />
      <productoverview />
      <Footer />
    </div>
  </div>
</template>

<script>
import freeshippingnavbar from "./components/freeshippingnavbar";
import navcarousel from "./components/navcarousel";
import itemssection from "./components/itemssection";
import productoverview from "./components/productoverview";
import footer from "./components/footer";
export default {
  name: "app",
  components: {
    freeshippingnavbar,
    navcarousel,
    itemssection,
    productoverview,
    footer
  }
=======
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  components: {},
  mounted() {
    this.$refs.topProgress.start();

    // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.topProgress.done();
    }, 2000);
  },

  created: function() {
    const loading = this.$vs.loading({ text: "Welcome to Store" });
    setTimeout(() => {
      loading.close();
    }, 5000);
  },
>>>>>>> cc9927ad09882c73481a9f82a69c20d9f85f0023
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato|Poppins|Roboto&display=swap");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
<<<<<<< HEAD
  margin-left: -25px;
=======
}
.whole-app {
  margin-left: 0px;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 10px;
>>>>>>> cc9927ad09882c73481a9f82a69c20d9f85f0023
}
</style>
