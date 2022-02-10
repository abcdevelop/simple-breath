<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-show="editMode" class="mr-2" v-bind="attrs" v-on="on"
            >mdi-pencil
          </v-icon>
          <v-icon v-show="!editMode" x-large v-bind="attrs" v-on="on">mdi-plus</v-icon>
        </template>

      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
            <v-spacer></v-spacer>
            <v-icon v-show="editMode" class="ma-2" @click="duplicateItem(editedCycle)">
              mdi-content-duplicate
            </v-icon>

            <v-icon v-show="editMode" @click="deleteItem()"> mdi-delete </v-icon>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="number"
                    min="0"
                    :rules="[RULES.isRequired, RULES.isPositive]"
                    :label="getTraduction(NAMES.DialogCycle.inhale)"
                    v-model="editedCycle.inhale"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="number"
                    min="0"
                    :rules="[RULES.isRequired, RULES.isPositive]"
                    :label="getTraduction(NAMES.DialogCycle.full)"
                    v-model="editedCycle.full"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="number"
                    min="0"
                    :rules="[RULES.isRequired, RULES.isPositive]"
                    :label="getTraduction(NAMES.DialogCycle.exhale)"
                    v-model="editedCycle.exhale"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="number"
                    min="0"
                    :rules="[RULES.isRequired, RULES.isPositive]"
                    :label="getTraduction(NAMES.DialogCycle.empty)"
                    v-model="editedCycle.empty"
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
              <v-btn
                :disabled="!valid"
                @click="save"
                fab
                class="elevation-1"
                text
              >
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
          getTraduction(MESSAGES.confirmDeleteCycle)
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
import { sharedMixin, breathingMixin } from "@/mixins";
import { NAMES, MESSAGES, RULES } from "@/shared/constants";
import { Breath, Cycle } from "@/shared/entities";

export default {
  name: "DialogCycle",
  mixins: [sharedMixin, breathingMixin],

  props: {
    cycle: {
      type: Object,
    },
  },
  data: () => ({
    NAMES,
    MESSAGES,
    RULES,
    // RULES : {
    //   isRequired: (v) => !!v || this.getTraduction({en: 'required', fr: 'Saisie obligatoire'}),
    //   isPositive: (v) => Number(v) >= 0 || this.getTraduction(
    //     {en: "number must be positive", fr: "Le nombre doit être positif"}),
    // },
    valid:true,
    action: 0,
    dialog: false,
    dialogConfirm: false,
    editedCycle: new Cycle({}),
    breath: new Breath({}),
  }),
  mounted() {
    this.breath = this.getCurrentBreath;
    this.editedCycle = Object.assign({}, this.cycle);
  },
  computed: {
    formTitle() {
      return this.editMode
        ? this.getTraduction(NAMES.DialogCycle.newCycle)
        : this.getTraduction(NAMES.DialogCycle.editCycle);
    },
    editMode() {
      return this.editedCycle.key != null;
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
    deleteItem() {
      this.dialogConfirm = true;
    },
    deleteItemConfirm() {
      this.closeDeleteConfirm();
      this.deleteCycle({ cycle: this.editedCycle });
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
        this.setCycle({ cycle: this.editedCycle });
      } else {
        this.editedCycle.breathKey = this.breath.key;
        this.addCycle({ cycle: this.editedCycle });
      }
      this.close();
    },
    duplicateItem(cycle) {
      this.duplicateCycle({ cycle });
      this.close();
    },
  },
};
</script>
