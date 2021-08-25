export default class ArrayBufferConverter {
  constructor() {
    this.buffer = undefined;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const typedArray = new Uint16Array(this.buffer);
    let result = '';

    for (let i = 0; i < typedArray.length; i += 1) {
      result += String.fromCharCode(typedArray[i]);
    }

    return result;
  }
}
