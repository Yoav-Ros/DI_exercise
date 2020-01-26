// const MYWORD = "JaVaScRiPt";
// let wordarr =MYWORD.split('');
// let arrToShow=[];
// for(i=0;i<wordarr.length;i++){
// 	if(i==0 ){ //|| i==wordarr.length-1){
// 	arrToShow.push(wordarr[i]);
// 	}
// 	else if (i==wordarr.length-1){
// 	arrToShow.push(wordarr[i]);
// 	}
// 	else{
// 	arrToShow.push('*');
// 	}
// }
// const numOfTries=10
// for (i=0;i< numOfTries;i++){
// 	let g=prompt('please enter a letter');
// 	for (j=0;j< wordarr.length;j++){
// 		if(wordarr[j].toLowerCase() == g.toLowerCase()){
// 			arrToShow[i] = g; // wordarr[i];
// 		}
// 		console.log(arrToShow.join(''))
// 		if(MYWORD == arrToShow[j]){
// 		console.log('Won');
// 		break;
// 		}
// 	}

// }

// //////////////////////////new topic - by reference or by value
// let arr[1,2,3];
// console.log(arr[1]);
// let arr2=arr;
// console.log(arr2[1]);
// arr2[1]=5;
// // changing arry 2 changes array 1. an arry does not get a different location in the memory.
// // an array is by reference whereas a variable is by value.
// // the same applies to objects
// let obj={
// 	a:'html'
// 	b:'css'
// }
// let obj1=obj;
// obj1.b='javascript'
// // to clone the array so it wont have the same memory space
// let arr3 = [...arr];
// let obj3 = {...obj};



// let pass_obj = {
// 	name:'john'
// 	password:'123456'
// }
// let pass_clone = {...pass_obj};

//DOM////////DOM///////DOM///////DOM/////////DOM//////////DOM/////////DOM////////////DOM//////

// id value to connect with the html
// let id = document.getElementById('page');
// console.log(id)
// let header1 = document.getElementById('header')
// let content1 = document.getElementById('content')
// console.log(header1)
// content1.setAttribute('width', '100');
// console.log(content1)

// let div1 = document.getElementById('page');
// let att = id.getAttribute('lol');
// console.log('lol');
// att.setAttribute('lol', 'ggggg');


// let elem = document.getElementById('title');
// console.log(elem.innerText);
// let myh1 = document.createElement('h4');
// myh1.innerText = "something new that will be in the memory";
// elem.appendChild(myh1); // this appends the new header to the page


// let arr = ['student_a', 'student_b', 'student_c', 'student_d'];
// for (i=0; i<arr.length;i++){
// 	let user = document.createElement('div');
// 	user.innerText = arr[i]; 
// 	// user.innerText = "this is the inner text";
// 	id.appendChild(user)
// 	elem.appendChild(user)
// }

/////////////////////////exercise 1
// let my_content = document.getElementById('content');
// console.log(my_content.firstElementChild)
// console.log(my_content.nodeName)
// my_content.firstElementChild.innerText = "first element child"
// console.log(my_content.firstChild);



// let my_content2 = document.getElementById('content');
// console.log(my_content2.lastElementChild)
// my_content2.lastElementChild.innerText = "last element child"
// console.log(my_content2.lastChild);


// let my_content3 = document.getElementById('header');
// console.log(my_content3.nextSibling)
// my_content3.nextSibling.innerText = "next element child"
// console.log(my_content3.nextSibling);


// let my_content4 = document.getElementById('content');
// console.log(my_content4.nextSibling)
// my_content4.nextSibling.innerText = "previos element child"
// console.log(my_content4.nextSibling);



// let my_content5 = document.getElementById('myh');
// my_content5.parentNode.innerText = "this is the parent"
// console.log(my_content5.nodeValue)

// let my_content6 = document.getElementById('page');
// console.log(my_content6.childNodes);



//////////////////////////////////////////////////////////////////
//

let elem = document.getElementById('header')
console.log(elem.childNodes)
console.log(elem.parentNode)
let elem2 = document.getElementById('content')
let elem3 = document.getElementById('title')

// for(i=0;i<elem2.children.length;i++){
// console.log(elem2.children[i].innerText)
// elem2.children[i].innerText = i + "hey hey"
// }

console.log(elem.innerHTML);
console.log(elem2.innerHTML);

let txt = document.createTextNode("fhdsjkauebfdsa");
elem2.appendChild(txt)
console.log(txt.nodeValue)
console.log(elem.textContent)
console.log(elem.getAttribute('id'))
elem.setAttribute("yoav",'100')
console.log(elem.getAttribute('yoav'))

let head1 = document.createElement('h1')
head1.innerText = "hello world";
elem.appendChild(head1)

elem.insertBefore(elem3, head1);
elem.removeChild(head1, elem3);

// elem.replaceChild(title2, title)
elem.appendChild(elem3);



































