import ArrayBufferConverter from '../ArrayBuffer';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return bufferView;
  })(data);
}

test('should convert ArrayBuffer to string', () => {
  const ArrayBuffer = getBuffer();

  const received = new ArrayBufferConverter();
  received.load(ArrayBuffer);

  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(received.toString()).toBe(expected);
});
