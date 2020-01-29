let root = document.getElementById('root')
let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

root.style.display = 'flex'
root.style.justifyContent = 'space-between'

function make_div(k){
	let mydiv = document.createElement('div') 
	mydiv.style.border = '2px solid black'
	mydiv.style.width = '20px'
	mydiv.style.height = '20px'
	mydiv.style.display = 'flex'
	mydiv.style.justifyContent = 'center'
	mydiv.innerText = k
	mydiv.setAttribute('draggable', 'true')
	return mydiv
}

for (letter of abc){
	let something = make_div(letter)
	something.setAttribute('id', abc.indexOf(letter))
	root.append(something)
	something.addEventListener('dragend', function(e){
	console.log(something)
	console.log(something.innerText)
	let x = e.clientX;
	let y = e.clientY;
	e.target.style.left = x + 'px';
	e.target.style.top = y +'px';
	something.style.position = 'absolute'
	console.log("X is " + x, "Y is " + y)
	} )
}


