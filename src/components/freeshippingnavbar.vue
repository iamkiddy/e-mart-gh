<template>
  <div class="freeshipping-section">
    <h1 class="freeshippingtext">Free shipping for standard order over GHS 100</h1>
    <div class="freeshippinglinks">
      <nav>
        <ul>
          <li>
            <a href="#">Help & FAQs</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">EN</a>
          </li>
          <li>
            <a href="#">TWI</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "freeshippingnavbar"
};
</script>

<style scoped>
.freeshipping-section {
  background: #333;
  color: #b2b2b2;
  font-family: "poppins", sans-serif;
  font-size: 7px;
  width: 100vw;
  height: 7vh;
  line-height: 1.8;
}
.freeshippingtext {
  position: relative;
  top: 10px;
  margin-left: 100px;
}
ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  float: right;
  position: relative;
  right: 100px;
}
li {
  color: #b2b2b2;
  position: relative;
  top: -17px;
  font-family: "poppins", sans-serif;
  font-size: 7px;
  padding: 0 20px;
  list-style: none;
}
a {
  font-size: 15px;
  color: #b2b2b2;
  font-family: "poppins", sans-serif;
  text-decoration: none;
  transition: all 0.5s;
}
a:hover {
  color: #6c7ae0;
}
@media only screen and (max-width: 600px) and (min-width: 760px) {
  .freeshipping-section {
    display: none;
  }
}
</style>