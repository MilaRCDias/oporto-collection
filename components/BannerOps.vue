<template>
  <v-row no-gutters class="py-0 my-0" align="center">
    <v-col
      cols="12"
      sm="6"
      :style="$vuetify.breakpoint.xsOnly ? 'height: 240px' : 'height: 340px'"
      class="py-0 pic"
    ></v-col>
    <v-col cols="12" sm="6" class="text-center py-0">
      <div class="py-12">
        <p class="white--text">{{ $t("ops.title") }}</p>
        <OpsLogo :light="false" />

        <v-btn
          class="d-block my-3 mx-auto white--text"
          outlined
          @click="$emit('navigate-to', 'https://www.oportostreet.com/')"
          color="white"
          depressed
          >{{ $t("ops.btn") }}</v-btn
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
import OpsLogo from "@/components/OpsLogo.vue";
export default {
  components: { OpsLogo },
};
</script>
<style lang="scss" scoped>
.pic {
  height: 100%;
  background-image: url("~/assets/images/other/oportostreetbanner.webp");
  background-size: cover;
  background-position: center center;
}
</style>
