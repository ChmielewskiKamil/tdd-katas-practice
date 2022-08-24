import { TowerBuilder } from './index';

let towerBuilder: TowerBuilder;

describe('Tower builder', () => {
  beforeEach(() => {
    towerBuilder = new TowerBuilder();
  });

  it('exists', () => {
    expect(towerBuilder).toBeDefined;
  });

  it("should return ['*'] when input is 1", () => {
    expect(towerBuilder.buildTower(1)).toStrictEqual(['*']);
  });

  it("should return ['*', '***'] when input is 2", () => {
    expect(towerBuilder.buildTower(2)).toStrictEqual(['*', '***']);
  });

  it("should return ['*', '***', '*****'] when input is 3", () => {
    expect(towerBuilder.buildTower(3)).toStrictEqual(['*', '***', '*****']);
  });
});
