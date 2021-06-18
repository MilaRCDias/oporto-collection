<template>
  <div>
    <div class="text-sm-center" v-if="$vuetify.breakpoint.xsOnly">
      <v-row no-gutters align="center">
        <div style="position: relative; max-width: 32%">
          <img
            width="100%"
            height="100px"
            style="object-fit: cover"
            :src="require(`~/assets/images/${unity.thumbnail.link}`)"
          />
          <div style="width: 100%; left: 0px; position: absolute; bottom: -1px">
            <h6
              class="text-center font-weight-700 px-2 py-1"
              style="
                display: inline-block;
                color: white;
                font-size: 8px;
                background-color: #083c6a;
                text-transform: uppercase;
                letter-spacing: 2px !important;
              "
            >
              {{ $t(unity.opening) }}
            </h6>
          </div>
        </div>
        <div class="pl-3">
          <h3
            class="primary--text font-weight-400 text-uppercase text-left"
            style="font-size: 22px; line-height: 100%; max-width: 9rem"
          >
            {{ unity.fullname.title }}
          </h3>
          <h5 style="font-size: 12px; line-height: 100%">
            {{ unity.fullname.subtitle }}
          </h5>
          <h5 style="font-size: 9px; line-height: 100%">OPORTO COLLECTION</h5>
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
            {{ $t(unity.opening) }}
          </h6>
        </div>
      </div>

      <h3
        class="primary--text font-weight-400 text-uppercase mx-auto"
        style="font-size: 24px; line-height: 100%; max-width: 12rem"
      >
        {{ unity.fullname.title }}
      </h3>
      <h5 style="font-size: 12px; line-height: 100%">
        {{ unity.fullname.subtitle }}
      </h5>
      <h5 style="font-size: 9px; line-height: 100%">OPORTO COLLECTION</h5>
    </div>
  </div>
</template>
<script>
export default {
  props: { unity: Object, selectedUnity: String },
  components: {},
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
