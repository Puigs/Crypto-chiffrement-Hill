const encode = require("./src/chiffrement.js");
const decode = require("./src/dechiffrement.js");

var args = process.argv.slice(2);

function help() {
    console.log("This programme encode/decode text with the Hill cipher algorythme");
    console.log("To use this programme you have to put argument (encode/decode) (some text) (keyString)");
}

function main() {
    if (args[0] == "encode") {
        encode.encode(args);
    } else if (args[0] == "decode") {
        decode.decode(args);
    } else {
        help();
    }
}

main();