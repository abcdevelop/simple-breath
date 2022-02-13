<template>
  <v-list class="elevation-1 ma-2">
    <v-toolbar flat class="grey lighten-1">
      <v-icon
        large
        class="mr-3 mb-1"
        :color="dragEnabled ? 'error' : 'default'"
        @click="enabledDrag"
        >{{ dragEnabled ? "mdi-pan-vertical" : "mdi-arrow-vertical-lock" }}
      </v-icon>
      <v-toolbar-title class="text-left font-weight-medium text-h6 white--text">
        {{ breath.name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <DialogCycle v-show="!dragEnabled" :cycle="defaultCycle" />
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
        :disabled="!dragEnabled"
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
            <DialogCycle v-if="!dragEnabled" :cycle="item" />
          </v-list-item-icon>
        </v-list-item>
      </draggable>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { BREATHING } from "@/shared/constants";
import { sharedMixin, routesMixin } from "@/mixins";
import { NAMES, MESSAGES, INHALE, FULL, EXHALE, EMPTY } from "@/shared/constants";
import DialogCycle from "@/components/DialogCycle";
import { Cycle } from "@/shared/entities";
import draggable from "vuedraggable";

export default {
  name: "CycleList",
  mixins: [sharedMixin, routesMixin],
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
    dragging: false,
    dragEnabled: false,
    initialIndex: 0,
    finalIndex: 0,
  }),
  computed: {
    ...mapGetters({
      getCycles: BREATHING.getCycles,
    }),
    items() {
      return this.getCycles(this.breath);
    },
  },
  methods: {
    ...mapActions({
      moveCycle: BREATHING.moveCycle,
    }),    
    enabledDrag() {
      this.dragEnabled = !this.dragEnabled;
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
      const cycle = this.breath.cycles[this.initialIndex];
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
