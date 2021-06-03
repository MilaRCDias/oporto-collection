<template>
  <div>
    <v-row no-gutters align="center" class="mb-12">
      <v-col v-if="!$vuetify.breakpoint.xsOnly" cols="12" sm="6">
        <v-parallax
          height="800"
          src="https://static.wixstatic.com/media/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.jpg/v1/fill/w_1440,h_1014,al_c,q_85/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.webp"
        ></v-parallax>

        <!--   <div class="hero">.</div> -->
      </v-col>
      <v-col cols="12" sm="6" class="px-4 px-md-12" style="max-width: 540px">
        <div class="mx-auto flex-center">
          <h1>
            You need a place to stay in Porto,
            <span class="font-weight-700">we have multiple</span>
          </h1>
          <h3 class="my-3">
            Premium accommodations located in the historic center of the city.
          </h3>
          <v-btn color="accent" class="my-4" to="/about" outlined
            >explore collection</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <v-container class="my-12">
      <h1 class="text-center">Our Collection</h1>
      <h3 class="mt-3 mb-12 text-center">
        Find the best fit for a perfect experience in the heart of Porto
      </h3>
      <v-row>
        <v-col
          cols="12"
          xl="6"
          v-for="unity in units.filter((e) => e.opening == 'open')"
          :key="unity.name"
        >
          <UnityCard
            @show-photos="showPhotos = true"
            @show-location="showLocation = true"
            @select-unity="selectUnity"
            @book-cliced="bookClicked"
            :unity="unity"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="my-12">
      <h1 class="text-center">Summer Openings</h1>
      <h3 class="mt-3 mb-12 text-center">
        Find the best fit for a perfect experience in the heart of Porto
      </h3>
      <v-row>
        <v-col
          cols="12"
          xl="6"
          v-for="unity in units.filter((e) => e.opening.includes('August'))"
          :key="unity.name"
        >
          <UnityCard
            @show-photos="showPhotos = true"
            @show-location="showLocation = true"
            @select-unity="selectUnity"
            @book-cliced="bookClicked"
            :unity="unity"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="my-12">
      <h1 class="text-center">Future Units</h1>
      <h3 class="mt-3 mb-12 text-center">
        Find the best fit for a perfect experience in the heart of Porto
      </h3>
      <v-row>
        <v-col
          cols="12"
          xl="6"
          v-for="unity in units.filter(
            (e) => !e.opening.includes('August') && e.opening !== 'open'
          )"
          :key="unity.name"
        >
          <UnityCard
            @show-photos="showPhotos = true"
            @show-location="showLocation = true"
            @select-unity="selectUnity"
            @book-cliced="bookClicked"
            :unity="unity"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      max-width="500"
      @input="(selectedPhoto = 0), (showLocation = false)"
      :value="showLocation"
    >
      <v-card>
        <v-card-text>
          <h2
            style="font-size: 3rem; line-height: 120%; font-family: 'Cardo'"
            class="pa-6 font-weight-400"
          >
            In the very heart of the city
          </h2>
          <div
            class="d-flex my-3 align-center"
            v-for="item in selectedUnity.topAttractions"
            :key="item.id"
          >
            <img
              width="140px"
              style="
                aspect-ratio: 240 / 140;
                border-radius: 0.5rem;
                object-fit: cover;
              "
              :src="attractions.find((e) => e.id == item.id).image"
              alt=""
            />
            <div class="ml-3">
              <h3>{{ attractions.find((e) => e.id == item.id).name }}</h3>
              <h3 class="py-2">
                <v-icon>mdi-map-marker</v-icon>
                {{ item.distance }}km
              </h3>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog @input="showPhotos = false" :value="showPhotos" max-width="900">
      <v-card>
        <v-card-title></v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col class="12" sm="6">
              <div style="height: 600px; width: 100%" class="mx-auto">
                <img
                  width="100%"
                  height="100%"
                  style="object-fit: scale-down"
                  :src="selectedUnity.photos[selectedPhoto]"
                  alt=""
                />
              </div>
              <v-row no-gutters>
                <h4
                  style="cursor: pointer"
                  v-for="(pic, i) in selectedUnity.photos"
                  @click="selectedPhoto = i"
                  :key="i"
                  class="mx-4"
                >
                  Photo {{ i }}
                </h4>
              </v-row>
            </v-col>
            <v-col class="12" sm="6">
              <div class="my-12 px-3">
                <h5 class="tag">{{ selectedUnity.opening }}</h5>
                <h2 class="mb-4" style="font-size: 2rem; line-height: 120%">
                  {{ selectedUnity.name }}
                </h2>
                <RatingLocation
                  @select-unity="selectUnity"
                  @show-location="showLocation = true"
                  :unity="selectedUnity"
                />
                <div class="mt-4">
                  <p
                    style="font-size: 1rem; line-height: 155%"
                    v-for="(p, i) in selectedUnity.fulltext"
                    :key="i"
                  >
                    {{ p }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import data from "@/data/apartments";
import RatingLocation from "@/components/RatingLocation";
import UnityCard from "@/components/UnityCard";
export default {
  components: { RatingLocation, UnityCard },
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
    };
  },
};
</script>

<style lang="scss" scoped>
/* .hero {
  width: 100%;
  height: 90vh;
  background-size: cover;
  background: url("https://static.wixstatic.com/media/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.jpg/v1/fill/w_1440,h_1014,al_c,q_85/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.webp")
    no-repeat center center;
} */
</style>
