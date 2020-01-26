// exercise 1 selectors without id
// div
// console.log(document.body.firstElementChild)
// console.log(document.body.childNodes[1]);
// // ul
// console.log(document.body.childNodes[3]);
// console.log(document.body.childNodes[1].nextElementSibling);
// // pete
// console.log(document.body.childNodes[1].nextElementSibling.lastElementChild);
// console.log(document.body.childNodes[3].childNodes[3])

// // exercise 2
// // border color
// document.body.childNodes[1].style.backgroundColor  = "lightblue"
// document.body.childNodes[1].style.padding = '50px'
// if(document.body.childNodes[1].style.backgroundColor == "lightblue"){
// 	alert("hello")
// }


// // john and pete
// document.body.childNodes[3].childNodes[1].style.color = 'white'
// document.body.childNodes[3].removeChild(document.body.childNodes[3].childNodes[1]) ///works but then equires changes for next steps as well
// document.body.childNodes[3].childNodes[3].style.border = '1px solid black'

// // document changes
// document.body.style.fontFamily = "comic sans MS"; 



// // exercise 3//////////////////////////////////
// console.log(document.getElementById('container'))
// console.log(document.getElementsByClassName("list")[0].previousSibling.previousSibling);
// console.log(document.getElementsByClassName("list")[0].previousElementSibling);

// let box_of_lists = document.getElementsByClassName("list")


// for(list of box_of_lists){
// 	console.log(list.innerText);
// }
// console.log(document.getElementById("container").nextElementSibling.innerText)
// console.log(document.getElementById("container").nextElementSibling.nextElementSibling.innerText)
// console.log(box_of_lists[0].firstElementChild.innerText);
// console.log(box_of_lists[1].firstElementChild.innerText);
// console.log(box_of_lists[0].firstElementChild.nextElementSibling.innerText);
// console.log(box_of_lists[1].firstElementChild.nextElementSibling.innerText);




// //////////////////////////////////////exercise 4

// let john = document.getElementsByClassName('list')[0].firstElementChild
// let pete = document.getElementsByClassName('list')[0].lastElementChild
// let list_for_richard = document.createElement("li")
// list_for_richard.innerHTML = "Richard";
// document.getElementsByClassName('list')[0].replaceChild(list_for_richard, pete)
// console.log(document.getElementsByClassName('list')[0])

// let david = document.getElementsByClassName('list')[1].firstElementChild
// let list_for_me = document.createElement("li")
// let list_for_me1 = document.createElement("li")
// list_for_me.innerHTML = "Yoav";
// list_for_me1.innerHTML = "Yoav";
// document.getElementsByClassName('list')[0].replaceChild(list_for_me, john)
// document.getElementsByClassName('list')[1].replaceChild(list_for_me1, david)

// let student_p = document.createElement("p");
// student_p.innerHTML = "Hey students"
// let student_p1 = document.createElement("p");
// student_p1.innerHTML = "Hey students"

// document.getElementsByClassName('list')[0].appendChild(student_p)
// document.getElementsByClassName('list')[1].appendChild(student_p1)


// document.getElementsByClassName('list')[1].removeChild(document.getElementsByClassName('list')[1].firstElementChild.nextElementSibling)




