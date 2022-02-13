<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-show="editMode" class="mr-2" v-bind="attrs" v-on="on"
          >mdi-pencil
        </v-icon>
        <v-icon v-show="!editMode" x-large v-bind="attrs" v-on="on">mdi-plus </v-icon>
      </template>

      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>

            <v-spacer></v-spacer>
            <v-icon v-show="editMode" class="ma-2" @click="duplicateItem">
              mdi-content-duplicate
            </v-icon>
            <v-icon v-show="editMode" @click="deleteItem()"> mdi-delete </v-icon>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="editedBreath.name"
                    :rules="[RULES.isRequired]"
                    :label="getTraduction(NAMES.DialogBreath.breathName)"
                    placeholder="Input name"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-bottom-navigation :value="action" grow class="elevation-0">
              <v-btn fab class="elevation-1" text @click="close">
                <v-icon x-large color="error">mdi-close</v-icon>
              </v-btn>
              <v-btn :disabled="!valid" @click="save" fab class="elevation-1" text>
                <v-icon x-large color="success">mdi-check</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>

    <v-dialog v-model="dialogConfirm" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">{{
          getTraduction(MESSAGES.confirmDeleteBreath)
        }}</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="closeDeleteConfirm">{{
            getTraduction(NAMES.Buttons.cancel)
          }}</v-btn>
          <v-btn color="succes" text @click="deleteItemConfirm">{{
            getTraduction(NAMES.Buttons.ok)
          }}</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { BREATHING } from "@/shared/constants";
import { sharedMixin } from "@/mixins";
import { NAMES, MESSAGES, RULES } from "@/shared/constants";
import { Breath } from "@/shared/entities";

export default {
  name: "DialogBreath",
  mixins: [sharedMixin],

  props: {
    breath: {
      type: Object,
    },
  },
  data: () => ({
    NAMES,
    MESSAGES,
    RULES,
    // isRequired: (v) =>
    //   !!v || this.getTraduction({ en: "required", fr: "Saisie obligatoire" }),
    // RULES : {
    // },
    //   isRequired: (v) => !!v || this.getTraduction({en: 'required', fr: 'Saisie obligatoire'})
    valid: true,
    action: 0,
    dialog: false,
    dialogConfirm: false,
    editedBreath: new Breath({}),
  }),
  mounted() {
    this.editedBreath = Object.assign({}, this.breath);
  },
  computed: {
    formTitle() {
      return this.editMode
        ? this.getTraduction(NAMES.DialogBreath.editBreath)
        : this.getTraduction(NAMES.DialogBreath.newBreath);
    },
    editMode() {
      return this.breath.key != null;
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogConfirm(val) {
      val || this.closeDeleteConfirm();
    },
  },
  methods: {
    ...mapActions({
      addBreath: BREATHING.addBreath,
      setBreath: BREATHING.setBreath,
      deleteBreath: BREATHING.deleteBreath,
      duplicateBreath: BREATHING.duplicateBreath,
    }),
    deleteItem() {
      this.dialogConfirm = true;
    },
    deleteItemConfirm() {
      this.closeDeleteConfirm();
      this.deleteBreath({ breath: this.breath });
      this.close();
    },
    closeDeleteConfirm() {
      this.dialogConfirm = false;
    },
    close() {
      this.dialog = false;
    },
    save() {
      if (this.editMode) {
        this.setBreath({ breath: this.editedBreath });
      } else {
        this.addBreath({ breath: this.editedBreath });
      }
      this.close();
    },
    duplicateItem() {
      this.duplicateBreath({ breath: this.editedBreath });
      this.close();
    },
  },
};
</script>
