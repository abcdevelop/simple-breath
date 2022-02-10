<template>
  <v-container>
    <v-row wrap>

      <v-col cols="12" sm="6" class="py-1">
        <v-card class="justify-center">
          <DonutBreath />
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" class="py-1">
        <v-card class="justify-center px-5 py-6">
          <TextBreath />
          <PlayBreath />
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
import DonutBreath from "../components/DonutBreath";
import TextBreath from "../components/TextBreath";
import PlayBreath from "../components/PlayBreath";

export default {
  name: "BreathDonutView",
  components: {
    DonutBreath,
    TextBreath,
    PlayBreath,
  },
};
</script>

