<template>
  <div id="itemssection">
    <div class="items">
      <div class="card c1">
        <h1 class="card-header">Phones</h1>
        <p class="card-para">Apple</p>
        <img src="../assets/iphone-x.png" class="card-img iphone" />
      </div>
      <div class="card c1">
        <h1 class="card-header">Men</h1>
        <p class="card-para">Nike 2020</p>
        <img src="../assets/nike-cap.png" class="card-img nike" />
      </div>
      <div class="card c1">
        <h1 class="card-header">Laptop</h1>
        <p class="card-para">Apple</p>
        <img src="../assets/laptop.png" class="card-img laptop" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemssection"
};
</script>

<style scoped>
.itemssection {
  width: 100vw;
  color: #fff;
  margin-left: 20px;
}
.items {
  margin-left: 100px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.card {
  border: 1px solid lightgray;
  width: 350px;
  height: 270px;
  transition: all 0.5s;
}
.card:hover {
  background: #6c7ae0;
  opacity: 0.8;
  color: #fff;
}
.card-header {
  font-family: "poppins", sans-serif;
  font-weight: bold;
  font-size: 28px;
  margin-top: 30px;
  margin-left: 30px;
  color: #000;
}
.card-para {
  font-family: "poppins", sans-serif;
  margin-left: 30px;
  position: relative;
  top: 20px;
}
.card-img {
  width: 120px;
  position: relative;
  top: -80px;
  margin-left: 200px;
}
.nike {
  width: 300px;
  margin-left: 50px;
}
.laptop {
  width: 300px;
  margin-left: 90px;
  top: 5px;
}
</style>
