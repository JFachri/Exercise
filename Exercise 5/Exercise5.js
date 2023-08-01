//soal pertama
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    return [max, min, sum/arr.length];
} 

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const Sort = maxMinAvg(arr);
console.log(Sort);

function wSort(arr) {
    const sortArr = arr.sort((a, b) => a - b);
    const length = sortArr.length;
  
    return `{ low: ${sortArr[0]}, hight: ${sortArr[length - 1]}, average: ${sortArr.reduce((a, c) => a + c, 0) / length} }`
}

const withSort = wSort(arr);
console.log(withSort);

//soal kedua
function concatArr(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        str += `and ${arr[i]}`
      } else {
        str += `${arr[i]}, `
      }
    }
    return str
  }
  
console.log(concatArr(['saya', 'suka', 'bola', 'futsal']));

//soal ketiga
string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Jusuf Fachri sedang Belajar"));

//soal keempat
const array1 = [8, 9, 10];
const array2 = [1, 2, 3];

function calArr(arr1, arr2) {
    const Arr = arr1.map((arr1, index) => arr1 + arr2[index])
    return Arr
  }

console.log(calArr(array1, array2));

//soal kelima
function add(arr, number) {
    if (arr.indexOf(number) > -1) return arr;
    else return [...arr, number];
  }

console.log(add([1,2], 3)); //hasilnya 1,2,3
console.log(add([1,2], 2)); //hasilnya 1,2

//soal keenam
const numbers = [1,2,3,4,5,6,7,8,9,10];

const odds = numbers.filter((num) => num % 2 === 0);
console.log(odds);