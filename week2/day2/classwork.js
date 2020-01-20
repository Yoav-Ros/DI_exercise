// exercise 1
// let addressNumber = " address";
// let addressStrees =  "street";
// let country = "country";

// let global_address = "i live in " + addressStrees + addressNumber + " in " + country;
// console.log(global_address);


// // exercise 2
// let pets = ["cat","dog","fish","rabbit","cow"];
 // let f pets.join("")
 // console.log(f)
// console.log(pets[1]);
// pets.push("horse");
// pets.splice(3,1)
// console.log(pets.length);
// console.log(pets);



// // exercise 3
// let newDog = "Chihuahua";
// console.log(newDog.length);
// newDog.toUpperCase();
// newDog.toLowerCase();
// if (newDog == "Chihuahua"){
// 	console.log("its equal");
// }
// else{
// 	console.log('not equal');
// }
// if (newDog == pets[1]){
// 	console.log("I LOVE Chihuahua, it's my favorite dog");
// }
// else{
// 	console.log('I dont care, I prefer CATS');
// }


// exercise 4
// let year = 1967;
// let future = 2000;
// console.log("i will be", future - year  ,"in the year of " + future);

// exercise 5
// let user_input = prompt("please enter a number: ");
// if (Number(user_input) % 2 == 0){
// 	console.log(user_input, "is an even number");
// }
// else{
// 	console.log(user_input,'is not an even number');
// }

// exercise 6
// let x = 5;
// let y = 3;
// if(x > y){
// 	console.log(x);
// }
// else{
// 	console.log(y);
// }

// exercise 7;
// let lang = prompt("What language do you speak? ");
// if(lang == "French"){
// 	console.log('Bonjour');
// 	}
// else if(lang == "English"){
// 	console.log('Hello')
// 	}
// else if(lang == "Hebrew"){
// 	console.log('Shalom');
// 	}
// else{
// 	console.log(":)")
// 	}



// exercise 8 grade check

//  let grade = prompt("What is your grade? ");

// switch(grade >= new Number()){
// 	case grade >= 90:
// 		console.log('A');
// 		break;
// 	case grade >= 80:
// 		console.log('B');
// 		break;
// 	case grade >= 70:
// 		console.log('C');
// 		break;
// 	case grade >= 60:
// 		console.log('D');
// 		break;
// 	default:
// 	 console.log('F');
// }




// exercise ninja a

// var me=["my","favorite","color","is", "blue"];
// var stringy = me.join(" ");
// console.log(stringy)


// exercise 2 mixup

// let a = prompt("choose a word: ")
// let b = prompt("choose a second word:")
// wacky_names(a,b)
// function wacky_names(a,b){
// 	let c = a.substring(0,2);
// 	let d = b.substring(0,2);
// 	let e = a.length;
// 	let f = b.length;
// 	let i = a.substring(2, e);
// 	let k = b.substring(2, f);
// 	console.log(c + k);
// 	console.log(d + i);
// }


// exercise 3 verbing
// let ask_for_str = prompt("Type a word: ");
// let ask_for_str1 = ask_for_str.toLowerCase();
// if(ask_for_str1.substring(ask_for_str1.length-3, ask_for_str1.length)=="ing"){
// 	console.log(ask_for_str+"ly")
// }
// else if (ask_for_str1.length < 3){
// 	console.log(ask_for_str);
// }
// else {
// 	console.log(ask_for_str+"ing");
// }

// exercise 4 not bad

// let user_input=prompt("write a sentence using the words 'not' and 'bad':");
// let lowerC = user_input.toLowerCase();
// let searched = lowerC.search("not")
// if (lowerC.includes("not")){
// 	if (lowerC.substring(searched, lowerC.length).includes("bad")){
// 		console.log(lowerC.substring(0, searched) + "good")
// 	}
// 	else{
// 		console.log(user_input);
// 	}
// }
// else{
// 	console.log(user_input);
// }



// calculator
// num1
let first_number = prompt("Please choose a number: ");
if (isNaN(first_number)){
	alert('This is not a number!');
	throw new Error('Error');
}

let second_number = prompt("Please choose a second number: ");
if (isNaN(second_number)){
	alert('Stop messing around!');
	throw new Error('Error');
}

// operand
let operand = prompt("Please choose an operand: ");

if (operand == "+"){
	console.log(Number(first_number) + Number(second_number));
}
else if (operand == "-"){
	console.log(Number(first_number) - Number(second_number));
}
else if (operand == "*"){
	console.log(Number(first_number) * Number(second_number));
}
else if (operand == "/"){
	console.log(Number(first_number) / Number(second_number));
}
else if (operand == "^"){
	console.log(Number(first_number) ** Number(second_number));
}
else{
	alert("You are a terrible person");
}












 

















   















































