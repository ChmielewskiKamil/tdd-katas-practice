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
    expect(arrayRotator.rotateLeft(1, 1, [1])).toStrictEqual([1]);
  });
  it('should rotate [1,2] to [2,1] for 1 rotation', () => {
    expect(arrayRotator.rotateLeft(2, 1, [1, 2])).toStrictEqual([2, 1]);
  });

  it('should rotate [1,2,3] to [3,1,2] for 1 rotation', () => {
    expect(arrayRotator.rotateLeft(3, 1, [1, 2, 3])).toStrictEqual([3, 1, 2]);
  });
});
