export const MODES = {
    LANGUAGE: {
        fr: 'fr',
        en: 'en'
    },
    SWIPE: {
        right: 'right',
        left: 'left'
    }
}

export const LANGUAGES = {
    fr: {
        name: 'Français',
        code: MODES.LANGUAGE.fr,
    },
    en: {
        name: 'Anglais',
        code: MODES.LANGUAGE.en,
    }
}

export const NAMES = {
    yes: {
        en: 'Yes',
        fr: 'Oui'
    },
    no: {
        en: 'No',
        fr: 'Non'
    },
    cancel: {
        en: 'Cancel',
        fr: 'Annuler',
    },
    close: {
        en: 'Close',
        fr: 'Fermer',
    },
    delete: {
        en: 'delete',
        fr: 'supprimer',
    },
    remove: {
        en: 'remove',
        fr: 'enlever',
    },
    edit: {
        en: 'edit',
        fr: 'editer',
    },
    validate: {
        en: 'validate',
        fr: 'valider',
    },
    Buttons: {
        ok: {
            en: 'Ok',
            fr: 'Ok',
        },
        cancel: {
            en: 'Cancel',
            fr: 'Annuler',
        },
    },

    App: {
        name: {
            en: 'Simple Breath',
            fr: 'Respire Simple',
        },
    },

    BreathListView: {
    },
    BreathList: {
        listOfBreaths: {
            en: 'Breaths',
            fr: 'Respirations',
        },
        defaultBreathName: {
            en: 'New breath',
            fr: 'Nouvelle respirations',
        },
    },
    DialogBreath: {
        title: {
            en: 'Breath',
            fr: 'Respiration',
        },
        breathName: {
            en: 'Breath name',
            fr: 'Nom de la respiration',
        },
        newBreath: {
            en: 'New breath',
            fr: 'Nouvelle respiration',
        },
        editBreath: {
            en: 'Edit breath',
            fr: 'Modifier',
        },
    },

    BreathDonutView: {
    },
    BreathDonut: {
        cycleTitle: [
            {
                en: 'Inhale',
                fr: 'Inspire',
            },
            {
                en: 'Block',
                fr: 'Bloque',
            },
            {
                en: 'Exhale',
                fr: 'Expire',
            },
            {
                en: 'Block',
                fr: 'Bloque',
            },
        ],
        playBeepOnPeriodChanges: {
            en: 'Play gong on periods change',
            fr: 'Gong au changement de périodes',
        },
        loopTheLastCycle: {
            en: 'Loop the last cycle',
            fr: 'En boucle au dernier cycle',
        }
    },

    CycleListView: {
    },
    CycleList: {
        cycleTitle: [
            {
                en: 'Inhale',
                fr: 'Inspire',
            },
            {
                en: 'Full',
                fr: 'Plein',
            },
            {
                en: 'Exhale',
                fr: 'Expire',
            },
            {
                en: 'Empty',
                fr: 'Vide',
            },
        ],
    },
    DialogCycle: {
        newCycle: {
            en: 'New cycle',
            fr: 'Nouveau cycle',
        },
        editCycle: {
            en: 'Edit cycle',
            fr: 'Modifier',
        },
        inhale: {
            en: 'Inhale',
            fr: 'Inspire',
        },
        full: {
            en: 'Full',
            fr: 'Plein',
        },
        exhale: {
            en: 'Exhale',
            fr: 'Expire',
        },
        empty: {
            en: 'Empty',
            fr: 'Vide',
        },
    },
    
    AppDrawer: {
        language: {
            en: 'Language',
            fr: 'Langue'
        },
        english: {
            en: 'English',
            fr: 'Anglais'
        },
        french: {
            en: 'French',
            fr: 'Français'
        },
        userManual: {
            en: 'User manual',
            fr: "Mode d'emploi"
        },
        addShortcut: {
            en: 'Shortcut to home screen',
            fr: "Raccourci écran d'accueil"
        },
        share: {
            en: 'Share',
            fr: 'Partager'
        },
        shareWhatsApp: {
            en: 'Share with WhatsApp',
            fr: 'Partager via WhatsApp'
        },
        shareEmail: {
            en: 'Share with email',
            fr: 'Partager via email'
        },
        subject: {
            en: '"Simple Breath", an APP to try...',
            fr: '"Respire Simple", une APP à essayer...'
        },
        body: {
            en: `Here is an APP to breath with chosen timings cycles. It's very simple !!! 
            So, you will increase your breathing capacity. 
            You should try it, it's free !!!...§§§... 
            Hers is the web address : 
            https://simple-breath.web.app`,
            fr: `Voici une APP pour respirer selon des tepms de cycles choisis. C'est tres simple !!! 
            Tu pourras ainsi augmenter ta capacité respiratoire.
            Tu devrais l'essayer, c'est gratuit !!!...§§§... 
            Voici l'adresse Web : 
            https://simple-breath.web.app`
        },
        about: {
            en: 'About...',
            fr: 'A propos...'
        },
    },
    Help: {
        title: {
            en: 'User manual',
            fr: 'Manuel utilisateur'
        },
    },
    About: {
        title: {
            en: 'About',
            fr: 'A propos'
        },
        subject: {
            en: `With "Simple Breath", increase your breathing capacity.
            Easily manage the timings of cycles for your breathing.
            Good practice !!!`,
            fr: `Avec "Respire Simple", augmente ta capacité respiratoire.
            Règle facilement les temps de cycles pour tes respirations.
            Bonne pratique !!!`
        },
        responsibility: {
            en: `The use of this application is the sole responsibility of the person who uses it.`,
            fr: `L'utilisation de cette application est de la responsabilité exclusive de la personne qui le fait.`
        },
        developer: {
            // en: 'Developer',
            // fr: 'Développeur'
            en: 'Made by abcdevelop',
            fr: 'Réalisé par abcdevelop'
        },
        contributors: {
            en: 'Contributors',
            fr: 'Contributeurs'
        },
    }

}

export const MESSAGES = {
    positiveNumber: {
        en: 'Please enter a positive number',
        fr: 'Entrez un nombre positif',
    },
    integerNumber: {
        en: 'Please enter a integer number',
        fr: 'Entrez un nombre entier',
    },
    confirmDeleteBreath: {
        en: 'Are you sure you want to delete this breath?',
        fr: 'Confirmez la suppression de cette respiration ?',
    },
    confirmDeleteCycle: {
        en: 'Are you sure you want to delete this cycle?',
        fr: 'Confirmez la suppression de ce cycle ?',
    },
    welcome: {
        en: 'Welcome !',
        fr: 'Bienvenue !',
    },
    languageCode: {
        en: '"Simple Breath" in english',
        fr: '"Respire Simple" en français',
    },
    cancelForm: {
        en: 'Cancel',
        fr: "Annuler",
    },

}