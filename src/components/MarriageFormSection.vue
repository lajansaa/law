<template>
    <v-form ref="form" lazy-validation>
        <v-header>Marriage Details</v-header>
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
</template>

<script>
export default {
  name: 'MarriageFormSection',
  data: () => ({
      marriageDateMenu: false,
      marriageDate: null,
      registrationDateMenu: false,
      registrationDate: null,
      marriageAddress: '',
      registrationAddress: '',
      })
  }
</script>
