<template>
  <v-toolbar flat>
    <DialogBreath :breath="getCurrentBreath" />
  </v-toolbar>
</template>

<script>
import { breathingMixin } from "@/mixins";
import DialogBreath from "../components/DialogBreath";

export default {
  name: "DialogBreathView",
  mixins: [breathingMixin],
  components: {
    DialogBreath,
  },
};
</script>
