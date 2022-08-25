import { ArrayRotator } from './index';

let arrayRotator: ArrayRotator;

describe('Rotate array', () => {
  beforeEach(() => {
    arrayRotator = new ArrayRotator();
  });

  it('exists', () => {
    expect(arrayRotator).toBeDefined();
  });
  it('should rotate [1] to [1]', () => {
    expect(arrayRotator.rotateLeft(1, [1])).toStrictEqual([1]);
  });
  it('should rotate [1,2] to [2,1] for 1 rotation', () => {
    expect(arrayRotator.rotateLeft(1, [1, 2])).toStrictEqual([2, 1]);
  });
});
