// business-logic

// function: generates random number from 1 to 6
function numberGenerator() {
  var genNum = 1 + Math.floor(Math.random() * 6);
  return genNum;
}

// function: finds the sum of randNumArray
function arraySum(randNumArray) {
  sumTotal = 0;
  for (var i = 0; i < randNumArray.length; i++) {
    if (randNumArray[i] !== 1) {
    sumTotal += randNumArray[i];
    } else {
      sumTotal = 0;
    }
  }
  return sumTotal;
}

// function: switches players' turn
function switchTurn(playerTurn) {
  var nextTurn = 0;
  if (playerTurn === 1) {
    nextTurn = 2;
  } else {
    nextTurn = 1;
  }
  return nextTurn;
}

// function: declare winner
function findWinner(totalP1, totalP2) {
  var winner = 0;
  if (totalP1 >= 100) {
    winner = 1;
  } else if (totalP2 >= 100) {
    winner = 2;
  }
  return winner;
}

// function: displays the corresponding dice image
function showDice(randNum) {
  var imageURL = "";
  if (randNum === 1) {
    imageURL = "<img src='img/one.png' id='diceRoll'>";
  } else if (randNum === 2) {
    imageURL = "<img src='img/two.png' id='diceRoll'>";
  } else if (randNum === 3) {
    imageURL = "<img src='img/three.png' id='diceRoll'>";
  } else if (randNum === 4) {
    imageURL = "<img src='img/four.png' id='diceRoll'>";
  } else if (randNum === 5) {
    imageURL = "<img src='img/five.png' id='diceRoll'>";
  } else {
    imageURL = "<img src='img/six.png' id='diceRoll'>";
  }
  return imageURL;
}

// function: displays pig above player on turn


// application-logic
$(document).ready(function() {
  // declare variables
  var randNumArray = [];
  var playerTurn = 1;
  var randNum = numberGenerator();
  var score = 0;
  var bankP1 = 0;
  var bankP2 = 0;
  var bankAI = 0;
  var totalP1 = 0;
  var totalP2 = 0;
  var totalAI = 0;
  var announceWinner = 0;

  // click function for "roll"
  $("#roll").click(function(){
    randNumArray.push(numberGenerator());

    for (var i = 0; i < randNumArray.length; i++) {
      if (randNumArray[i] !== 1 && playerTurn === 1) {
        $("#showDice").html(showDice(randNumArray[i]));
        $("#scorePlayer1").text(randNumArray.join(" + "));
        score = arraySum(randNumArray);
        bankP1 = score;
      } else if (randNumArray[i] !== 1 && playerTurn === 2) {
        $("#showDice").html(showDice(randNumArray[i]));
        $("#scorePlayer2").text(randNumArray.join(" + "));
        score = arraySum(randNumArray);
        bankP2 = score;
      } else {
        alert("Bad Luck... You Got a 1. It's Player " + switchTurn(playerTurn) + "'s turn now~");
        $("#scorePlayer1").text((""));
        $("#scorePlayer2").text((""));
        randNumArray = [];
        bankP1 = 0;
        bankP2 = 0;
        playerTurn = switchTurn(playerTurn);
      }
    }

    $("#player1Total").text(bankP1);
    $("#player2Total").text(bankP2);

    if (playerTurn === 1) {
      $("#pig1").show();
      $("#pig2").hide();
    } else if (playerTurn === 2){
      $("#pig2").show();
      $("#pig1").hide();
    } else {
      alert("this is wrongggg")
    }
    console.log(numberGenerator());
    console.log(randNumArray);
    console.log(playerTurn);
    console.log(score);

  });
  // click function for "hold"
$("#hold").click(function(){

  if (playerTurn === 1) {
    totalP1 += score;
    $("#scorePlayer1").text((""));
    $("#currentTotalOne").text(totalP1);
    $(".flashPlayerOne").slideDown();
    score = 0;
    playerTurn = switchTurn(playerTurn);
    randNumArray = [];
  } else {
    totalP2 = totalP2 + score;
    $("#scorePlayer2").text((""));
    $("#currentTotalTwo").text(totalP2);
    $(".flashPlayerTwo").slideDown();
    score = 0;
    playerTurn = switchTurn(playerTurn);
    randNumArray = [];
  }
    bankP1 = 0;
    bankP2 = 0;

    announceWinner = findWinner(totalP1, totalP2);
    console.log(announceWinner);

    if (announceWinner === 1) {
      $(".scoreCount").hide();
      $("#wins").show();
      $("#p1Wins").fadeIn();
    } else if (announceWinner === 2){
      $(".scoreCount").hide();
      $("#wins").show();
      $("#p2Wins").fadeIn();
    }
  });

  // click function for "reset"
  $("#restart").click(function() {
    location.reload();
  });

});
