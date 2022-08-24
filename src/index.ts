export class TowerBuilder {
  buildTower(numberOfFloors: number): string[] {
    let starTower: string[] = [];

    if (numberOfFloors === 1) {
      return ['*'];
    } else if (numberOfFloors > 1) {
      starTower.push('*');
      console.log(starTower);
      // we need to start at 0, because star tower array is indexed from 0
      // because of that we need to subtract 1 from the number of floors
      for (let floor = 0; floor < numberOfFloors - 1; floor++) {
        console.log(`Star tower before adding: ${starTower}`);
        starTower.push(starTower[floor] + '**');
        console.log(`Star tower after adding: ${starTower}`);
      }
      return starTower;
    } else {
      return [''];
    }
  }
}
