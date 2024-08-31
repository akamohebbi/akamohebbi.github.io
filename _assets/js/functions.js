/*
    random number genetator
*/

function randomIntGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}