/*let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function counter(array) {
    let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    console.log(sum)    
    }
}
(counter(numbers))
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+ 1) + min)
}

// let secretNumber = randomInRange()

let checkGuess = (num, secretNumber) => {
    if (num > secretNumber) {
        console.log("Too high")
        return false
    }
    if (num < secretNumber) {
        console.log("Too low")
        return false
    }
    if (num === secretNumber) {
        console.log("Correct!")
        return true
    }
}

let askGuess = (secretNumber) => {
    rl.question("Enter a guess:", (guess) => {
        let number = Number(guess)
        let answer = checkGuess(number, secretNumber)
        if (answer === false) {
             return askGuess(secretNumber)
        } if (answer === true) {
            console.log('You Win!')
            rl.close()
        }

    })
}

let askRange = () => {
    rl.question("Enter a max number:", max => {

    rl.question("Enter a min number:", min => {
            console.log("I'm thinking of a number between", max, "and", min + "...")
            // rl.close()
            let maxNumber = Number(max)
            let minNumber = Number(min)
            let secretNumber = randomInRange(minNumber, maxNumber)
            askGuess(secretNumber)
        })
    })

}

askRange()
