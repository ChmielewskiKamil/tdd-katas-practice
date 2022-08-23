import { stringify } from 'querystring';

export class WordSpiner {
  spinWords(str: string): string {
    return str.split('').reverse().join('');
  }
}
