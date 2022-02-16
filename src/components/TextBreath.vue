<template>
  <div>
    <v-row>
      <div class="mx-auto text-h3" x-large>
        <span text-color="info">
          {{ cycleCounter }}
        </span>
      </div>
    </v-row>

    <v-row class="mb-6">
      <div class="mx-auto text-h3">
        {{ getTraduction(NAMES.BreathDonut.cycleTitle[periodIndex]) }}
      </div>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { BREATHING } from "@/shared/constants";
import { eventBus } from "@/main";
import { sharedMixin } from "@/mixins";
import { EVENTS, NAMES, INHALE } from "@/shared/constants";

export default {
  name: "TextBreath",
  mixins: [sharedMixin],
  data: () => ({
    NAMES,
    cycleIndex: 0,
    periodIndex: INHALE,
    periods: [
      {
        value: 0,
        max: 5,
      },
      {
        value: 0,
        max: 0,
      },
      {
        value: 0,
        max: 5,
      },
      {
        value: 0,
        max: 0,
      },
    ],
  }),
  created() {
    eventBus.$on(EVENTS.periodsChanged, () => {
      this.periods = this.getCurrentPeriods;
    });
    eventBus.$on(EVENTS.cycleIndexChanged, () => {
      this.cycleIndex = this.getCurrentCycleIndex;
    });
    eventBus.$on(EVENTS.periodIndexChanged, () => {
      this.periodIndex = this.getCurrentPeriodIndex;
    });
  },
  computed: {
    ...mapGetters({
      getCurrentPeriods: BREATHING.getCurrentPeriods,
      getCurrentCycleIndex: BREATHING.getCurrentCycleIndex,
      getCurrentPeriodIndex: BREATHING.getCurrentPeriodIndex,
    }),
    cycleCounter() {
      // return Number.parseFloat(
      //   this.periods[this.periodIndex].max - this.periods[this.periodIndex].value
      // ).toFixed(0);
      return Math.ceil(
        this.periods[this.periodIndex].max - this.periods[this.periodIndex].value
      );
    },
  },
};
</script>
