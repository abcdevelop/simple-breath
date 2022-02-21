<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6" offset-md="3">
        <v-card class="mx-auto center" tile>
          <BreathList />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BreathList from "../components/BreathList";

export default {
  name: "BreathListView",
  components: {
    BreathList,
  },
};
</script>

