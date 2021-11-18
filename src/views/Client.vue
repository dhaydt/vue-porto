<template>
  <!--client----------------------------------->
  <section id="client">
    <!--heading------->
    <div class="client-heading">
      <span class="head-small mb-1">Comments</span>
      <h3 class="head-big styled mt-1">Client's Say</h3>
    </div>
    <!--client-box-container--------------->
    <div class="c-box-container">
      <!--box-1----->
      <div class="client-box">
        <!--img-------->
        <img src="@/assets/images/client-1.png" />
        <!--stars/reviews---------->
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <!--details/comment------>
        <p>
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough, the
          next logical step is to find a random paragraph.
        </p>
        <!--btn--------->
        <a href="#">Read More</a>
      </div>
      <!--box-2----->
      <div class="client-box">
        <!--img-------->
        <img src="@/assets/images/client-2.png" />
        <!--stars/reviews---------->
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <!--details/comment------>
        <p>
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough, the
          next logical step is to find a random paragraph.
        </p>
        <!--btn--------->
        <a href="#">Read More</a>
      </div>
      <!--box-3----->
      <div class="client-box">
        <!--img-------->
        <img src="@/assets/images/client-3.png" />
        <!--stars/reviews---------->
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <!--details/comment------>
        <p>
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough, the
          next logical step is to find a random paragraph.
        </p>
        <!--btn--------->
        <a href="#">Read More</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#client {
  width: 100%;
  border-top: 1px solid rgba(58, 58, 58, 0.03);
  border-bottom: 1px solid rgba(58, 58, 58, 0.03);
  padding: 50px 0px;
  background-image: url("/images/bg.png");
  background-position: center;
  background-size: 1000px;
}
.client-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.c-box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0px;
}
.client-box {
  width: 310px;
  height: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.08);
}
.client-box img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
}
.client-box strong {
  color: #1c3548;
  margin: 0px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 10px;
}
.star {
  display: flex;
  margin: 10px 0px 10px 0px;
}
.star i {
  color: #ff9529;
}
.client-box p {
  color: #747474;
  font-size: 1.2rem;
  margin: 0px;
  text-align: center;
  display: block;
  display: -webkit-box;
  max-width: 80%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
}
.client-box a {
  width: 190px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #1db096;
  border-radius: 20px;
  box-shadow: 4px 10px 30px rgba(24, 139, 119, 0.2);
}
.client-box a {
  width: 140px;
  margin-top: 20px;
  border-radius: 0px;
}
.client-box:hover {
  transform: translateY(-10px);
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.1);
  background-color: #23cdaf;
  transition: all ease 0.2s;
}
</style>
