<template>
  <div>
    <v-row class="justify-space-around mb-3">
      <v-btn-toggle mandatory v-model="breathButton">
        <v-btn x-large color="info" @click="stopButton">
          <v-icon>mdi-stop</v-icon>
        </v-btn>
        <v-btn x-large class="mx-5" color="info" @click="playButton">
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <v-btn x-large color="info" @click="pauseButton">
          <v-icon>mdi-pause</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-row>

    <v-row>
      <div class="mx-auto">
        <v-checkbox
          v-model="loopLastCycle"
          :label="getTraduction(NAMES.BreathDonut.loopTheLastCycle)"
        ></v-checkbox>
      </div>
    </v-row>

    <v-row class="pt-n4">
      <!-- <v-row v-if="!isApple()" class="pt-n4"> -->
      <div class="mx-auto">
        <v-checkbox
          v-model="beepPlay"
          :label="getTraduction(NAMES.BreathDonut.playBeepOnPeriodChanges)"
        ></v-checkbox>
      </div>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { BREATHING } from "@/shared/constants";
import { sharedMixin } from "@/mixins";
import { Breath } from "@/shared/entities";
import { NAMES, INHALE, FULL, EXHALE, EMPTY } from "@/shared/constants";
const beepSound = require("@/assets/gong.wav");

export default {
  name: "PlayBreath",
  mixins: [sharedMixin],
  data() {
    return {
      NAMES,
      breath: new Breath({}),
      audio: new Audio(beepSound),
      breathButton: 0,
      cycleIndex: 0,
      periodIndex: INHALE,
      interval: 0,
      delay: this.isApple() ? 1000 : 100,
      step: this.isApple() ? 1 : 0.1,
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
    };
  },
  created() {
    // console.log('created.breath',this.breath)
    this.breath = this.getCurrentBreath;
  },
  mounted() {
    // console.log('mounted.breath',this.breath)
    this.initialize();
  },
  beforeDestroy() {
    // console.log('beforeDestroy')
    this.stopButton();
  },
  computed: {
    ...mapGetters({
      getCurrentBreath: BREATHING.getCurrentBreath,
      getLoopLastCycle: BREATHING.getLoopLastCycle,
      getBeepPlay: BREATHING.getBeepPlay,
    }),
    loopLastCycle: {
      get() {
        return this.getLoopLastCycle;
      },
      set(loopLastCycle) {
        return this.setLoopLastCycle({ loopLastCycle });
      },
    },
    beepPlay: {
      get() {
        return this.getBeepPlay;
      },
      set(beepPlay) {
        return this.setBeepPlay({ beepPlay });
      },
    },
  },
  methods: {
    ...mapActions({
      setLoopLastCycle: BREATHING.setLoopLastCycle,
      setBeepPlay: BREATHING.setBeepPlay,
      setCurrentPeriodIndex: BREATHING.setCurrentPeriodIndex,
      setCurrentCycleIndex: BREATHING.setCurrentCycleIndex,
      setCurrentPeriods: BREATHING.setCurrentPeriods,
    }),
    isWindows: () => navigator.platform.toLowerCase().indexOf("win32") > -1,
    isAndroid: () => navigator.platform.toLowerCase().indexOf("linux") > -1,
    isIphone: () => navigator.platform.toLowerCase().indexOf("iphone") > -1,
    isIpadPro: () => navigator.platform.toLowerCase().indexOf("macintel") > -1,
    isMacBookPro: () => navigator.platform.toLowerCase().indexOf("macintel") > -1,
    isApple() {
      return this.isIphone() || this.isIpadPro() || this.isMacBookPro();
    },

    initialize() {
      this.breathButton = 0;
      this.cycleIndex = 0;
      this.periodIndex = INHALE;
      this.loopLastCycle = this.getLoopLastCycle;
      this.beepPlay = this.getBeepPlay;

      this.periods.forEach((period) => {
        period.value = 0;
      });
      this.periods[INHALE].max = this.breath.cycles[0].inhale || 5;
      this.periods[FULL].max = this.breath.cycles[0].full || 0;
      this.periods[EXHALE].max = this.breath.cycles[0].exhale || 5;
      this.periods[EMPTY].max = this.breath.cycles[0].empty || 0;

      this.setCurrentPeriodIndex({ periodIndex: this.periodIndex });
      this.setCurrentCycleIndex({ cyccleIndex: this.cycleIndex });
      this.setCurrentPeriods({ periods: this.periods });
    },
    pauseButton() {
      clearInterval(this.interval);
    },
    stopButton() {
      clearInterval(this.interval);
      this.initialize();
    },
    playActions() {
      if (this.periods[INHALE].value < this.periods[INHALE].max) {
        this.periodIndex = INHALE;
      } else if (this.periods[FULL].value < this.periods[FULL].max) {
        this.periodIndex = FULL;
      } else if (this.periods[EXHALE].value < this.periods[EXHALE].max) {
        this.periodIndex = EXHALE;
      } else if (this.periods[EMPTY].value < this.periods[EMPTY].max) {
        this.periodIndex = EMPTY;
      } else {
        // CHANGE CYCLE
        this.periodIndex = INHALE;
        this.periods.forEach((period) => {
          period.value = 0;
        });
        if (this.cycleIndex < this.breath.cycles.length - 1) {
          this.cycleIndex += 1;
          this.setCurrentCycleIndex({ cyccleIndex: this.cycleIndex });
          this.periods[INHALE].max = this.breath.cycles[this.cycleIndex].inhale;
          this.periods[FULL].max = this.breath.cycles[this.cycleIndex].full;
          this.periods[EXHALE].max = this.breath.cycles[this.cycleIndex].exhale;
          this.periods[EMPTY].max = this.breath.cycles[this.cycleIndex].empty;
        } else {
          // end of last cycle
          if (!this.loopLastCycle) {
            if (this.beepPlay) {
              this.audio.play();
            }
            return this.stopButton();
          }
        }
      }

      if (this.beepPlay) {
        if (this.periods[this.periodIndex].value === 0) {
          this.audio.play();
        }
      }

      this.setCurrentPeriodIndex({ periodIndex: this.periodIndex });

      this.periods[this.periodIndex].value += this.step;
      this.setCurrentPeriods({ periods: this.periods });
    },
    playButton() {
      if (this.breathButton === 1) return;
      const oThis = this;
      this.interval = setInterval(() => {
        oThis.playActions();
      }, oThis.delay);
    },
  },
};
</script>
