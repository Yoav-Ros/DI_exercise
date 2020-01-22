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
// let family = {
// 	brothers: 5,
// 	sisters: 6,
// 	little_brothers: 7,
// 	}

// for(i in family){
// 	console.log(i);
// 	console.log(family[i]);
// }


// buiulding exercise 2 
// var building = {
//     number_levels : 4,
//     number_of_apt_by_level : {
//         "1": 3,
//         "2": 4,
//         "3": 9,
//         "4": 2,
//     },
//     name_of_tenants : ["Sarah", "Dan", "David"],
//     number_of_rooms_and_rent: {
//         "Sarah": [3, 2000],
//         "Dan":  [4, 1000],
//         "David": [1, 10],
//     },
// };

// console.log(building.number_levels);
// console.log(building.number_of_apt_by_level[1]) 
// console.log(building.number_of_apt_by_level[3]);
// let sum = building.number_of_apt_by_level[1] + building.number_of_apt_by_level[3]
// console.log(sum)
// console.log(building.name_of_tenants[1], building.number_of_rooms_and_rent.Dan[0]);
// let s_and_d_rent = building.number_of_rooms_and_rent.Sarah[1]+building.number_of_rooms_and_rent.David[1]
// let d_rent = building.number_of_rooms_and_rent.Dan[1]
// if(s_and_d_rent>d_rent){
// 	console.log('Increase the rent');
// 	d_rent = s_and_d_rent;
// 	console.log("Dan's new rent is: " + d_rent + "$")
// };


// exercise 2 groceries
// let groceries = ["banana", "orange", "apple"];
// var stock = { 
//     "banana": 6, 
//     "apple": 0, 
//     "orange": 32 
// }  

// var prices = {    
//      "banana": 4, 
//     "apple": 2, 
//     "orange": 1.5 
// } 


// let firstKey = Object.entries(prices);
// let stock_ent = Object.entries(stock);
// console.log(firstKey[0][0])




// // myBill(groceries)



// // ninja ex 4
// let obj1 = {
// 	name: geralt_of_rivia,
// 	mass:"massive",
// 	height: "very tall",
// }



// ex key less car/////////////////////////////////////////////////////////
// let age = prompt("what is your age? ");
// function car(age){
// 	if (isNaN(age))
// 		alert("this is not a valid response")
// 	else if (age<18){
// 		alert("Sorry, you are too young to drive this car. Powering off")	
// 	}
// 	else if (age == 18) {
// 	 	alert("Congratulations on your first year of driving. Enjoy the ride!")	
// 	}
// 	else
// 		alert("Powering On. Enjoy the ride!")
// }
// car(age)






























// daily challenge:
// const arr = [5,0,9,1,7,4,2,6,3,8];
// let temp;
// for (i=o; i<arr.length;i++){
// 	for (j=0;j<arr.length;j++){
// 		if(arr[i]>arr[j]){
//  			temp = arr[i];
//  	 		arr[i]=arr[j];
//  	 		arr[j]=temp;
// 			}	
// 		}
// }

































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













