document.getElementById('totalTip').style.display= 'NONE'

let butt = document.getElementById('calculate')



butt.addEventListener('click', calculateTip);

function calculateTip (){
	let bill = document.getElementById('billamt').value	
	let qual = document.getElementById('serviceQual').value
	let numOfPeople = document.getElementById('peopleamt').value
// billamt.trim().length == 0
	if (qual ==	0 || billamt == ''){
		alert("all your base is belong to us")
		return
	}
	// numOfPeople.trim().length
	if(numOfPeople == 0 || numOfPeople <1){
		numOfPeople==1;
		document.getElementById('each').remove();
	}
	else{
		document.getElementById('each').style.display = 'block'
	}

	let total = bill*quel/numOfPeople.toFixed(2)
	document.getElementById('totalTip').style.display  = 'block'
	document.getElementById('tip').style.display  = 'block'

}


