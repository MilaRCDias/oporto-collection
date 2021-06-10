<template>
  <div>
    <v-container v-if="$vuetify.breakpoint.mdAndUp" fluid class="hero mb-12">
      <v-row
        style="height: 680px; max-width: 50rem"
        no-gutters
        align="center"
        class="mx-auto"
      >
        <!--         <v-col cols="6">
          <h1 class="white--text">Discover the Unexpected</h1>
          <v-btn outlined color="white" class="btn">explore collection</v-btn>
        </v-col> -->
      </v-row>
    </v-container>
    <v-container style="max-width: 50rem" class="my-12">
      <h2>Discover the Unexpected</h2>
      <div
        class="mb-6"
        style="border-top: 2px solid grey; max-width: 140px"
      ></div>
      <v-row no-gutters class="mx-auto" justify="space-between">
        <v-col
          style="cursor: pointer"
          @click="navigateSection(unity.key)"
          :class="i == 1 ? 'px-3' : ''"
          class="main-list"
          cols="4"
          v-for="(unity, i) in units.filter((e) => e.opening == 'open')"
          :key="unity.name"
        >
          <img
            style="object-fit: cover"
            height="180px"
            width="100%"
            :src="require(`~/assets/images/${unity.thumbnail.link}`)"
            alt=""
          />
          <h4>{{ unity.name }}</h4>
        </v-col>
      </v-row>
    </v-container>

    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-container>
        <div
          :id="unity.key"
          class="mb-12 pb-6"
          no-gutters
          v-for="unity in units.filter((e) => e.opening == 'open')"
          :key="unity.name"
        >
          <DesktopCard
            @show-form="showForm"
            @navigate-to="navigateTo"
            :selectedUnity="selectedUnity"
            :unity="unity"
          />
        </div>

        <div class="text-center">
          <h4
            style="font-size: 4rem"
            class="mt-12 text-center font-weight-light grey--text"
          >
            Summer Opennings
          </h4>
          <h4
            style="background-color: #f4f4f4"
            class="text-center d-inline-block grey--text mx-auto px-4 py-2"
          >
            August 2021
          </h4>
        </div>
        <div
          :id="unity.key"
          class="my-12 pb-6"
          no-gutters
          v-for="unity in units.filter((e) => e.opening == 'August 2021')"
          :key="unity.name"
        >
          <DesktopCard
            @show-form="showForm"
            @navigate-to="navigateTo"
            :selectedUnity="selectedUnity"
            :unity="unity"
          />
        </div>
      </v-container>
      <v-container fluid class="py-0">
        <v-row no-gutters class="mt-12" align="center">
          <v-col cols="6">
            <v-parallax
              height="400"
              src="https://images.unsplash.com/photo-1569959220744-ff553533f492?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1645&q=80"
            ></v-parallax>
          </v-col>
          <v-col cols="6" class="px-sm-12">
            <div style="max-width: 500px" class="mx-auto">
              <h1>Best Location and Extreme Confort</h1>
              <h3>All our units offer concierge 24h</h3>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid class="py-0">
        <v-row no-gutters align="center">
          <v-col cols="6" class="px-sm-12">
            <div style="max-width: 400px" class="mx-auto">
              <h1>Continental Breakfast</h1>
              <h3>All our units are served with breakfast</h3>
            </div>
          </v-col>
          <v-col cols="">
            <v-parallax
              height="400"
              :src="require('@/assets/images/facilities/300983555.jpg')"
            ></v-parallax>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <FormDialog :formDialog="formDialog" @confirm-close="confirmClose()" />

    <v-row v-if="$vuetify.breakpoint.smAndDown" class="px-4 px-sm-12">
      <v-col
        :id="unity.key"
        v-for="unity in units.filter((e) => e.opening == 'open')"
        :key="unity.name"
        cols="12"
        sm="6"
        lg="4"
      >
        <MobileCard
          @navigate-to="navigateTo"
          @read-more-clicked="readMoreClicked"
          :selectedUnity="selectedUnity"
          :showReadMore="showReadMore"
          :unity="unity"
        />
      </v-col>
    </v-row>

    <BannerOps @navigate-to="navigateTo" />
    <v-row no-gutters class="pt-0">
      <v-col cols="12" class="pt-0">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1EhE80jxNLU26lZ8sW7T5sxEZ9JB_9XVe"
          width="100%"
          height="480"
        ></iframe>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import data from "@/data/apartments";
import { attractions } from "@/data/attractions.js";
import BannerOps from "@/components/BannerOps";
import FormDialog from "@/components/FormDialog";
import MobileCard from "@/components/MobileCard";
import DesktopCard from "@/components/DesktopCard";
export default {
  components: { BannerOps, MobileCard, DesktopCard, FormDialog },
  computed: {
    sooource() {
      return this.$cloudinary.image.url(
        "Oporto%20Collection/Mouzinho/DSC_0040And8moreTRAT_pk8dqo.jpg"
      );
    },

    heroHeight() {
      if (this.$vuetify.breakpoint.smOnly) {
        return 360;
      }
      if (this.$vuetify.breakpoint.mdOnly) {
        return 480;
      }
      if (this.$vuetify.breakpoint.lgOnly) {
        return 580;
      } else return 640;
    },
  },
  methods: {
    confirmClose() {
      Swal.fire({
        title: "Close form?",
        text: "You will lose the information inputed",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, close form",
      }).then((result) => {
        if (result.isConfirmed) {
          this.formDialog = false;
        }
      });
    },

    readMoreClicked(unity) {
      if (unity.key == this.selectedUnity) {
        this.showReadMore = !this.showReadMore;
      } else {
        this.selectedUnity = unity.key;
        if (!this.showReadMore) {
          this.showReadMore = true;
        }
      }
    },

    navigateSection(section) {
      this.$nextTick(() =>
        window.document
          .getElementById(section)
          .scrollIntoView({ block: "center", behavior: "smooth" })
      );
    },

    navigateTo(url) {
      window.open(url);
    },

    showForm(unity) {
      this.formDialog = true;
      console.log(unity);
    },
  },
  data() {
    return {
      addMoreInfo: false,

      formDialog: false,
      selectedPhoto: 0,
      showLocation: false,
      showReadMore: false,
      showPhotos: false,
      selectedUnity: data.units[0],
      units: data.units,
      attractions,
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
/* Chrome, Safari, Edge, Opera */

::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.hero {
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center center !important;
  background-image: url("https://static.wixstatic.com/media/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.jpg/v1/fill/w_1440,h_1014,al_c,q_85/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.webp") !important;
}

.main-list:hover {
  box-shadow: 0px 4px 42px rgba(188, 207, 225, 0.4);
}
/* linear-gradient(
      90deg,
      #083c6a 0%,
      rgba(202, 205, 185, 0) 90%
    ), */
</style>
