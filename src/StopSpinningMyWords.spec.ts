import { WordSpiner } from './StopSpinningMyWords';

describe('Spin the words', () => {
  it('exists', () => {
    let wordSpiner = new WordSpiner();
    expect(wordSpiner).toBeDefined();
  });
});
