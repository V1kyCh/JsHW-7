const array1 = [1, 2, 3];
array1[1] = 10;
console.log(array1);

const array2 = ["1", "2", "3"];
array2[3] = "4";
console.log(array2);

const array3 = [5, 6, 2, 7, 8];
let sum = 0;
for (let i = 0; i < array3.length; i++) {
  sum += array3[i];
}
console.log(sum);

const array4 = [1, 2, 3, 4, 5];
for (let number of array4) {
  console.log(number);
}

const array5 = ["Hello world!", "Hi", "Bye", "Bye Bye)", "See you!"];
for (let string of array5) {
  if (string.length > 5) {
    console.log(string);
  }
}

const array6 = [12, 25, 3, 435, 75, 68, 139, 8, 95, 11];
let biggestNumber = array6[0];
for (let number of array6) {
    if (biggestNumber < number) {
        biggestNumber = number
    }
}
console.log(biggestNumber);

const array7 = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
for (let number of array7) {
    if (number % 2 === 0) {
        console.log(number)
    }
}