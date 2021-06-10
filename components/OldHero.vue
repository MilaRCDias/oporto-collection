<template>
  <v-row
    v-if="!$vuetify.breakpoint.xsOnly"
    no-gutters
    align="center"
    class="mb-12"
  >
    <v-col cols="12" sm="6">
      <div class="hero">.</div>
      <!--         <v-parallax
          :height="heroHeight"
          src="https://static.wixstatic.com/media/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.jpg/v1/fill/w_1440,h_1014,al_c,q_85/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.webp"
        ></v-parallax> -->
    </v-col>
    <v-col cols="12" sm="6" class="px-4 px-md-8" style="max-width: 540px">
      <div class="mx-auto flex-center">
        <h1 style="font-size: 3rem" v-html="$t('heading')"></h1>
        <h3 class="my-3">
          {{ $t("subtitle") }}
        </h3>
        <v-btn
          color="accent"
          class="my-4"
          @click="navigateSection('ourCollection')"
          outlined
        >
          {{ $t("exploreCollection") }}</v-btn
        >
      </div>
    </v-col>
  </v-row>
</template>
