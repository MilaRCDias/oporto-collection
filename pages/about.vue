<template>
  <div>
    <v-container class="mt-12">
      <v-row no-gutters justify="space-between">
        <v-col cols="12" sm="5">
          <h1>Location and variety of services</h1>
          <div class="mt-5">
            <img width="80px" :src="data.photos.cleanSafe" alt="" />
          </div>
        </v-col>
        <v-col cols="12" sm="5">
          <p>
            We look for new concepts of accommodation offering a variety of
            services to our guests, the main differentiating factors that we
            seek to establish in our tourist units.
          </p>
          <p>
            The criterion of geographical location is a priority in the concept
            that we initially developed for each unit, and all of our tourist
            accommodations are located in the historic center of the city, close
            to the main tourist attractions, allowing our guests the opportunity
            to know and experience the daily life of the city. urban and
            cultural life of the city in its most varied aspects.
          </p>

          <v-btn color="accent" class="my-4" to="/" outlined
            >explore collection</v-btn
          >
        </v-col>
      </v-row>

      <div>
        <h1>Registro Nacional de Turismo</h1>

        <li>Unidade: Santa Catarina Pool & Fitness</li>
        <li>
          Localização: Rua de Santa Catarina, 1219. 4000-457 Porto, Porto.
        </li>
        <li>90131/AL – Rua de Santa Catarina, 1219. Apartamento: 3° 3H</li>
        <li>90130/AL – Rua de Santa Catarina, 1219. Apartamento: 3º 3L</li>
        <li>90129/AL – Rua de Santa Catarina, 1219. Apartamento: 2º 2H</li>
        <li>90128/AL – Rua de Santa Catarina, 1219. Apartamento: 2º 2G</li>
        <li>90127/AL – Rua de Santa Catarina, 1219. Apartamento: 1º 1E</li>
        <li>90126/AL – Rua de Santa Catarina, 1219. Apartamento: 1º 1D</li>
        <li>90125/AL – Rua de Santa Catarina, 1219. Apartamento: 1º 1C</li>
        <li>90105/AL – Rua de Santa Catarina, 1219. Apartamento: 2º 2I</li>
        <li>90104/AL – Rua de Santa Catarina, 1219. Apartamento: 1º 1F</li>
        <li>91572/AL – Rua de Santa Catarina, 1219. Apartamento: 3J</li>
        <li>91446/AL – Rua de Santa Catarina, 1219. Apartamento: R/CH O.B</li>
        <li>91445/AL – Rua de Santa Catarina, 1219. Apartamento: R/CH O.A</li>
      </div>
    </v-container>
  </div>
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
