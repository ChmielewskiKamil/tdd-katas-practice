import { BanjoChecker } from './AreYouPlayingBanjo';

describe('banjo player check', () => {
  it('exists', () => {
    let banjoChecker = new BanjoChecker();
    expect(banjoChecker).toBeDefined();
  });
});
