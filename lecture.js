// console.log('hai selamat belajar javascript')

/**

Membuat variable menggunakan var biasanya terjadi kendala yang dinamai dengan hoisting. yaitu dapat menampilkan nilai
dari deklarasi sebelumnya atau sebelum menggunakan var

**/

// x = 100;
// var x;
// console.log(x);


/**

ketika mendeklarasikan nilai atau variable menggunakan let seperti contoh di bawah ini maka akan terjadi error karena 
nilai tidak dideklarasikan terlebih dahulu. jadi ketika menggunakan let cara ini cukup efektif untuk digunakan
daripada menggunakan var

**/


// y = 50;
// let y;
// console.log(y);


/**

untuk contoh dibawah ini menggunakan const dimana pendeklarasian variabel ini tidak perlu di inisialisasi kembali.

**/

// const z = 400;
// console.log(z)

// z = 100
// console.log(z)


// tipe data undefined (ketika membuat variable tanpa mendefinisikan nilainya)

// fungsi typeof digunakan untuk menentukan nilai pada tipe data dalam variable

// let xyz;
// console.log(typeof(x))

// let number = "test";
// console.log(typeof(number))

// increment

//menampilkan nilai awal 

// let increment = 5;

// console.log(increment++)

// ditingkatan lebih dahulu lalu ditambahkan pada nilai increment

// console.log(++increment	)


// menentukan tipe data boolean

// let y = true
// let x = false

// console.log(typeof(x))
// console.log(typeof(y))


// mendeklarasikan nilai null

// let emptydata = null;
// console.log(null)

// Array

// let myArray = [1,2,3,4,5,"ini adalah arrray"];
// console.log(myArray.length)

// Object

// let myObject = {
// 	"nama" : "lorem",
// 	"phone" : "12345",
// 	"title" : {
// 		"sma" : "ipa",
// 		"s1" : "teknologi"
// 	}

// }

// console.log(myObject.title.s1)


// operator assignment 

// a += b ( a = a+b )

// let a = 10
// let b = 5
 
// a += b
// console.log(a)	

// if/else statement

// let nilai = 10

// if(nilai > 5){
// 	console.log("jawaban anda benar")
// }else {
// 	console.log("hasil salah")
// }

// let language = "en"
// let translate = "one"

// if(language == "id"){
// 	translate = "satu"
// }else if(language == "en"){
// 	translate = "one"
// }else{
// 	translate = "hiji"
// }

// console.log(translate)

// for statment

// for (let i = 0; i < 10; i++) {
// 	console.log(i)
// }

// const thisArray = [1,2,3,4,5,6,7,"joko"]

// for (var i = 0 ; i < thisArray.length; i++) {
// 	console.log(thisArray[i])
// }

// for(let arrayResult of thisArray){
// 	console.log(arrayResult)
// }

// function

// function sayHello(){
// 	console.log("hello world")
// }

// sayHello()

// function speak(country,language) {
// 	if(language == "id"){
// 		console.log("bahasa indonesia " + country)
// 	}else if(language == "en"){
// 		console.log("languge english " + country)
// 	}else {
// 		console.log("bonjour " + country)
// 	}

// }

// speak("indonesia","fr")

// function plus(a,b){
// 	return a + b
// }

// let res = plus(10,2)
// console.log(res)


// function speak(country,language) {
// 	if(language == "id"){
// 		return "bahasa indonesia " + country
// 	}else if(language == "en"){
// 		return "languge english " + country
// 	}else {
// 		return "bonjour " + country
// 	}

// }

// console.log(speak("indonesia", "id"))