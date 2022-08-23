import { stringify } from 'querystring';

export class WordSpiner {
  reverseWord(str: string): string {
    return str.split('').reverse().join('');
  }

  spinWords(str: string): string {
    const words = str.split(' ');
    const reversedWords: string[] = [];
    words.forEach((word) => {
      const singleReversedWord =
        word.length > 4 ? this.reverseWord(word) : word;
      reversedWords.push(singleReversedWord);
    });

    return reversedWords.join(' ');
  }
}
