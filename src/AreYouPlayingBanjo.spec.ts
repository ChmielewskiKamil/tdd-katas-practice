import { BanjoChecker } from './AreYouPlayingBanjo';

let banjoChecker: BanjoChecker;
beforeEach(() => {
  banjoChecker = new BanjoChecker();
});

describe('banjo player check', () => {
  it('exists', () => {
    expect(banjoChecker).toBeDefined();
  });

  it("should be able to tell that 'rob' plays banjo", () => {
    expect(banjoChecker.checkIfPlayingBanjo('rob')).toBeTruthy();
  });

  it("should be able to tell that 'bob' doesn't play banjo", () => {
    expect(banjoChecker.checkIfPlayingBanjo('bob')).toBeFalsy();
  });
});
