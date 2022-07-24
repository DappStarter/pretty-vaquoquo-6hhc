require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name robot magic concert hunt merry forward gate'; 
let testAccounts = [
"0xe7a4ae194c0e29a9c05efc0a770092b8f2c76393c27436b5b08bd5c27f9d72d2",
"0xb5d64e5243072ea3aad5f6d7bd23082a61c4a71555db475562ee6e4d60ebf5d0",
"0x3d78faceee0760e936140e952bdc36c481227e0ffbd18f3c61f286d1dc022a74",
"0xd632d226866c43260dae1acc0fc61a10d9e30590b9399a072ec5323ebf66ab60",
"0xa42236c3efa000169005b5123f12cbb520a17ac8ce5578d7377b614fc02273c5",
"0x3871f709d4eb86866d7f410b11aefa0c2d44a049b4ddd891feaa53ec04496a4b",
"0x9f6d61b6fcb6ccd3ec8b01f5bcceba6def51e5f6e7ab4da5769938be3466ac69",
"0x9a0eeb690aee97045909542565b44f18fd2e903abfcf36965452067c6ecab9bf",
"0xc20c08c8e379ea04020ba6e3c3a95f851a7524244cb9df0e49f44842102bfcd6",
"0xf0e0558f7b79dc83f0ba974456f74dfa5b138a092a9c47135abe27ac7ca3278d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

