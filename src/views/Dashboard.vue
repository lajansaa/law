<template>
  <div class="dashboard">
    <h1>Dashboard Page</h1>
    <v-data-table
      :headers="headers"
      :items="cases"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.client.firstName }} {{ props.item.client.lastName }}</td>
        <td class="text-xs-center">{{ props.item.client.contactNumber }}</td>
        <td class="text-xs-center">{{ props.item.client.email }}</td>
        <td class="text-xs-center">{{ formatDate(props.item.createdAt) }}</td>
        <td class="justify-center layout px-0">
          <SubmittedForm
            buttonLabel="Form"
            :data= "props.item"
          />
          <ContractTemplate
            buttonLabel="Contract"
            :data= "props.item"
          />
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import db from '../firebaseInit'
import SubmittedForm from '../components/SubmittedForm'
import ContractTemplate from '../components/ContractTemplate'

export default {
  name: 'dashboard',
  components: {
      SubmittedForm,
      ContractTemplate
  },
  data: () => ({
      dialog: false,
      headers: [
        { text: 'Client Name', value: 'clientName', align: 'center' },
        { text: 'Contact Number', value: 'contactNumber', align: 'center' },
        { text: 'Email', value: 'email', align: 'center' },
        { text: 'Submitted Date (SGT)', value: 'submittedDate', align: 'center' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center' }
      ],
      cases: []
    }),
    created () {
      const casesRef = db.database().ref('cases')
      casesRef.orderByKey().on("value", (data) => {
          const dataObj = data.val()
          const dataKey = Object.keys(dataObj)
          this.cases = dataKey.map((e) => dataObj[e])
      })
    },
    methods: {
      formatDate (date) {
        return date.substring(0, date.indexOf('GMT')-1)
      }
    }
}
</script>
