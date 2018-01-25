var outputArray = [];
var player = 1;

var numGenerator = function() {
  var genNum = 1 + Math.floor(Math.random() * 6);
  return genNum;
}

function totalPoints(score, randNum) {
  if (randNum !== 1) {
    return true;
  }
  return false;
}

var switchPlayers = function(randNum, totalSum) {
  if (player === 1){
    alert("Start turn p1");
    $("#scorePlayerOne").text();
    outputArray.push(randNum);
    $("#scorePlayerOne").text(outputArray.join("+"));
      if(randNum === 1) {
      alert("end turn p1");
      alert("switch players");
      randNum === 0;
      outputArray = [];
      player = 2;

    }
    return outputArray;
  }
  if (player === 2){
    alert("Start turn p2");
    $("#scorePlayerTwo").text();
    outputArray.push(randNum);
    $("#scorePlayerTwo").text(outputArray.join("+"));
      if(randNum === 1) {
      alert("end turn p2");
      alert("switch players");
      randNum === 0;
      outputArray = [];
      player = 1;
    }
    return outputArray;
  }

}

var outputSum = function (outputArray) {
  var sumAmount = 0;
  var message = "";
  for (var i = 0; i < outputArray.length; i++){
    sumAmount += outputArray[i];
  }
  return sumAmount;
  return message;
}

var findCurrentTotal = function (totalSum, currentSum) {
  var newTotalSum = true;
  if(currentSum + totalSum >= currentSum) {
    return false;
  }
}

$(document).ready(function() {
  var score = 0;
  var total = 0;
  var totalSum = 0;
  var currentSum = 0;
  var totalAmount = 0;

  $("#roll").click(function() {

    var randNum = numGenerator();
    var playerTurn = switchPlayers(randNum, outputArray);
    var scoreTracker = totalPoints(randNum);
    totalSum = outputSum(outputArray);


    if(player === 1) {
        $("#totalPlayerOne").text("= " + totalSum);
    } else if (player === 2) {
        $("#totalPlayerTwo").text("= " + totalSum);
    }

    console.log(player);
    console.log(randNum);
    console.log(outputArray);
    console.log(scoreTracker);

  });
  console.log(currentSum);
    $("#hold").click(function() {
      currentSum = outputSum(outputArray);
      totalSum = outputSum(outputArray);
      currentTotal = currentSum + totalSum;
      totalAmount = findCurrentTotal(totalSum, currentSum);
      var sumPlayer1 = 0;
      var sumPlayer2 = 0;
      alert("PASS");

       if (player === 1) {
        outputArray = [];
        $("#totalPlayerOne").text(totalSum);
        sumPlayer1 = totalSum;
        if(totalAmount === false) {
          $("#currentTotalOne").text(totalSum);
        } else {
          $("#currentTotalOne").text(sumPlayer1 + currentTotal);
        }
        player = 2;

      } else if (player === 2) {
       outputArray = [];
       $("#totalPlayerTwo").text(totalSum);
       sumPlayer2 = totalSum;
       if(totalAmount === false) {
         $("#currentTotalTwo").text(totalSum);
       } else {
         $("#currentTotalTwo").text(sumPlayer2 + currentTotal);
       }
       player = 1;
     }


      console.log(currentSum);
      console.log(currentTotal);




  });
});
