const defaultCycle = {
    key: null,
    breathKey: null,
    inhale: 5,
    full: 0,
    exhale: 5,
    empty: 0,
}

export const Cycle = class {
    constructor({
        key,
        breathKey,
        inhale,
        full,
        exhale,
        empty,
    }) {
        if (key) {
            this.key = key
        } else {
            this.key = null
        }
        if (breathKey) {
            this.breathKey = breathKey
        } else {
            this.breathKey = null
        }
        if (inhale) {
            this.inhale = inhale
        } else {
            this.inhale = defaultCycle.inhale
        }
        if (full) {
            this.full = full
        } else {
            this.full = defaultCycle.full
        }
        if (exhale) {
            this.exhale = exhale
        } else {
            this.exhale = defaultCycle.exhale
        }
        if (empty) {
            this.empty = empty
        } else {
            this.empty = defaultCycle.empty
        }
    }
};
