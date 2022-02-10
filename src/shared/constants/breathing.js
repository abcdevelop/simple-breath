export const INHALE = 0,
  FULL = 1,
  EXHALE = 2,
  EMPTY = 3,
  BREATHING = {

    // ------------------------------------------------- NAMESPACE ---------------------------------------------------
    namespace: 'breathing',

    // IN MIXIN
    setCurrentBreath: 'setCurrentBreath',
    setCurrentCycleIndex: 'setCurrentCycleIndex',
    setCurrentPeriodIndex: 'setCurrentPeriodIndex',
    setCurrentPeriods: 'setCurrentPeriods',
    setLoopLastCycle: 'setLoopLastCycle',
    setBeepPlay: 'setBeepPlay',

    setBreath: 'setBreath',
    // moveUpBreath: 'moveUpBreath',
    // moveDownBreath: 'moveDownBreath',
    // moveFromToBreath: 'moveFromToBreath', 
    moveBreath: 'moveBreath', 
    moveCycle: 'moveCycle', 
    setCycle: 'setCycle',

    setBreaths: 'setBreaths',


    
    
    deleteBreath: 'deleteBreath',
    deleteCycle: 'deleteCycle',
    
    addBreath: 'addBreath',
    addCycle: 'addCycle',
    insertBreath: 'insertBreath',
    insertCycle: 'insertCycle',
    
    duplicateBreath: 'duplicateBreath',
    duplicateCycle: 'duplicateCycle',
    
    getCurrentBreath: 'getCurrentBreath',
    getCurrentCycleIndex: 'getCurrentCycleIndex',
    getCurrentPeriodIndex: 'getCurrentPeriodIndex',
    getCurrentPeriods: 'getCurrentPeriods',
    getLoopLastCycle: 'getLoopLastCycle',
    getBeepPlay: 'getBeepPlay',

    getBreathIndex: 'getBreathIndex',
    getCycleIndex: 'getCycleIndex',
    
    getBreaths: 'getBreaths',
    getCycles: 'getCycles',
    getBreathByKey: 'getBreathByKey',
    getBreathByIndex: 'getBreathByIndex',
    countBreathName: 'countBreathName',
  }
  