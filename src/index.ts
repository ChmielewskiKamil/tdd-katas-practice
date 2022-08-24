export class TowerBuilder {
  buildTower(numberOfFloors: number): string[] {
    let starTower: string[] = [];

    if (numberOfFloors === 1) {
      return ['*'];
    } else if (numberOfFloors > 1) {
      starTower.push('*');
      let starsToAppend: string = '';
      for (let floor = 0; floor < numberOfFloors + 1; floor++) {
        starsToAppend += '*';
      }
      starTower.push(starsToAppend);
      return starTower;
    } else {
      return [''];
    }
  }
}
