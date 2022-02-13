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
import { mapGetters } from "vuex";
import { BREATHING } from "@/shared/constants";
import CycleList from "../components/CycleList";

export default {
  name: "CycleListView",
  components: {
    CycleList,
  },
  computed: {
    ...mapGetters({
      getCurrentBreath: BREATHING.getCurrentBreath,
    }),
  },
};
</script>
