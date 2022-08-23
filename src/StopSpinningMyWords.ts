import { stringify } from 'querystring';

export class WordSpiner {
  reverseWord(str: string): string {
    return str.split('').reverse().join('');
  }

  spinWords(str: string): string {
    return str.length > 4 ? this.reverseWord(str) : str;
  }
}
