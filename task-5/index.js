//Count Occurrences of an Element
let arr = [1, 2, 2, 3, 2, 4, 5];
let n = arr.length;
let sum = 0;

for(let i=0; i<n; i++){
    if(arr[i]<=arr[i+1]){
        console.log(arr[i]);
    }
}