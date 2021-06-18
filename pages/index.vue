<template>
  <div>
    <v-container v-if="$vuetify.breakpoint.mdAndUp" fluid class="hero mb-12">
      <v-row style="height: 534px" no-gutters align="center" class="mx-auto">
      </v-row>
    </v-container>
    <v-container style="max-width: 54rem" class="my-12">
      <h2>Discover the Unexpected</h2>
      <div
        class="mb-6"
        style="border-top: 2px solid #858e9c; max-width: 5rem"
      ></div>
      <v-row no-gutters class="mx-auto" justify="space-between">
        <v-col
          style="cursor: pointer"
          @click="navigateSection(unity.key)"
          :class="i == 1 ? 'px-sm-3' : ''"
          class="main-list"
          cols="12"
          sm="4"
          v-for="(unity, i) in units.filter((e) => e.opening == 'open')"
          :key="unity.name"
        >
          <template v-if="$vuetify.breakpoint.xsOnly">
            <v-row no-gutters align="center" class="my-1">
              <v-col cols="6" class="pb-0">
                <img
                  class="pb-0"
                  style="object-fit: cover"
                  height="88px"
                  width="100%"
                  :src="require(`~/assets/images/${unity.thumbnail.link}`)"
                  alt=""
                />
              </v-col>
              <v-col cols="6" class="pl-4">
                <h4>{{ unity.name }}</h4>
              </v-col>
            </v-row>
          </template>

          <template v-if="!$vuetify.breakpoint.xsOnly">
            <img
              style="object-fit: cover"
              height="180px"
              width="100%"
              :src="require(`~/assets/images/${unity.thumbnail.link}`)"
              alt=""
            />
            <h4>{{ unity.name }}</h4>
          </template>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      v-if="$vuetify.breakpoint.mdAndUp"
      class="mx-auto outer-container"
    >
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
    </v-container>

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

    <v-container>
      <div>
        <h2
          style="font-size: 3rem"
          class="mt-12 font-weight-light secondary--text"
        >
          {{ $t("nextOpenings") }}
        </h2>
        <div
          class="mb-6"
          style="border-top: 2px solid #858e9c; max-width: 5rem"
        ></div>
      </div>
      <v-row no-gutters>
        <v-col
          :id="unity.key"
          class="my-sm-12 pb-6"
          no-gutters
          v-for="(unity, i) in units.filter((e) => e.opening !== 'open')"
          :class="$vuetify.breakpoint.xsOnly ? 'col-12' : ''"
          :key="unity.name"
        >
          <NextOpenings
            :class="i !== 4 ? 'pr-3' : 'pr-0'"
            @show-form="showForm"
            @navigate-to="navigateTo"
            :selectedUnity="selectedUnity"
            :unity="unity"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="$vuetify.breakpoint.mdAndUp" fluid class="pa-0">
      <v-row no-gutters class="mt-12" align="center">
        <v-col cols="6">
          <v-parallax
            height="400"
            src="https://images.unsplash.com/photo-1569959220744-ff553533f492?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1645&q=80"
          ></v-parallax>
        </v-col>
        <v-col cols="6" class="px-sm-12">
          <div style="max-width: 440px" class="mx-auto">
            <h1>{{ $t("homeInfo.conciergeTitle") }}</h1>
            <h3>{{ $t("homeInfo.conciergeSubTitle") }}</h3>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="$vuetify.breakpoint.mdAndUp" fluid class="py-0">
      <v-row no-gutters align="center">
        <v-col cols="6" class="px-sm-12">
          <div style="max-width: 460px" class="mx-auto">
            <h1>{{ $t("homeInfo.breakfastTitle") }}</h1>
          </div>
        </v-col>
        <v-col cols="6" class="breakfast"> </v-col>
      </v-row>
    </v-container>

    <v-container v-if="$vuetify.breakpoint.mdAndUp" fluid class="pa-0">
      <v-row no-gutters align="center" class="pa-0">
        <v-col cols="6" class="phone"> </v-col>
        <v-col cols="6" class="px-sm-12">
          <div style="max-width: 400px" class="mx-auto">
            <h1>{{ $t("homeInfo.phoneTitle") }}</h1>
            <h3>{{ $t("homeInfo.phoneSubTitle") }}</h3>
            <v-row no-gutters align="center">
              <img
                @click="
                  navigateTo(
                    'https://play.google.com/store/apps/details?id=com.guestu.oportocollection&hl=en_US&gl=US'
                  )
                "
                height="40px"
                class="mb-1 cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sXm0Q5e8heOHZsrOh-kVlPkcZNmwytCQtlESwXTPrP8dlpHVFU-5CrKeAxoSMvdu1g&usqp=CAU"
                alt=""
              />
              <img
                @click="
                  navigateTo(
                    'https://apps.apple.com/br/app/oporto-collection/id1548928973'
                  )
                "
                height="44px"
                class="ml-4 cursor-pointer"
                src="https://www.greenqueen.com.hk/wp-content/uploads/2020/02/Apple-App-Store-Icon.png"
                alt=""
              />
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <FormDialog :formDialog="formDialog" @confirm-close="confirmClose()" />
    <BannerOps style="background-color: #595e67" @navigate-to="navigateTo" />

    <!--     <v-row no-gutters class="pt-0">
      <v-col cols="6" class="pt-0">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1EhE80jxNLU26lZ8sW7T5sxEZ9JB_9XVe"
          width="100%"
          height="480"
        ></iframe>
      </v-col>
    </v-row> -->
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
import NextOpenings from "@/components/NextOpenings";
export default {
  components: { BannerOps, MobileCard, DesktopCard, FormDialog, NextOpenings },

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
      selectedUnity: data.units[0].key,
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
  background-image: url("~/assets/images/sta-catarina/212865356.jpg") !important;
}

.main-list:hover {
  box-shadow: 0px 4px 42px rgba(188, 207, 225, 0.4);
}

.breakfast {
  height: 400px;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-image: url("@/assets/images/facilities/breakfast.jpg");
}
.phone {
  height: 400px;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-image: url("@/assets/images/facilities/299245266.jpg");
}
/* linear-gradient(
      90deg,
      #083c6a 0%,
      rgba(202, 205, 185, 0) 90%
    ), */
</style>
