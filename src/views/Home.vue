<template>
  <v-layout
    :style="`background-image: url(${backgroundImage})`"
    class="fill-height bg-image"
    align-center
    justify-center
    default
    column
    fill-height
  >
    <v-chip
      x-large
      class="ma-3 display-1 text-h3"
      color="rgba(255, 255, 255, 0)"
      @click="goBreathListView"
      text-color="white"
      >{{ getTraduction(NAMES.App.name) }}</v-chip
    >
  </v-layout>
</template>

<script>
import { sharedMixin } from "@/mixins";
import { NAMES,ROUTES } from "@/shared/constants";

export default {
  name: "Home",
  mixins: [sharedMixin],
  data: () => ({
    NAMES,
    backgroundImage: require("@/assets/simple-breath.jpg"),
  }),
  methods: {
    goBreathListView() {
      this.$router.push({ name: ROUTES.BreathListView });
    },
  },
};
</script>

<style scoped>
.bg-image {
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
</style>
