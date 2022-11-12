// Задание 1
let a = prompt();
if (a > 0){
    let GGG = function () {
        console.log("!");
    }
    GGG();
} else {
    let GGG = function () {
        console.log("!!");
    }
    GGG();
}

// Задание 2
let conello = [];
for (i = 0; i < 10; i++){
    conello[i] = 'x';
}
console.log(conello)

// Задание 3
function bivol() {
    let i = 1;
    return function () {
        return i++
    }
}

let func = bivol();
console.log(func())
console.log(func())
console.log(func())
console.log(func())