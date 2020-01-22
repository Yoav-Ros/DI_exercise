
// let arr =["a", "b", "c", "d"];
// arr.forEach( (value, index) => {
// 	console.log(index + ': ' + value);
// });

// let se_arr =["a", "b", "c", "d"];
// se_arr.forEach( value => {
// 	console.log(value);
// });


// for (index in arr){
// 	console.log(index);
// };
// for (item of arr){
// 	console.log(item);
// };


// let family = {
// 	brothers: 5,
// 	sisters: 6,
// 	little_brothers: 7,
// 	little_sisters: 8,
// 	}
// for(i in family){
// 	console.log(i);
// 	console.log(family[i]);
// }


// Object.keys(family).forEach( (left_item, index, key_as_array,) => {
// 	console.log(index, left_item, key_as_array);

// });

// Object.keys(family).forEach( key =>{
// 	console.log(key);
// });


// Object.entries(family).forEach( ent =>{
// 	console.log(ent);
// });





// ////////////////////////////exercise 1
// function age_calc(myAge){
// 	myAge = prompt("What's your age?");
// 	let mum = myAge*2;
// 	let dad = mum*1.2;
// 	console.log("my age is " + myAge + " My mum's age is " + mum + " and my dad's age is " + dad);
// }
// age_calc()


// //////////////////////////exercise 2 hotel

// function hotel_cost(nights){
// 		let cost_night = 140;
// 		let user = prompt("How many nights?")
// 		if (isNaN(user)){
// 			alert( user + " is not a valid number")
// 		}	
// 		else {
// 		console.log("your cost for " + user + " nights is " + user*cost_night)
// 		return user*cost_night
// 		} 	
// };

//  function plane_ride_cost(city){
//  	let user = prompt("Where are you going?");
//  	 if (user == "London"){
//  		console.log("your flight cost " + 183);	
//  		return 183
//  	}
//  	else if (user == "Paris"){
//  		console.log("your flight cost " + 220);	
//  		return 220
//  	}
//  	else{
//  		console.log("your flight cost " + 300);	
//  		return 300
//  	}
//  };


// function rental_car_cost(days){
// 	let time = prompt("Rent a car for how many days?")
// 	let cost=40;
// 	if (time>=7){
// 		let discount = (time*cost)-50		
// 		console.log("Your rental will cost", + discount)
// 		return discount;
// 	}
// 	else if (time>=3 && time<=7) {
// 		let discount = (time*cost)-20
// 		console.log("Your rental will cost", + discount)
// 		return discount;		
// 	}
// 	else {
// 		console.log('Your rental will cost '+ time*cost)
// 		return time*cost;
// 	}
// }

// function trip_cost (city, nights, days){
// 	// let a = hotel_cost();
// 	// let b = plane_ride_cost()
// 	// let c = rental_car_cost()
// 	return console.log(("Your total is"), + hotel_cost() + plane_ride_cost() + rental_car_cost());
// }
// trip_cost();




// exercise 3 (called 5 on the page)///////////////////

// let list=[1,2,3,3,3,3,4,5];
// let newarr = [];
// for(i=0; i< list.length; i++){
// 		if (newarr.indexOf(list[i]) === -1) {
// 			newarr.push(list[i]);
// 		}
// }
// console.log(newarr)
// 



