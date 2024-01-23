require("@nomicfoundation/hardhat-toolbox");

const { INFURA_API_KEY, WALLET_PRIVATE_KEY } = require("./secret");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/"
        },
        goerli: {
            url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
            chainId: 5,
            accounts: [WALLET_PRIVATE_KEY]
        }
    },
    solidity: {
        version: "0.8.20",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
};
