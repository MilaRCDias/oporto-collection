<template>
  <v-container class="mt-12">
    <v-row no-gutters justify="space-between">
      <v-col cols="12" sm="5">
        <h1>Location and variety of services</h1>
      </v-col>
      <v-col cols="12" sm="5">
        <p>
          We look for new concepts of accommodation offering a variety of
          services to our guests, the main differentiating factors that we seek
          to establish in our tourist units.
        </p>
        <p>
          The criterion of geographical location is a priority in the concept
          that we initially developed for each unit, and all of our tourist
          accommodations are located in the historic center of the city, close
          to the main tourist attractions, allowing our guests the opportunity
          to know and experience the daily life of the city. urban and cultural
          life of the city in its most varied aspects.
        </p>

        <v-btn color="accent" class="my-4" to="/" outlined
          >explore collection</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import data from "@/data/apartments";
export default {
  data() {
    return {
      data,
    };
  },
};
</script>
