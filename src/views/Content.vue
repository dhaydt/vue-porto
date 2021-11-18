<template>
  <div class="content">
    <div class="model">
      <img src="@/assets/images/model.png" />
    </div>

    <div class="main-text">
      <h1 class="stagger1 styled">Hello, I am Dayatoha</h1>
      <p class="hero-design">
        I am <b>Fullstack Developer</b> who had Website building from scratch by
        using modern <b>Frameworks</b> such as
        <b>Laravel, Node, CodeIgniter, YII,</b> etc as <b>Backend</b>, and have
        great <b>Frontend development skills</b> such as
        <b>Vue, Nuxt, React, Jquery, Javascript and so on</b>. I am open to
        learning new things that can help make a positive contribution to the
        Client I work for.
      </p>
      <!--btn------->
      <a
        href="/document/cv.pdf"
        target="_blank"
        class="portfolio-btn square-anim styled"
        >See My Portfolio</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.model img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.model {
  width: 500px;
  height: 500px;
}
.content {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.main-text {
  width: 500px;
  text-align: left;
}
.main-text h1 {
  font-size: 3.5rem;
  color: #1c3548;
  margin: 0px 0px 10px 0px;
  line-height: 60px;
}
.main-text p {
  font-size: 1.2rem;
  color: #747474;
  // font-family: cursive;
}
.portfolio-btn {
  width: 190px;
  height: 44px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #1db096;
  border-radius: 20px;
  box-shadow: 4px 10px 30px rgba(24, 139, 119, 0.2);
}
.portfolio-btn:hover {
  background-color: #23cdaf;
  transition: all ease 0.2s;
}
</style>
