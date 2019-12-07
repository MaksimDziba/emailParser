import { watchObj, EmailParser } from './parser';

// const restoran = {
//   email: ''
// }
// const restHandler = {
//   get: (target, prop) => {
//     return target[prop]
//   },
//   set: (target, prop, value) => {
//     target[prop] = value;
//     target.isCorrect = true;

//     if(target.isCorrect) {
//       target.name = value.slice(0, value.indexOf('@'))
//       target.domain = value.slice(value.indexOf('@') + 1)      
//     }

//     console.log(`${prop} has been added to inventory`); 
//   }
// }
// const restProxy = new Proxy(restoran, restHandler);
// restProxy.email = 'some@email.ru';

// console.log(restProxy.email);
// console.log(restProxy.name);
// console.log(restProxy.domain);
// console.log(restProxy.isCorrect);

let parser = new EmailParser('info@ntschool.ru');
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

parser.email = 'some@nz';
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

// let div = document.createElement('div');
// document.body.appendChild(div);

// let cleverDiv = watchObj(div, function(prop, val) {
//   console.log(prop, val);
// });

// cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
/*
    в консоли:
    innerHTML <strong>HTML</strong><em>Changed</em
*/

// cleverDiv.style.color = 'red';
/*
    весь текст стал красным
    в консоли:
    color red
*/

// cleverDiv.querySelector('em').style.color = 'green';
/*
    em стал зелёным
    в консоли ничего не добавилось

    // популярная ошибка Illegal invocation - из-за манипуляций у функции сломался this
*/
