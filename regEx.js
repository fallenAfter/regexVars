//show that document is connected to page
console.log('Connected RegEx');

//email
//variable to distinguishing an email
var regEmail = new RegExp(/^(?![_.])+([a-z0-9_.]*([^._])){2,27}\@[a-z0-9]{2,27}\.[a-z0-9]{2,6}$/);