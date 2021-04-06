console.log("Load Dechiffrement");
const utils = require("./utils.js");

function decode(args) {
    var ret = "";

    args = utils.check_argument(args.slice(1));
    if (args == null) {
        return;
    }
    args[1] = utils.reverse_matrice(args[1]);
    if (args[1].length == 0)
        return;
    for (var i = 0; i < args[0].length; i += 2) {
        tmp = utils.reverse_mul_matrice(args[1], args[0], i);
        if (tmp[0] < 0)
            tmp[0] = tmp[0] * -1;
        if (tmp[1] < 0)
            tmp[1] = tmp[1] * -1;
        ret += String.fromCharCode(tmp[0] + 97);
        ret += String.fromCharCode(tmp[1] + 97);
    }
    console.log(ret);
}

exports.decode = decode;