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
    expect(banjoChecker.checkIfPlayingBanjo('rob')).toBe('rob plays banjo');
  });

  it("should be able to tell that 'bob' doesn't play banjo", () => {
    expect(banjoChecker.checkIfPlayingBanjo('bob')).toBe(
      'bob does not play banjo',
    );
  });

  it("should know that the casing doesn't make a difference", () => {
    expect(banjoChecker.checkIfPlayingBanjo('Rob')).toBe('Rob plays banjo');
  });
});
