<template>
  <v-row no-gutters>
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
      <h2
        v-html="unity.name"
        style="font-size: 3rem; line-height: 110%; max-width: 20rem"
      ></h2>
      <h6 style="font-size: 13px" class="font-weight-400 my-4">
        <v-icon color="grey" small>mdi-map-marker</v-icon>
        {{ unity.address }}
      </h6>

      <div class="mb-8">
        <p v-for="(p, i) in $t(unity.fulltext)" :key="i">{{ p }}</p>
      </div>
      <v-row no-gutters>
        <div
          class="d-flex align-center mr-6"
          v-for="(amenity, i) in unity.amenities"
          :key="i"
        >
          <AmenitiesIcon :size="30" :icon="amenity" />
          <h5 class="ml-2 pb-1 text-capitalize">
            {{ $t(`amenities.${amenity}`) }}
          </h5>
        </div>
      </v-row>

      <v-btn
        :outlined="unity.status !== 'open'"
        @click="
          unity.status !== 'open'
            ? $emit('show-form', unity)
            : $emit('navigate-to', unity.url)
        "
        class="my-3"
        :large="!$vuetify.breakpoint.xsOnly"
        depressed
        color="accent"
        >{{ unity.status !== "open" ? $t("preBook") : $t("book") }}</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
import AmenitiesIcon from "@/components/AmenitiesIcon";
export default {
  props: { unity: Object, selectedUnity: String },
  components: { AmenitiesIcon },
};
</script>
