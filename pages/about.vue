<template>
  <div>
    <v-container fluid class="px-0">
      <img
        height="300px"
        style="object-fit: cover"
        width="100%"
        :src="require(`~/assets/images/${hero.link}`)"
        alt=""
      />
    </v-container>
    <v-container style="max-width: 54rem" class="mx-auto">
      <v-btn text to="/" color="accent">Home</v-btn>
      <v-row no-gutters justify="space-between" class="mt-12">
        <v-col cols="12" sm="4">
          <h1>Discover the Unexpected</h1>
        </v-col>
        <v-col cols="12" sm="7">
          <p>
            {{ $t("aboutPage.aboutParaph1") }}
          </p>
          <p>
            {{ $t("aboutPage.aboutParaph2") }}
          </p>

          <v-btn color="accent" class="my-4" to="/" outlined
            >explore collection</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import data from "@/data/apartments";
import { carousel } from "@/data/carousel.js";
export default {
  computed: {
    hero() {
      return carousel.filter((e) => e.unity == "stacatarinaresidence")[0];
    },
  },
  data() {
    return {
      data,
      carousel,
    };
  },
};
</script>
