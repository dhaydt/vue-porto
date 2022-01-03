<template>
  <!--recent-project---------------------------->
  <section id="recent">
    <!--heading--------------->
    <div class="recent-heading">
      <span class="transition3 head-small">Recent</span>
      <h3 class="transition3 head-big styled">Recent Doing Project Design</h3>
    </div>

    <!-- Carousel -->
    <div class="container-fluid mx-4 px-4">
      <carousel-3d
        border="0"
        clickable
        width="500"
        height="350"
        class="transition3"
        animationSpeed="900"
      >
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img
              :data-index="index"
              :class="{
                current: isCurrent,
                onLeft: leftIndex >= 0,
                onRight: rightIndex >= 0,
              }"
              :src="slide.src"
              class="carou-img h-100"
            />
          </template>
        </slide>
      </carousel-3d>
    </div>
    <!--img--------------->
    <!-- <div class="recent-img transition3"> -->
    <!-- <img src="@/assets/images/recent.png" /> -->
    <!-- </div> -->
    <!--btn----------->
    <a href="#" class="recent-btn transition3 styled mt-4">View Project</a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { src: require("../assets/images/project/project1.png") },
        { src: require("../assets/images/project/project2.png") },
        { src: require("../assets/images/project/project3.png") },
        { src: require("../assets/images/project/project4.png") },
        { src: require("../assets/images/project/project5.png") },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel-3d-slide {
  border-radius: 10px;
  cursor: pointer;
}
#recent {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
  flex-direction: column;
}
.recent-heading span,
.client-heading span {
}
.recent-heading h3,
.client-heading h3,
#contact h3 {
  color: #1c3548;
  font-size: 3rem;
  margin: 10px 0px;
  font-weight: 400;
  letter-spacing: 1px;
}
.recent-img {
  margin: 0px 40px;
}
.recent-img img {
  width: 100%;
  height: 100%;
}
.recent-btn {
  width: 190px;
  height: 44px;
  display: flex;
  font-weight: 700;
  letter-spacing: 1.5px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #1db096;
  border-radius: 20px;
  box-shadow: 4px 10px 30px rgba(24, 139, 119, 0.2);
}

.recent-btn:hover {
  background-color: #23cdaf;
  transition: all ease 0.2s;
}
.recent-btn {
  width: 190px;
  margin-top: -20px;
}
</style>
