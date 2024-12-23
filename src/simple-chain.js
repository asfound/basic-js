const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.links.push("(  )");
    } else if (value === null) {
      this.links.push("( null )");
    } else {
      this.links.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      this.links.length === 0 ||
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.links.length
    ) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    const chain = this.links.join("~~");
    this.links = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
