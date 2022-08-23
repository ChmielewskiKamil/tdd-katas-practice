import { stringify } from 'querystring';

export class WordSpiner {
  spinWords(str: string): string {
    return str.length > 4 ? str.split('').reverse().join('') : str;
  }
}
