<template>
  <v-row no-gutters class="pa-4 card">
    <v-col cols="4">
      <div
        @click="selectItem(unity), $emit('show-photos')"
        @mouseenter="hovering = unity.name"
        @mouseleave="hovering = ''"
        class="click-image"
      >
        <img
          height="240px"
          width="100%"
          class="thumbnail"
          style="object-fit: cover; border-radius: 0.5rem; cursor: pointer"
          :src="unity.photos[0]"
          alt=""
        />
        <div :class="hovering == unity.name ? 'a' : ''" class="overlay">
          Click to more photos
        </div>
      </div>
    </v-col>
    <v-col cols="8" class="px-8">
      <div>
        <h3 class="font-weight-700 mb-3">{{ unity.name }}</h3>
        <div class="mb-3">
          <RatingLocation
            @select-unity="selectItem"
            @show-location="showLocation"
            :unity="unity"
          />
        </div>
        <p>{{ unity.resume }}</p>
        <v-row no-gutters justify="space-between" align="center">
          <h4 class="d-inline">
            Amenities:
            <span class="font-weight-400">{{ unity.features }}</span>
          </h4>
          <v-btn
            @click="$emit('book-clicked', unity)"
            depressed
            :outlined="unity.opening == 'open' ? false : true"
            color="accent"
          >
            {{ buttonText(unity) }}
          </v-btn>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: { unity: Object },
  methods: {
    buttonText(unity) {
      return unity.opening == "open" ? "BOOK NOW" : "PRE-BOOK";
    },
    selectItem(unity) {
      this.$emit("select-unity", unity);
    },
    showLocation() {
      this.$emit("show-location");
    },
  },
  data() {
    return {
      hovering: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(89, 94, 103, 0.8);
  background-blend-mode: multiply;
  color: #f1f1f1;
  border-radius: 12px;
  width: 100%;
  transition: 0.1s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  height: 100%;
  padding: 20px;
  text-align: center;
  vertical-align: center;
  cursor: pointer;
}

.click-image {
  position: relative;
}

.container:hover .click-image .a {
  opacity: 1;
}
</style>
