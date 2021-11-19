<template>
  <!--client----------------------------------->
  <section id="client">
    <!--heading------->
    <div class="client-heading">
      <span class="head-small mb-1">Comments</span>
      <h3 class="head-big styled mt-1">Client's Say</h3>
    </div>
    <b-row>
      <b-col>
        <div class="card-offline w-100 d-flex justify-content-center">
          <b-row class="naviFlick">
            <b-button variant="success" @click="prevBtn" class="btnNav"
              ><i class="fas fa-chevron-left"></i
            ></b-button>
            <b-button variant="success" @click="nextBtn" class="btnNav"
              ><i class="fas fa-chevron-right"></i
            ></b-button>
          </b-row>

          <div
            class="wrapper flicking-wrap container mt-4 pt-3 w-100"
            style="overflow: hidden"
          >
            <Flicking
              ref="flicking"
              :options="{
                align: 'prev',
                defaultIndex: 0,
                circular: true,
                duration: 1100,
              }"
            >
              <div class="cont item" v-for="(slide, i) in client" :key="i">
                <div class="client-box">
                  <!--img-------->
                  <img :src="slide.img" />
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
                    {{ slide.content }}
                  </p>
                  <!--btn--------->
                  <a href="#">Read More</a>
                </div>
              </div>
            </Flicking>
          </div>
        </div>
      </b-col>
    </b-row>
    <!--client-box-container--------------->
  </section>
</template>

<script>
import { FlickingError, ERROR_CODE } from "@egjs/flicking";
export default {
  data() {
    return {
      client: [
        {
          img: require("../assets/images/client-1.png"),
          content:
            " If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isnt quite enough, the next logical step is to find a random paragraph.",
        },
        {
          img: require("../assets/images/client-2.png"),
          content:
            " If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isnt quite enough, the next logical step is to find a random paragraph.",
        },
        {
          img: require("../assets/images/client-3.png"),
          content:
            " If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isnt quite enough, the next logical step is to find a random paragraph.",
        },
        {
          img: require("../assets/images/client-1.png"),
          content:
            " If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isnt quite enough, the next logical step is to find a random paragraph.",
        },
        {
          img: require("../assets/images/client-2.png"),
          content:
            " If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isnt quite enough, the next logical step is to find a random paragraph.",
        },
      ],
    };
  },

  methods: {
    async nextBtn() {
      try {
        await this.$refs.flicking.next();
      } catch (err) {
        if (err instanceof FlickingError) {
          if (err.code === ERROR_CODE.ANIMATION_ALREADY_PLAYING) {
            console.log("Animation is already playing!");
          } else if (err.code === ERROR_CODE.ANIMATION_INTERRUPTED) {
            console.log("Animation is interrupted by user.");
          }
        }
      }
      // console.log("flick", this.$refs.flicking);
    },
    async prevBtn() {
      try {
        await this.$refs.flicking.prev();
      } catch (err) {
        if (err instanceof FlickingError) {
          if (err.code === ERROR_CODE.ANIMATION_ALREADY_PLAYING) {
            console.log("Animation is already playing!");
          } else if (err.code === ERROR_CODE.ANIMATION_INTERRUPTED) {
            console.log("Animation is interrupted by user.");
          }
        }
      }
    },
  },
};
</script>
<style lang="scss">
.flicking-viewport .flicking-camera {
  display: flex;
}
</style>
<style lang="scss" scoped>
#client {
  width: 100%;
  border-top: 1px solid rgba(58, 58, 58, 0.03);
  border-bottom: 1px solid rgba(58, 58, 58, 0.03);
  padding: 50px 0px;
  background-image: src("../assets/images/bg.png");
  background-position: center;
  background-size: 1000px;
  .card-offline {
    position: relative;
    padding: 0 10px;
    .naviFlick {
      position: absolute;
      width: 90%;
      top: 40%;
      display: flex;
      justify-content: space-between;
      .btnNav {
        width: 40px;
        border-radius: 50%;
        background-color: #36b7b5;
        transition: 0.3s;
      }

      .btnNav:hover {
        background-color: #747474;
      }
    }
  }
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
  color: #ff9529;
}
.star i {
  color: #ff9529;
}
.client-box p {
  color: #747474;
  font-size: 1.2rem;
  margin: 0px;
  text-align: left;
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
