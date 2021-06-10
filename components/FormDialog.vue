<template>
  <v-dialog
    max-width="700"
    :value="formDialog"
    persistent
    @click:outside="$emit('confirm-close')"
  >
    <v-card>
      <v-card-title>
        <h4>
          Please fill out the form, email us or get in touch by telephone to
          make your reservation. Wait for our confirmation
        </h4>
      </v-card-title>
      <v-card-text>
        <v-form
          class="px-12"
          action="https://formsubmit.co/patterndevotion@gmail.com"
          method="POST"
        >
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
              <v-btn
                v-if="!addMoreInfo"
                small
                text
                color="accent"
                @click="addMoreInfo = true"
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

          <v-btn type="submit" depressed color="primary" @click="submitForm">
            Submit</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: { formDialog: Boolean },
  data() {
    return {
      form: {},
      addMoreInfo: false,
    };
  },
  methods: {
    submitForm() {},
  },
};
</script>
