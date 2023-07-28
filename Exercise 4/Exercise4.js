//Soal pertama
console.log("Soal pertama");

const prompt=require("prompt-sync")({sigint:true});
const h = parseInt(prompt("Masukkan Angka: "));

function triangle(h) {
    let n = 1;
    let r = '';
    for (let i = 1; i <= h; i++) {
        for (let j = 0; j < i; j++) {
            r += n.toString().padStart(2, '0') + ' ';
            n++;
        }
    r += "\n";
    }
    return r;
}

console.log(triangle(h));

//Soal kedua
console.log("Soal kedua");

function fizzBuzz(n2) {
    for (let i = 1; i <= n2; i++) {
      let hasil = '';
      if (i % 3 === 0) {
        hasil += 'Fizz';
    }
    if (i % 5 === 0) {
        hasil += 'Buzz';
    }
    console.log(hasil || i.toString());
    }
}

fizzBuzz(15);

//Soal ketiga
console.log("Soal ketiga");

const firstHeight = parseInt(prompt("Masukkan Tinggi Badan: "));
const weight = parseInt(prompt("Masukkan Berat Badan: "));

const height = firstHeight / 100;
const bmi = weight / Math.pow(height, 2);

function bodyMass(weight, height) {
    if (bmi < 18.5) {
        return 'less weight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'ideal';
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return 'overweight';
    }
    else if (bmi >= 30 && bmi <= 39.9) {
        return 'very overweight';
    }
    else if (bmi > 39.9) {
        return 'obesity';
    }
}

console.log(bodyMass(weight, height));

//Soal keempat
console.log("Soal keempat");

const numbers = [1,2,3,4,5,6,7,8,9,10];

const odds = numbers.filter((num) => num % 2 === 0);
console.log(odds);

//Soal kelima
console.log("Soal kelima");

string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Jusuf Fachri sedang Belajar"));