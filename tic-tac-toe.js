console.log("tic-tae-toe")

//state
//used to track the state of the game
let turn, board, winner


//game logic
init()
gameplayLoop()

//get the game in a starting position 
function init(){
    turn = 'X'
    board = [
    " ", "x", " ",
    " ", " ", " ",
    " ", "o", " "
    ]
    winner = null 
    render()
}

function render() {
    //render the turn
    console.log(`It is player ${turn}'s turn`)
    renderBoard()
}
function renderBoard(){
     // rendering the board
    // console.log(' 1 |2| 3');
     console.log(`1 ${board[0]}|${board[1]}|${board[2]}`);
     console.log(' --|-|--');
     console.log(`2 ${board[3]}|${board[4]}|${board[5]}`);
     console.log(' --|-|--');
     console.log(`3 ${board[6]}|${board[7]}|${board[8]}`);

}
//what goes in a turn
//have to chose empty space
//put x or o
//check if we won or not
//change the turn

function gameplayLoop() {
    while (!winner) {

    }
}