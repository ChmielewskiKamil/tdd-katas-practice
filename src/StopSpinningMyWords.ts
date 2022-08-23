import { stringify } from 'querystring';

export class WordSpiner {
  reverseWord(str: string): string {
    return str.split('').reverse().join('');
  }

  spinWords(str: string): string {
    let words = str.split(' ');
    let reversedWords: string[] = [];
    words.forEach((word) => {
      let singleReversedWord = word.length > 4 ? this.reverseWord(word) : word;
      reversedWords.push(singleReversedWord);
    });

    return reversedWords.join(' ');
  }
}
