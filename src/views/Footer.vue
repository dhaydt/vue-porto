<template>
  <div>
    <!--contact------------------------->
    <section id="contact">
      <!--img-------->
      <img src="@/assets/images/contact.svg" />
      <!--heading---------------->
      <h3 class="head-big styled">Get The Best Project Estimation</h3>
      <!--input----------------->
      <div class="contact-input">
        <input type="email" placeholder="Example@gmail.com" />
        <router-link to="#" class="styled">Continue</router-link>
      </div>
    </section>
    <!--footer--------->
    <footer>
      <p class="styled">Muhammad Hidayatullah - Fullstack Developer</p>
      <p>Copyright 2021 - MIT</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
}
#contact h3 {
  font-size: 2.5rem;
  margin: 20px;
}
#contact img {
  height: 300px;
}
.contact-input {
  width: 400px;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  border-radius: 50px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.15);
}
.contact-input input {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  text-align: center;
  color: #242425;
}
.contact-input a {
  width: 200px;
  height: 35px;
  background-color: #1db096;
  color: #ffffff;
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  letter-spacing: 1.5px;
  align-items: center;
  margin: auto 10px;
  border-radius: 20px;
  font-weight: 700;
}
footer {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgba(232, 232, 232, 0.5);
  background-color: #ffffff;
}
footer p {
  margin: 15px 0px;
  color: #5f5f5f;
  font-size: 0.9rem;
}
</style>
