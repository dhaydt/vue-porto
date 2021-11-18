<template>
  <section id="main">
    <b-navbar
      toggleable="lg"
      type="light"
      class="justify-content-around d-flex"
    >
      <b-navbar-brand href="#" class="logo">
        <img src="@/assets/images/logo.png" alt="MH" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="menu">
          <b-nav-item href="#main">Home</b-nav-item>
          <b-nav-item href="#skills">Skills</b-nav-item>
          <b-nav-item href="#recent">Recent</b-nav-item>
          <b-nav-item href="#client">Client</b-nav-item>
          <b-nav-item href="#contact">Contact Me</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
      <b-navbar-nav class="d-sm-none d-md-block">
        <router-link to="#" class="hey"> Hi Recruiter! </router-link>
      </b-navbar-nav>
    </b-navbar>
    <Content></Content>
  </section>
</template>

<script>
import Content from "../views/Content";
export default {
  components: {
    Content,
  },
  name: "Navbar",
  props: {
    msg: String,
  },

  mounted() {
    window.addEventListener("scroll", function () {
      var header = this.document.querySelector("nav");
      header.classList.toggle("sticked", window.scrollY > 0);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #e6f4f5;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.02);
  position: fixed;
  left: 0;
  transition: 0.6s;
  padding: 20px 0;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: transparent;
}
.logo img {
  height: 45px;
}

.menu {
  margin-bottom: 0;
}

.navbar-collapse.collapse {
  flex-grow: unset;
}

nav ul li a {
  height: 40px;
  line-height: 2.5;
  margin: 3px;
  padding: 0px 22px;
  display: flex;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 900;
  color: #585b5b;
  letter-spacing: 1px;
}
.hey {
  color: #39bfbd;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5;
  border-bottom: 2px solid #40c6c4;
}
nav ul li a:hover {
  background-color: #2adabc;
  color: #ffffff;
  box-shadow: 5px 10px 30px rgba(64, 198, 196, 0.3);
  transition: all ease 0.5s;
}
</style>
