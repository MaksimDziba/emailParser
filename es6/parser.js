/* global Proxy */
// function watchObj(node, callback) {
//    return new Proxy(node, {...}) 
//   return node;
// }

class EmailParser {
  constructor(email) {
    this.email = email
  }

  get isCorrect() {
    return /^.+@.+\..+/.test(this.email);
  }

  get name() {
    return this.isCorrect ? this.email.split('@')[0] : 'введите корректно'
  }

  get domain() {
    return this.isCorrect ? this.email.split('@')[1] : 'введите корректно'
  }
  
}

export { EmailParser };
