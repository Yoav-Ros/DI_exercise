// let elem = document.querySelector('#id .class tag')
//  can be specific 'tag.class' to an item
// can go one level deeper by adding a space 'tag .class'
// elem.classList.add('a') - add a class \ can have multipul classes
// elem.classList.remove('a') - remove a class

// let elem2 = document.querySelectorAll('#id .class tag')

// for(item of elem2){
// 	item.classlist.add('f')
// }


let robo_list = document.getElementById('root')

function myButton(){
  	

  	for(robot of robots){
  			
  		root.className = 'box-grid';
  		// div for each robot
  		let robi = document.createElement('div')
  		robi.classList.add('.box')
  		// assings the different vars
  		let picture = document.createElement('img')
  		let header = document.createElement('h3');
  		let user = document.createElement('p');
  		let detail = document.createElement('p');


  		picture.setAttribute('src', 'https://robohash.org/' + robot['id'] + '?size=200x200')
  		header.innerText = robot["name"];
  		user.innerText = robot["username"];
  		detail.innerText = robot["email"];

  		robi.appendChild(picture)
  		robi.appendChild(header);
  		robi.appendChild(user);
  		robi.appendChild(detail);

  		robo_list.appendChild(robi)
  	}
 }	




function border_change () {


}








