function playTheGame(){
	let answer = confirm("would you like to play?");
		if(answer){
			let comp_num = Math.floor(Math.random() * 10)
			for (i=3; i>=1; i--){
				let user_input = prompt("Choose a number from 0 to 10!")
				if (i == 1){
					alert("No more tries. You lost")
				}
				else if( user_input==comp_num ){
					alert("You win!")
					return;
				}
				else{
					alert("Wrong, guess again!, you have " + (i-1) + " tries left")
				}
			}	
		}
		else{
			alert("Thank you, see you next time");
			return;
		}
}