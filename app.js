var game = {
  isClicked: false,
  crossGame: "X",
  roundGame: "O",
  cross: [],
  round: [],
  winning_array: [
    [1, 5, 9],
    [1, 2, 3],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]
};

function getData(data, which_game, player) {
  var box = data.getAttribute("data-box");
  //console.log(box);
  if (!game.isClicked) {
    game.cross.push(box);
  } else if (game.isClicked) {
    game.round.push(box);
  }
  data.removeAttribute("onclick");
  checkMoves(which_game, player);
}

function checkMoves(arr, player) {
  if (arr.length === 3) {
    var comp = arr.map(val => parseInt(val, 10)).sort();
    // if (game.winning_array.includes(comp)) console.log("Hii");
    // else console.log("bye");
    game.winning_array.map(val => {
      if (JSON.stringify(comp) === JSON.stringify(val)) {
        document.getElementById("output").innerHTML = `${player} Wins`;
      }
    });
  } else return false;
}

function getSomething(data) {
  if (!game.isClicked) {
    data.innerHTML = game.crossGame;
    getData(data, game.cross, game.crossGame);
    game.isClicked = !game.isClicked;
  } else if (game.isClicked) {
    data.innerHTML = game.roundGame;
    getData(data, game.round, game.roundGame);
    game.isClicked = !game.isClicked;
  }
  // console.log(game);
}
