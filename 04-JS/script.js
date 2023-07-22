// console.log("hello jee")
// let a = confirm("realy?")
// if(a){
//     console.log("yes")
// }else{
//     console.log("not")
// }

for (var i = 0     ; i < 10; i++) {

console.log("hello"+i)

document.write(i + " is : " + i*3 + "<br />");
}
// var a = new Date().getDay()
// switch (a) {      // input is current day
// case 1:                         // if (day == 6)
// 	text = "Saturday";          
// 	break;
// case 2:                         // if (day == 0)
// 	text = "Sunday";
// 	break;
// default:                        // else...
// 	text = "Whatever";
// }
// console.log(text)

let rectangl = {
    length:2,
    breth:4
}

for (const key in rectangl) {
  console.log(key,rectangl[key])
}
