export class ArrayRotator {
  rotateLeft(numberOfRotations: number, elements: number[]): number[] {
    let elementToMove = elements.shift();
    if (elementToMove !== undefined) {
      elements.push(elementToMove);
      return elements;
    }
    return elements;
  }
}
