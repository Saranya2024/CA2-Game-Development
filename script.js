var player = {name: "", nickname: ""};
var players = [];

function storePlayerDetails(name, nickname) {
  var player = {
    name: name,
    nickname: nickname
  };
  players.push(player);
}

function showInstructionsAndRedirect() {
  document.getElementById("playerDetails").style.display = "none";
  document.getElementById("gameInstructions").style.display = "block";
  document.getElementById("redirectGameButton").addEventListener("click", function() {
    window.location.href = "game.html";
  });
}

document.getElementById("startGameButton").addEventListener("click", function() {
  var playerName = document.getElementById("promptName").value;
  var playerNickname = document.getElementById("promptNickname").value;
  if (playerName.trim() !== "" && playerNickname.trim() !== "") {
    storePlayerDetails(playerName, playerNickname);
    showInstructionsAndRedirect();
  } else {
    alert("Please fill in both name and nickname.");
  }
});
