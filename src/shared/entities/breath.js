// import { NAMES} from "@/shared/constants";
// name: this.getTraduction(NAMES.BreathList.defaultBreathName),     
import TOOLS from "@/shared/tools";

const defaultBreath = {
    key: null,
    name: "New breath",//TODO:traduction
    cycles: [],
}

export const Breath = class {
    constructor({
        key,
        name,
        cycles,
    }) {
        if (key) {
            this.key = key
        } else {
            this.key = null
        }
        if (name) {
            this.name = name
        } else {
            this.name = defaultBreath.name
        }
        if (cycles) {
            this.cycles = TOOLS.deepClone(cycles)
        } else {
            this.cycles = TOOLS.deepClone(defaultBreath.cycles)
        }
    }
};
