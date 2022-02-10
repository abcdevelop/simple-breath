function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)))
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)))
}

// Usage:
// utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
// b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
function encodeUTF8(string) {
    return unescape(encodeURIComponent(string))
}

function decodeUTF8(string) {
    return decodeURIComponent(escape(string))
}

function dataTableSum(items, prop) {
    if (items === null) {
        return 0
    }

    return items.reduce((a, b) => {
        return b[prop] === null ? a : a + parseInt(b[prop])
    }, 0)
}

function diffPercent(value) {
    if ((!Array.isArray(value)) || (value.length != 2)) {
        return 0
    }
    const origine = Number(value[0])
    const reel = Number(value[1])
    if ((isNaN(origine)) || (isNaN(reel)) || reel == 0) {
        return 0
    }
    return Math.floor(((reel - origine) / reel) * 100)
}

function deepClone(obj) {
    if (!obj) {
        return null
    }
    return JSON.parse(JSON.stringify(obj))
}

function formatThousands(strValue) {
    let result = ''
    if (!strValue) {
        return '' + strValue
    }
    let letters = ('' + strValue).split('')
    letters = letters.reverse()
    letters.forEach((letter, index) => {
        if (index % 3 == 0) {
            result = ' ' + result
        }
        result = letter + result
    })
    return result.trimEnd()
}

var generateUUID = function () {

    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    // return function(){
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    // };

};

var generateKEY = function () {

    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    // return function(){
    return s4() + s4() + s4() + s4();
    // };

};


var isObjEmpty = function (obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// var isIphone = function () { return window.navigator.platform.toLowerCase().indexOf("iphone") > -1; }
// var isIpadPro = function () { return window.navigator.platform.toLowerCase().indexOf("macintel") > -1; }
// var isMacBookPro = function () { return window.navigator.platform.toLowerCase().indexOf("macintel") > -1; }
// var isApple = function () { return this.isIphone() || this.isIpadPro() || this.isMacBookPro(); }
// var isAndroid = function () { return window.navigator.platform.toLowerCase().indexOf("linux") > -1; }
// var isWindows = function () { return window.navigator.platform.toLowerCase().indexOf("win32") > -1; }

import { replaceDiacritics } from './replace-diacritics'

export default {
    dataTableSum,
    utf8_to_b64,
    b64_to_utf8,
    encodeUTF8,
    decodeUTF8,
    diffPercent,
    deepClone,
    formatThousands,
    generateUUID,
    isObjEmpty,
    generateKEY,
    // isIphone,
    // isIpadPro,
    // isMacBookPro,
    // isApple,
    // isAndroid,
    // isWindows,
    replaceDiacritics,
}


// formatNumberPDF(strValue, pad) {
//     let result = ''
//     if(!strValue){
//         result = '0'
//         return result.padStart(pad)
//     }
//     let letters = ('' + strValue).split('')
//     letters = letters.reverse()
//     letters.forEach((letter, index) => {
//         if (index % 3 == 0) {
//             result = ' ' + result
//         }
//         result = letter + result
//     })
//     return result.trimEnd().padStart(pad)
// },

// formatLines(str, len) {
//     let lines = []
//     if(!str){
//         return lines
//     }
//     let letters = ('' + str).split('')
//     let line = ''
//     letters.forEach((letter, index) => {
//         line += letter
//         if ((index+1) % len == 0) {
//             lines.push(line)
//             line=''
//         }
//     })
//     if (line.length){
//         lines.push(line)
//     }
//     return lines
// },
