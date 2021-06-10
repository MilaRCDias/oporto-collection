<template>
  <div>
    <div class="text-sm-center" v-if="$vuetify.breakpoint.xsOnly">
      <v-row no-gutters align="center">
        <img
          width="25%"
          height="100px"
          style="object-fit: cover"
          :src="require(`~/assets/images/${unity.thumbnail.link}`)"
        />

        <div class="pl-4">
          <h3>{{ unity.fullname.title }}</h3>
          <h5>{{ unity.fullname.subtitle }}</h5>
          <h6
            class="font-weight-700 px-2 py-1"
            style="
              display: inline-block;
              color: white;
              background-color: #083c6a;
              text-transform: uppercase;
              letter-spacing: 2px !important;
            "
          >
            {{ unity.opening }}
          </h6>
        </div>
      </v-row>
    </div>

    <div class="text-center" v-if="!$vuetify.breakpoint.xsOnly">
      <div style="position: relative">
        <img
          width="100%"
          height="160px"
          style="object-fit: cover"
          :src="require(`~/assets/images/${unity.thumbnail.link}`)"
        />
        <div style="width: 100%; left: 0px; position: absolute; bottom: -1px">
          <h6
            class="text-center font-weight-700 px-2 py-1"
            style="
              display: inline-block;
              color: white;
              background-color: #083c6a;
              text-transform: uppercase;
              letter-spacing: 2px !important;
            "
          >
            {{ unity.opening }}
          </h6>
        </div>
      </div>

      <h3>{{ unity.fullname.title }}</h3>
      <h5>{{ unity.fullname.subtitle }}</h5>
    </div>
  </div>
</template>
<script>
/* import AmenitiesIcon from "@/components/AmenitiesIcon"; */
export default {
  props: { unity: Object, selectedUnity: String },
  components: {
    /* AmenitiesIcon */
  },
};
</script>
<style lang="scss" scoped>
h3 {
  font-family: "Cardo", serif;
  font-weight: 700;
  text-align: center;
  font-size: 24px;
}
@media (min-width: 600px) {
  h3 {
    font-family: "Cardo", serif;
    font-weight: 700;
    text-align: center;
    font-size: 19px;
  }
}
h5 {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  color: grey;
  letter-spacing: 2px;
}
@media (min-width: 600px) {
  h5 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.65rem;
    color: grey;
    letter-spacing: 2px;
  }
}
</style>
