let SIZE = 10;
// x, y, x_vel, y_vel, px_width
let ball = [(SIZE - 2) * SIZE + SIZE / 2, 1, -1];
let board = new Array(SIZE * SIZE).fill(0).fill(1, 0, SIZE * 4);

// place ball on board
board[ball[0]] = 3;

c["onpointermove"] = e => {
  // clear out old paddle and ball
  board.map((v, i) => v === 2 && (board[i] = 0));
  // fill new paddle location
  board[(SIZE - 1) * SIZE + ~~(e.x / SIZE)] = board[
    (SIZE - 1) * SIZE + ~~(e.x / SIZE) - 1
  ] = 2;
};
var fn = () => {
  let nextX = (ball[0] + ball[1]) % SIZE;
  let nextY = ~~((ball[0] + ball[2] * SIZE) / SIZE);
  let jump = false;
  let nextBallBoardPosition = nextY * SIZE + nextX;

  // right or left wall || piece || padle hit
  (board[nextBallBoardPosition] || nextX >= SIZE || !nextX) &&
    ((ball[1] *= -1), (jump = 1));
  (board[nextBallBoardPosition] || !nextY) && ((ball[2] *= -1), (jump = 1));
  if (jump || nextY > SIZE) {
    board[nextBallBoardPosition] = 0;
    return fn();
  }

  board[ball[0]] = 0;
  board[(ball[0] = nextBallBoardPosition)] = 3;
  board.map((v, i) => {
    x.fillStyle = v ? "red" : "tan";
    x.fillRect((i % SIZE) * SIZE, ~~(i / SIZE) * SIZE, SIZE, SIZE);
  });
};
setInterval(fn, 100);
