import { mapGetters, mapActions } from "vuex";
import { BREATHING } from "@/shared/constants";

export const breathingMixin = {
  computed: {
    ...mapGetters({
      getCurrentBreath: BREATHING.getCurrentBreath,
      getCurrentCycleIndex: BREATHING.getCurrentCycleIndex,
      getCurrentPeriodIndex: BREATHING.getCurrentPeriodIndex,
      getCurrentPeriods: BREATHING.getCurrentPeriods,
      getLoopLastCycle: BREATHING.getLoopLastCycle,
      getBeepPlay: BREATHING.getBeepPlay,

      getBreathIndex: BREATHING.getBreathIndex,
      getCycleIndex: BREATHING.getCycleIndex,

      getBreaths: BREATHING.getBreaths,
      getCycles: BREATHING.getCycles,
      getBreathByKey: BREATHING.getBreathByKey,
      getBreathByIndex: BREATHING.getBreathByIndex,
      countBreathName: BREATHING.countBreathName,
    }),
  },
  methods: {
    ...mapActions({
      setCurrentBreath: BREATHING.setCurrentBreath,
      setCurrentCycleIndex: BREATHING.setCurrentCycleIndex,
      setCurrentPeriodIndex: BREATHING.setCurrentPeriodIndex,
      setCurrentPeriods: BREATHING.setCurrentPeriods,
      setLoopLastCycle: BREATHING.setLoopLastCycle,
      setBeepPlay: BREATHING.setBeepPlay,
      
      setBreath: BREATHING.setBreath,
      moveBreath: BREATHING.moveBreath,
      moveCycle: BREATHING.moveCycle,
      setCycle: BREATHING.setCycle,

      setBreaths: BREATHING.setBreaths,

      deleteBreath: BREATHING.deleteBreath,
      deleteCycle: BREATHING.deleteCycle,

      addBreath: BREATHING.addBreath,
      addCycle: BREATHING.addCycle,
      
      insertBreath: BREATHING.insertBreath,
      insertCycle: BREATHING.insertCycle,

      duplicateBreath: BREATHING.duplicateBreath,
      duplicateCycle: BREATHING.duplicateCycle,
    }),
  }
}