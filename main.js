const utils = require("./src/utils.js");
const encode = require("./src/chiffrement.js");
const decode = require("./src/dechiffrement.js");

var args = process.argv.slice(2);

function main() {
    utils.init(args);
    if (args[0] == "encode") {
        console.log("Encode function in progress");
    } else if (args[0] == "decode") {
        console.log("Decode function in progress");
    } else {
        utils.help();
    }
}

main();