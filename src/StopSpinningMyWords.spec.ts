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
  beforeEach(() => {
    wordSpiner = new WordSpiner();
  });

  it("should revert 'another warriors' to 'rehtona sroirraw'", () => {
    expect(wordSpiner.spinWords('another warriors')).toBe('rehtona sroirraw');
  });

  it("should revert 'Hey fellow warriors' to 'Hey wollef sroirraw'", () => {
    expect(wordSpiner.spinWords('Hey fellow warriors')).toBe(
      'Hey wollef sroirraw',
    );
  });
  it("should revert 'This is a test' to 'This is a test'", () => {
    expect(wordSpiner.spinWords('This is a test')).toBe('This is a test');
  });

  it("should revert 'This is another test' to 'This is rehtona test'", () => {
    expect(wordSpiner.spinWords('This is another test')).toBe(
      'This is rehtona test',
    );
  });
});
