import { cryptoHash } from "./crypto-hash.js";
import { GenesisBlock } from "./config.js";
import exp from "constants";
class Block {
  constructor({ hash, timestamp, data, previousHash = "" }) {
    this.hash = hash;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
  }
  static get genesis() {
    return new Block(GenesisBlock);
  }
  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const previousHash = lastBlock.hash;
    return new this({
      timestamp,
      data,
      previousHash,
      hash: cryptoHash(timestamp, data, previousHash),
    });
  }
}
const block = new Block({
  timestamp: "01/01/01",
  data: "foo-data",
  previousHash: "foo-hash",
  hash: "foo-hash",
});

export { Block };
