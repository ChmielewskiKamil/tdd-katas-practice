export class ArrayRotator {
  rotateLeft(numberOfRotations: number, elements: number[]): number[] {
    let rotatedElements: number[] = [];
    elements.forEach(() => {
      let elementToMove = elements.shift();
      if (elementToMove !== undefined) {
        elements.push(elementToMove);
        console.log(elements);
        rotatedElements = elements;
      } else {
        return elements;
      }
    });
    return rotatedElements;
  }
}
