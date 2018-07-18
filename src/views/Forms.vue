<template>
  <div class="forms">
    <h1>Forms Page</h1>
  </div>
</template>

<script>

export default {
  name: 'forms',
  components: {
  }
}
</script>
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
          <v-form ref="form" lazy-validation>
            <v-header>Your Details</v-header>
            <v-container fluid>
              
              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                  v-model="firstName"
                  :rules="nameRules"
                  label="First Name"
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                  v-model="lastName"
                  :rules="nameRules"
                  label="Last Name"
                  required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-subheader class="pa-0">Gender</v-subheader>
              <v-radio-group v-model="gender" row>
                <v-flex xs2>
                  <v-radio
                    label="Female"
                    value="female"
                    color="primary"
                  ></v-radio>
                </v-flex>
                <v-flex xs2>
                  <v-radio
                    label="Male"
                    value="male"
                    color="primary"
                  ></v-radio>
                </v-flex>
              </v-radio-group>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-autocomplete
                    v-model="country"
                    :items="countryOptions"
                    :rules="[v => !!v || 'Country is required']"
                    label="Country"
                    required
                  >
                    <v-slide-x-reverse-transition
                      mode="out-in"
                      slot="append-outer"
                    ></v-slide-x-reverse-transition>
                  </v-autocomplete>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    v-model="identificationNumber"
                    :rules="[v => !!v || 'Passport No./NRIC is required']"
                    label="Passport No./NRIC"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    v-model="address"
                    :rules="[v => !!v || 'Address is required']"
                    label="Address"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>

            <v-header>Spouse's Details</v-header>
            <v-container fluid>
              
              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                  v-model="spouseFirstName"
                  :rules="nameRules"
                  label="First Name"
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                  v-model="spouseLastName"
                  :rules="nameRules"
                  label="Last Name"
                  required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-subheader class="pa-0">Gender</v-subheader>
              <v-radio-group v-model="spouseGender" row>
                <v-flex xs2>
                  <v-radio
                    label="Female"
                    value="female"
                    color="primary"
                  ></v-radio>
                </v-flex>
                <v-flex xs2>
                  <v-radio
                    label="Male"
                    value="male"
                    color="primary"
                  ></v-radio>
                </v-flex>
              </v-radio-group>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-autocomplete
                    v-model="spouseCountry"
                    :items="countryOptions"
                    :rules="[v => !!v || 'Country is required']"
                    label="Country"
                    required
                  >
                    <v-slide-x-reverse-transition
                      mode="out-in"
                      slot="append-outer"
                    ></v-slide-x-reverse-transition>
                  </v-autocomplete>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    v-model="spouseIdentificationNumber"
                    :rules="[v => !!v || 'Passport No./NRIC is required']"
                    label="Passport No./NRIC"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    v-model="spouseAddress"
                    :rules="[v => !!v || 'Address is required']"
                    label="Address"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <v-btn
            color="primary"
            :disabled="!valid"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
          
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-form ref="form" lazy-validation>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-menu
                    ref="marriageDateMenu"
                    :close-on-content-click="false"
                    v-model="marriageDateMenu"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="marriageDate"
                      label="Date of Marriage"
                      hint="YYYY-MM-DD format"
                      persistent-hint
                    ></v-text-field>
                    <v-date-picker v-model="marriageDate" no-title @input="marriageDateMenu = false"></v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
          
              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    v-model="marriageAddress"
                    :rules="[v => !!v || 'Place of Marriage is required']"
                    label="Place of Marriage"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-menu
                    ref="registrationDateMenu"
                    :close-on-content-click="false"
                    v-model="registrationDateMenu"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="registrationDate"
                      label="Date of Registration"
                      hint="YYYY-MM-DD format"
                      persistent-hint
                    ></v-text-field>
                    <v-date-picker v-model="registrationDate" no-title @input="registrationDateMenu = false"></v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    v-model="registrationAddress"
                    :rules="[v => !!v || 'Place of Registration is required']"
                    label="Place of Registration"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>

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
          <v-form ref="form" lazy-validation>

            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md3>
                        <v-select
                        :items="childrenQuantityOptions"
                        v-model="childrenQuantity"
                        label="Number of Children"
                        type="number"
                        required
                        ></v-select>
                    </v-flex>
                </v-layout>
              </v-container>

              <v-container
                v-if="parseInt(childrenQuantity) > 0"
                v-for="n in parseInt(childrenQuantity)"
                fluid
              >
                <v-header>Child {{n}} Details</v-header>
            <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                  v-model="spouseFirstName"
                  :rules="nameRules"
                  label="First Name"
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                  v-model="spouseLastName"
                  :rules="nameRules"
                  label="Last Name"
                  required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-subheader class="pa-0">Gender</v-subheader>
              <v-radio-group v-model="spouseGender" row>
                <v-flex xs2>
                  <v-radio
                    label="Female"
                    value="female"
                    color="primary"
                  ></v-radio>
                </v-flex>
                <v-flex xs2>
                  <v-radio
                    label="Male"
                    value="male"
                    color="primary"
                  ></v-radio>
                </v-flex>
              </v-radio-group>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-autocomplete
                    v-model="spouseCountry"
                    :items="countryOptions"
                    :rules="[v => !!v || 'Country is required']"
                    label="Country"
                    required
                  >
                    <v-slide-x-reverse-transition
                      mode="out-in"
                      slot="append-outer"
                    ></v-slide-x-reverse-transition>
                  </v-autocomplete>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    v-model="spouseIdentificationNumber"
                    :rules="[v => !!v || 'Passport No./NRIC is required']"
                    label="Passport No./NRIC"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    v-model="spouseAddress"
                    :rules="[v => !!v || 'Address is required']"
                    label="Address"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

            </v-container>
        </v-form>

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
           <v-btn @click="e1 = 4">Back</v-btn>
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

export default {
  name: 'forms',
 
  data: () => ({
      valid: true,
      firstName: '',
      lastName: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => !(/\d/.test(v)) || 'Name cannot contain numbers'
      ],
      gender: null,
      country: null,
      countryOptions: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
      identificationNumber: '',
      address: '',
      spouseFirstName: '',
      spouseLastName: '',
      spouseGender: null,
      spouseCountry: null,
      spouseIdentificationNumber: '',
      spouseAddress: '',
      marriageDateMenu: false,
      marriageDate: null,
      registrationDateMenu: false,
      registrationDate: null,
      marriageAddress: '',
      registrationAddress: '',
      e1: 0,
      childrenQuantity: '0',
      childrenQuantityOptions: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
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
        if (this.e1 == '3') {
          if (this.childrenQuantity == '0') {
            this.e1 = 6
          } else {
            this.e1 = 4
          }
        } 
        if (this.e1 == '5') {
          if (this.childrenQuantity == '0') {
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
