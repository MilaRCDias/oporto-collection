<template>
  <div>
    <h1>This is our gallery</h1>

    <h4>{{ ip }}</h4>

    <div v-for="room in rosario" :key="room.key">
      {{ room.key }}
      <!--       <h5 v-for="(item, i) in room.photos" :key="i">item</h5> -->
      <v-carousel
        style="max-width: 544px; z-index: 1"
        cycle
        height="350px"
        hide-delimiters
      >
        <v-carousel-item
          v-for="(item, i) in room.photos"
          :key="i"
          :src="`https://res.cloudinary.com/oporto-/image/upload/${item['publicId']}`"
        ></v-carousel-item>
      </v-carousel>
    </div>

    <!--     <v-carousel
      style="max-width: 544px; z-index: 1"
      cycle
      height="350px"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item, i) in sta"
        :key="i"
        :src="`https://res.cloudinary.com/oporto-/image/upload/OPC/santacatarina/${item}/main.jpg`"
      ></v-carousel-item>
    </v-carousel> -->

    <v-row class="container mx-auto" justify="space-between">
      <cld-image
        v-for="accomodation in sta"
        :key="accomodation"
        :public-id="`OPC/santacatarina/${accomodation}/main.jpg`"
        width="300"
        heigth="200"
        crop="thumb"
        radius="0"
        fetchFormat="auto"
        quality="auto"
        loading="lazy"
      />
    </v-row>
  </div>
</template>
<script>
const santacata = [
  "Estúdio%20Suite%20Económico%20-%20Piso%20Térreo",
  "Loft%20D%C3%BAplex%20Standard%20com%20Vista%20Rua",
  "estudio%20economico%20piso%20terreo",
];
import rosario from "@/data/rosario";
export default {
  data() {
    return {
      ip: "",
      sta: santacata,
      rosario: rosario,
      endpoint: "https://api.cloudinary.com/v1_1/oporto-/image/sprite",
      /* "http://res.cloudinary.com/oporto-/image/list/estudio%20economico%20piso%20terreo.json", */
    };
  },
  computed: {
    sooource() {
      return this.$cloudinary.image.url(
        "Oporto%20Collection/Mouzinho/DSC_0040And8moreTRAT_pk8dqo.jpg"
      );
    },
  },
  mounted() {
    //this.fetchSomething();
  },
  methods: {
    /* .$get("https://api.cloudinary.com/v1_1/oporto-/folders") */
    async fetchSomething() {
      const ip = await this.$axios
        .$get(this.endpoint)
        .catch((e) => console.log(`${e} Aqui não deu`));
      this.ip = ip;
    },
  },
};
</script>
