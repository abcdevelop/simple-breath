<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6" offset-md="3">
        <v-card class="mx-auto center" tile>
          <CycleList :breath="getCurrentBreath" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CycleList from "../components/CycleList";
import { breathingMixin } from "@/mixins";

export default {
  name: "CycleListView",
  mixins: [breathingMixin],
  components: {
    CycleList,
  },
};
</script>
