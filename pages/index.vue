<template>
  <div>
    <v-row
      v-if="!$vuetify.breakpoint.xsOnly"
      no-gutters
      align="center"
      class="mb-12"
    >
      <v-col cols="12" sm="6">
        <v-parallax
          height="800"
          src="https://static.wixstatic.com/media/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.jpg/v1/fill/w_1440,h_1014,al_c,q_85/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.webp"
        ></v-parallax>
      </v-col>
      <v-col cols="12" sm="6" class="px-4 px-md-12" style="max-width: 540px">
        <div class="mx-auto flex-center">
          <h1 v-html="$t('heading')"></h1>
          <h3 class="my-3">
            {{ $t("subtitle") }}
          </h3>
          <v-btn color="accent" class="my-4" to="/about" outlined>
            {{ $t("exploreCollection") }}</v-btn
          >
        </div>
      </v-col>
    </v-row>

    <div>
      <div class="text-center mt-6">
        <h1 class="primary--text">{{ $t("ourCollection.title") }}</h1>
        <p>{{ $t("ourCollection.subtitle") }}</p>
      </div>

      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-container>
          <v-row
            class="mb-12 pb-6"
            no-gutters
            v-for="unity in units.filter((e) => e.opening == 'open')"
            :key="unity.name"
          >
            <v-col cols="6">
              <v-carousel cycle height="100%" hide-delimiters>
                <v-carousel-item
                  v-for="(item, i) in unity.photos"
                  :key="i"
                  :src="item.link"
                ></v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="6" class="px-6">
              <h2 v-html="unity.name" style="font-size: 3rem"></h2>
              <h6 style="font-size: 13px" class="font-weight-400 my-4">
                <v-icon color="grey" small>mdi-map-marker</v-icon>
                {{ unity.address }}
              </h6>

              <div class="mb-8">
                <p v-for="(p, i) in unity.fulltext" :key="i">{{ p }}</p>
              </div>
              <v-row no-gutters>
                <div
                  class="d-flex align-center mr-6"
                  v-for="(amenity, i) in unity.amenities"
                  :key="i"
                >
                  <AmenitiesIcon :size="30" :icon="amenity" />
                  <h5 class="ml-2 pb-1 text-capitalize">{{ amenity }}</h5>
                </div>
              </v-row>

              <v-btn
                :disabled="unity.name !== 'Santa Catarina | Pool & Fitness'"
                @click="bookClicked(unity)"
                class="my-3"
                :large="!$vuetify.breakpoint.xsOnly"
                depressed
                color="accent"
                >{{ $t("book") }}</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid class="py-0">
          <v-row no-gutters class="mt-12" align="center">
            <v-col cols="6">
              <v-parallax
                height="700"
                src="https://images.unsplash.com/photo-1585329701918-89e49c29ef27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              ></v-parallax>
            </v-col>
            <v-col cols="4" class="px-sm-12">
              <div style="max-width: 400px" class="mx-auto">
                <h1>Best Location and Extreme Confort</h1>
                <h3>
                  All our units are served with breakfast and concierge 24h
                </h3>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid>
          <v-row no-gutters align="center">
            <v-col cols="6" class="px-sm-12">
              <div style="max-width: 400px" class="mx-auto">
                <h1>A reason to wake up</h1>
                <h3>All our units are served with breakfast</h3>
              </div>
            </v-col>
            <v-col cols="6">
              <v-parallax
                height="700"
                src="https://images.unsplash.com/photo-1530841492851-efc37c5f629c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80"
              ></v-parallax>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <v-row v-if="$vuetify.breakpoint.smAndDown" class="px-4 px-sm-12">
        <v-col
          v-for="unity in units.filter((e) => e.opening == 'open')"
          :key="unity.name"
          cols="12"
          sm="6"
          lg="4"
        >
          <div class="pa-3 pa-sm-5 my-4 card">
            <v-carousel cycle height="300" hide-delimiters>
              <v-carousel-item
                v-for="(item, i) in unity.photos"
                :key="i"
                :src="item.link"
              ></v-carousel-item>
            </v-carousel>
            <h3 class="font-weight-700">{{ unity.name }}</h3>

            <h5 style="min-height: 5.5rem" class="pb-4">{{ unity.resume }}</h5>
            <h5>{{ unity.features }}</h5>
            <h6 style="font-size: 13px" class="font-weight-400">
              <v-icon color="secondary" small>mdi-map-marker</v-icon>
              {{ unity.address }}
            </h6>

            <v-btn
              :disabled="unity.name !== 'Santa Catarina | Pool & Fitness'"
              @click="bookClicked(unity)"
              class="my-3"
              outlined
              :large="!$vuetify.breakpoint.xsOnly"
              depressed
              block
              color="accent"
              >{{ $t("book") }}</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </div>

    <v-row
      :no-gutters="$vuetify.breakpoint.xsOnly"
      class="pb-8 pb-sm-0 pt-0"
      align="center"
      style="background-color: #f5f6f7"
    >
      <v-col cols="12" md="6" class="pt-0">
        <img
          width="100%"
          :height="$vuetify.breakpoint.xsOnly ? '240px' : '340px'"
          style="object-fit: cover"
          src="https://static.wixstatic.com/media/b1e563_103084a0a344464bae3ed73d117d7ed4~mv2.png/v1/fill/w_1800,h_764,al_c,q_90/b1e563_103084a0a344464bae3ed73d117d7ed4~mv2.webp"
          alt=""
        />
      </v-col>
      <v-col cols="12" md="6" class="text-center pt-0">
        <p>Reserve também em nossas unidades</p>
        <img
          :width="$vuetify.breakpoint.xsOnly ? '160px' : '260px'"
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
import AmenitiesIcon from "@/components/AmenitiesIcon";
/* import RatingLocation from "@/components/RatingLocation";
import UnityCard from "@/components/UnityCard"; */
export default {
  components: { AmenitiesIcon },
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
