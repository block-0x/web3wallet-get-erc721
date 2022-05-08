console.log("start")

const Moralis = require('moralis');
const web3 = require('web3');

async function initMorails() {
  const serverUrl = process.env.SERVER_URL;
  const appId = process.env.APP_ID;
  Moralis.start({ serverUrl, appId });
 }

 async function getNFTs() {
  initMorails();

    await Moralis.start({serverUrl, api, m});

    const testnetNFTs = Moralis.Web3API.account.getNFTs({ chain: process.env.CHAIN, address: process.env.ADDRESS });
    return testnetNFTs
 }

 async function getTransactions() {
  initMorails();

  const options = {
    chain: process.env.CHAIN,
    address: process.env.ADDRESS,
    order: process.env.ORDER,
    from_block: process.env.FROM_BLOCK,
  };
    await Moralis.start({serverUrl, api, m});

    const testnetTransactions = Moralis.Web3API.account.getTransactions({ options });
    return testnetTransactions
 }

 console.log("getNFTs", getNFTs())
 console.log("getTransactions", getTransactions())
