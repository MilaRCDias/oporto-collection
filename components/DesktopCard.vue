<template>
  <div style="max-width: 50rem; position: relative" class="mx-auto p-relative">
    <h2
      class="mb-8 pl-4"
      v-html="unity.name"
      style="
        font-size: 2.5rem;
        line-height: 110%;
        max-width: 20rem;
        border-left: 2px solid #6f7681;
      "
    ></h2>

    <v-carousel
      style="max-width: 544px; z-index: 1"
      cycle
      height="350px"
      hide-delimiters
    >
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

    <p class="mt-4" style="max-width: 25rem">{{ $t(unity.fulltext)[0] }}</p>

    <v-btn
      :outlined="unity.status !== 'open'"
      @click="
        unity.status !== 'open'
          ? $emit('show-form', unity)
          : $emit('navigate-to', unity.url)
      "
      class="mb-3"
      :large="!$vuetify.breakpoint.xsOnly"
      depressed
      color="accent"
      >{{ unity.status !== "open" ? $t("preBook") : $t("book") }}</v-btn
    >

    <img
      v-if="unity.cityImage.vertical"
      height="500px"
      width="330px"
      style="
        object-fit: cover;
        position: absolute;
        right: 0rem;
        z-index: 0;
        top: 0;
      "
      :src="unity.cityImage.address"
      alt=""
    />
    <img
      v-if="!unity.cityImage.vertical"
      height="330px"
      width="484px"
      style="
        object-fit: cover;
        position: absolute;
        right: 0rem;
        z-index: 0;
        top: 0;
      "
      :src="unity.cityImage.address"
      alt=""
    />
  </div>
</template>
<script>
/* import AmenitiesIcon from "@/components/AmenitiesIcon"; */
export default {
  props: { unity: Object, selectedUnity: Object },
  components: {
    /* AmenitiesIcon */
  },
};
</script>
