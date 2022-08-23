export class BanjoChecker {
  checkIfPlayingBanjo(name: string): boolean {
    return name[0] == 'r' ? true : false;
  }
}
