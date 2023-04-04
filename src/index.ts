import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function minimumBribes(peopleArray: number[]): void {
    let isTooChaotic = false;
    let bribeCount = 0;
    for (let i = 0; i <= peopleArray.length; i++) {
        let innerCounter = 1;
        while (peopleArray[i] > peopleArray[i + innerCounter]) {
            if (innerCounter >= 3) {
                isTooChaotic = true;
            }

            innerCounter++;
            bribeCount++;
        }
    }

    let output = isTooChaotic ? 'Too chaotic' : bribeCount;
    console.log(output);
}

consoleStart();

minimumBribes([2, 1, 5, 3, 4]); // 3
minimumBribes([2, 5, 1, 3, 4]); // too chaotic
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]); // 4
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // 7

//validateFxn(minimumBribes([2, 1, 5, 3, 4]), 3);
//validateFxn(minimumBribes([2, 5, 1, 3, 4]), 'Too chaotic');

consoleEnd();
consoleBuffer();

export {};
