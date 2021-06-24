// var dice_roll = Math.random() * 6;
// dice_roll = Math.floor(dice_roll) + 1;


// for dice one
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// for dice two
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "✨ Player 1 Won"
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Match Tie"
} else {
    document.querySelector("h1").innerHTML = "Player 2 Won ✨"
}