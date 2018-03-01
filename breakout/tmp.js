// 10 chars to drop
let SIZE = 10;

// xy, x_vel, y_vel

let ball = [(SIZE - 2) * SIZE + SIZE / 2, 1, -1];

// [0,0,0,0,0
//  0,0,0,0,0
//  0,0,0,0,0
// ]

// [1,1,1,1,1
//  0,0,0,0,0
//  0,0,0,0,0
// ]
let board = new Array(SIZE * SIZE).fill(0).fill(1, 0, SIZE * 4);

// place ball on board
board[ball[0]] = 3;

c["onpointermove"] = e => {
  // clear out old paddle and ball

  // [1,1,1,1,1,1
  //  0,0,0,3,0,0
  //  0,0,2,2,0,0
  // ]
  board = board.map(v => v % 2);
  // [1,1,1,1,1,1
  //  0,0,0,3,0,0
  //  0,0,0,0,0,0
  // ]
  // fill new paddle location

  // 100 WIDE
  // cursor is at 72px

  // X position
  // 72 / 100  === FLOOR(SIZE * .72) === 7
  // board[(SIZE - 1 * SIZE) + 7] = 2
  // board[(SIZE - 1 * SIZE) + 7 - 1] = 2
  var i = ((SIZE - 1) * SIZE + e.x / SIZE) | 0;
  board[i] = board[i - 1] = 2;
};

var fn = () => {
  // [1,1,1,1,1,1
  //  0,0,0,3,0,0
  //  0,0,2,2,0,0
  // ]

  //XY = Y * WIDTH + X
  //X  = XY % WIDTH
  let nextX = (ball[0] + ball[1]) % SIZE;
  let nextY = ((ball[0] + ball[2] * SIZE) / SIZE) | 0;
  let nextBallBoardPosition = nextY * SIZE + nextX;

  // right or left wall || piece || padle hi
  if (!((
    (ball[(((board[nextBallBoardPosition] || nextX >= SIZE || !nextX) && 1))] *= -1) | (ball[((board[nextBallBoardPosition] || !nextY) && 2)] *= -1)
    || nextY > SIZE) && !(board[nextBallBoardPosition] = 0))) {
    board[(ball[board[ball[0]] = 0] = nextBallBoardPosition)] = 3;
    c.innerText = board.map((v, i) => !(i % 10) ? '\n' + v : v )
    //  //x[(v ? 'fill' : 'clear') + 'Rect']((i % SIZE) * SIZE, ((i / SIZE) | 0) * SIZE, SIZE, SIZE);
   // });
  }
};
setInterval(fn, 100);
