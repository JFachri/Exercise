//SOAL PERTAMA
console.log("Soal 1 >>> Display Multiplication Table");

const prompt=require("prompt-sync")({sigint:true});
const angka = parseInt(prompt('Masukkan Angka: '));

for(let i = 1; i <= 10; i++) {
    const hasil = i * angka;
    console.log(`${angka} * ${i} = ${hasil}`);
}

//SOAL KEDUA
console.log("Soal 2 >>> Check Palindrome");

function cekPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return "Ini bukan palindrome";
        }
    }
    return "Ini adalah palindrome";
}

const string = prompt('Masukkan String: ');
const hasil2 = cekPalindrome(string);
console.log(hasil2);

//SOAL KETIGA
console.log("Soal 3 >>> Convert CM to KM");

const cm = parseInt(prompt('Masukkan Centimeter: '));
let km = cm/100000;
console.log(`${km.toFixed(2)} Kilometer`);

//SOAL KEEMPAT
console.log("Soal 4 >>> Format Number as Currency");

const jumlah = parseInt(prompt('Masukkan jumlah uang: '));

let rupiah = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
});

console.log(rupiah.format(jumlah));

//SOAL KELIMA
console.log("Soal 5 >>> Remove the first occurrence of a given string");

const str = prompt('Masukkan Kalimat: ');
const searchstr = prompt('Masukkan string yang ingin dihapus: ');

function rem(str, searchstr) {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

const hasil3 = rem(str, searchstr);
console.log(hasil3);

//SOAL KEENAM
console.log("Soal 6 >>> Capitalize the first letter of each word");

const str2 = prompt('Masukkan Kalimat: ');
const result = str2.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

console.log(result);

//SOAL KETUJUH
console.log("Soal 7 >>> Swap Case Each Character");

const str3 = prompt('Masukkan Kalimat: ');

function swap(str3) {
    let hasil4 = '';
    for (let i = 0; i < str3.length; i++) {
            if (str3[i] == str3[i].toUpperCase()) {
                hasil4 += str3[i].toLowerCase();
            } else {
                hasil4 += str3[i].toUpperCase();
            }
        }
        return hasil4;
    }

const hasil5 = swap(str3);
console.log(hasil5);

//SOAL KEDELAPAN
console.log("Soal 8 >>> Find the Largest of Two Given Integers");

const inp1 = parseInt(prompt("Masukkan angka pertama: "));
const inp2 = parseInt(prompt("Masukkan angka kedua: "));
if (inp1 == inp2) {
    console.log(inp1 + " setara dengan " + inp2);
} else if (inp1 > inp2) {
    console.log(inp1 + " lebih besar dari " + inp2);
} else {
    console.log(inp1 + " lebih kecil dari " + inp2);
}

//SOAL KESEMBILAN
console.log("Soal 9 >>> Conditional Statement to Sort Three Numbers");

const masukan = parseInt(prompt("Masukkan angka pertama: "));
const masukan2 = parseInt(prompt("Masukkan angka kedua: "));
const masukan3 = parseInt(prompt("Masukkan angka ketiga: "));

if (masukan>masukan2 && masukan>masukan3) {
    if (masukan2>masukan3)
        {
            console.log(masukan + ", " + masukan2 + ", " + masukan3);
        }
    else
        {
            console.log(masukan + ", " + masukan3 + ", " + masukan2);
        }
}
else if (masukan2>masukan && masukan2>masukan3) {
    if (masukan>masukan3)
        {
             console.log(masukan2 + ", " + masukan + ", " + masukan3);
        }
    else
        {
             console.log(masukan2 + ", " + masukan3 + ", " + masukan);
        }
}
else if (masukan3>masukan && masukan3>masukan2) {
    if (masukan>masukan2)
        {
            console.log(masukan3 + ", " + masukan + ", " + masukan2);
        }
    else
        {
            console.log(masukan3 + ", " + masukan2 + ", " + masukan);
        }
}       

//SOAL KESEPULUH
console.log("Soal 10 >>> Show Data Type");

let num = 20;
let name = "Jusuf";
let arr = ["Jan", "Feb", "Mar"];

console.log(typeof(num));
console.log(typeof(name));
console.log(typeof(arr));

//SOAL KESEBELAS
console.log("Soal 11 >>> Change Every Letter into * from String Input");

const str4 = prompt('Masukkan Kalimat: ');
const str5 = prompt('Karakter yang diganti: ');
const result2 = str4.replaceAll(str5, "*");
console.log(result2);