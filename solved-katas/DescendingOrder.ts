export class NumberRearanger {
  orderDescending(integer: number): number {
    const numbers: string[] = integer.toString().split('');
    const result: string = numbers.sort().reverse().join('');
    return parseInt(result);
  }
}
