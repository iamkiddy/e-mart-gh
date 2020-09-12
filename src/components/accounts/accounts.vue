<template>
  <div class="accounts">
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <div class="accounts-section">
      <div class="first-box"></div>
      <div class="second-box"></div>
      <div class="account-card">
        <div class="sign-in-box">
          <h1 class="brand-name">STORE</h1>
          <h1 class="sign-in-text">Sign in to your account</h1>
          <div class="icons">
            <img src="../../assets/instagram.svg" class="instagram" />
            <img src="../../assets/twitter.svg" class="twitter" />
            <img src="../../assets/github.svg" class="github" />
          </div>
          <p class="or-use-email">or use your email account</p>
          <div class="form">
            <form class="div-form">
              <input type="email" class="email" />
            </form>
          </div>
        </div>
        <div class="sign-up-box">
          <h1 class="hello-text">Hello, Friends!</h1>
          <div class="line"></div>
          <p class="hello-para">
            Fill up
            personal information and
            <br />start shopping with us.
          </p>
          <button class="btn-sign-in-up">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "accounts",
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
.first-box {
  width: 100px;
  height: 50px;
  background: #6c7ae0;
  border-radius: 25%;
}
.second-box {
  width: 100px;
  height: 50px;
  background: #6c7ae0;
  border-radius: 25%;
  position: relative;
  top: 84vh;
  left: 1270px;
}
.account-card {
  width: 1160px;
  height: 500px;
  margin: auto;
  margin-top: -40px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
  border-radius: 45px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 200px;
}
.sign-up-box {
  background: #6c7ae0;
}
.hello-text {
  color: #fff;
  font-family: "poppins", sans-serif;
  position: relative;
  top: 100px;
  left: 100px;
  letter-spacing: 5px;
}
.line {
  width: 120px;
  height: 5px;
  background: #fff;
  position: relative;
  top: 120px;
  left: 180px;
}
.hello-para {
  font-family: "poppins", sans-serif;
  color: #fff;
  font-size: 16px;
  position: relative;
  top: 170px;
  left: 130px;
}
.btn-sign-in-up {
  position: relative;
  top: 160px;
  left: 170px;
  min-width: 161px;
  height: 46px;
  margin-top: 50px;
  border-radius: 23px;
  background: #6c7ae0;
  border: 1px solid #fff;
  font-weight: bold;
  color: #fff;
  font-size: 15px;
  transition: all 0.5s;
  cursor: pointer;
  font-family: "poppins", sans-serif;
}
.btn-sign-in-up:hover {
  background: #fff;
  color: #6c7ae0;
}
.brand-name {
  color: #333;
  font-family: "poppins", sans-serif;
  margin-left: 30px;
  margin-top: 30px;
}
.sign-in-text {
  font-family: "poppins", sans-serif;
  position: relative;
  top: 25px;
  left: 130px;
}
img {
  width: 20px;
}
.icons {
  position: relative;
  left: 250px;
  top: 50px;
}
.twitter {
  margin-left: 30px;
}
.github {
  margin-left: 30px;
}
.or-use-email {
  font-family: "poppins", sans-serif;
  color: #888;
  position: relative;
  top: 70px;
  left: 220px;
}
</style>