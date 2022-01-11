



/*
//code adapted from original source @ quickprogrammingtips.com
function drawChessboard() {
    // size of each chess square
    const squareSize = `12.5`;
    // position of board's top left
    const boardTopx = 50;
    const boardTopy = 50;
    let canvas = document.getElementById("canvasSnakeboard");
    context = canvas.getContext("2d");
    for(let i=0; i<200; i++) {
      for(let j=0; j<200; j++) {
        context.fillStyle = ((i+j)%2==0) ? "#AAD750":"#A2D049";
        let xOffset = boardTopx + j*squareSize;
        let yOffset = boardTopy + i*squareSize;
        context.fillRect(xOffset, yOffset, squareSize, squareSize);
      }
    }
    // draw the border around the chessboard
    context.strokeStyle = "black";
    context.strokeRect(boardTopx, boardTopy, squareSize*8, squareSize*8)
  }
  
  // player sprite
  */