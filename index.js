var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomImageSource="./Dicee Challenge - Starting Files/images/"+randomImage;
 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomImageSource);

 var randomNumber2=Math.floor(Math.random()*6)+1;
 var randomImageSource2="./Dicee Challenge - Starting Files/images/"+"dice"+randomNumber2+".png";
 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" &#x1F6A9; Player 1 Wins!";
 }
 else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Tie ,No one wins";
 }
 else{
    document.querySelector("h1").innerHTML="Player 2 Wins! &#x1F6A9;";
 }