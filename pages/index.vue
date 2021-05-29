<template>
  <div>
    <v-row no-gutters align="center" class="mb-12">
      <v-col cols="12" sm="6">
        <div class="hero">.</div>
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

      <v-row
        no-gutters
        class="pa-4 card my-5"
        v-for="unity in units"
        :key="unity.name"
      >
        <v-col cols="4">
          <div
            @click="selectUnity(unity), (showPhotos = true)"
            @mouseenter="hovering = unity.name"
            @mouseleave="hovering = ''"
            class="click-image"
          >
            <img
              height="200px"
              width="100%"
              class="thumbnail"
              style="object-fit: cover; border-radius: 0.5rem; cursor: pointer"
              :src="unity.photos[0]"
              alt=""
            />
            <div :class="hovering == unity.name ? 'a' : ''" class="overlay">
              Click to more photos
            </div>
          </div>
        </v-col>
        <v-col cols="8" class="px-8">
          <div>
            <h3 class="font-weight-700 mb-3">{{ unity.name }}</h3>
            <div class="mb-3">
              <RatingLocation
                @select-unity="selectUnity"
                @show-location="showLocation = true"
                :unity="unity"
              />
            </div>
            <p>{{ unity.resume }}</p>
            <v-row no-gutters justify="space-between" align="center">
              <h4 class="d-inline">
                Amenities:
                <span class="font-weight-400">{{ unity.features }}</span>
              </h4>
              <v-btn
                depressed
                :outlined="unity.opening == 'open' ? false : true"
                color="accent"
              >
                {{ buttonText(unity) }}
              </v-btn>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      @input="(selectedPhoto = 0), (showLocation = false)"
      :value="showLocation"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1228.0123796060125!2d-8.5999679!3d41.0368887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2479615e09c3a1%3A0xd4320564c8e5b7c!2sR.%20Boavista%2078%2C%20Serzedo!5e1!3m2!1sen!2spt!4v1622295576609!5m2!1sen!2spt"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
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
                  @select-unity="selectdUnity"
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
export default {
  components: { RatingLocation },
  methods: {
    buttonText(unity) {
      return unity.opening == "open" ? "BOOK NOW" : "PRE-BOOK";
    },
    selectUnity(unity) {
      this.selectedUnity = unity;
    },
  },
  data() {
    return {
      hovering: "b",
      selectedPhoto: 0,
      showLocation: false,
      showPhotos: false,
      selectedUnity: data.units[0],
      units: data.units,
    };
  },
};
</script>

<style lang="scss" scoped>
.location:hover {
  text-decoration: underline;
  color: #216cdf;
  cursor: pointer;
}

.hero {
  width: 100%;
  height: 90vh;
  background-size: cover;
  background: url("https://static.wixstatic.com/media/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.jpg/v1/fill/w_1440,h_1014,al_c,q_85/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.webp")
    no-repeat center center;
}

.overlay {
  position: absolute;
  bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(89, 94, 103, 0.8);
  background-blend-mode: multiply;
  color: #f1f1f1;
  border-radius: 12px;
  width: 100%;
  transition: 0.1s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  height: 100%;
  padding: 20px;
  text-align: center;
  vertical-align: center;
  cursor: pointer;
}

.click-image {
  position: relative;
}

.container:hover .click-image .a {
  opacity: 1;
}
</style>
