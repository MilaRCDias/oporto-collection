<template>
<form  @submit.prevent="sendEmail">
  <v-row no-gutters  style="max-width: 54rem !important"
    class="text-center text-sm-left mx-auto"
    align="center">
    <v-col
      cols="12"
      sm="6"
      :style="$vuetify.breakpoint.xsOnly ? 'height: 240px' : 'height: 340px'"
      class="py-2 pic"
    >
    <v-text-field
      v-model="name"
      name="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      name="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

<v-textarea filled label="Message" required  v-model="message" :error-messages="messageError" name="message"></v-textarea>
    
    </v-col>
    <v-col cols="12" sm="6" class="text-right py-2 "  >
       <v-select
      v-model="select"
      name="select"
      :items="items"
      :error-messages="selectErrors"
      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
        <v-btn
      class="mr-4"
     
      type="submit"
    >
      Send
    </v-btn>
    </v-col>
  </v-row>
  </form>
</template>

<script>

  import { validationMixin } from 'vuelidate'
  import { required, email , minLength} from 'vuelidate/lib/validators'
  import emailjs from 'emailjs-com';


export default {
    mixins: [validationMixin],
    validations: {
      name: { required, minLength: minLength(1) },
      email: { required, email },
      select: { required },
      message:{ required , minLength:minLength(1)}
      
    },
    data: () => ({
      name: '',
      email: '',
      message:'',
      select: null,
      items: [
        'OPC Santa Catarina Pool & Fitness',
        'OPC Mouzinho Da Silveira',
        'OPC Rosário Luxury Suites',
        'OPC Hospitality Management Group',
      ],
  
    }),
    computed: {
        messageError (){
        const errors = []
        if (!this.$v.message.$dirty) return errors
        !this.$v.message.minLength && !this.$v.message.required && errors.push('message is required.')
        return errors
        },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('Name must be at least 3 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },
    methods: {
      sendEmail(e) {
        this.$v.$touch()
console.log('submit',  this.select, this.name, this.email, this.message )

      if(this.select === "OPC Mouzinho Da Silveira"){
          // send to email mouzinho@oportocollection.com  CC?
      }
try {
        emailjs.sendForm('service_utrvfiw', 'template_tfebmqm', e.target,
        'user_tldYcBb4z983aLs4NjWG7', {
          name: this.name,
          email: this.email,
         select: this.select,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      /* this.name = ''
      this.email = ''
      this.message = ''
      this.select = null */

      },
  
    },
  }
</script>
<style lang="scss" scoped>

</style>
