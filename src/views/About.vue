<template>
  <div class="ma-2" height="100%">
    <v-col cols="12" sm="12" md="6" offset-md="3" height="100%">
      <v-card
        fill-height
        class="d-flex flex-column align-center justify-space-between"
        color="transparent"
        flat
      >
        <v-card color="transparent" dark>
          <v-card-text class="text-h4 grey-transparent">{{
            getTraduction(NAMES.About.title)
          }}</v-card-text>
        </v-card>

        <v-card color="transparent">
          <v-card-text class="mt-4 text-h5 pa-3 white-transparent" flat shaped>
            {{ getTraduction(NAMES.About.subject) }}
          </v-card-text>
        </v-card>

        <v-card color="transparent" dark>
          <v-card-text class="mt-4 text-h5 pa-3 grey-transparent" flat shaped>
            {{ getTraduction(NAMES.About.responsibility) }}
          </v-card-text>
        </v-card>
      </v-card>
    </v-col>
    <v-footer color="grey lighten-1" app>
      <span>{{ getTraduction(NAMES.About.developer) }}</span>
      <v-spacer></v-spacer>
      <span>version {{ version }}</span>
    </v-footer>
  </div>
</template>

<script>
import { sharedMixin, routesMixin } from "@/mixins";
import { NAMES } from "@/shared/constants";

const { version } = require("@/../package.json");

export default {
  name: "About",
  mixins: [sharedMixin, routesMixin],

  data: () => ({
    NAMES,
    version,
    logo: require("@/assets/logo.png"),
  }),
};
</script>

<style scoped>
.grey-transparent {
  background-color: #757575 !important;
  opacity: 0.5;
  border-color: transparent !important;
}
.white-transparent {
  background-color: white !important;
  opacity: 0.6;
  border-color: transparent !important;
}
</style>
