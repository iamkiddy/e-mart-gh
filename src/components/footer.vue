<template>
  <div class="footer">
    <div class="footer-section">
      <div class="footer-items">
        <div class="categories-sections">
          <h4>CATEGORIES</h4>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Electronics</li>
            <li>TVs</li>
          </ul>
        </div>
        <div class="categories-sections">
          <h4 class="help-text">HELP</h4>
          <ul>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>
        <div class="categories-sections">
          <h4 class="help-text">GET IN TOUCH</h4>
          <li class="get-in-touch-list">
            Any questions?
            <br />Let us know
            or call us
            <br />on
            (+1) 96 716 6879
          </li>
          <div class="icons">
            <img src="../assets/instagram.svg" class="instagram" />
            <img src="../assets/twitter.svg" class="twitter" />
            <img src="../assets/github.svg" class="github" />
          </div>
        </div>
        <div class="categories-sections">
          <h4 class="help-text">NEWSLETTER</h4>
          <div class="form">
            <input class="input" type="search" placeholder="email@example.com" />
          </div>
          <button class="btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
    <img class="payments" src="../assets/payments.png" />
    <p class="copyright">Copyright &copy; 2020 All rights reserved | Hammondz</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  width: 100vw;
  height: 70vh;
  background: #222;
  color: #fff;
  margin-top: 900px;
}
.footer-section {
  position: relative;
  top: 60px;
  left: 100px;
}
h4 {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 1.6;
}
li {
  list-style: none;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  color: #888;
}
.footer-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.help-text {
  position: relative;
  left: 10px;
}
.get-in-touch-list {
  position: relative;
  top: 30px;
}
img {
  width: 20px;
}
.icons {
  position: relative;
  top: 65px;
  left: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.twitter {
  position: relative;
  left: -70px;
}
.github {
  position: relative;
  left: -140px;
}
.form {
  position: relative;
  top: 70px;
  left: 100px;
}
.input {
  width: 200px;
  height: 40px;
  transform: translate(-50%, -50%);
  background: #fff;
  transition: all 0.3s ease;
  padding: 0px 20px;
  color: #000;
  border-color: #fff;
  font-family: "poppins", sans-serif;
}
.btn {
  position: relative;
  top: 20px;
  min-width: 161px;
  height: 46px;
  margin-top: 50px;
  background: #6c7ae0;
  border: none;
  font-weight: bold;
  color: #fff;
  font-size: 15px;
  transition: all 0.5s;
  cursor: pointer;
  border-radius: 23px;
  font-family: "poppins", sans-serif;
}
.btn:hover {
  background: #333;
  color: #fff;
}
.copyright {
  font-family: "poppins", sans-serif;
  font-size: 13px;
  line-height: 1.923;
  position: relative;
  top: 120px;
  left: 540px;
}
.payments {
  width: 200px;
  position: relative;
  top: 120px;
  left: 600px;
}
</style>