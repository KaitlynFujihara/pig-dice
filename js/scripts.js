var switchPlayers = function(outputArray) {
  var playerStatus = false;
  for (var i = 0; i < outputArray.length; i++) {
    if (outputArray[i] === 1) {
      playerStatus = true;
    }
  }
}

var numGenerator = function() {
  var genNum = 1 + Math.floor(Math.random() * 6);
  return genNum;
}


$(document).ready(function() {
  var outputArray = [];

  $("#roll").click(function(event) {

    var randNum = numGenerator();
    var playerTurn = switchPlayers(outputArray);

    if (randNum !== 1) {
      outputArray.push(randNum);
    } else if (randNum === 1) {
      alert("end turn");
    }

    if (playerTurn === true) {
      $("#scorePlayerTwo").text(outputArray.join("+"));
    }

    $("#scorePlayerOne").text(outputArray.join("+"));
    $("#diceRoll").text(randNum);

    console.log(randNum);
    console.log(outputArray);
    event.preventDefault();
  });
});
