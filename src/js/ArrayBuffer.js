export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let string = '';
    for (let i = 0; i < this.buffer.length; i += 1) {
      string += String.fromCharCode(this.buffer[i]);
    }
    return string;
  }
}
