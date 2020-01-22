// /////////////////////exercise 1
 // exercise 1
// let my_colors = ["red", "blue", "shmurple", "soul black", "old man's teeth yellowish"]
// let i;
// for (i=0; i< my_colors.length; i++){
// 	// console.log('my favorite color is: ' + my_colors[i]);

// 	console.log('my '+ i + "choice is: " + my_colors[i]);
	
// }


// // exercise 2
// let i = prompt("please enter a number:" );
// while (i < 10){
// 	i = prompt("please enter a new number:" );
// }

// // exercise 3
// let people = ["Greg", "Mary", "Devon", "James"];
// for(i=0; i<people.length; i++){
// 	console.log(people[i] + ' is a person inside my object');
// }
// people.splice(0,1);
// people.splice(2,1, "Jason");
// people.push("Yoav");
// console.log(people);

// let m = people.indexOf("Mary")
// let y = people.indexOf("Yoav")
// for(i=0; i<people.length; i++){
// 	console.log(people[i]);
// 	if(i == m){
// 		break;
// 	}
// 	else{
// 		continue;
// 	}
// }
// console.log(people.slice(m+1,y));
// console.log(people.indexOf("Foo"));

// let llast = people.length -1;
// let last = people[llast]; 
// console.log(last);

// exercise 4

// let sum = 0;

// let age = [20, 5, 12, 43, 98, 55,123,64,51,84,789456,1,2,3,4,5,6,7,8,9];
// let even = [];
// let biggest=0;
// for(i=0;i<age.length;i++){
// 	sum = sum + age[i];
// 	if(age[i]%2==0){
// 		even.push(age[i])
// 	}
// 	if(age[i]>biggest){
// 		biggest = age[i];
// 	}
// }
// console.log(sum)
// console.log(even)
// console.log(biggest)


// gold exercise: the average

// let grade =[];
// let user_co = [];
// let user_input = grade.push(prompt("Please enter your grade: "));
// let user_coef = user_co.push(prompt("Please enter a coefficient: "));
// if(grade === undefined || grade.length == 0){
// 	user_input;
// }

// else if (user_co === undefined || user_co.length == 0){
// 	user_co;
// }
// else console.log(grade[0] * user_co[0] / grade.length);

// Ninja///////////////////////////////////////////////////////////////////////
// exercise 1 ///////////////////////////////
let family = []









































// ///////////////////////// class work

// class work reverse the order
// let arr = ["banana", "apples", "kiwi","orange","blueberries"];
// for(i=arr.length-1; i>=0;i--){
// 	console.log(arr[i])
// }

// slack exercise 
// even-odd
// for (i=0;i<16;i++){
// 	if (i%2==0) {
// 		console.log(i + " is even")
// 	}
// 	else{
// 		console.log(i +' is odd')
// 	}
// }

// FizzBuzz
// for (i=1;i<101;i++){
// 	if (i%3==0 && i%5==0)
// 		console.log('FizzBuzz')
// 	else if(i%3==0){
// 		console.log('Fizz')
// 	}
// 	else if(i%5==0){
// 		console.log('Buzz')
// 	}
// 	else{
// 		console.log(i)
// 	}
// }

// grade

// let students = [
//   ['David', 80],
//   ['Vinoth', 77],
//   ['Divya', 88],
//   ['Ishitha', 95],
//   ['Thomas', 68]
// ];

// for(i=0;i<students.length;i++){
//     let grade = students[i][1];
// 	let student = students[i][0];
// 	switch((grade >= new Number())){
// 		case grade >= 90:
// 			console.log(student + "'s grade is 'A'");
// 			break;
// 		case grade >= 80:
// 			console.log(student + "'s grade is 'B'");
// 			break;
// 		case grade >= 70:
// 			console.log(student + "'s grade is 'C'");
// 			break;
// 		case grade >= 60:
// 			console.log(student + "'s grade is 'D'");
// 			break;
// 		default:
// 		 console.log(student + "'s grade is 'F'");
// 		}
// 	}


// star pyramid
// for(i=1;i<6;i++){
// 	console.log("* ".repeat(i));
// }










