<template>
  <div>
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
          {{ getTraduction(NAMES.BreathList.listOfBreaths) }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <DialogBreath v-show="!enabled" :breath="defaultBreath" />
      </v-toolbar>

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
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content v-text="item.name" @click="onItemClick(item)">
            </v-list-item-content>
            <v-list-item-icon>
              <DialogBreath v-if="!enabled" @click="editItem(item)" :breath="item" />
            </v-list-item-icon>
          </v-list-item>
        </draggable>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { sharedMixin, breathingMixin, routesMixin } from "@/mixins";
import DialogBreath from "@/components/DialogBreath";
import { Breath } from "@/shared/entities";
import { NAMES } from "@/shared/constants";
import draggable from "vuedraggable";

export default {
  name: "BreathList",
  mixins: [sharedMixin, breathingMixin, routesMixin],
  components: {
    DialogBreath,
    draggable,
  },
  data: () => ({
    NAMES,
    defaultBreath: new Breath({}),
    //drag
    enabled: false,
    dragging: false,
    initialIndex: 0,
    finalIndex: 0,
  }),
  computed: {
    items() {
      return this.getBreaths;
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
      const breath = this.getBreathByIndex(this.initialIndex);
      this.moveBreath({ breath, from: this.initialIndex, to: this.finalIndex });
    },
    onItemClick(breath) {
      if (this.enabled) return;
      // console.log("onItemClick.breath", breath);
      this.setCurrentBreath({ breath });
      const periods =
        breath.cycles.length > 0
          ? [
              { value: 0, max: breath.cycles[0].inhale },
              { value: 0, max: breath.cycles[0].full },
              { value: 0, max: breath.cycles[0].exhale },
              { value: 0, max: breath.cycles[0].empty },
            ]
          : [
              { value: 0, max: 5 },
              { value: 0, max: 0 },
              { value: 0, max: 5 },
              { value: 0, max: 0 },
            ];
      this.setCurrentPeriods({ periods });
      this.goBreathDonutView();
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