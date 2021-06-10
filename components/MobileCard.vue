<template>
  <div class="pa-3 pa-sm-5 my-4 card">
    <v-carousel cycle height="300" hide-delimiters>
      <template v-if="unity.status == 'open'">
        <v-carousel-item
          v-for="(item, i) in unity.photos"
          :key="i"
          :src="require(`~/assets/images/${item.link}`)"
        ></v-carousel-item>
      </template>
      <template v-else>
        <v-carousel-item
          v-for="(item, i) in unity.photos"
          :key="i"
          :src="item.link"
        ></v-carousel-item>
      </template>
    </v-carousel>
    <h3 v-html="unity.name" class="font-weight-700 mt-4"></h3>

    <div :style="$vuetify.breakpoint.xsOnly ? ' ' : 'min-height: 14rem'">
      <p>{{ $t(unity.fulltext)[0] }}</p>
      <v-expand-transition mode="in-out">
        <div v-if="showReadMore && selectedUnity == unity.key">
          <p
            v-for="text in $t(unity.fulltext).slice(1, unity.fulltext.length)"
            :key="text"
          >
            {{ text }}
          </p>
        </div>
      </v-expand-transition>
      <v-btn
        class="px-0"
        color="accent"
        @click="$emit('read-more-clicked', unity)"
        text
      >
        {{
          showReadMore && selectedUnity == unity.key ? "read less" : "Read More"
        }}</v-btn
      >
    </div>
    <v-row no-gutters class="my-4">
      <div v-for="amenity in unity.amenities" :key="amenity">
        <v-tooltip
          v-if="amenity"
          bottom
          :position-x="-150"
          :position-y="150"
          color="primary"
          max-width="260"
        >
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <AmenitiesIcon :size="36" :icon="amenity" class="px-2" />
            </div>
          </template>
          <span class="text-capitalize">
            {{ $t(`amenities.${amenity}`) }}
          </span>
        </v-tooltip>
      </div>
    </v-row>

    <h6 style="font-size: 13px" class="font-weight-400">
      <v-icon color="secondary" small>mdi-map-marker</v-icon>
      {{ unity.address }}
    </h6>

    <v-btn
      :disabled="unity.status !== 'open'"
      @click="$emit('navigate-to', unity.url)"
      class="my-3"
      outlined
      large
      depressed
      block
      color="accent"
      >{{ $t("book") }}</v-btn
    >
  </div>
</template>
<script>
import AmenitiesIcon from "@/components/AmenitiesIcon";
export default {
  props: { unity: Object, showReadMore: Boolean, selectedUnity: String },
  components: { AmenitiesIcon },
};
</script>
