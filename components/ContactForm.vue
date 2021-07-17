<template>
  <div class="my-12">
    <h2 class="text-center">Contacto</h2>
    <form @submit.prevent="sendEmail">
      <v-row
        no-gutters
        style="max-width: 32rem !important"
        class="text-center mx-auto"
        justify="center"
        align="center"
      >
        <v-col cols="12" class="py-2">
          <v-text-field
            outlined
            v-model="name"
            name="name"
            :error-messages="nameErrors"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="email"
            name="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>

          <v-textarea
            outlined
            label="Message"
            required
            v-model="message"
            :error-messages="messageError"
            name="message"
          ></v-textarea>

          <v-select
            v-model="select"
            name="select"
            outlined
            :items="items"
            :error-messages="selectErrors"
            label="Unity"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
          <v-btn
            depressed
            block
            large
            color="primary"
            class="mr-4"
            type="submit"
          >
            Send
          </v-btn>
          <div class="captcha-container">
            <recaptcha
              class="captcha"
              @error="onError"
              @success="onSuccess"
              @expired="onExpired"
            />
          </div>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(1) },
    email: { required, email },
    select: { required },
    message: { required, minLength: minLength(1) },
  },
  mounted() {
    this.select = this.items[0];
  },
  data: () => ({
    name: "",
    email: "",
    message: "",
    select: {},
    units: [
      {
        name: "OPC Santa Catarina Pool & Fitness",
        template: "template_tfebmqm-sta-c",
        service: 1,
      },
      {
        name: "OPC Mouzinho Da Silveira",
        template: "template_eci75zq-mzin",
        service: 1,
      },
      {
        name: "OPC Rosário Luxury Suites",
        template: "template_mb0cfos-rosa",
        service: 2,
      },
      {
        name: "General - OPC Hospitality Management Group",
        template: "template_7htdupr-geral",
        service: 2,
      },
    ],
  }),
  computed: {
    items() {
      return this.units.map((e) => e.name);
    },
    messageError() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.minLength &&
        !this.$v.message.required &&
        errors.push("message is required.");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Name must be at least 3 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    confirmSuccess() {
      Swal.fire({
        title: "Sent",
        text: "We will get back to you shortly.",
        icon: "success",
        showCancelButton: false,
      });
    },

    sendEmail(e) {
      this.$v.$touch();
      console.log("submit", this.select, this.name, this.email, this.message);
      let service =
        this.select.service === 1 ? "service_amnk2zc" : "service_5ydwtq8-cps";
      let user =
        this.select.service === 1
          ? "user_tldYcBb4z983aLs4NjWG7"
          : "user_3g610oF0MnxyYzKbOkJIm";

      //Old Service "service_utrvfiw"
      try {
        emailjs.sendForm(service, this.select.template, e.target, user, {
          name: this.name,
          email: this.email,
          select: this.select.name,
          message: this.message,
        });
        this.confirmSuccess();
      } catch (error) {
        console.log({ error });
      }
    },

    onError(error) {
      console.log("Error happened:", error);
      return (this.captcha = false);
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse();
        this.sendForm();
        this.sent = true;
        this.messageSent = "Sent with success!";
        return (this.captcha = false);
        //console.log("ReCaptcha token:", token);
        await this.$recaptcha.reset();
      } catch (error) {}
    },
    onSuccess(token) {
      console.log("Succeeded:", token);
      return (this.captcha = true);
    },
    onExpired() {
      console.log("Expired");
      return (this.captcha = false);
    },
  },
};
</script>
<style lang="scss" scoped>
.captcha-container {
  max-width: 256px;
}
.captcha {
  transform: scale(0.85);
  -webkit-transform: scale(0.85);
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
}
</style>
