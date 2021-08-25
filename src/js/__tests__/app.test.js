import getBuffer from '../getbuffer';
import ArrayBufferConverter from '../app';

test('Метод переводит данные в строку', () => {
  const buffer = getBuffer();

  const received = new ArrayBufferConverter();

  received.load(buffer);
  const result = received.toString();

  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(result).toBe(expected);
});
