<template>
  <v-toolbar flat>
    <DialogCycle :cycle="getCurrentCycle" />
  </v-toolbar>
</template>

<script>
import { breathingMixin } from "@/mixins";
import DialogCycle from "../components/DialogCycle";

export default {
  name: "DialogCycleView",
  mixins: [breathingMixin],
  components: {
    DialogCycle,
  },
};
</script>