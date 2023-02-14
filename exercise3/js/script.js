document.getElementById("demo").style.colour = "red";

function helloWorld(){
    alert('OH NO YOU HAVE LOST');
    document.getElementById('helloWorldButton').style.backgroundColor = 'black';
    document.getElementById('helloWorldButton').style.color = 'white';
}

function prize(){
    alert('CONGRATZ ON THE LAMBO JOKES!!!!!!!!!!!!');
    document.getElementById('prize').style.backgroundColor = 'black';
    document.getElementById('prize').style.color = 'white';
}

function changeParagraph(){
    document.getElementById('demo').innerHTML = 'NEW <strong>paragraph</strong> text';
}

function rollDice() {
    var diceType = document.getElementById("dice-type").value;
    var result = Math.floor(Math.random() * diceType) + 1;
    document.getElementById("result").innerHTML = "Result: " + result;
    if  (result == "6"){
        alert(' CONGRATS YOU HAVE WON THE PRIZE CLICK ON PRIZE 2 TO SEE WHAT YOU WON')
    }
    else {alert('YOU HAVE LOST')}
  }

  function rolledAsix() {
  }

  