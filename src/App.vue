<template>
  <div id="app">
    <Navbar></Navbar>
    <Skills></Skills>
    <Recent></Recent>
    <Client></Client>
    <Footer></Footer>
    <router-view />
  </div>
</template>
<script>
import Footer from "./views/Footer";
import Client from "./views/Client";
import Recent from "./views/Recent";
import Skills from "./views/Skills";
import Navbar from "./components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Footer,
    Client,
    Recent,
    Skills,
    Navbar,
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline();

    tl.from(".content", {
      y: "-30%",
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });
    tl.from(
      ".stagger1",
      {
        opacity: 0,
        y: -50,
        stagger: 0.3,
        ease: Power4.easeOut,
        duration: 2,
      },
      "-=1.5"
    );
    tl.from(
      ".hero-design",
      {
        opacity: 0,
        y: 50,
        ease: Power4.easeOut,
        duration: 1,
      },
      "-=2"
    );

    gsap.from(".square-anim", {
      stagger: 0.2,
      scale: 0.1,
      duration: 1,
      ease: Back.easeOut.config(1.7),
    });

    gsap.from(".transition2", {
      scrollTrigger: {
        trigger: ".transition2",
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
    });

    gsap.from(".transition3", {
      scrollTrigger: {
        trigger: ".transition3",
        start: "top center",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.6,
    });
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Galada&family=Patrick+Hand&display=swap");
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
  line-height: 1.3;
  p {
    margin-bottom: 0.4rem;
  }
}
#app {
  font-family: "Patrick Hand", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
  a {
    text-decoration: none;
  }
}

#landing {
  background-color: #e6f4f5;
}

nav.sticked {
  padding: 10px 50px;
  background-color: #ffffffb9;
}

.styled {
  font-family: "Galada", cursive;
}

.head-small {
  color: #36b7b5;
  font-weight: 800;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.2rem;
}

.head-big {
  color: #1c3548;
  line-height: 1;
  font-size: 3.3rem;
  margin: 10px 0px;
  font-weight: 400;
  letter-spacing: 1px;
}
</style>
