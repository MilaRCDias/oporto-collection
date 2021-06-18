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
    <v-app-bar flat :clipped-left="clipped" height="88" fixed app>
      <v-container class="px-0">
        <v-row no-gutters justify="space-between" align="center">
          <v-btn
            @click="drawer = !drawer"
            v-if="$vuetify.breakpoint.xsOnly"
            icon
          >
            <!-- :style="$vuetify.breakpoint.xsOnly ? '' : 'visibility: hidden'" -->
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <div style="cursor: pointer" @click="$router.push('/')">
            <Logo
              :vertical="$vuetify.breakpoint.xsOnly"
              class="mt-1"
              :light="false"
            />
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
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer color="primary">
      <v-container>
        <v-row
          style="max-width: 54rem !important"
          no-gutters
          class="text-center text-sm-left mx-auto"
        >
          <!-- CONTACTS -->
          <v-col cols="12" sm="4" md="4" class="my-4">
            <h6 class="white--text">{{ $t("footer.contact") }}</h6>
            <h5 class="white--text">geral@oportocollection.com</h5>
            <h5 class="white--text">+351 224 092 829</h5>
          </v-col>
          <!-- SOCIAL MEDIA -->
          <v-col cols="12" sm="2" md="2" class="my-4">
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

          <v-col cols="12" sm="3" class="my-4">
            <h6 class="white--text">{{ $t("links") }}</h6>
            <h5
              @click="$router.push('/register')"
              class="white--text cursor-pointer link"
            >
              {{ $t("footer.registAL") }}
            </h5>
            <h5
              @click="$router.push('/about')"
              class="white--text cursor-pointer link"
            >
              {{ $t("about") }}
            </h5>
          </v-col>
          <v-col cols="12" sm="3" class="d-flex align-center">
            <div class="text-center mx-auto">
              <img
                class="cursor-pointer mt-4 mt-sm-0"
                @click="navigate('https://www.livroreclamacoes.pt/inicio')"
                width="150px"
                src="https://www.livroreclamacoes.pt/image/layout_set_logo?img_id=21079&t=1622658535434"
                alt=""
              />
            </div>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          class="text-sm-left"
          style="max-width: 54rem !important"
          justify="center"
          align="center"
        >
          <v-col cols="12" sm="4">
            <div
              style="max-width: 240px"
              class="mx-auto d-flex pl-6 pl-sm-0 text-center align-center"
            >
              <h6 class="white--text">Partner</h6>
              <a target="_blank" href="https://impactocapital.com/">
                <img
                  height="100px"
                  style="object-fit: cover"
                  width="220px"
                  :src="require(`~/assets/images/other/logo-ic-branco.png`)"
                  alt=""
              /></a>
            </div>
          </v-col>
          <v-col cols="12" sm="8" class="pt-6 text-center text-sm-right">
            <h6 class="white--text" style="opacity: 0.5">
              &copy; {{ new Date().getFullYear() }} OPORTO COLLECTION - All
              rights reserved
            </h6>
          </v-col>
        </v-row>
      </v-container>

      <div
        class="white text-center pt-6"
        style="width: 100%"
        v-if="$vuetify.breakpoint.xsOnly"
      >
        <h4 class="mb-4">Download our App</h4>
        <div>
          <img
            @click="
              navigate(
                'https://play.google.com/store/apps/details?id=com.guestu.oportocollection&hl=en_US&gl=US'
              )
            "
            width="140px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sXm0Q5e8heOHZsrOh-kVlPkcZNmwytCQtlESwXTPrP8dlpHVFU-5CrKeAxoSMvdu1g&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            @click="
              navigate(
                'https://apps.apple.com/br/app/oporto-collection/id1548928973'
              )
            "
            width="144px"
            src="https://www.greenqueen.com.hk/wp-content/uploads/2020/02/Apple-App-Store-Icon.png"
            alt=""
          />
        </div>
      </div>
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
<style scoped>
.link:hover {
  font-weight: 700 !important;
}
</style>
