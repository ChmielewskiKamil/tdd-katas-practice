export class TowerBuilder {
  buildTower(numberOfFloors: number): string[] {
    const starTower: string[] = [];
    if (numberOfFloors === 1) {
      return ['*'];
    } else if (numberOfFloors > 1) {
      starTower.push('*');
      // we need to start at 0, because star tower array is indexed from 0
      // because of that we need to subtract 1 from the number of floors
      let spacesToAdd: string = this.addSpacesToEachSide(numberOfFloors - 1);
      starTower[0] = spacesToAdd + '*' + spacesToAdd;

      for (let floor = 0; floor < numberOfFloors - 1; floor++) {
        spacesToAdd = this.addSpacesToEachSide(numberOfFloors - 2 - floor);
        starTower.push(
          spacesToAdd +
            starTower[floor].trimEnd().trimStart() +
            '**' +
            spacesToAdd,
        );
      }
      return starTower;
    } else {
      return [''];
    }
  }
  addSpacesToEachSide(amountOfSpacesToAdd: number): string {
    let spacesToAdd = '';
    for (let space = 0; space < amountOfSpacesToAdd; space++) {
      spacesToAdd += ' ';
    }
    return spacesToAdd;
  }
}
