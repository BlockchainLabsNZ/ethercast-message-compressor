import { parseMessage, createMessage } from '../src/message-compressor'

describe('message-compressor#parseMessage,#createMessage', () => {
  ;[
    { abc: '123' },
    'abc',
    123,
    { abc: { def: { ghi: 123, red: 'blue' } } }
  ].forEach(example => {
    it(`reversible for example: ${JSON.stringify(example)}`, () => {
      expect(parseMessage(createMessage(example))).toEqual(example)
    })
  })
})
