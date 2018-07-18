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
        <v-stepper-step :rules="[() => section1 == null ? true : section1 ]" :complete="section1" step="1">User</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :rules="[() => section2 == null ? true : section2 ]" :complete="section2" step="2">Marriage</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :rules="[() => section3 == null ? true : section3 ]" :complete="section3" step="3">Children</v-stepper-step>

      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-form ref="section1" lazy-validation>
            <h3>Your Details</h3>
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

              <v-radio-group v-model="gender" :rules="[v => !!v || 'Gender is required']" row>
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
                    v-model="contactNumber"
                    :rules="contactNumberRules"
                    label="Contact Number"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    v-model="email"
                    :rules="[v => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) || 'Not a valid email']"
                    label="Email"
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

            <h3>Spouse's Details</h3>
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

              <v-radio-group v-model="spouseGender" :rules="[v => !!v || 'Gender is required']" row>
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
            @click="checkValid('forward')"
          >
            Continue
          </v-btn>
          
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-form ref="section2" lazy-validation>
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
                      :rules="[v => !!v || 'Date of Marriage is required']"
                      persistent-hint
                      append-outer-icon="event"
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
                      :rules="[v => !!v || 'Date of Registration is required']"
                      append-outer-icon="event"
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
            @click="checkValid('forward')"
          >
            Continue
          </v-btn>
          <v-btn @click="checkValid('backward')">Back</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-form ref="section3" lazy-validation>

            <v-container fluid>
              <v-layout row wrap>
                  <v-flex xs12 sm6 md3>
                      <v-select
                      :items="childrenQuantityOptions"
                      v-model="childrenQuantity"
                      label="Number of Children"
                      type="number"
                      :rules="[v => !!v || 'Number of Children is required']"
                      ></v-select>
                  </v-flex>
              </v-layout>
            </v-container>
          </v-form>

          <v-btn
            color="primary"
            dark
            @click="checkValid('submit')"
          >
            Submit
          </v-btn>
          <v-btn @click="checkValid('backward')">Back</v-btn>
          <v-alert
            v-model="dialog"
            dismissible
            color="error"
            icon="warning"
            transition="scale-transition"
            outline
          >
            Please fill in all required fields.
          </v-alert>
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import axios from 'axios'
import db from '../firebaseInit'

export default {
  name: 'forms',
 
  data: () => ({
      e1: 0,
      section1: null,
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
      contactNumber: null,
      contactNumberRules: [
        v => !!v || 'Contact Number is required',
        v => (/^\d+$/.test(v)) || 'Contact Number must contain numbers only'
      ],
      email: '',
      address: '',
      spouseFirstName: '',
      spouseLastName: '',
      spouseGender: null,
      spouseCountry: null,
      spouseIdentificationNumber: '',
      spouseAddress: '',
      section2: null,
      marriageDateMenu: false,
      marriageDate: null,
      registrationDateMenu: false,
      registrationDate: null,
      marriageAddress: '',
      registrationAddress: '',
      section3: null,
      childrenQuantity: null,
      childrenQuantityOptions: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
      dialog: false
    }),
    methods: {
      submit () {
        if (this.section1 == true && this.section2 == true && this.section3 == true) {
          const casesRef = db.database().ref('cases')
          const newCaseRef = casesRef.push();
          newCaseRef.set({
            client: {
              firstName: this.firstName,
              lastName: this.lastName,
              gender: this.gender,
              country: this.country,
              identificationNumber: this.identificationNumber,
              contactNumber: this.contactNumber,
              email: this.email,
              address: this.address
            },
            spouse: {
              firstName: this.spouseFirstName,
              lastName: this.spouseLastName,
              gender: this.spouseGender,
              country: this.spouseCountry,
              identificationNumber: this.spouseIdentificationNumber,
              address: this.spouseAddress
            },
            marriage: {
              marriageDate: this.marriageDate,
              registrationDate: this.registrationDate,
              marriageAddress: this.marriageAddress,
              registrationAddress: this.registrationAddress
            },
            children: {
              childrenQuantity: this.childrenQuantity
            },
            createdAt: new Date() + ''
          })
          this.resetForm()
          this.$router.push("/dashboard")
        } else {
          this.dialog = true
        }
      },
      resetForm () {
        this.e1 = 1
        this.section1 = null
        this.section2 = null
        this.section3 = null
        this.$refs.section1.reset()
        this.$refs.section2.reset()
        this.$refs.section3.reset()
      },
      checkValid (direction) {
        const currentSection = 'section' + this.e1;
         if (this.$refs[currentSection].validate()) {
          this[currentSection] = true
        } else {
          this[currentSection] = false
        }
        if (direction === 'forward') {
          this.e1++
        }
        if (direction === 'backward') {
          this.e1--
        }
        if (direction === 'submit') {
          this.submit()
        }
      }
    }
  }
</script>
