const utils = require("./utils.js");

function encode(args) {
    var ret = "";
    var odd = 0;
    var tmp;

    args = utils.check_argument(args.slice(1));
    if (args == null) {
        return;
    }
    if (utils.get_reversible(args[1]) == 0) {
        console.log("The matrice is not reversible");
        return;
    }
    if (args[0].length % 2 == 1) {
        args[0] += 'z';
        odd = 1;
    }
    for (var i = 0; i < args[0].length; i += 2) {
        tmp = utils.mul_matrice(args[1], args[0], i);
        ret += String.fromCharCode(tmp[0] + 97);
        ret += String.fromCharCode(tmp[1] + 97);
    }
    console.log(ret);
}


exports.encode = encode;

console.log("Load Chiffrement");