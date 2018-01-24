var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/messi.JPG') {
      myImage.setAttribute ('src','images/messi-2.JPG');
    } else {
      myImage.setAttribute ('src','images/messi.JPG');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Father of football, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Father of football, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}