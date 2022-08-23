import { NumberRearanger } from './DescendingOrder';

let numberRearanger: NumberRearanger;

describe('Descending order', () => {
  beforeEach(() => {
    numberRearanger = new NumberRearanger();
  });

  it('exists', () => {
    expect(numberRearanger).toBeDefined();
  });

  it("should rearange digits from '42145' to '54421'", () => {
    expect(numberRearanger.orderDescending(42145)).toBe(54421);
  });

  it("should rearange digits from '145263' to '654321'", () => {
    expect(numberRearanger.orderDescending(145263)).toBe(654321);
  });

  it("should rearange digits from '123456789' to '987654321'", () => {
    expect(numberRearanger.orderDescending(123456789)).toBe(987654321);
  });
});
