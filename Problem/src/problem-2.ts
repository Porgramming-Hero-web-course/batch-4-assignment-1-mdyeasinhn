{
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


    const removeDuplicates = (input: number[]): number[] => {
        return [...new Set(input)];
    }

    // console.log(removeDuplicates([1, 3, 4, 2, 2, 3, 4, 5, 6,]));


    //
}