// const name = document.getElementById("name");
// const password = document.getElementById("password");
// const form = document.getElementById("form");
// const error = document.getElementById("error");
// form.addEventListener("submit", (e) => {
//   let messages = [];
//   if (name.value === " " || name.value == null) {
//     messages.push("name is required");
//   }
//   if (password.value.length < 6) {
//     messages.push("password should be greater than 6");
//   }
//   if (messages.length > 0) {
//     e.preventDefault();
//     error.innerText = messages.join(", ");
//   }
// });
const name = document.getElementById("name");
const email = document.getElementById("email");
const num = document.getElementById("num");
const dob = document.getElementById("dob");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");
var validregex = /^[a-zA-Z0-9.]+$/;
//  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === " " || name.value == null) {
    messages.push("name is required");
  }
  if (num.value.length != 10) {
    messages.push("not a number");
  }
  if (password.value.length < 6) {
    messages.push("Too short");
  }
  if (password.value.length > 20) {
    messages.push("Too large");
  }
  if (password.value.match(validregex)) {
    console.log("good");
  } else {
    messages.push("No extra characters");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
});
