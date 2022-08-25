import { ArrayRotator } from './index';

describe('Rotate array', () => {
  it('exists', () => {
    let arrayRotator = new ArrayRotator();
    expect(arrayRotator).toBeDefined();
  });
  it('should rotate [1] to [1]', () => {
    let arrayRotator = new ArrayRotator();
    expect(arrayRotator.rotateLeft(1, 1, 1)).toBe([1]);
  });
});
