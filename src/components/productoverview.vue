<template>
  <div class="productoverview">
    <div class="container">
      <div class="container-1">
        <h1 class="brand-name">PRODUCT OVERVIEW</h1>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#" class="home-link">All Products</a>
                <div class="link-line"></div>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Phones</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </nav>
          <div class="customise-btn">
            <div class="filter">
              <button class="filter-btn">
                <img src="../assets/filter.svg" class="filter-icon" /> Filter
              </button>
            </div>
            <div class="search">
              <button class="search-btn">
                <img src="../assets/search.svg" class="search-icon" /> Search
              </button>
            </div>
          </div>
        </header>
        <div class="buttom">
          <div class="items-views">
            <div class="items-views-list">
              <div class="card-2">
                <img src="../assets/man.png" class="card-img" />
                <h1 class="item-content">sprit Ruffle Shirt</h1>
                <p class="item-price">GHS 50</p>
              </div>
              <div class="card-2">
                <img src="../assets/phone.png" class="card-img" />
                <h1 class="item-content">sprit Ruffle Shirt</h1>
                <p class="item-price">GHS 50</p>
              </div>
              <div class="card-2">
                <img src="../assets/phone.png" class="card-img" />
                <h1 class="item-content">sprit Ruffle Shirt</h1>
                <p class="item-price">GHS 50</p>
              </div>
              <div class="card-2 card-2-2">
                <img src="../assets/man.png" class="card-img" />
                <h1 class="item-content">sprit Ruffle Shirt</h1>
                <p class="item-price">GHS 50</p>
              </div>
              <div class="card-2 card-2-2">
                <img src="../assets/phone.png" class="card-img" />
                <h1 class="item-content">sprit Ruffle Shirt</h1>
                <p class="item-price">GHS 50</p>
              </div>
              <div class="card-2 card-2-2">
                <img src="../assets/man.png" class="card-img" />
                <h1 class="item-content">sprit Ruffle Shirt</h1>
                <p class="item-price">GHS 50</p>
              </div>
            </div>
          </div>
          <button class="items-btn">Show more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productoverview"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap");

.productoverview {
  margin-top: 150px;
}
.container {
  width: 100vw;
  background: #fff;
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
  line-height: 1.1;
  font-size: 40px;
  font-weight: bold;
}
ul {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: -20px;
}
li {
  list-style: none;
  padding: 0 20px;
}
a {
  text-decoration: none;
  color: #797979;
  transition: all 0.5s;
}
.link-line {
  width: 90px;
  height: 1.5px;
  background: #797979;
}
.customise-btn {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  position: relative;
  right: -402px;
}
.filter-btn {
  border: 1px solid lightgray;
  border-radius: 3px;
  height: 40px;
  width: 100px;
  background: #fff;
  color: #797979;
  font-family: "poppins" sans-serif;
  font-size: 15px;
  transition: all 0.5s;
  cursor: pointer;
}
.filter-btn:hover {
  background: #6c7ae0;
  color: #fff;
}
.filter-icon {
  width: 12px;
  position: relative;
  top: 0px;
}
.search-btn {
  border: 1px solid lightgray;
  border-radius: 3px;
  height: 40px;
  width: 100px;
  background: #fff;
  color: #797979;
  font-family: "poppins" sans-serif;
  font-size: 15px;
  transition: all 0.5s;
  cursor: pointer;
}
.search-btn:hover {
  background: #6c7ae0;
  color: #fff;
}
.search-icon {
  width: 12px;
  position: relative;
  top: 0px;
}
.items-views-list {
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.card-2 {
  width: 300px;
  height: 450px;
  transition: all 0.5s;
  background: #e0e1e3;
}
.card-2-2 {
  margin-top: 100px;
}
.card-img {
  width: 180px;
  margin-top: 50px;
  margin-left: 40px;
}
.item-content {
  font-size: 16px;
  font-weight: 200;
  margin-top: 70px;
}
.item-price {
  color: #6c7ae0;
}
.items-btn{
  position: relative;
  top:90px;
  left: 500px;
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
}
.items-btn:hover{
  background:#333;
}
a:hover{
  color:#6c7ae0;
}
.link-line:hover{
  background:#6c7ae0;
}
</style>


