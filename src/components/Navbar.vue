<template>
  <v-toolbar color="primary">

    <v-toolbar-title color="text">Law</v-toolbar-title>
    
    <v-spacer></v-spacer>

    <div class="text-xs-center">
        <v-tooltip bottom>
            <v-btn
                slot="activator"
                to="/admin"
                icon
            >
                <v-icon>settings</v-icon>
            </v-btn>
            <span>Admin</span>
        </v-tooltip>

        <v-tooltip bottom>
            <v-btn
                slot="activator"
                to="/clients"
                icon
            >
                <v-icon>group</v-icon>
            </v-btn>
            <span>Clients</span>
        </v-tooltip>

        <v-tooltip bottom>
            <v-btn
                slot="activator"
                to="/forms"
                icon
            >
                <v-icon>insert_drive_file</v-icon>
            </v-btn>
            <span>Forms</span>
        </v-tooltip>

        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </div>
  </v-toolbar>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>