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
        <v-btn
          :color="options.color"
          class="white--text"
          appGreen
          text="text"
          @click="agree"
        >{{getTraduction(NAMES.yes)}}</v-btn>
        <v-btn color="grey" class="white--text" appGreen text="text" @click="cancel">{{getTraduction(NAMES.cancel)}}</v-btn>
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

export default {
  name: "Confirm",
  mixins: [sharedMixin],
  data: () => ({
    NAMES,
    SHARED,
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    options: {
      color: "primary",
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
    agree() {
      this.dialog = false;
      this.resolve(true);
    },
    cancel() {
      this.dialog = false;
      this.resolve(false);
    }
  }
};
</script>
