//math.random är en siffra mellan 0-0,999999 vi gångar detta med 6 och + på 1 för att inte få 0-5,99999999 .
//sedan avrundar jag till hela tal
var randomNumber1= Math.floor(Math.random() *6) + 1


var randomNumber2= Math.floor(Math.random() *6) + 1


//Jag queryar klassen img, sedan sätter vid attributen src genom att concactinatea images/dice+ett tal mellan 1-6+png.
// Tillammans blir det images/dice3 eller annat tal i slutet. queryn targetar klassen img1
//konkatineringen funkar så attt "src" är vad man vill ändra efter " ," kommer hur man vill ändra

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")


//här ändrar jag h1 beroende på hur det går med tärningskastet
if (randomNumber1>randomNumber2) {
document.querySelector("h1").textContent= "Player 1 Wins";

}else if (randomNumber2>randomNumber1) {
document.querySelector("h1").textContent= "Player 2 Wins";

}else {
document.querySelector("h1").textContent= "It's a draw";

}
