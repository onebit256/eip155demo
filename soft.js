var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/d7650f9366a3403287ecac9945decf3f'));

async function main(){
console.log(await web3.eth.getTransaction('0x4b420c328f11bbf4cc0043af7bd8b170026e97ef4261e93354bf080c2d04ea6d'));
//0x26
console.log(await web3.eth.getTransaction('0x79fbfd4daa09f7947595f6c1e3d8e78b4032cf64d105292b10f61ebb067d2bcf'));
//0x1b
}
main()