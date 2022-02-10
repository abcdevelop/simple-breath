<template>
  <v-list class="elevation-1 ma-2">
    <v-toolbar flat class="grey lighten-1">
      <v-icon
        large
        class="mr-3 mb-1"
        :color="enabled ? 'error' : 'default'"
        @click="enabledDrag"
        >{{ enabled ? "mdi-pan-vertical" : "mdi-arrow-vertical-lock" }}
      </v-icon>
      <v-toolbar-title class="text-left font-weight-medium text-h6 white--text">
        {{ breath.name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <DialogCycle v-show="!enabled" :cycle="defaultCycle" />
    </v-toolbar>

    <v-list-item class="justify-space-between font-weight-bold text-subtitle-1">
      <v-list-item-title v-text="getTraduction(NAMES.CycleList.cycleTitle[INHALE])">
      </v-list-item-title>
      <v-list-item-title v-text="getTraduction(NAMES.CycleList.cycleTitle[FULL])">
      </v-list-item-title>
      <v-list-item-title v-text="getTraduction(NAMES.CycleList.cycleTitle[EXHALE])">
      </v-list-item-title>
      <v-list-item-title v-text="getTraduction(NAMES.CycleList.cycleTitle[EMPTY])">
      </v-list-item-title>
      <v-list-item-title class="text-end" textv-="'...'"> </v-list-item-title>
    </v-list-item>

    <v-list-item-group>
      <draggable
        :list="items"
        :disabled="!enabled"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="onStart"
        @end="onEnd"
      >
        <v-list-item justify="center" v-for="(item, i) in items" :key="i">
          <v-list-item-content v-text="item.inhale"> </v-list-item-content>
          <v-list-item-content v-text="item.full"> </v-list-item-content>
          <v-list-item-content v-text="item.exhale"> </v-list-item-content>
          <v-list-item-content v-text="item.empty"> </v-list-item-content>
          <v-list-item-icon>
            <DialogCycle v-if="!enabled" :cycle="item" />
          </v-list-item-icon>
        </v-list-item>
      </draggable>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { sharedMixin, breathingMixin, routesMixin } from "@/mixins";
import { NAMES, MESSAGES, INHALE, FULL, EXHALE, EMPTY } from "@/shared/constants";
import DialogCycle from "@/components/DialogCycle";
import { Cycle } from "@/shared/entities";
import draggable from "vuedraggable";

export default {
  name: "CycleList",
  mixins: [sharedMixin, breathingMixin, routesMixin],
  components: {
    DialogCycle,
    draggable,
  },
  props: {
    breath: {
      type: Object,
    },
  },
  data: () => ({
    NAMES,
    MESSAGES,
    INHALE,
    FULL,
    EXHALE,
    EMPTY,
    defaultCycle: new Cycle({}),
    editedCycle: new Cycle({}),
    //drag
    enabled: false,
    dragging: false,
    initialIndex: 0,
    finalIndex: 0,
  }),
  computed: {
    items() {
      return this.getCycles(this.breath);
    },
  },
  methods: {
    enabledDrag() {
      this.enabled = !this.enabled;
    },
    onStart: function () {
      this.dragging = true;
    },
    checkMove: function (e) {
      // window.console.log("draggedContext: " , e.draggedContext);
      // window.console.log("Initial index: " + e.draggedContext.index);
      // window.console.log("Future index: " + e.draggedContext.futureIndex);
      // window.console.log("dragging: " + this.dragging);
      this.initialIndex = e.draggedContext.index;
      this.finalIndex = e.draggedContext.futureIndex;
    },
    onEnd: function () {
      this.dragging = false;
      // window.console.log("dragging: " + this.dragging);
      // window.console.log("onEnd.initialIndex", this.initialIndex);
      // window.console.log("onEnd.finalIndex", this.finalIndex);
      // console.log('breath',this.breath)
      const cycle = this.breath.cycles[this.initialIndex];
      // console.log('cycle',cycle)
      this.moveCycle({ cycle, from: this.initialIndex, to: this.finalIndex });
    },
  },
};
</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
