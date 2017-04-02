var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox.png') {
    myImage.setAttribute ('src', 'images/fire.jpg');
  } else {
    myImage.setAttribute ('src', 'images/firefox.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var myName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}