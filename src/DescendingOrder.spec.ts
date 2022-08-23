import { NumberRearanger } from './DescendingOrder';

describe('Descending order', () => {
  it('exists', () => {
    let numberRearanger = new NumberRearanger();
    expect(numberRearanger).toBeDefined();
  });

  it("should rearange digits from '42145' to '54421'", () => {
    let numberRearanger = new NumberRearanger();
    expect(numberRearanger.orderDescending(42145)).toBe(54421);
  });
});
