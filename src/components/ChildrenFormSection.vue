<template>
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
            <v-layout
                v-if="childrenQuantity > 0"
                row
                wrap
            >
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
        </v-container>
    </v-form>
</template>

<script>
export default {
    name: 'ChildrenFormSection',
    data: () => ({
        childrenQuantity: null,
        childrenQuantityOptions: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    })
}
</script>

