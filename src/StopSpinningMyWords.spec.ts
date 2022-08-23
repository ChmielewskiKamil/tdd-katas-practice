import { WordSpiner } from './StopSpinningMyWords';

let wordSpiner: WordSpiner;
describe('Spin single word', () => {
  beforeEach(() => {
    wordSpiner = new WordSpiner();
  });

  it('exists', () => {
    expect(wordSpiner).toBeDefined();
  });

  it("should revert single word 'warriors' to 'sroirraw'", () => {
    expect(wordSpiner.spinWords('warriors')).toBe('sroirraw');
  });

  it("should revert 'another' to 'rehtona'", () => {
    expect(wordSpiner.spinWords('another')).toBe('rehtona');
  });

  it('should only revert words longer than 4 letters', () => {
    expect(wordSpiner.spinWords('is')).toBe('is');
  });
});

describe('Spin multiple words', () => {
  it("should revert 'another warriors' to 'rehtona sroirraw'", () => {
    wordSpiner = new WordSpiner();
    expect(wordSpiner.spinWords('another warriors')).toBe('rehtona sroirraw');
  });
});
