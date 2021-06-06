<template>
  <v-row
    no-gutters
    class="pb-0 pb-sm-0 pt-0"
    align="center"
    style="background-color: #f5f6f7"
  >
    <v-col cols="12" sm="6" class="pt-0">
      <img
        width="100%"
        :height="$vuetify.breakpoint.xsOnly ? '240px' : '340px'"
        style="object-fit: cover"
        src="https://static.wixstatic.com/media/b1e563_103084a0a344464bae3ed73d117d7ed4~mv2.png/v1/fill/w_1800,h_764,al_c,q_90/b1e563_103084a0a344464bae3ed73d117d7ed4~mv2.webp"
        alt=""
      />
    </v-col>
    <v-col cols="12" sm="6" class="text-center pt-0">
      <p>{{ $t("ops.title") }}</p>
      <img
        :width="$vuetify.breakpoint.xsOnly ? '160px' : '260px'"
        src="https://static.wixstatic.com/media/b1e563_a2ed9f0c32b44d9ea53630035e89af7d~mv2.png/v1/crop/x_0,y_163,w_1251,h_242/fill/w_486,h_90,al_c,q_85,usm_0.66_1.00_0.01/LOGO-OPORTO-STREET-Group.webp"
        alt="Porto Street Logo"
      />
      <v-btn
        class="d-block my-3 mx-auto"
        outlined
        @click="$emit('navigate-to', 'https://www.oportostreet.com/')"
        color="secondary"
        depressed
        >{{ $t("ops.btn") }}</v-btn
      >
    </v-col>
  </v-row>
</template>
