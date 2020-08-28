<template>
  <div id="app">
    <div class="whole-app">
      <freeshippingnavbar />
      <navcarousel />
    </div>
  </div>
</template>

<script>
import freeshippingnavbar from "./pages/freeshippingnavbar";
import navcarousel from "./pages/navcarousel";

export default {
  name: "app",
  components: {
    freeshippingnavbar,
    navcarousel,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato|Poppins|Roboto&display=swap");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
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
}
</style>
