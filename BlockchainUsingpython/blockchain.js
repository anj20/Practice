import { Block } from "./block.js";
import { cryptoHash } from "./crypto-hash.js";
class Blockchain {
  constructor() {
    this.chain = [Block.genesis];
  }
  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }
  replaceChain(chain) {
    if (chain.length <= this.chain.length) {
      console.error("The incoming chain must be longer");
      return;
    }
    if (!Blockchain.isValidChain(chain)) {
      console.error("The incoming chain must be valid");
      return;
    }
    this.chain = chain;
  }
  c;
  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis))
      return false;
    for (let i = 1; i < chain.length; i++) {
      const { timestamp, previousHash, hash, data } = chain[i];
      const actualLastHash = chain[i - 1].hash;
      if (previousHash !== actualLastHash) return false;

      const validatedHash = cryptoHash(timestamp, previousHash, data);
      if (hash !== validatedHash) return false;
    }
    return true;
  }
}
const blockchain = new Blockchain();
blockchain.addBlock({ data: "initial" });
console.log("blockchain", blockchain);
const check = Blockchain.isValidChain(blockchain.chain);
console.log("check", check);
// export { Blockchain };
