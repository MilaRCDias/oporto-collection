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
        <v-row no-gutters justify="space-between">
          <div style="cursor: pointer" @click="$router.push('/')"><Logo /></div>
          <div class="d-flex align-center">
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
          </div>
        </v-row>
      </v-container>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
