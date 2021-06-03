<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.xsOnly"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat :clipped-left="clipped" fixed app>
      <v-container>
        <v-row no-gutters justify="space-between" align="center">
          <v-btn icon> <v-icon>mdi-menu</v-icon> </v-btn>
          <div style="cursor: pointer" @click="$router.push('/')">
            <Logo />
          </div>
          <v-btn depressed outlined> PT </v-btn>
          <!--           <div class="d-flex align-center">
            <nuxt-link
              color="primary"
              text
              to="/about"
              class="mx-4 font-weight-700"
              style="text-decoration: none; font-size: 13px"
              >About</nuxt-link
            >
            <nuxt-link
              color="primary"
              text
              to="/about"
              class="mx-4 font-weight-700"
              style="text-decoration: none; font-size: 13px"
              >Contact</nuxt-link
            >
          </div> -->
        </v-row>
      </v-container>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer color="primary" :absolute="!fixed" app>
      <v-container>
        <v-row no-gutters class="text-center">
          <v-col cols="12" sm="6" lg="3" class="my-4">
            <img
              width="160px"
              src="https://static.wixstatic.com/media/b1e563_9f0677f9daee4db390d1ae762f0d6b17~mv2.png/v1/fill/w_400,h_136,al_c,q_85,usm_0.66_1.00_0.01/logo-OPC-01.webp"
              alt=""
            />
          </v-col>
          <v-col cols="12" sm="6" lg="3" class="my-4">
            <h6 class="white--text">Contacto</h6>
            <h5 class="white--text">geral@oportocollection.com</h5>
            <h5 class="white--text">+351 224 092 829</h5>
          </v-col>

          <v-col cols="12" sm="6" lg="3" class="my-4">
            <h6 class="white--text">SIGA-NOS</h6>
            <v-btn color="white" icon><v-icon>mdi-instagram</v-icon></v-btn>
            <v-btn color="white" icon><v-icon>mdi-facebook</v-icon></v-btn>
          </v-col>

          <v-col cols="12" sm="6" lg="3" class="my-4">
            <v-row no-gutters>
              <v-col cols="6">
                <h5 class="white--text">Registro AL</h5>
              </v-col>
              <v-col cols="6">
                <img
                  width="75%"
                  src="https://www.livroreclamacoes.pt/image/layout_set_logo?img_id=21079&t=1622658535434"
                  alt=""
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" class="pt-6">
            <h6 class="white--text text-center" style="opacity: 0.3">
              &copy; {{ new Date().getFullYear() }} OPORTO COLLECTION - All
              rights reserved
            </h6>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
};
</script>
<style scoped></style>
