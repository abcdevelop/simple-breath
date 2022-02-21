<template>
  <v-app>
    <AppDrawer></AppDrawer>
    <v-app-bar v-if="$route.name !== 'Home'" app color="primary" dark>
      <!-- ICONS -->
      <v-app-bar-nav-icon
        v-show="$route.name === ROUTES.BreathListView || $route.name === ROUTES.About"
        @click="goHome"
        ><img :src="logo" alt="logo" />
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon
        v-show="$route.name === ROUTES.BreathDonutView"
        @click="goBreathListView"
      >
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon
        v-show="$route.name === ROUTES.CycleListView"
        @click="goBreathListView"
      >
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-app-bar-nav-icon>

      <!-- TITLE -->
      <span class="mx-auto">
        {{ getTraduction(NAMES.App.name) }}
      </span>

      <!-- ICONS -->
      <v-app-bar-nav-icon
        v-show="$route.name === ROUTES.BreathDonutView"
        @click="goCycleListView"
        class="mr-1"
        ><v-icon>mdi-solar-panel-large</v-icon>
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon
        v-show="$route.name === ROUTES.CycleListView"
        :disabled="
          getCurrentBreath &&
          getCurrentBreath.cycles &&
          getCurrentBreath.cycles.length === 0
        "
        @click="goBreathDonutView"
        class="mr-3"
        large
        ><v-icon>mdi-av-timer</v-icon>
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon v-show="$route.name === ROUTES.About" @click="goPrevious">
        <v-icon>mdi-arrow-u-left-top-bold</v-icon>
      </v-app-bar-nav-icon>

      <!-- DRAWER -->
      <v-app-bar-nav-icon
        v-show="$route.name === ROUTES.BreathListView"
        color="white"
        @click="onDrawerSelected()"
        class="mr-3"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-layout
        :style="`background-image: url(${backgroundImage})`"
        class="fill-height bg-image"
        justify-center
        default
      >
        <router-view />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { BREATHING } from "@/shared/constants";
import { eventBus } from "@/main";
import { sharedMixin, routesMixin } from "@/mixins";
import { NAMES, EVENTS } from "@/shared/constants";
import AppDrawer from "@/components/AppDrawer";

export default {
  name: "App",
  mixins: [sharedMixin, routesMixin],

  components: {
    AppDrawer,
  },
  data: () => ({
    NAMES,
    logo: require("@/assets/logo.png"),
    backgroundImage: require("@/assets/simple-breath.jpg"),
  }),
  computed: {
    ...mapGetters({
      getCurrentBreath: BREATHING.getCurrentBreath,
    }),
  },
  methods: {
    onDrawerSelected() {
      eventBus.$emit(EVENTS.openAppDrawer);
    },
    closeDrawer() {
      eventBus.$emit(EVENTS.closeAppDrawer);
    },
  },
};
</script>

<style>
.bg-image {
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
.grey-transparent {
  background-color: #757575 !important;
  opacity: 0.5;
  border-color: transparent !important;
}
</style>
