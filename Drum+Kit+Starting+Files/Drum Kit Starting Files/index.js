// document.querySelector("button").addEventListener("click",handleClick); //when the click happens it will call the function handleclick with no parenthesis because if the parenthesis will be there it will without clicking the button do the calling of the function...
// function handleClick(){
//     alert("I got clicked")
// }
//***** To select all the buttons */
// var len=document.querySelectorAll(".drum").length //take the length of the given buttons
// for(var i=0;i<=len;i++){    //make the for loop for this
//    document.querySelectorAll(".drum")[i].addEventListener("click",function(){  //select the drum and do the click for functioning documnet.queryselectorall(".drum")[i].addEventListener("click",function(){
// //   this.style.color=white //will change the color of each in the loop
// });
// }

// var audio1= new Audio('sounds/crash.mp3');
// audio1.play();

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
