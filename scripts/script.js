let imgArray = new Array();
imgArray[0] = 'url("images/bikini1.jpg")';
imgArray[1] = 'url("images/bikini2.jpg")';
imgArray[2] = 'url("images/bikini3.jpg")';
imgArray[3] = 'url("images/bikini4.jpg")';
imgArray[4] = 'url("images/bikini5.jpg")';

let counter = 0;
let imageBack = document.getElementById("slider");
imageBack.style.backgroundImage=imgArray[0];

function goLeft()
{
    if (counter == 0)
    {
        counter = 4;
        imageBack.style.backgroundImage = imgArray[4];
    }else{
        counter--;
        imageBack.style.backgroundImage = imgArray[counter];
    }
}
function goRight()
{
    if (counter == 4)
    {
        counter = 0;
        imageBack.style.backgroundImage = imgArray[0];
    }
    else{
        counter++;
        imageBack.style.backgroundImage = imgArray[counter];
    }
}