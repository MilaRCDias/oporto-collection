<template>
  <div>
    <v-tooltip v-if="unity.rating" top color="white">
      <template v-slot:activator="{ on, attrs }">
        <h4 v-bind="attrs" v-on="on" class="accent--text d-inline mr-4">
          <v-icon color="accent" small>mdi-star</v-icon>
          {{ unity.rating }}
        </h4>
      </template>

      <div class="pa-4">
        <h4 class="font-weight-700">Exceptional</h4>
        <h5 class="grey--text">Booking Score: 9.38</h5>
        <h5 class="grey--text">876 reviews</h5>
      </div>
    </v-tooltip>

    <h4
      @click="$emit('select-unity', unity), $emit('show-location')"
      class="d-inline"
    >
      <v-icon small>mdi-map-marker</v-icon>
      <span class="location">
        {{ unity.address }}
      </span>
    </h4>
  </div>
</template>
<script>
export default {
  props: { unity: Object },
  methods: {
    goToLocation(un) {
      console.log(un.map);
      window.open(un.map);
    },
  },
};
</script>
<style lang="scss" scoped>
.location:hover {
  text-decoration: underline;
  color: #216cdf;
  cursor: pointer;
}
</style>
