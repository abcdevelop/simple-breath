import { eventBus } from "@/main";
import { BREATHING, EVENTS, INHALE } from "@/shared/constants";
import TOOLS from "@/shared/tools";

export default {
  namespaced: false,
  state: {
    currentBreath: null,
    currentCycleIndex: 0,
    currentPeriodIndex: INHALE,
    currentPeriods: [
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
    loopLastCycle: true,
    beepPlay: false,
    breaths: [
      {
        key: 'b',
        name: 'Progressive simple breath',
        cycles: [
          {
            key: 'a',
            breathKey: 'b',
            inhale: 6,
            full: 0,
            exhale: 6,
            empty: 0,
          },
          {
            key: 'b',
            breathKey: 'b',
            inhale: 8,
            full: 0,
            exhale: 8,
            empty: 0,
          },
          {
            key: 'c',
            breathKey: 'b',
            inhale: 10,
            full: 0,
            exhale: 10,
            empty: 0,
          },
          {
            key: 'd',
            breathKey: 'b',
            inhale: 12,
            full: 0,
            exhale: 12,
            empty: 0,
          },
        ]
      },
      {
        key: 'a',
        name: 'Simple breath',
        cycles: [
          {
            key: 'a',
            breathKey: 'a',
            inhale: 14,
            full: 0,
            exhale: 14,
            empty: 0,
          },
        ]
      },
      {
        key: 'd',
        name: 'Progressive square breath',
        cycles: [
          {
            key: 'a',
            breathKey: 'd',
            inhale: 3,
            full: 3,
            exhale: 3,
            empty: 3,
          },
          {
            key: 'b',
            breathKey: 'd',
            inhale: 5,
            full: 5,
            exhale: 5,
            empty: 5,
          },
          {
            key: 'c',
            breathKey: 'd',
            inhale: 7,
            full: 7,
            exhale: 7,
            empty: 7,
          },
          {
            key: 'd',
            breathKey: 'd',
            inhale: 9,
            full: 9,
            exhale: 9,
            empty: 9,
          },
        ]
      },
      {
        key: 'c',
        name: 'Square breath',
        cycles: [
          {
            key: 'a',
            breathKey: 'c',
            inhale: 10,
            full: 10,
            exhale: 10,
            empty: 10,
          },
        ]
      },
      {
        key: 'e',
        name: 'Progressive one minute breath',
        cycles: [
          {
            key: 'a',
            breathKey: 'e',
            inhale: 10,
            full: 10,
            exhale: 10,
            empty: 0,
          },
          {
            key: 'b',
            breathKey: 'e',
            inhale: 10,
            full: 10,
            exhale: 10,
            empty: 0,
          },
          {
            key: 'c',
            breathKey: 'e',
            inhale: 13,
            full: 13,
            exhale: 13,
            empty: 0,
          },
          {
            key: 'd',
            breathKey: 'e',
            inhale: 13,
            full: 13,
            exhale: 13,
            empty: 0,
          },
          {
            key: 'e',
            breathKey: 'e',
            inhale: 17,
            full: 17,
            exhale: 17,
            empty: 0,
          },
          {
            key: 'f',
            breathKey: 'e',
            inhale: 17,
            full: 17,
            exhale: 17,
            empty: 0,
          },
          {
            key: 'g',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
          {
            key: 'h',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
          {
            key: 'i',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
          {
            key: 'j',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
          {
            key: 'k',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
        ]
      },
      {
        key: 'f',
        name: 'One minute breath',
        cycles: [
          {
            key: 'a',
            breathKey: 'f',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
        ]
      },
      // {
      //   key: 'g',
      //   name: 'Kapalabati',
      //   cycles: [
      //     {
      //       key: 'a',
      //       breathKey: 'g',
      //       inhale: 0.4,
      //       full: 0,
      //       exhale: 0.4,
      //       empty: 0,
      //     },
      //   ]
      // },
    ],
/*     breaths: [
      {
        key: 'b',
        name: 'Progression respiration simpe',
        cycles: [
          {
            key: 'a',
            breathKey: 'b',
            inhale: 8,
            full: 0,
            exhale: 8,
            empty: 0,
          },
          {
            key: 'b',
            breathKey: 'b',
            inhale: 10,
            full: 0,
            exhale: 10,
            empty: 0,
          },
          {
            key: 'c',
            breathKey: 'b',
            inhale: 12,
            full: 0,
            exhale: 12,
            empty: 0,
          },
        ]
      },
      {
        key: 'a',
        name: 'Respiration simple',
        cycles: [
          {
            key: 'a',
            breathKey: 'a',
            inhale: 14,
            full: 0,
            exhale: 14,
            empty: 0,
          },
        ]
      },
      {
        key: 'd',
        name: 'Progression respiration carrée',
        cycles: [
          {
            key: 'a',
            breathKey: 'd',
            inhale: 4,
            full: 4,
            exhale: 4,
            empty: 4,
          },
          {
            key: 'b',
            breathKey: 'd',
            inhale: 6,
            full: 6,
            exhale: 6,
            empty: 6,
          },
          {
            key: 'c',
            breathKey: 'd',
            inhale: 8,
            full: 8,
            exhale: 8,
            empty: 8,
          },
        ]
      },
      {
        key: 'c',
        name: 'Respiration carrée',
        cycles: [
          {
            key: 'a',
            breathKey: 'c',
            inhale: 10,
            full: 10,
            exhale: 10,
            empty: 10,
          },
        ]
      },
      {
        key: 'e',
        name: 'Progression une respiration par minute',
        cycles: [
          {
            key: 'a',
            breathKey: 'e',
            inhale: 10,
            full: 10,
            exhale: 10,
            empty: 0,
          },
          {
            key: 'b',
            breathKey: 'e',
            inhale: 10,
            full: 10,
            exhale: 10,
            empty: 0,
          },
          {
            key: 'c',
            breathKey: 'e',
            inhale: 13,
            full: 13,
            exhale: 13,
            empty: 0,
          },
          {
            key: 'd',
            breathKey: 'e',
            inhale: 13,
            full: 13,
            exhale: 13,
            empty: 0,
          },
          {
            key: 'e',
            breathKey: 'e',
            inhale: 17,
            full: 17,
            exhale: 17,
            empty: 0,
          },
          {
            key: 'f',
            breathKey: 'e',
            inhale: 17,
            full: 17,
            exhale: 17,
            empty: 0,
          },
          {
            key: 'g',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
          {
            key: 'h',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
          {
            key: 'i',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
          {
            key: 'j',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
          {
            key: 'k',
            breathKey: 'e',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
        ]
      },
      {
        key: 'f',
        name: 'Une respiration par minute',
        cycles: [
          {
            key: 'a',
            breathKey: 'f',
            inhale: 20,
            full: 20,
            exhale: 20,
            empty: 0,
          },
        ]
      },
      // {
      //   key: 'g',
      //   name: 'Kapalabati',
      //   cycles: [
      //     {
      //       key: 'a',
      //       breathKey: 'g',
      //       inhale: 0.4,
      //       full: 0,
      //       exhale: 0.4,
      //       empty: 0,
      //     },
      //   ]
      // },
    ], */
  },
  mutations: {
    setCurrentBreath(state, { breath }) {
      // console.log('setCurrentBreath', breath)
      state.currentBreath = Object.assign({}, breath)
      // Object.assign(state.currentBreath, breath)
    },
    setCurrentCycleIndex(state, { cycleIndex }) {
      // console.log('setCurrentCycleIndex', cycleIndex)
      state.currentCycleIndex = cycleIndex
      eventBus.$emit(EVENTS.cycleIndexChanged);
    },
    setCurrentPeriodIndex(state, { periodIndex }) {
      // console.log('setCurrentPeriodIndex', periodIndex)
      state.currentPeriodIndex = periodIndex
      eventBus.$emit(EVENTS.periodIndexChanged);
    },
    setCurrentPeriods(state, { periods }) {
      // console.log('setCurrentPeriods', periods)
      state.currentPeriods = TOOLS.deepClone(periods)
      eventBus.$emit(EVENTS.periodsChanged);
    },
    setLoopLastCycle(state, { loopLastCycle }) {
      // console.log('setLoopLastCycle', loopLastCycle)
      state.loopLastCycle = loopLastCycle;
    },
    setBeepPlay(state, { beepPlay }) {
      // console.log('setBeepPlay', beepPlay)
      state.beepPlay = beepPlay;
    },

    setBreath(state, { breath }) {
      // console.log('setBreath', breath)
      const index = state.breaths.findIndex(b => b.key == breath.key)
      // state.breaths[index] = Object.assign({}, breath)
      Object.assign(state.breaths[index], breath)
    },
    // moveUpBreath(state, { breath }) {
    //   // console.log('moveUpBreath', breath)
    //   const index = state.breaths.findIndex(b => b.key == breath.key)
    //   state.breaths.splice(index, 1);
    //   state.breaths.splice(index - 1, 0, breath);
    // },
    // moveDownBreath(state, { breath }) {
    //   // console.log('moveDownBreath', breath)
    //   const index = state.breaths.findIndex(b => b.key == breath.key)
    //   state.breaths.splice(index, 1);
    //   state.breaths.splice(index + 1, 0, breath);
    // },
    moveBreath(state, { breath, from, to }) {
      // console.log('moveBreath', breath, from, to)
      state.breaths.splice(from, 1);
      state.breaths.splice(to, 0, breath);
    },
    moveCycle(state, { cycle, from, to }) {
      // console.log('moveCycle', cycle, from, to)
      if (!cycle.breathKey) {
        console.log('Cycle without breathKey')
        return
      }
      const breathIndex = state.breaths.findIndex(breath => breath.key === cycle.breathKey)
      state.breaths[breathIndex].cycles.splice(from, 1);
      state.breaths[breathIndex].cycles.splice(to, 0, cycle);
    },

    setCycle(state, { cycle }) {
      // console.log('setCycle', cycle)
      if (!cycle.breathKey) {
        console.log('Cycle without breathKey')
        return
      }
      const breathIndex = state.breaths.findIndex(b => b.key == cycle.breathKey)
      const cycleIndex = state.breaths[breathIndex].cycles.findIndex(c => c.key == cycle.key)
      Object.assign(state.breaths[breathIndex].cycles[cycleIndex], cycle)
    },

    setBreaths(state, { breaths }) {
      // console.log('setBreaths', breaths)
      Object.assign(state.breaths, breaths)
    },

    deleteBreath(state, { breath }) {
      // console.log('deleteBreath', breath)
      const index = state.breaths.findIndex(b => b.key == breath.key)
      state.breaths.splice(index, 1)
    },
    deleteCycle(state, { cycle }) {
      // console.log('deleteCycle', cycle)
      if (!cycle.breathKey) {
        console.log('Cycle without breathKey')
        return
      }
      const breathIndex = state.breaths.findIndex(b => b.key == cycle.breathKey)
      const cycleIndex = state.breaths[breathIndex].cycles.findIndex(c => c.key == cycle.key)
      state.breaths[breathIndex].cycles.splice(cycleIndex, 1)
    },

    addBreath(state, { breath }) {
      // console.log('addBreath', breath)
      state.breaths.push(breath)
    },
    addCycle(state, { cycle }) {
      // console.log('addCycle', cycle)
      if (!cycle.breathKey) {
        console.log('Cycle without breathKey')
        return
      }
      const index = state.breaths.findIndex(b => b.key == cycle.breathKey)
      state.breaths[index].cycles.push(cycle)
    },

    insertBreath(state, { breath, index }) {
      // console.log('insertBreath', breath,index)
      state.breaths.splice(index, 0, breath);
    },
    insertCycle(state, { cycle, index }) {
      // console.log('insertCycle', cycle,index)
      if (!cycle.breathKey) {
        console.log('Cycle without breathKey')
        return
      }
      const breathIndex = state.breaths.findIndex(b => b.key == cycle.breathKey)
      state.breaths[breathIndex].cycles.splice(index, 0, cycle);
    },
  },
  actions: {
    setCurrentBreath({ commit }, payload) {
      // console.log('setCurrentBreath.payload',payload)
      commit(BREATHING.setCurrentBreath, payload)
    },
    setCurrentCycleIndex({ commit }, payload) {
      // console.log('setCurrentCycleIndex.payload',payload)
      commit(BREATHING.setCurrentCycleIndex, payload)
    },
    setCurrentPeriodIndex({ commit }, payload) {
      // console.log('setCurrentPeriodIndex.payload',payload)
      commit(BREATHING.setCurrentPeriodIndex, payload)
    },
    setCurrentPeriods({ commit }, payload) {
      // console.log('setCurrentPeriods.payload',payload)
      commit(BREATHING.setCurrentPeriods, payload)
    },
    setLoopLastCycle({ commit }, payload) {
      // console.log('setLoopLastCycle.payload',payload)
      commit(BREATHING.setLoopLastCycle, payload)
    },
    setBeepPlay({ commit }, payload) {
      // console.log('setBeepPlay.payload',payload)
      commit(BREATHING.setBeepPlay, payload)
    },

    setBreath({ commit }, payload) {
      // console.log('setBreath.payload',payload)
      commit(BREATHING.setBreath, payload)
    },
    moveUpBreath({ commit }, payload) {
      // console.log('moveUpBreath.payload',payload)
      commit(BREATHING.moveUpBreath, payload)
    },
    moveDownBreath({ commit }, payload) {
      // console.log('moveDownBreath.payload',payload)
      commit(BREATHING.moveDownBreath, payload)
    },
    moveFromToBreath({ commit }, payload) {
      // console.log('moveFromToBreath.payload',payload)
      commit(BREATHING.moveFromToBreath, payload)
    },
    moveBreath({ commit }, payload) {
      // console.log('moveBreath.payload',payload)
      commit(BREATHING.moveBreath, payload)
    },
    moveCycle({ commit }, payload) {
      // console.log('moveCycle.payload',payload)
      commit(BREATHING.moveCycle, payload)
    },

    setCycle({ commit }, payload) {
      // console.log('setCycle.payload',payload)
      commit(BREATHING.setCycle, payload)
    },

    setBreaths({ commit }, payload) {
      // console.log('setBreaths.payload',payload)
      commit(BREATHING.setBreaths, payload)
    },

    addBreath({ getters, commit }, { breath }) {
      // console.log('addBreath.breath',breath)
      const newBreath = TOOLS.deepClone(breath);
      newBreath.key = TOOLS.generateKEY()

      let num = getters.countBreathName(breath.name)
      while (num > 0) {
        newBreath.name = newBreath.name + " (" + num + ")";
        num = getters.countBreathName(newBreath.name)
        // console.log('num',num)
      }

      commit(BREATHING.addBreath, { breath: newBreath })
    },
    addCycle({ commit }, { cycle }) {
      // console.log('addCycle.cycle', cycle)
      const newCycle = TOOLS.deepClone(cycle);
      newCycle.key = TOOLS.generateKEY()
      commit(BREATHING.addCycle, { cycle: newCycle })
    },

    duplicateBreath({ commit, getters }, { breath }) {
      // console.log('addBreath.breath',breath)
      const duplicateBreath = TOOLS.deepClone(breath);
      duplicateBreath.key = TOOLS.generateKEY()

      let num = getters.countBreathName(breath.name)
      while (num > 0) {
        duplicateBreath.name = duplicateBreath.name + " (" + num + ")";
        num = getters.countBreathName(duplicateBreath.name)
        // console.log('num',num)
      }

      const index = getters.getBreathIndex(breath) + 1
      commit(BREATHING.insertBreath, { breath: duplicateBreath, index })
    },
    duplicateCycle({ commit, getters }, { cycle }) {
      // console.log('addCycle.cycle',cycle)
      const duplicateCycle = TOOLS.deepClone(cycle);
      duplicateCycle.key = TOOLS.generateKEY()
      const index = getters.getCycleIndex(cycle) + 1
      commit(BREATHING.insertCycle, { cycle: duplicateCycle, index })
    },

    deleteBreath({ commit }, payload) {
      // console.log('deleteBreath.payload',payload)
      commit(BREATHING.deleteBreath, payload)
    },
    deleteCycle({ commit }, payload) {
      // console.log('deleteCycle.payload', payload)
      commit(BREATHING.deleteCycle, payload)
    },

  },
  getters: {
    getCurrentBreath: state => state.currentBreath,
    getCurrentCycleIndex: state => state.currentCycleIndex,
    getCurrentPeriodIndex: state => state.currentPeriodIndex,
    getCurrentPeriods: state => state.currentPeriods,
    getLoopLastCycle: state => state.loopLastCycle,
    getBeepPlay: state => state.beepPlay,

    getBreathIndex: state => breath => state.breaths.findIndex(b => b.key == breath.key),
    getCycleIndex: (state, getters) => cycle => {
      const breath = getters.getBreathByKey(cycle.breathKey)
      const breathIndex = getters.getBreathIndex(breath)
      return state.breaths[breathIndex].cycles.findIndex(c => c.key == cycle.key)
    },
    getBreaths: state => state.breaths.map(breath => breath),
    getCycles: (state, getters) => breath => {
      const breathIndex = getters.getBreathIndex(breath)
      return state.breaths[breathIndex].cycles.map(cycle => cycle)
    },
    getBreathByKey: state => key => state.breaths.find(breath => breath.key == key),
    getBreathByIndex: state => index => state.breaths[index],
    countBreathName: state => breathName => state.breaths.filter(breath => breath.name.includes(breathName)).length,
  }
}




