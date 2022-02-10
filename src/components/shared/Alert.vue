<template>
  <v-dialog
    v-model="dialog"
    :max-width="options.width"
    @keydown.esc="cancel"
    v-bind:style="{ zIndex: options.zIndex }"
    persistent
  >
    <v-card>
      <v-toolbar dark :color="options.color" dense text>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!message">
        <br />
        {{ message }}
      </v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="grey" text="text" @click="close">{{getTraduction(NAMES.close)}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/**
 * Vuetify Confirm Dialog component
 *
 * Insert component where you want to use it:
 * <confirm ref="confirm"></confirm>
 *
 * Call it:
 * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
 * Or use await:
 * if (await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })) {
 *   // yes
 * }
 * else {
 *   // cancel
 * }
 *
 * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
 * <template>
 *   <v-app>
 *     ...
 *     <confirm ref="confirm"></confirm>
 *   </v-app>
 * </template>
 *
 * mounted() {
 *   this.$root.$confirm = this.$refs.confirm.open
 * }
 */
import { sharedMixin } from "@/mixins";
import { NAMES, SHARED } from "@/shared/constants";
// import { mapGetters } from "vuex";

export default {
  name: "Message",
  mixins: [sharedMixin],
  data: () => ({
    NAMES,
    SHARED,
    dialog: false,
    message: null,
    title: null,
    options: {
      color: "warning",
      width: 290,
      zIndex: 200
    }
  }),
  methods: {
    open(title, message, options) {
      this.dialog = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    close() {
      this.dialog = false;
      this.resolve(true);
    }
  }
};
</script>
