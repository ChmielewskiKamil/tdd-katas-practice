export class BanjoChecker {
  checkIfPlayingBanjo(name: string): boolean {
    return name[0] === 'r' || name[0] === 'R' ? true : false;
  }
}
