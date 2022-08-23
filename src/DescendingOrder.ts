export class NumberRearanger {
  orderDescending(integer: number): number {
    const numbers: string[] = integer.toString().split('');
    numbers.forEach((number) => {
      parseInt(number);
    });
    const result = numbers.sort().reverse().join('');
    return parseInt(result);
  }
}
