import { BanjoChecker } from './AreYouPlayingBanjo';

describe('banjo player check', () => {
  it('exists', () => {
    let banjoChecker = new BanjoChecker();
    expect(banjoChecker).toBeDefined();
  });
  it("should be able to tell if 'rob' plays banjo", () => {
    let banjoChecker = new BanjoChecker();
    expect(banjoChecker.checkIfPlayingBanjo('rob')).toBeTruthy();
  });
});
