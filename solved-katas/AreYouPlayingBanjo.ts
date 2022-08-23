export class BanjoChecker {
  checkIfPlayingBanjo(name: string): string {
    return name[0] === 'r' || name[0] === 'R'
      ? `${name} plays banjo`
      : `${name} does not play banjo`;
  }
}
