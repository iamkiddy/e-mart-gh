<template>
  <div class="navcarousel">
    <div class="container">
      <div class="container-1">
        <header>
          <h1 class="brand-name">STORE</h1>
          <nav>
            <ul>
              <li>
                <a href="#" class="home-link">Home</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Hot Deals</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Shops</a>
              </li>
            </ul>
          </nav>
          <div class="shop-icons">
            <img src="../../assets/search.svg" class="search" />
            <img src="../../assets/shopping-bag.svg" class="bag" />
            <img src="../../assets/heart.svg" class="love" />
          </div>
          <div class="bag-number">2</div>
        </header>
        <section class="sec1">
          <div class="texts">
            <p class="first-text">Men Collection 2020</p>
            <p class="second-text">NEW ARRIVALS</p>
            <button class="sec-btn">SHOP NOW</button>
          </div>
          <div class="image">
            <img src="../../assets/maninshirt.jpg" class="img-main" />
          </div>
        </section>
      </div>
    </div>
    <itemssection />
    <productoverview />
    <homeFooter />
  </div>
</template>

<script>
import itemssection from "../home-components/itemssection";
import productoverview from "../home-components/productoverview";
import homeFooter from "../home-components/home-footer";
export default {
  name: "navcarousel",
  components: {
    itemssection,
    productoverview,
    homeFooter,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap");

.container {
  width: 100vw;
  background: #e6e6e6;
  height: 93vh;
  margin: 0px !important;
}
.container-1 {
  font-family: "poppins", sans-serif;
  margin-left: 100px;
  margin-right: 100px;
  width: 100vw;
}
header {
  display: flex;
  flex-direction: row;
}
.brand-name {
  margin-top: 18px;
}
ul {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}
.home-link {
  color: #6c7ae0 !important;
}
li {
  list-style: none;
  padding: 0 20px;
}
a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: all 0.5s;
}
a:hover {
  color: #6c7ae0;
}
.shop-icons {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  position: relative;
  right: -402px;
}
img {
  cursor: pointer;
  transition: all 0.5s;
}
img:hover {
  color: #6c7ae0;
}
.bag-number {
  position: absolute;
  right: 140px;
  top: 55px;
  background: #6c7ae0;
  color: #ffffff;
  width: 1.25rem;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.25rem;
}
.texts {
  margin-top: 130px;
}
.first-text {
  font-size: 28px;
}
.second-text {
  font-family: "Liu Jian Mao Cao", cursive;
  font-size: 60px;
  margin-top: 20px;
}
.sec-btn {
  min-width: 161px;
  height: 46px;
  margin-top: 50px;
  border-radius: 23px;
  background: #6c7ae0;
  border: none;
  font-weight: bold;
  color: #fff;
  font-size: 15px;
  transition: all 0.5s;
  cursor: pointer;
  font-family: "poppins", sans-serif;
}
.sec-btn:hover {
  background: #333;
}
.img-main {
  position: absolute;
  top: 150px;
  right: 200px;
  width: 500px;
  height: 450px;
  object-fit: contain;
  border: none;
}
</style>
