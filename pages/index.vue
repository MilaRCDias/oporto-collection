<template>
  <div>
    <div class="text-center my-8">
      <h1 class="primary--text">Our Collection</h1>
      <p>Find the best fit for a perfect experience in the heart of Porto</p>
    </div>

    <div>
      <div
        v-for="unity in units.slice(0, 3)"
        :key="unity.name"
        class="pa-3 my-4 card"
      >
        <v-carousel height="300" hide-delimiters>
          <v-carousel-item
            v-for="(item, i) in unity.photos"
            :key="i"
            :src="item.link"
          ></v-carousel-item>
        </v-carousel>
        <h3 class="font-weight-700">{{ unity.name }}</h3>

        <h5>
          <v-icon color="secondary" small>mdi-map-marker</v-icon>
          {{ unity.address }}
        </h5>

        <h5>{{ unity.features }}</h5>
        <v-btn
          @click="bookClicked(unity)"
          class="my-3"
          outlined
          depressed
          block
          color="accent"
          >Book</v-btn
        >
      </div>
    </div>

    <v-row class="pb-8 pt-0" style="background-color: #f5f6f7">
      <v-col cols="12" md="6" class="pt-0">
        <img
          width="100%"
          height="240px"
          style="object-fit: cover"
          src="https://static.wixstatic.com/media/b1e563_b3ba25afc8ef47ddbb59cf8a6b85874f~mv2.jpg/v1/fill/w_800,h_352,al_c,q_80/b1e563_b3ba25afc8ef47ddbb59cf8a6b85874f~mv2.webp"
          alt=""
        />
      </v-col>
      <v-col cols="12" md="6" class="text-center pt-0">
        <p>Reserve também em nossas unidades</p>
        <img
          width="160px"
          src="https://static.wixstatic.com/media/b1e563_a2ed9f0c32b44d9ea53630035e89af7d~mv2.png/v1/crop/x_0,y_163,w_1251,h_242/fill/w_486,h_90,al_c,q_85,usm_0.66_1.00_0.01/LOGO-OPORTO-STREET-Group.webp"
          alt="Porto Street Logo"
        />
        <v-btn class="d-block my-3 mx-auto" outlined color="secondary" depressed
          >Veja mais</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import data from "@/data/apartments";
/* import RatingLocation from "@/components/RatingLocation";
import UnityCard from "@/components/UnityCard"; */
export default {
  methods: {
    bookClicked(unity) {
      window.open(unity.url);
    },
    selectUnity(unity) {
      console.log(unity);
      this.selectedUnity = unity;
    },
  },
  data() {
    return {
      selectedPhoto: 0,
      showLocation: false,
      showPhotos: false,
      selectedUnity: data.units[0],
      units: data.units,
      attractions: data.attractions,
      data,
    };
  },
};
</script>

<style lang="scss" scoped></style>
