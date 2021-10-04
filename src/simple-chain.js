import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    let sortedChains = this.chain.filter((item) => item !== undefined);
    this.chain = sortedChains;

    if (
      position < 1 ||
      !Number.isInteger(position) ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain[position - 1] = undefined;

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let sortedChains = this.chain.filter((item) => item !== undefined);

    let str = "";

    sortedChains.forEach(function (item) {
      str += `( ${item} )~~`;
    });

    this.chain = [];

    return str.slice(0, -2);
  },
};
