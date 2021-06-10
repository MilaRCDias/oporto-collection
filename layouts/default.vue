<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.xsOnly"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      dark
      color="primary"
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
          <v-btn
            @click="drawer = !drawer"
            :style="$vuetify.breakpoint.xsOnly ? '' : 'visibility: hidden'"
            icon
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <div style="cursor: pointer" @click="$router.push('/')">
            <Logo class="mt-1" :light="false" />
          </div>
          <v-select
            solo
            hide-details
            class="my-0 py-0"
            background-color="transparent"
            flat
            style="max-width: 80px"
            :items="$i18n.locales"
            item-text="name"
            item-value="code"
            v-model="language"
            @change="$router.push(switchLocalePath(language))"
          ></v-select>

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
    <v-footer color="primary" absolute app padless>
      <v-container>
        <v-row no-gutters class="text-center">
          <v-col cols="12" sm="6" lg="3" class="my-4">
            <Logo light />
          </v-col>
          <v-col cols="12" sm="6" lg="3" class="my-4">
            <h6 class="white--text">{{ $t("footer.contact") }}</h6>
            <h5 class="white--text">geral@oportocollection.com</h5>
            <h5 class="white--text">+351 224 092 829</h5>
          </v-col>

          <v-col cols="12" sm="6" lg="3" class="my-4">
            <h6 class="white--text">{{ $t("footer.follow") }}</h6>
            <v-btn
              @click="navigate('https://www.instagram.com/oporto.collection/')"
              color="white"
              icon
              ><v-icon>mdi-instagram</v-icon></v-btn
            >
            <v-btn
              @click="navigate('https://www.facebook.com/oporto.collection')"
              color="white"
              icon
              ><v-icon>mdi-facebook</v-icon></v-btn
            >
          </v-col>

          <v-col cols="12" sm="6" lg="4" class="my-4">
            <v-row no-gutters>
              <v-col cols="6">
                <h5 @click="navigate()" class="white--text">
                  {{ $t("footer.registAL") }}
                </h5>
              </v-col>
              <v-col cols="6">
                <img
                  @click="navigate('https://www.livroreclamacoes.pt/inicio')"
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
  methods: {
    navigate(url) {
      window.open(url);
    },
  },
  data() {
    return {
      language: this.$i18n.locale,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: this.$t("home"),
          to: "/",
        },
        {
          title: this.$t("about"),
          to: "/about",
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
