<template>
  <div>
    <!-------------------------------------------- DIALOG  ---------------------------------------------------->
    <!-- <Confirm ref="confirm"></Confirm> -->
    <!-- <Alert ref="alert"></Alert> -->

    <!-------------------------------------------- DRAWER  ---------------------------------------------------->
    <v-navigation-drawer 
    v-model="dialog" 
    app 
    right
    > <v-list dense>
        <v-list-item-title
          class="d-flex ma-3 align-center justify-space-between title primary--text"
        >
          <v-app-bar-nav-icon>
            <img :src="logo" alt="logo" />
          </v-app-bar-nav-icon>
          {{ getTraduction(NAMES.App.name) }}
          <v-icon large color="COLORS.appGrey" @click="closeDrawer">mdi-close</v-icon>
        </v-list-item-title>

        <!-- USER MANUAL -->
        <!-- <v-divider></v-divider>
        <v-list-item link @click.stop="goHelpView()">
          <v-list-item-action>
            <v-icon color="primary">mdi-help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{
              getTraduction(NAMES.AppDrawer.userManual)
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <!-- ADD SHORTCUT -->
        <v-list-item v-if="!!deferredPrompt" link @click.stop="onAddShortcut()">
          <v-list-item-action>
            <v-icon color="primary">mdi-home-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{
              getTraduction(NAMES.AppDrawer.addShortcut)
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- LANGUAGE -->
        <v-list-group prepend-icon="mdi-earth" :value="false">
          <template v-slot:activator>
            <v-list-item-title>{{
              getTraduction(NAMES.AppDrawer.language)
            }}</v-list-item-title>
          </template>
          <v-list-item link>
            <v-list-item-title>
              <v-radio-group v-model="languageCode" mandatory>
                <v-radio
                  :label="getTraduction(NAMES.AppDrawer.french)"
                  :value="LANGUAGES.fr.code"
                ></v-radio>
                <v-radio
                  :label="getTraduction(NAMES.AppDrawer.english)"
                  :value="LANGUAGES.en.code"
                ></v-radio>
              </v-radio-group>
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-group>

        <!-- PARTAGER  -->
        <!-- <v-list-group prepend-icon="mdi-share" :value="false">
          <template v-slot:activator>
            <v-list-item-title>{{
              getTraduction(NAMES.AppDrawer.share)
            }}</v-list-item-title>
          </template>
          <v-divider></v-divider>
          <v-list-item link @click.stop="onShareWhatsapp()">
            <v-list-item-content>
              <v-list-item-title>
                <v-chip pa-0 small color="white">
                  <v-avatar left>
                    <v-icon color="primary">mdi-whatsapp</v-icon>
                  </v-avatar>
                  {{ getTraduction(NAMES.AppDrawer.shareWhatsApp) }}
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <v-chip pa-0 small color="white" :href="shareMail">
                  <v-avatar left>
                    <v-icon color="primary">mdi-email-outline</v-icon>
                  </v-avatar>
                  {{ getTraduction(NAMES.AppDrawer.shareEmail) }}
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->

        <!-- <v-list-item link @click.stop="shareFaceBook()" disabled>
          <v-list-item-action>
            <v-icon color="primary">mdi-share</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Partager via Facebook</v-list-item-title>
          </v-list-item-content>
          </v-list-item>-->
        <!-- <v-list-item link @click.stop="shareTweeter()" disabled>
          <v-list-item-action>
            <v-icon color="primary">mdi-share</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Partager via Tweeter</v-list-item-title>
          </v-list-item-content>
          </v-list-item>-->

        <!-- <v-divider></v-divider>
        </v-list-group> -->

        <!-- A PROPOS -->
        <v-divider></v-divider>
        <v-list-item link @click.stop="goAbout()">
          <v-list-item-action>
            <v-icon color="primary">mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{
              getTraduction(NAMES.AppDrawer.about)
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { eventBus, deferredPrompt } from "@/main";
import {
  EVENTS,
  NAMES,
  LANGUAGES,
  SHARED,
  ROUTES,
  COLORS,
  MODES,
} from "@/shared/constants";
import { sharedMixin, routesMixin } from "@/mixins";
// import Confirm from "@/components/shared/Confirm.vue";
// import Alert from "@/components/shared/Alert.vue";

export default {
  name: "AppDrawer",
  mixins: [sharedMixin, routesMixin],
  // components: {
  //   Confirm,
  //   Alert,
  // },
  data() {
    return {
      LANGUAGES,
      NAMES,
      SHARED,
      COLORS,
      MODES,
      deferredPrompt,
      dialog: false,
      logo: require("@/assets/logo.png"),
    };
  },
  created() {
    eventBus.$on(EVENTS.openAppDrawer, () => {
      this.dialog = true;
    });
    eventBus.$on(EVENTS.closeAppDrawer, () => {
      this.dialog = false;
    });
  },
  computed: {
    shareMail() {
      return `mailto:${this.getCurrentEmail}
            ?subject=${this.getTraduction(NAMES.AppDrawer.subject)}
            &body=${this.getTraduction(NAMES.AppDrawer.body)}`;
    },
    languageCode: {
      get() {
        return this.getLanguageCode;
      },
      set(value) {
        const payload = {
          languageCode: value,
        };
        this.setLanguageCode(payload);
      },
    },
  },
  methods: {
    goHelpView() {
      this.$router.push({ name: ROUTES.HelpView });
    },
    // goListItemView() {
    //   this.$router.push({ name: ROUTES.ListItemView });
    // },
    closeDrawer() {
      eventBus.$emit(EVENTS.closeAppDrawer);
    },
    onAddShortcut() {
      // console.log('onAddShortcut',deferredPrompt)
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
          console.log('onAddShortcut',choiceResult.outcome);
          if (choiceResult.outcome === "dismissed") {
            console.log("Installation du racourcis écran annulé");//TODO:traduction
          } else {
            console.log("Installation du racourcis écran effectué");//TODO:traduction
          }
        });
        deferredPrompt = null;
      }
    },
    onShareWhatsapp() {
      //TODO: getTraduction
      const whatsappLink =
        "https://wa.me/?text=https%3A%2F%2Fsimple-breath-app.web.app%20Une%20APP%20pour%20respirer%20%21";
      window.open(whatsappLink);
    },
  },
};
</script>
