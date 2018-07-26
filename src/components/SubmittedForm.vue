<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn slot="activator" small color="primary" dark>{{ buttonLabel }}</v-btn>
      <v-card>

        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Submitted Form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-container fluid>
          <h3 class="my-3" style="textDecoration: underline;">Client Details</h3>
          <p class="ml-3" v-for="(value, key, index) in data.client" :key="'client-' + index"><b>{{prettify(key)}}</b>: {{value}}</p>

          <h3 class="my-3" style="textDecoration: underline;">Spouse Details</h3>
          <p class="ml-3" v-for="(value, key, index) in data.spouse" :key="'spouse-' + index"><b>{{prettify(key)}}</b>: {{value}}</p>

          <h3 class="my-3" style="textDecoration: underline;">Marriage Details</h3>
          <p class="ml-3" v-for="(value, key, index) in data.marriage" :key="'marriage-' + index"><b>{{prettify(key)}}</b>: {{value}}</p>

          <h3 class="my-3" style="textDecoration: underline;">Children Details</h3>
          <p class="ml-3" v-for="(value, key, index) in data.children" :key="'children-' + index"><b>{{prettify(key)}}</b>: {{value}}</p>
        </v-container>

      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    name: 'SubmittedForm',
    props: [ 'buttonLabel', 'data' ],
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      prettify (word) {
        let converted = word.replace(/(?:^|\.?)([A-Z])/g, (p1, p2) => {return " " + p2})
        converted = converted.charAt(0).toUpperCase() + converted.substr(1)
        return converted
      }
    }
}
</script>
