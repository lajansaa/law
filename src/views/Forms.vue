<template>
  <div class="forms">
    <h1>Forms Page</h1>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable :complete="e1 > 1" step="1">User</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable :complete="e1 > 2" step="2">Marriage</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable :complete="e1 > 3" step="3">Children</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4">Visitation</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable :complete="e1 > 5" step="5">Maintenance</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="6">Assets</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <UserFormSection />
          <v-btn
            color="primary"
            :disabled="!valid"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <MarriageFormSection />
          <v-btn
            color="primary"
            :disabled="!valid"
            @click="e1 = 3"
          >
            Continue
          </v-btn>
          <v-btn @click="e1 = 1">Back</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <ChildrenFormSection />
          <v-btn
            color="primary"
            :disabled="!valid"
            @click="checkChildrenQuantity"
          >
            Continue
          </v-btn>
          <v-btn @click="e1 = 2">Back</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
          </v-form>

          <v-btn
            color="primary"
            :disabled="!valid"
            @click="e1 = 5"
          >
            Continue
          </v-btn>
           <v-btn @click="e1 = 3">Back</v-btn>
        </v-stepper-content>

        <v-stepper-content step="5">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
          </v-form>

          <v-btn
            color="primary"
            :disabled="!valid"
            @click="e1 = 6"
          >
            Continue
          </v-btn>
           <v-btn @click="checkChildrenQuantity">Back</v-btn>
        </v-stepper-content>

        <v-stepper-content step="6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
          </v-form>

          <v-btn
            color="primary"
            :disabled="!valid"
            @click="e1 = 6"
          >
            Preview
          </v-btn>
          <v-btn @click="e1 = 5">Back</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import axios from 'axios'
import UserFormSection from '../components/UserFormSection'
import MarriageFormSection from '../components/MarriageFormSection'
import ChildrenFormSection from '../components/ChildrenFormSection'

export default {
  name: 'forms',
  components: {
    UserFormSection,
    MarriageFormSection,
    ChildrenFormSection
  },
  data: () => ({
      e1: 0
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      checkChildrenQuantity () {
        if (this.e1 === 3) {
          if (this.childrenQuantity === 0) {
            this.e1 = 5
          } else {
            this.e1 = 4
          }
        } 
        if (this.e1 === 5) {
          if (this.childrenQuantity === 0) {
            this.e1 = 3
          } else {
            this.e1 = 4
          }
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
