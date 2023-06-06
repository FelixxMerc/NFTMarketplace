import SimpleCrypto from "simple-crypto-js";
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const etheraw = "";
const hhraw = "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(etheraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

/*
Hardhat Testnet 
*/
export var hhresell = "0x663F3ad617193148711d28f5334eE4Ed07016602";
export var hhnftcol =  "0x8464135c8F25Da09e49BC8782676a84730C318bC";
var hhrpc = "http://127.0.0.1:8545/";


/*
Global Parameters
*/

export var mainnet = hhrpc