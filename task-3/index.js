//Find the Smallest Element
let number = [3, 7, 1, 9, 2];

let Smallest = number[0];

for (let i = 1; i < number.length; i++) {
    if(number[i] < Smallest){
        Smallest = number[i];
    }
}
console.log(Smallest);