

if (1 === 1) {
    console.log("Its True!");

}

let rating = 211
    ;


if (rating === 3) {
    console.log(`you are not a superstar!`);
}

// if (rating >= 2) {
//     console.log(`Why are you an over achiever?`);
// }

else if (rating === 2) {
    console.log(`You meet expectations!`);
}

else if (rating === 1) {
    console.log(`Needs Improvement!`);
}

else {
    console.log(`invalid rating`);
}


// if (num % 2 !== 0) {
//     console.log(`odd number!`);
// }

// const fruits = [`apple`, `banana`, `orange`, `grape`, `pear`];

// for (const a of fruits) {
//     console.log(a);
// }   


let highScore = 1430;
let userScore = 1200;

if (userScore <= highScore) {
    console.log(`Congrats, you have the new high score  of ${userScore}`);
    highScore = userScore;
}

else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}

let password = 'hello kitty';
//  NESTING CONDITIONALS
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password!');
    }
    else {
        console.log('Password is long enough, but cannot contain spaces');
    }
}
else {
    console.log('Password must be longer!');
}

// TRUTHY AND FALSY

let mystery = 6;

if (mystery) {
    console.log('TRUTHY!');
}
else {
    console.log('FALSY!');
}

let loggedInUser = 'thomas123';

if (loggedInUser) {
    console.log('You are logged in!');
}
else {
    console.log('You must be logged in to continue!');
}

// LOGICAL OPERATORS && || !

// 1 <= 4 && 'a' === 'a'; // true
// 1 <= 4 && 'a' === 'b'; // false         
// 1 >= 4 || 'a' === 'a'; // true
// 1 >= 4 || 'a' === 'b'; // false
// !(1 === 1); // false
// !(1 === 2); // true
// !(true); // false
// !(false); // true   
// !(1 < 2); // false

// and && (both sides must be true)
let passWord = 'chickenGal e';

if (passWord.length >= 8 && passWord.indexOf(' ') === -1) {
    console.log('Valid Password');
}
else {
    console.log('Invalid Password');
}

let num = 30;

if (num >= 1 && num <= 10) {
    console.log('Number is between 1 and 10');
}
else {
    console.log('Please guess a number between 1 and 10')
}

// or || (one side must be true)

let age = 76;

if (age < 6 || age >= 65) {
    console.log('You get in for free!');
}

else {
    console.log('That will be $10, please');
}

let color = "violet";

if (color === 'purple' || color === 'lilac' || color === 'violet') {
    console.log('Great Choice!');
}

// Not !(returns the opposite boolean value of the value it is placed before)

let loggedINUser;

if (!loggedINUser) {
    console.log('Get Out Of Here!');
}

let flavor = 'grape';

if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log('We dont have that flavor, sorry!');
}

if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('We dont have that flavor, sorry!');
}