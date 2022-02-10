import { LANGUAGES, SHARED, MESSAGES } from "@/shared/constants";

//---------------------------- SHARED -------------------------------------------
export default {
  namespaced: false,
  state: {
    statusText: null,
    languageCode: LANGUAGES.en.code,
  },
  mutations: {
    setLanguageCode(state, { languageCode }) {
      // console.log('setLanguageCode.languageCode', languageCode)
      state.languageCode = languageCode
    },
    setStatusText(state, { statusText }) {
      state.statusText = statusText
    },
  },
  actions: {
    //ON CLIENT
    setLanguageCode({ getters, commit, dispatch }, payload) {
      // console.log('setLanguageCode.payload',payload)
      commit(SHARED.setLanguageCode, payload)
      dispatch(SHARED.setStatusText, {
        statusText: getters.getTraduction(MESSAGES.languageCode)
      });
    },
    setStatusText({ commit }, { statusText }) {
      commit(SHARED.setStatusText, { statusText })
      setTimeout(() => {
        return commit(SHARED.setStatusText, { statusText: null })
      }, 3000);
    },

    // ON SERVER
  },
  getters: {
    // FROM CLIENT
    getLanguageCode: state => {
      return state.languageCode || LANGUAGES.fr.code
    },
    getTraduction: (state, getters) => messageObj => messageObj[getters.getLanguageCode],
    getStatusText: state => state.statusText,

    // FROM SERVER
  }
}
