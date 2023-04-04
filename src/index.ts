import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function minimumBribes(peopleArray: number[]): number | string {
    let bribeCount = 0;
    for (let i = 0; i < peopleArray.length; i++) {
        if (
            i < peopleArray.length + 1 &&
            peopleArray[i] === peopleArray[i] + 1
        ) {
            //skip
        } else if (peopleArray[i] > peopleArray[i + 1]) {
            // you have a bribe, but how much?

            if (peopleArray[i] > peopleArray[i + 3]) {
                //too many bribes
                return 'Too chaotic';
            } else if (peopleArray[i] > peopleArray[i + 2]) {
                bribeCount++;
            }
            bribeCount++;
        }
    }

    return bribeCount;
}

consoleStart();

validateFxn(minimumBribes([2, 1, 5, 3, 4]), 3);
validateFxn(minimumBribes([2, 5, 1, 3, 4]), 'Too chaotic');

consoleEnd();
consoleBuffer();

export {};
