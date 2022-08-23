import { WordSpiner } from './StopSpinningMyWords';

describe('Spin the words', () => {
  it('exists', () => {
    let wordSpiner = new WordSpiner();
    expect(wordSpiner).toBeDefined();
  });

  it('should revert single word', () => {
    let wordSpiner = new WordSpiner();
    expect(wordSpiner.spinWords('warriors')).toBe('sroirraw');
  });
});
