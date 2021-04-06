
const get_ascii = 97;

function get_reversible(array) {
    return (array.charCodeAt(0) - 97) * (array.charCodeAt(3) - 97) - (array.charCodeAt(1) - 97) * (array.charCodeAt(2) - 97);
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
    console.log(array, nb);
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

function xgcd(a, b) { 

    if (b == 0) {
      return [1, 0, a];
    }
 
    temp = xgcd(b, a % b);
    x = temp[0];
    y = temp[1];
    d = temp[2];
    return [y, x-y*Math.floor(a/b), d];
  }

function inverser_modulaire_determinant(array) {
    var nb = (array[0]) * (array[3]) - (array[1]) * (array[2]);
    //console.log("Test", xgcd(nb, 26));
    //nb = nb % 26;
    var ret = xgcd(nb, 26);
    if (ret[2] != 1) {
        console.log("The Key Matrice isn't reversible");
        return (0);
    }
    return ret[0];
}

function reverse_matrice(array) {
    var ret = new Array;
    var tmp;

    //console.log(get_reversible(array));
    ret.push((array.charCodeAt(3) - 97) )//* get_reversible(array) % 26);
    ret.push(((array.charCodeAt(1) - 97) * -1) )//* get_reversible(array) % 26);
    ret.push(((array.charCodeAt(2) - 97) * -1) )//* get_reversible(array) % 26);
    ret.push((array.charCodeAt(0) - 97) )//* get_reversible(array) % 26);
    //console.log(inverser_modulaire_determinant(ret));
    tmp = inverser_modulaire_determinant(ret);
    if (tmp == 0)
        return new Array;
    for (var i = 0; i < 4; i++) {
        if (ret[i] < 0)
            ret[i] = ret[i] + 26;
        ret[i] = ret[i] * tmp % 26;
    }
    //console.log("Reverse Matrice", ret);
    return ret;
}   

/*
function reverse_mul_matrice(array, tab, i) {
    var ret = new Array;
    console.log(((array.charCodeAt(0) - 97) * (tab.charCodeAt(i) - 97) + ((array.charCodeAt(1) - 97) * -1) * (tab.charCodeAt(i + 1) - 97)) % 26);
    console.log((((array.charCodeAt(2) - 97) * -1) * (tab.charCodeAt(i) - 97) + (array.charCodeAt(3) - 97) * (tab.charCodeAt(i + 1) - 97)) % 26);
    ret.push(((array.charCodeAt(0) - 97) * (tab.charCodeAt(i) - 97) + ((array.charCodeAt(1) - 97) * -1) * (tab.charCodeAt(i + 1) - 97)) % 26);
    ret.push((((array.charCodeAt(2) - 97) * -1) * (tab.charCodeAt(i) - 97) + (array.charCodeAt(3) - 97) * (tab.charCodeAt(i + 1) - 97)) % 26);
    return ret;
}
*/

function reverse_mul_matrice(array, tab, i) {
    var ret = new Array;
    
    //console.log(tab[i] + tab[i+1]);
    //console.log("---> " + (((array[0]) * (tab.charCodeAt(i) - 97) + ((array[1])) * (tab.charCodeAt(i + 1) - 97)) % 26));
    ret.push(((array[0]) * (tab.charCodeAt(i) - 97) + ((array[1])) * (tab.charCodeAt(i + 1) - 97)) % 26);
    ret.push((((array[2])) * (tab.charCodeAt(i) - 97) + (array[3]) * (tab.charCodeAt(i + 1) - 97)) % 26);
    return ret;
}

exports.create_matrice = create_matrice;
exports.init = init;
exports.mul_matrice = mul_matrice;
exports.get_ascii = get_ascii;
exports.check_argument = check_argument;
exports.get_reversible = get_reversible;
exports.reverse_matrice = reverse_matrice;
exports.reverse_mul_matrice = reverse_mul_matrice;

console.log("Load Utilitaire");