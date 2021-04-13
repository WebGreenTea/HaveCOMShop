let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
today = mm + '/' + dd + '/' + yyyy + '|' + hour + '/' + min + '/' + sec;
console.log(today)