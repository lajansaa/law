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
        <td class="text-xs-center">{{ props.item.createdAt.slice(0, -18) }}</td>
        <td class="justify-center layout px-0">
          <SubmittedForm
            buttonLabel="Submitted"
            :data= "props.item"
          />
          <div>
            <v-btn small color="primary" @click="generateContract(props.item)">Contract</v-btn>
          </div>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import db from '../firebaseInit'
import SubmittedForm from '../components/SubmittedForm'

export default {
  name: 'dashboard',
  components: {
      SubmittedForm
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
    }
}
</script>
