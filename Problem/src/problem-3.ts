{
    //Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.


    function countWordOccurrences(sentence: string, word: string): number {
        const count = sentence.toLowerCase().split(word.toLowerCase());
        const result = count.length - 1;
        return result
    }

    
   // console.log(countWordOccurrences("TypeScript is great. typescript I love TypeScript!", "typescript"));


    //
}
