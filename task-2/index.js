//Find the Largest Element

let num = [3, 7, 1, 9, 2];

let max = num[0];

for (let i = 1; i < num.length; i++) {
    if(num[i] > max){
        max = num[i];
    }
}
console.log(max);

