import { mapGetters, mapActions } from "vuex";
import { BREATHING } from "@/shared/constants";
// import {Breath} from '@/shared/entities'
// import {Cycle} from '@/shared/entities'

export const breathingMixin = {
  // data: () => ({
  //   defaultBreath:new Breath(),
  //   defaultCycle:new Cycle(),
  // }),
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
      // moveUpBreath: BREATHING.moveUpBreath,
      // moveDownBreath: BREATHING.moveDownBreath,
      // moveFromToBreath: BREATHING.moveFromToBreath,
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