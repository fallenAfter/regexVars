//show that document is connected to page
console.log('Connected RegEx');

//email
var regEmail = new RegExp(/(?![_.])+([a-z0-9_.]*([^._])){2,27}\@[a-z0-9]{2,27}\.[a-z0-9]{2,6}/);
//Phone
var regPhone = new RegExp(/(\+)?(\d{1,2})?\s?(\(?\d{3}\)|\d{3})?(\s|\.)?\d{3}(\s|\.|\-)?\d{4}$/);

var regPostal = new RegExp(/([a-zA-Z]\d[a-zA-Z])\s?(\d[a-zA-Z]\d)/)