require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant gloom clock orange truth'; 
let testAccounts = [
"0xc944b6bf7d9cfce11b65e8b1a1f2e3d81dc8b969240cf6fbdb1a4233e619d562",
"0xc54f0b711fbfbb53042973956fd604f229e784ee20683077447cfffd1940de9a",
"0xb07074a53d792698844d2b03526318415592783a85ad50cf3859308b3ae1b42b",
"0xf17e7dc3a20f5843d1a36a46339ef44f5a459c5e89180c99377bc1ecd1a20628",
"0x3ae6d34546b522127e88f776182c41228403597d13871968f8e8fcdd2c08a2fe",
"0xaffed86a9b378562f48ccbbe0590461d538e70010389c711116a71c6b2ae0d21",
"0xf0806dc94769c3b2fc07cedd791e9ad214beeaa9099003c41837ffe85eb2dd20",
"0x0bf35e7f5772b87025d7a63b2ff6982febea789b96894597bad22163b4908927",
"0x7d46db8875f333ee9c2e82b65bcc36ab04f2a761644a11d7e966818666b54aec",
"0x4522bb9437a57cc9f90066bb29932aa75013ccbe454d85a9c457bab55b81f515"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


