/* Practice: Function Arguments
The learning objective of this exercise is to practice defining and using function arguments.

Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// I want to use a question mark
addExcitement(sentence, "?") */

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, specialCharacter) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`. Otherwise, just concatenate the word itself.
         */
        if (i % 3 == 2) {
          buildMeUp += `${theWordArray[i]}` + `${specialCharacter} `
        } else {
          buildMeUp += `${theWordArray[i]} `
        }
        console.log(buildMeUp)
    }
}

addExcitement(sentence, "*")