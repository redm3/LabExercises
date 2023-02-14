document.getElementById("demo").style.colour = "red";

function helloWorld(){
    alert('OH NO YOU HAVE LOST');
    document.getElementById('helloWorldButton').style.backgroundColor = 'black';
    document.getElementById('helloWorldButton').style.color = 'white';
}

function prize(){
    alert('YOU HAVE WON!!!!!!!!!!!!');
    document.getElementById('prize').style.backgroundColor = 'black';
    document.getElementById('prize').style.color = 'white';
}

function changeParagraph(){
    document.getElementById('demo').innerHTML = 'NEW <strong>paragraph</strong> text';
}