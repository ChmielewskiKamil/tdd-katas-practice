import { TowerBuilder } from './index';

describe('Tower builder', () => {
  it('exists', () => {
    let towerBuilder = new TowerBuilder();
    expect(towerBuilder).toBeDefined;
  });

  it("should return ['*'] when input is 1", () => {
    let towerBuilder = new TowerBuilder();
    expect(towerBuilder.buildTower(1)).toStrictEqual(['*']);
  });
});
