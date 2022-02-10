import { ROUTES } from "@/shared/constants";
import { breathingMixin } from "@/mixins";

export const routesMixin = {
  mixins: [breathingMixin],
  data: () => ({
    ROUTES
  }),
  methods: {
    goHome() {
      if (this.$route.name === ROUTES.Home) return
      this.$router.push({ name: ROUTES.Home });
    },
    goAbout() {
      if (this.$route.name === ROUTES.About) return
      this.$router.push({ name: ROUTES.About });
    },
    goPrevious() {
      this.$router.go(-1)
    },

    goBreathListView() {
      if (this.$route.name === ROUTES.BreathListView) return
      this.$router.push({ name: ROUTES.BreathListView });
    },
    goDialogBreathView() {
      if (this.$route.name === ROUTES.DialogBreathView) return
      this.$router.push({ name: ROUTES.DialogBreathView });
    },

    goBreathDonutView() {
      if (this.$route.name === ROUTES.BreathDonutView) return
      if (this.getCurrentBreath.cycles.length) {
        this.$router.push({ name: ROUTES.BreathDonutView });
      } else {
        if (this.$route.name === ROUTES.CycleListView) return
        this.goDialogCycleView()
      }
    },
    
    goCycleListView() {
      if (this.$route.name === ROUTES.CycleListView) return
      this.$router.push({ name: ROUTES.CycleListView });
    },
    goDialogCycleView() {
      if (this.$route.name === ROUTES.CycleListView) return
      if (this.getCurrentBreath.key) {
        this.$router.push({ name: ROUTES.CycleListView });
      } else {
        this.goDialogBreathView()
      }
    },
  }
};
