export const RULES = {
    // isRequired: v => !!v || 'Saisie obligatoire',
    isRequired: v => !!v || 'required',
    // isPositive: v => Number(v) >= 0 || 'Le nombre doit être positif ou null',
    isPositive: v => Number(v) >= 0 || 'number must be positive',


    
    // numberRequired: v => Number.isInteger(v) || 'Nombre obligatoire',
    // numberRequired: v => Number.isSafeInteger(v) || 'Nombre obligatoire',
    isMin1: v => v.length < 1 || 'Minimum 1 characters',
    // isDate: v => moment.isDate(moment(v,'DD/MM/AAAA')) || 'Date invalide',
    // isDateFormat: v => moment(String(v)).format('DDMMYYYY') || 'Date invalide',
    // isMax: (v,[max]) => {
    //     if(!v || v.length==0){
    //         return true
    //     }
    //     return v.length <= max || `Maximum ${max} characters`
    // },
    isMax300: v => {
        if (!v || v.length == 0) {
            return true
        }
        return v.length <= 300 || 'Conseillé 300 characters maximum'
    },
    isMax400: v => {
        if (!!v == null || v.length == 0) {
            return true
        }
        return v.length <= 400 || 'Conseillé 400 characters maximum'
    },
    isDateFormat: v => {
        // console.log(v)
        if (!v || v.length == 0) {
            return true
        }
        // return RegExp(/^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/).test(v) || 'Date invalide' // sans mask, 0 facultatif
        return RegExp(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/).test(v) || 'Date invalide' // sans mask
        // return RegExp(/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])\d{4}$/).test(v) || 'Date invalide' // avec mask  pour les slashs
    },
    isDateHeureFormat: v => {
        // console.log(v)
        if (!v) {
            return true
        }
        // return RegExp(/^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4} ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/).test(v) || 'Date heure invalide' // sans mask, 0 facultatif
        return RegExp(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4} ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/).test(v) || 'Date heure invalide' // sans mask
        // return RegExp(/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])\d{4}([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9])$/).test(v) || 'Date heure invalide' // avec mask  pour les slashs
    },
    isEmail: v => {
        if (!v || v.length == 0) {
            return true
        }
        return RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(v) || 'Adresse email invalide !'
    },
    isPositifStrict: v => Number(v) > 0 || 'Le nombre doit être strictement positif',
    isEntier: v => {
        const entier = Math.floor(v)
        return (v == entier) || `Le nombre doit être entier`
    },
    isPourcentage: v => {
        return Number(v) >= 0 && Number(v) <= 100 || `Le nombre doit être compris entre 0 et 100`
    },
    numberRule: (val) => {
        if (val < 0) return "Please enter a positive number";
        return "";
    },
    integerRule: (val) => {
        if (!Number.isInteger(val)) return "Please enter a integer number";
        return "";
    },
}
