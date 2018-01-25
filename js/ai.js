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

// function: determines the computer's actions

function aiRoll() {
  var aiTotal = 0;
  var turn = 0;
  var roll = numberGenerator();

    if (roll !== 1) {
      aiTotal += roll;
    } else {
      return 1;
    }
  return aiTotal;
}

// function: declare winner
function findWinner(totalP1, totalAI) {
  var winner = 0;
  if (totalP1 >= 100) {
    winner = 1;
  } else if (totalAI >= 100) {
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

// application-logic
$(document).ready(function() {
  // declare variables
  var randNumArray = [];
  var playerTurn = 1;
  var randNum = numberGenerator();
  var score = 0;
  var bankP1 = 0;
  var bankAI = 0;
  var totalP1 = 0;
  var totalAI = 0;
  var announceWinner = 0;
  var aiResult = 0;

  // click function for "roll"
  $("#roll").click(function(){
    randNumArray.push(numberGenerator());
    for (var i = 0; i < randNumArray.length; i++) {
      if (randNumArray[i] !== 1 && playerTurn === 1) {
        $("#showDice").html(showDice(randNumArray[i]));
        $("#scorePlayer1").text(randNumArray.join(" + "));
        score = arraySum(randNumArray);
        bankP1 = score;

        aiTurn = aiRoll(randNum);

      } else if (randNumArray[i] === 1) {
          playerTurn = switchTurn(playerTurn);
          alert("You got a 1. AI's turn.")
          bankP1 = 0;

          aiResult = aiRoll();
          if (aiResult === 1) {
            alert("AI got a 1. Your Turn.");
            playerTurn = switchTurn(playerTurn);
            bankAI = 0;
            $("#scoreAI").text(0);
          } else {
            bankAI += aiResult;
            totalAI += bankAI;
            alert("AI rolled a " + aiResult);
            $("#AITotal").text(aiResult);
            $("#currentTotalAI").text(totalAI);
          }

          score = arraySum(randNumArray);
          randNumArray = [];
          playerTurn = switchTurn(playerTurn);
        }

    $("#player1Total").text(bankP1);
    $("#AITotal").text(bankAI);


    console.log(playerTurn);
    console.log(bankAI);
    }

  });
  // click function for "hold"
$("#hold").click(function(){

  if (playerTurn === 1) {
    totalP1 += score;
    $("#currentTotalOne").text(totalP1);
    score = 0;
    playerTurn = switchTurn(playerTurn);
    randNumArray = [];
    $("#scorePlayer1").text(randNumArray.join(" + "));
  bankP1 = 0;

  aiResult = aiRoll();
  if (aiResult === 1) {
    alert("AI got a 1. Your Turn.");
    playerTurn = switchTurn(playerTurn);
    bankAI = 0;
    bankAI = aiResult;
    $("#scoreAI").text(0);
  } else {
    totalAI += bankAI;
    alert("AI rolled a " + aiResult);
    bankAI += aiResult;
    $("#AITotal").text(aiResult);
    $("#currentTotalAI").text(totalAI);
    playerTurn = switchTurn(playerTurn);
  }

    bankAI = 0;
}
    announceWinner = findWinner(totalP1, totalAI);
    console.log(announceWinner);

    if (announceWinner === 1) {
      $(".scoreCount").hide();
      $("#wins").show();
      $("#p1Wins").fadeIn();
    } else if (announceWinner === 2){
      $(".scoreCount").hide();
      $("#wins").show();
      $("#AIWins").fadeIn();
    }
  });

  // click function for "reset"
  $("#restart").click(function() {
    location.reload();
  });

});
