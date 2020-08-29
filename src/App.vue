<template>
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
