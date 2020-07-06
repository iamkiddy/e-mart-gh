<template>
  <div id="app">
    <div class="whole-app">
      <freeshippingnavbar />
      <navcarousel />
      <itemssection />
      <productoverview />
    </div>
  </div>
</template>

<script>
import freeshippingnavbar from "./components/freeshippingnavbar";
import navcarousel from "./components/navcarousel";
import itemssection from "./components/itemssection";
import productoverview from "./components/productoverview";
export default {
  name: "app",
  components: {
    freeshippingnavbar,
    navcarousel,
    itemssection,
    productoverview
  }
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
  margin-left: 100px;
}
</style>
