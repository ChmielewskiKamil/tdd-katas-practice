import { ArrayRotator } from './index';

describe('Rotate array', () => {
  it('exists', () => {
    let arrayRotator = new ArrayRotator();
    expect(arrayRotator).toBeDefined();
  });
  it('should rotate [1] to [1]', () => {
    let arrayRotator = new ArrayRotator();
    expect(arrayRotator.rotateLeft(1, [1])).toStrictEqual([1]);
  });
  it('should rotate [1,2] to [2,1] for 1 rotation', () => {
    let arrayRotator = new ArrayRotator();
    expect(arrayRotator.rotateLeft(1, [1, 2])).toStrictEqual([2, 1]);
  });
});
