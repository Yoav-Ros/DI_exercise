// steps
// a. recieve a word - choose from defined array of strings.
// b. change all but 2 letters to * and print the new word for the user
// c.1. set up 2 options 'guess letter' and 'solve'
// c.2. ask and recieve user input - single letter, if more - not valid
// c.3. solve - input the whole word and compare with original string. if match-win, if not. guess again. 
// d. loop the original string to look for matches
// e. if match - change and print new
// f. if all match - win



// structure
// a. list of words 
// 	
// b. function play
// c.	choose from list and hide letters - display to user
// d.	 		loop 10 times
// e.				two options - guess and solve
// f.					recieve user input
// g.					check agaist word
// h. 						if match i in word - replace i
// i.						else if dosen't - 'no match, guess again' 
// j.						^ two times - for each button
// k. 								if attempt = 5 - reveal random letter

// loop and check user input against a word for one option
// for the second option compare word to word as an if condition  





	// chooses random from my list!
let my_options = ["appearance", "basketball", "confidence", "developers", "evaluation"];
let the_chosen = my_options[Math.floor(Math.random() * my_options.length)];
console.log(the_chosen)

function str_to_arr(string){
	// turn word to array
	let word_array = the_chosen.split("")
	console.log(word_array)
	return word_array	
}
function stars(){
	// star word as array
	let rand_num = Math.floor(Math.random() * (str_to_arr().length-1)+1); 
	console.log(rand_num);
	let star_word = []
	star_word = Array(the_chosen.length).fill("*") 
	star_word[0] = the_chosen[0]
	star_word[rand_num] = the_chosen[rand_num]
	console.log(star_word)
	return star_word
}
let input_placeholder = 'a'
let input_test_word = "appearance"

let check_word = "abcdefghijklmnopqrstuvwxyz";
// checks that the input is true
function check(char){
	if (char.length>1)
		return 'enter a valid char';
	for(i=0;i<check_word.length; i++){
		if(char.toLowerCase() === check_word[i]){
			return true
		}
	}
	return false
}


function ten_loops_game(guess){
	for(i=10; i>=1; i--){
		if(i=1){
			alert("no more tries, you lose")
		}
		if (check(input_placeholder)== true){
			for (j=0; j<the_chosen.length;j++){
				if(input_placeholder == the_chosen[j]){
					return true
				}
				else{
					return false 
				}

			}
		}
	}
}

// function reveal_letter(ten_loops_game){
// 	if (ten_loops_game(input_placeholder) == true){
// 		console.log('hi')
// 	}
// }

function input_whole_word(input_test_word){
	if (input_test_word == the_chosen){
		console.log('win')
	}
}
// reveal_letter(input_placeholder)

input_whole_word(input_test_word)
// loop and check user input against a word for one option
// for the second option compare word to word as an if condition  










// function user_input(input){}


// let word = "hello";
// let star_word =""
// let first = word.charAt(0);
// let last = word.charAt(word.length-1);
// let middle = word.length-2
// for (i=0; i<word.length-2;i++){
// 	middle=middle+"*"
// }
// let star_word_final = word.charAt(0) + Array(word.length-2).fill("*").join("") + word.charAt(word.length-1)










