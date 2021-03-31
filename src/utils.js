const math = require("mathjs");

const get_ascii = 97;

function check_if_reversible(array) {
    if ((array.charCodeAt(0) - 97) * (array.charCodeAt(3) - 97) - (array.charCodeAt(1) - 97) * (array.charCodeAt(2) - 97) == 0) {
        console.log("Matrice key no reversible");
        return 84;
    }
    return 0;
}

function check_argument(array) {
    if (array.length != 2) {
        console.log(array.length);
        return null;
    }
    array[0] = array[0].toLowerCase();
    array[1] = array[1].toLowerCase();
    if (only_letter(array[0]) != 0 ||
    only_letter(array[1]) != 0) {
        return null;
    }
    return array;
}

function only_letter(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] < 97 || str[i] > 122)
            return 84;
    }
    return 0;
}

function create_matrice(array, nb) {
    console.log(array, number);
}

function mul_matrice(array, tab, i) {
    var ret = new Array;
    
    ret.push(((array.charCodeAt(0) - 97) * (tab.charCodeAt(i) - 97) + (array.charCodeAt(1) - 97) * (tab.charCodeAt(i + 1) - 97)) % 26);
    ret.push(((array.charCodeAt(2) - 97) * (tab.charCodeAt(i) - 97) + (array.charCodeAt(3) - 97) * (tab.charCodeAt(i + 1) - 97)) % 26);
    return ret;
}

function init(args) {
    console.log("IMPORTANT : This program is not actually fonctional, the author (me) choose to test some math lib before start to code the function Encode");
    console.log("My args = ", args);
}

exports.create_matrice = create_matrice;
exports.init = init;
exports.mul_matrice = mul_matrice;
exports.get_ascii = get_ascii;
exports.check_argument = check_argument;
exports.check_if_reversible = check_if_reversible;

console.log("Load Utilitaire");