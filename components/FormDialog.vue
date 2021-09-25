<template>
  <v-dialog max-width="700" :value="formDialog" persistent @click:outside="$emit('confirm-close')">
    <v-card>
      <v-card-title>
        <h4>
          Please fill out the form, email us or get in touch by telephone to make your reservation.
          Wait for our confirmation
        </h4>
      </v-card-title>
      <v-card-text>
        <!-- action="https://formsubmit.co/patterndevotion@gmail.com" -->
        <v-form class="px-12" @submit.prevent="sendForm">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <v-text-field
                class="pb-4"
                hide-details
                aria-required
                v-model="form.name"
                outlined
                type="text"
                name="fullname"
                label="Full Name"
              ></v-text-field>
              <v-text-field
                class="pb-4"
                hide-details
                aria-required
                v-model="form.email"
                outlined
                type="email"
                name="email"
                label="Email"
              ></v-text-field>
              <v-text-field
                class="pb-4"
                hide-details
                aria-required
                v-model="form.phone"
                outlined
                name="phone"
                type="number"
                label="Phone"
              ></v-text-field>
              <v-text-field
                class="pb-4"
                hide-details
                aria-required
                v-model="form.guests"
                outlined
                name="guests"
                type="number"
                label="Number of Guests"
              ></v-text-field>
              <v-btn v-if="!addMoreInfo" small text color="accent" @click="addMoreInfo = true"
                >+ Add additional information</v-btn
              >
              <v-textarea
                v-if="addMoreInfo"
                outlined
                name="moreinfo"
                type="text"
                label="Aditional Information"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="6" class="text-center">
              <h5>Select desired dates:</h5>
              <v-date-picker
                v-model="form.dates"
                :value="form.dates"
                range
                name="dates"
                no-title
                label="Choose dates"
              ></v-date-picker>
            </v-col>
          </v-row>

          <v-btn type="submit" depressed color="primary"> Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { fireDb } from "~/plugins/firebase.js";
export default {
  props: { formDialog: Boolean },
  data() {
    return {
      form: { name: "", email: "", phone: null, dates: [], additional: "" },
      addMoreInfo: false,
    };
  },
  methods: {
    clearFields() {
      console.log("Clear Fields");
    },
    async sendForm() {
      const ref = fireDb.collection("leads").doc();
      const document = this.form;
      try {
        await ref.set(document).then(this.clearFields());
        this.formSent = true;
        let self = this;
        setTimeout(function () {
          self.formSent = false;
        }, 2000);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
    },
  },
};
</script>
