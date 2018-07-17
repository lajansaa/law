<template>
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
</template>

<script>
export default {
  name: 'UserFormSection',
 
  data: () => ({
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
      spouseAddress: ''
      })
  }
</script>