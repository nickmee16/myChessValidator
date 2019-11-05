var displayHistoryElement = [];
var history = [];
for (let i = 1; i <= 8; i++) {
    displayHistoryElement[i] = document.getElementById("history-value" + i);
}
for (let i = 0; i <= 7; i++) {
    history[i] = "";
}


var moveWrongArray = [];
var lastMoveArray = [];

var chessBoard = [
    ['rB', 'nB', 'bB', 'qB', 'kB', 'bB', 'nB', 'rB'],
    ['pB', 'pB', 'pB', 'pB', 'pB', 'pB', 'pB', 'pB'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['pW', 'pW', 'pW', 'pW', 'pW', 'pW', 'pW', 'pW'],
    ['rW', 'nW', 'bW', 'qW', 'kW', 'bW', 'nW', 'rW'],
];


function enterValue() {
    var move = document.getElementById("myMove").value;
    for (let i = 7; i >= 1; i--) {
        history[i] = history[i - 1];
    }
    history[1] = move;

    for (let i = 1; i <= 8; i++) {
        displayHistoryElement[i].innerHTML = history[i - 1];
    }

    var rowW = move.charAt(1);
    if (rowW > 0 && rowW < 9) {
        rowW = 8 - rowW;
    } else {
        moveWrongArray.push(move);
    }
    var columnW = move.charAt(0);
    if (columnW === 'a') {
        columnW = 0;
    } else if (columnW === 'b') {
        columnW = 1;
    } else if (columnW === 'c') {
        columnW = 2;
    } else if (columnW === 'd') {
        columnW = 3;
    } else if (columnW === 'e') {
        columnW = 4;
    } else if (columnW === 'f') {
        columnW = 5;
    } else if (columnW === 'g') {
        columnW = 6;
    } else if (columnW === 'h') {
        columnW = 7;
    } else {
        moveWrongArray.push(move);
    }

    var rowWDest = move.charAt(4);
    if (rowWDest > 0 && rowWDest < 9) {
        rowWDest = 8 - rowWDest;
    } else {
        moveWrongArray.push(move);
    }
    var columnWDest = move.charAt(3);
    if (columnWDest === 'a') {
        columnWDest = 0;
    } else if (columnWDest === 'b') {
        columnWDest = 1;
    } else if (columnWDest === 'c') {
        columnWDest = 2;
    } else if (columnWDest === 'd') {
        columnWDest = 3;
    } else if (columnWDest === 'e') {
        columnWDest = 4;
    } else if (columnWDest === 'f') {
        columnWDest = 5;
    } else if (columnWDest === 'g') {
        columnWDest = 6;
    } else if (columnWDest === 'h') {
        columnWDest = 7;
    } else {
        moveWrongArray.push(move);
    }

    var rowB = move.charAt(7);
    if (rowB > 0 && rowB < 9) {
        rowB = 8 - rowB;
    } else {
        moveWrongArray.push(move);
    }
    var columnB = move.charAt(6);
    if (columnB === 'a') {
        columnB = 0;
    } else if (columnB === 'b') {
        columnB = 1;
    } else if (columnB === 'c') {
        columnB = 2;
    } else if (columnB === 'd') {
        columnB = 3;
    } else if (columnB === 'e') {
        columnB = 4;
    } else if (columnB === 'f') {
        columnB = 5;
    } else if (columnB === 'g') {
        columnB = 6;
    } else if (columnB === 'h') {
        columnB = 7;
    } else {
        moveWrongArray.push(move);
    }

    var rowBDest = move.charAt(10);
    if (rowBDest > 0 && rowBDest < 9) {
        rowBDest = 8 - rowBDest;
    } else {
        moveWrongArray.push(move);
    }
    var columnBDest = move.charAt(9);
    if (columnBDest === 'a') {
        columnBDest = 0;
    } else if (columnBDest === 'b') {
        columnBDest = 1;
    } else if (columnBDest === 'c') {
        columnBDest = 2;
    } else if (columnBDest === 'd') {
        columnBDest = 3;
    } else if (columnBDest === 'e') {
        columnBDest = 4;
    } else if (columnBDest === 'f') {
        columnBDest = 5;
    } else if (columnBDest === 'g') {
        columnBDest = 6;
    } else if (columnBDest === 'h') {
        columnBDest = 7;
    } else {
        moveWrongArray.push(move);
    }

    lastMoveArray.unshift(move);


    if (chessBoard[rowW][columnW] == 'pW') {
        for (i = rowW; i > rowWDest; i--) {
            var originalPlace = chessBoard[6][columnW];
            if (rowW - rowWDest <= 0 || rowW - rowWDest >= 3 || rowW < rowWDest || (originalPlace != chessBoard[rowW][columnW] && (rowW - rowWDest == 2))) {
                moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                break;
            } else if (chessBoard[rowWDest][columnWDest] != '-') {
                if ((Math.abs(columnW - columnWDest) == 1) && chessBoard[rowWDest][columnWDest].charAt(1) == 'B') {
                    var positionNew = '-';
                    chessBoard[i - 1][columnWDest] = chessBoard[i][columnW];
                    chessBoard[i][columnW] = positionNew;
                    break;
                } else {
                    moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                    break;
                }
            } else if (chessBoard[rowWDest][columnWDest] == '-') {
                if (originalPlace == chessBoard[rowW][columnW] && columnW == columnWDest && ((rowW - rowWDest == 2) || (rowW - rowWDest == 1))) {
                    var positionNew = chessBoard[i][columnW];
                    chessBoard[i][columnW] = chessBoard[i - 1][columnWDest];
                    chessBoard[i - 1][columnWDest] = positionNew;
                } else if (originalPlace != chessBoard[rowW][columnW] && columnW == columnWDest && ((rowW - rowWDest == 1))) {
                    var positionNew = chessBoard[i][columnW];
                    chessBoard[i][columnW] = chessBoard[i - 1][columnWDest];
                    chessBoard[i - 1][columnWDest] = positionNew;
                } else if (chessBoard[i - 1][columnWDest] == '-' && rowWDest == 0) {
                    chessBoard[rowW][columnW] = '-';
                    chessBoard[rowWDest][columnWDest] = 'qW';
                } else if (lastMoveArray[1].charAt(6) == lastMoveArray[1].charAt(9) && lastMoveArray[1].charAt(9) == move.charAt(3) && lastMoveArray[1].charAt(7) == '7' && lastMoveArray[1].charAt(10) == '5'
                    && chessBoard[rowW][columnWDest] == 'pB') {
                    var positionNew = '-';
                    chessBoard[rowWDest][columnWDest] = chessBoard[rowW][columnW];
                    chessBoard[rowW][columnWDest] = positionNew;
                    chessBoard[rowW][columnW] = positionNew;
                } else {
                    moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                    break;
                }
            } else if ((rowW - rowWDest == 2) && originalPlace != chessBoard[rowW][columnW]) {
                moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                break;
            } else {
                moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
            }
        }


    } else if (chessBoard[rowW][columnW] == 'rW') {
        if (columnW == columnWDest && rowW < rowWDest) {
            for (i = rowW; i < rowWDest; i++) {
                if (chessBoard[i + 1][columnWDest] != '-') {
                    if (chessBoard[i + 1][columnWDest].charAt(1) == 'B' && i + 1 == rowWDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][columnWDest] = chessBoard[i][columnW];
                        chessBoard[i][columnW] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowW][i];
                    chessBoard[i][columnW] = chessBoard[i + 1][columnWDest];
                    chessBoard[i + 1][columnWDest] = positionNew;
                }
            }
        } else if (columnW == columnWDest && rowW > rowWDest) {
            for (i = rowW; i > rowWDest; i--) {
                if (chessBoard[i - 1][columnWDest] != '-') {
                    if (chessBoard[i - 1][columnWDest].charAt(1) == 'B' && i - 1 == rowWDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][columnWDest] = chessBoard[i][columnW];
                        chessBoard[i][columnW] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowW][i];
                    chessBoard[i][columnW] = chessBoard[i - 1][columnWDest];
                    chessBoard[i - 1][columnWDest] = positionNew;
                }
            }
        } else if (rowW == rowWDest && columnW < columnWDest) {
            for (i = columnW; i < columnWDest; i++) {
                if (chessBoard[rowWDest][i + 1] != '-') {
                    if (chessBoard[rowWDest][i + 1].charAt(1) == 'B' && i + 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[rowWDest][i + 1] = chessBoard[rowW][i];
                        chessBoard[rowW][i] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowW][i];
                    chessBoard[rowW][i] = chessBoard[rowWDest][i + 1];
                    chessBoard[rowWDest][i + 1] = positionNew;
                }
            }
        } else if (rowW == rowWDest && columnW > columnWDest) {
            for (i = columnW; i > columnWDest; i--) {
                if (chessBoard[rowWDest][i - 1] != '-') {
                    if (chessBoard[rowWDest][i - 1].charAt(1) == 'B' && i - 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[rowWDest][i - 1] = chessBoard[rowW][i];
                        chessBoard[rowW][i] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowW][i];
                    chessBoard[rowW][i] = chessBoard[rowWDest][i - 1];
                    chessBoard[rowWDest][i - 1] = positionNew;
                }
            }
        }


    } else if (chessBoard[rowW][columnW] == 'nW') {
        if ((Math.abs(rowW - rowWDest) == 1) && (Math.abs(columnW - columnWDest) == 2)) {
            if (chessBoard[rowWDest][columnWDest] == '-') {
                var positionNew = chessBoard[rowW][columnW];
                chessBoard[rowW][columnW] = chessBoard[rowWDest][columnWDest];
                chessBoard[rowWDest][columnWDest] = positionNew;
            } else if (chessBoard[rowWDest][columnWDest] != '-' && chessBoard[rowWDest][columnWDest].charAt(1) != 'W') {
                var positionNew = '-';
                chessBoard[rowW][columnW] = chessBoard[rowWDest][columnWDest];
                chessBoard[rowWDest][columnWDest] = positionNew;
            } else {
                moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
            }
        } else if ((Math.abs(rowW - rowWDest) == 2) && (Math.abs(columnW - columnWDest) == 1)) {
            if (chessBoard[rowWDest][columnWDest] == '-') {
                var positionNew = chessBoard[rowW][columnW];
                chessBoard[rowW][columnW] = chessBoard[rowWDest][columnWDest];
                chessBoard[rowWDest][columnWDest] = positionNew;
            } else if (chessBoard[rowWDest][columnWDest] != '-' && chessBoard[rowWDest][columnWDest].charAt(1) != 'W') {
                var positionNew = '-';
                chessBoard[rowWDest][columnWDest] = chessBoard[rowW][columnW];
                chessBoard[rowW][columnW] = positionNew;
            } else {
                moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
            }
        }


    } else if (chessBoard[rowW][columnW] == 'bW') {
        if (columnWDest - columnW == rowWDest - rowW
            && (columnW < columnWDest && rowW < rowWDest)) {
            for (let i = rowW, y = columnW; i < rowWDest, y < columnWDest; i++ , y++) {
                if (chessBoard[i + 1][y + 1] != '-') {
                    if (chessBoard[i + 1][y + 1].charAt(1) == 'B' && i + 1 == rowWDest && y + 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][y + 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i + 1][y + 1];
                    chessBoard[i + 1][y + 1] = positionNew;
                }
            }
        } else if (columnWDest - columnW == rowW - rowWDest
            && (columnW < columnWDest && rowW > rowWDest)) {
            for (let i = rowW, y = columnW; i > rowWDest, y < columnWDest; i-- , y++) {
                if (chessBoard[i - 1][y + 1] != '-') {
                    if (chessBoard[i - 1][y + 1].charAt(1) == 'B' && i - 1 == rowWDest && y + 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][y + 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i - 1][y - 1];
                    chessBoard[i - 1][y + 1] = positionNew;
                }
            }
        } else if (columnW - columnWDest == rowWDest - rowW
            && (columnW > columnWDest && rowW < rowWDest)) {
            for (let i = rowW, y = columnW; i < rowWDest, y > columnWDest; i++ , y--) {
                if (chessBoard[i + 1][y - 1] != '-') {
                    if (chessBoard[i + 1][y - 1].charAt(1) == 'B' && i + 1 == rowWDest && y - 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][y - 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i + 1][y - 1];
                    chessBoard[i + 1][y - 1] = positionNew;
                }
            }
        } else if (columnW - columnWDest == rowW - rowWDest
            && (columnW > columnWDest && rowW > rowWDest)) {
            for (let i = rowW, y = columnW; i > rowWDest, y > columnWDest; i-- , y--) {
                if (chessBoard[i - 1][y - 1] != '-') {
                    if (chessBoard[i - 1][y - 1].charAt(1) == 'B' && i - 1 == rowWDest && y - 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][y - 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i - 1][y - 1];
                    chessBoard[i - 1][y - 1] = positionNew;
                }
            }
        } else {
            moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
        }


    } else if (chessBoard[rowW][columnW] == 'qW') {
        if (columnW == columnWDest && rowW < rowWDest) {
            for (i = rowW; i < rowWDest; i++) {
                if (chessBoard[i + 1][columnWDest] != '-') {
                    if (chessBoard[i + 1][columnWDest].charAt(1) == 'B' && i + 1 == rowWDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][columnWDest] = chessBoard[i][columnW];
                        chessBoard[i][columnW] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowW][i];
                    chessBoard[i][columnW] = chessBoard[i + 1][columnWDest];
                    chessBoard[i + 1][columnWDest] = positionNew;
                }
            }
        } else if (columnW == columnWDest && rowW > rowWDest) {
            for (i = rowW; i > rowWDest; i--) {
                if (chessBoard[i - 1][columnWDest] != '-') {
                    if (chessBoard[i - 1][columnWDest].charAt(1) == 'B' && i - 1 == rowWDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][columnWDest] = chessBoard[i][columnW];
                        chessBoard[i][columnW] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowW][i];
                    chessBoard[i][columnW] = chessBoard[i - 1][columnWDest];
                    chessBoard[i - 1][columnWDest] = positionNew;
                }
            }
        } else if (rowW == rowWDest && columnW < columnWDest) {
            for (i = columnW; i < columnWDest; i++) {
                if (chessBoard[rowWDest][i + 1] != '-') {
                    if (chessBoard[rowWDest][i + 1].charAt(1) == 'B' && i + 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[rowWDest][i + 1] = chessBoard[rowW][i];
                        chessBoard[rowW][i] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowW][i];
                    chessBoard[rowW][i] = chessBoard[rowWDest][i + 1];
                    chessBoard[rowWDest][i + 1] = positionNew;
                }
            }
        } else if (rowW == rowWDest && columnW > columnWDest) {
            for (i = columnW; i > columnWDest; i--) {
                if (chessBoard[rowWDest][i - 1] != '-') {
                    if (chessBoard[rowWDest][i - 1].charAt(1) == 'B' && i - 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[rowWDest][i - 1] = chessBoard[rowW][i];
                        chessBoard[rowW][i] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowW][i];
                    chessBoard[rowW][i] = chessBoard[rowWDest][i - 1];
                    chessBoard[rowWDest][i - 1] = positionNew;
                }
            }
        } else if (columnWDest - columnW == rowWDest - rowW
            && (columnW < columnWDest && rowW < rowWDest)) {
            for (let i = rowW, y = columnW; i < rowWDest, y < columnWDest; i++ , y++) {
                if (chessBoard[i + 1][y + 1] != '-') {
                    if (chessBoard[i + 1][y + 1].charAt(1) == 'B' && i + 1 == rowWDest && y + 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][y + 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i + 1][y + 1];
                    chessBoard[i + 1][y + 1] = positionNew;
                }
            }
        } else if (columnWDest - columnW == rowW - rowWDest
            && (columnW < columnWDest && rowW > rowWDest)) {
            for (let i = rowW, y = columnW; i > rowWDest, y < columnWDest; i-- , y++) {
                if (chessBoard[i - 1][y + 1] != '-') {
                    if (chessBoard[i - 1][y + 1].charAt(1) == 'B' && i - 1 == rowWDest && y + 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][y + 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i - 1][y - 1];
                    chessBoard[i - 1][y + 1] = positionNew;
                }
            }
        } else if (columnW - columnWDest == rowWDest - rowW
            && (columnW > columnWDest && rowW < rowWDest)) {
            for (let i = rowW, y = columnW; i < rowWDest, y > columnWDest; i++ , y--) {
                if (chessBoard[i + 1][y - 1] != '-') {
                    if (chessBoard[i + 1][y - 1].charAt(1) == 'B' && i + 1 == rowWDest && y - 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][y - 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i + 1][y - 1];
                    chessBoard[i + 1][y - 1] = positionNew;
                }
            }
        } else if (columnW - columnWDest == rowW - rowWDest
            && (columnW > columnWDest && rowW > rowWDest)) {
            for (let i = rowW, y = columnW; i > rowWDest, y > columnWDest; i-- , y--) {
                if (chessBoard[i - 1][y - 1] != '-') {
                    if (chessBoard[i - 1][y - 1].charAt(1) == 'B' && i - 1 == rowWDest && y - 1 == columnWDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][y - 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i - 1][y - 1];
                    chessBoard[i - 1][y - 1] = positionNew;
                }
            }
        } else {
            moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
        }


    } else if (chessBoard[rowW][columnW] == 'kW') {
        if (move.charAt(12) == 'W' && Math.abs(columnW - columnWDest) > 0 && rowW == rowWDest
            && chessBoard[rowW][columnW] == chessBoard[7][4]) {
            if (Math.abs(columnW - columnWDest) > 1
                && columnW > columnWDest && chessBoard[7][0] == 'rW') {
                for (let i = 1; i < 4; i++) {
                    if (chessBoard[rowWDest][i] == '-') {
                        chessBoard[7][4] = '-';
                        chessBoard[7][0] = '-';
                        chessBoard[7][columnWDest] = 'kW';
                        chessBoard[7][columnWDest + 1] = 'rW';
                    }
                }
            } else if (Math.abs(columnW - columnWDest) > 0 &&
                columnW < columnWDest && chessBoard[7][7] == 'rW') {
                for (let i = 5; i < 7; i++) {
                    if (chessBoard[rowWDest][i] == '-') {
                        chessBoard[7][4] = '-';
                        chessBoard[7][7] = '-';
                        chessBoard[7][columnWDest] = 'kW';
                        chessBoard[7][columnWDest - 1] = 'rW';
                    }
                }
            } else {
                moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
            }
        } else if (Math.abs(columnW - columnWDest) <= 1) {
            if ((Math.abs(rowW - rowWDest) == 1) && (Math.abs(columnW - columnWDest) == 0)
                || (Math.abs(rowW - rowWDest) == 0) && (Math.abs(columnW - columnWDest) == 1)
                || (Math.abs(rowW - rowWDest) == 1) && (Math.abs(columnW - columnWDest) == 1)) {
                if (chessBoard[rowWDest][columnWDest] != '-') {
                    if (chessBoard[rowWDest][columnWDest].charAt(1) == 'B') {
                        var positionNew = '-';
                        chessBoard[rowW][columnW] = chessBoard[rowWDest][columnWDest];
                        chessBoard[rowWDest][columnWDest] = positionNew;
                    } else {
                        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                    }
                } else if (chessBoard[rowWDest][columnWDest] == '-') {
                    var positionNew = chessBoard[rowW][columnW];
                    chessBoard[rowW][columnW] = chessBoard[rowWDest][columnWDest];
                    chessBoard[rowWDest][columnWDest] = positionNew;
                } else {
                    moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
                }

            }
        } else {
            moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
        }

    } else if (chessBoard[rowW][columnW] == '-') {
        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));

    } else {
        moveWrongArray.push(move.charAt(0) + move.charAt(1) + move.charAt(2) + move.charAt(3) + move.charAt(4));
    }



    if (chessBoard[rowB][columnB] == 'pB') {
        for (i = rowB; i < rowBDest; i++) {
            var originalPlace = chessBoard[1][columnB];
            if (rowBDest - rowB <= 0 || rowBDest - rowB >= 3 || rowB > rowBDest || (originalPlace != chessBoard[rowB][columnB] && (rowBDest - rowB == 2))) {
                moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                break;
            } else if (chessBoard[rowBDest][columnBDest] != '-') {
                if ((Math.abs(columnB - columnBDest) == 1) && chessBoard[rowBDest][columnBDest].charAt(1) == 'W') {
                    var positionNew = '-';
                    chessBoard[i - 1][columnBDest] = chessBoard[i][columnB];
                    chessBoard[i][columnB] = positionNew;
                    break;
                } else {
                    moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                    break;
                }
            } else if (chessBoard[rowBDest][columnBDest] == '-') {
                if (originalPlace == chessBoard[rowB][columnB] && columnB == columnBDest && ((rowBDest - rowB == 2) || (rowBDest - rowB == 1))) {
                    var positionNew = chessBoard[i][columnB];
                    chessBoard[i][columnB] = chessBoard[i + 1][columnBDest];
                    chessBoard[i + 1][columnBDest] = positionNew;
                } else if (originalPlace != chessBoard[rowB][columnB] && columnB == columnBDest && ((rowBDest - rowB == 1))) {
                    var positionNew = chessBoard[i][columnB];
                    chessBoard[i][columnB] = chessBoard[i + 1][columnBDest];
                    chessBoard[i + 1][columnBDest] = positionNew;
                } else if (chessBoard[i + 1][columnBDest] == '-' && rowBDest == 7) {
                    chessBoard[rowB][columnB] = '-';
                    chessBoard[rowBDest][columnBDest] = 'qB';
                } else if (lastMoveArray[1].charAt(0) == lastMoveArray[1].charAt(3) && lastMoveArray[1].charAt(3) == move.charAt(9) && lastMoveArray[1].charAt(1) == '2' && lastMoveArray[1].charAt(4) == '4'
                    && chessBoard[rowB][columnBDest] == 'pW') {
                    var positionNew = '-';
                    chessBoard[rowBDest][columnBDest] = chessBoard[rowB][columnB];
                    chessBoard[rowB][columnBDest] = positionNew;
                    chessBoard[rowB][columnB] = positionNew;
                } else {
                    moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                    break;
                }
            } else if ((rowBDest - rowB == 2) && originalPlace != chessBoard[rowB][columnB]) {
                moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                break;
            } else {
                moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
            }
        }


    } else if (chessBoard[rowB][columnB] == 'rB') {
        if (columnB == columnBDest && rowB < rowBDest) {
            for (i = rowB; i < rowBDest; i++) {
                if (chessBoard[i + 1][columnBDest] != '-') {
                    if (chessBoard[i + 1][columnBDest].charAt(1) == 'W' && i + 1 == rowBDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][columnBDest] = chessBoard[i][columnB];
                        chessBoard[i][columnB] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowB][i];
                    chessBoard[i][columnB] = chessBoard[i + 1][columnBDest];
                    chessBoard[i + 1][columnBDest] = positionNew;
                }
            }
        } else if (columnB == columnBDest && rowB > rowBDest) {
            for (i = rowB; i > rowBDest; i--) {
                if (chessBoard[i - 1][columnBDest] != '-') {
                    if (chessBoard[i - 1][columnBDest].charAt(1) == 'W' && i - 1 == rowBDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][columnBDest] = chessBoard[i][columnB];
                        chessBoard[i][columnB] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowB][i];
                    chessBoard[i][columnB] = chessBoard[i - 1][columnBDest];
                    chessBoard[i - 1][columnBDest] = positionNew;
                }
            }
        } else if (rowB == rowBDest && columnB < columnBDest) {
            for (i = columnB; i < columnBDest; i++) {
                if (chessBoard[rowBDest][i + 1] != '-') {
                    if (chessBoard[rowBDest][i + 1].charAt(1) == 'W' && i + 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[rowBDest][i + 1] = chessBoard[rowB][i];
                        chessBoard[rowB][i] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowB][i];
                    chessBoard[rowB][i] = chessBoard[rowBDest][i + 1];
                    chessBoard[rowBDest][i + 1] = positionNew;
                }
            }
        } else if (rowB == rowBDest && columnB > columnBDest) {
            for (i = columnB; i > columnBDest; i--) {
                if (chessBoard[rowBDest][i - 1] != '-') {
                    if (chessBoard[rowBDest][i - 1].charAt(1) == 'W' && i - 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[rowBDest][i - 1] = chessBoard[rowB][i];
                        chessBoard[rowB][i] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowB][i];
                    chessBoard[rowB][i] = chessBoard[rowBDest][i - 1];
                    chessBoard[rowBDest][i - 1] = positionNew;
                }
            }
        }


    } else if (chessBoard[rowB][columnB] == 'nB') {
        if ((Math.abs(rowB - rowBDest) == 1) && (Math.abs(columnB - columnBDest) == 2)) {
            if (chessBoard[rowBDest][columnBDest] == '-') {
                var positionNew = chessBoard[rowB][columnB];
                chessBoard[rowB][columnB] = chessBoard[rowBDest][columnBDest];
                chessBoard[rowBDest][columnBDest] = positionNew;
            } else if (chessBoard[rowBDest][columnBDest] != '-' && chessBoard[rowBDest][columnBDest].charAt(1) != 'B') {
                var positionNew = '-';
                chessBoard[rowB][columnB] = chessBoard[rowBDest][columnBDest];
                chessBoard[rowBDest][columnBDest] = positionNew;
            } else {
                moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
            }
        } else if ((Math.abs(rowB - rowBDest) == 2) && (Math.abs(columnB - columnBDest) == 1)) {
            if (chessBoard[rowBDest][columnBDest] == '-') {
                var positionNew = chessBoard[rowB][columnB];
                chessBoard[rowB][columnB] = chessBoard[rowBDest][columnBDest];
                chessBoard[rowBDest][columnBDest] = positionNew;
            } else if (chessBoard[rowBDest][columnBDest] != '-' && chessBoard[rowBDest][columnBDest].charAt(1) != 'B') {
                var positionNew = '-';
                chessBoard[rowB][columnB] = chessBoard[rowBDest][columnBDest];
                chessBoard[rowBDest][columnBDest] = positionNew;
            } else {
                moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
            }
        }


    } else if (chessBoard[rowB][columnB] == 'bB') {
        if (columnBDest - columnB == rowBDest - rowB
            && (columnB < columnBDest && rowB < rowBDest)) {
            for (let i = rowB, y = columnB; i < rowBDest, y < columnBDest; i++ , y++) {
                if (chessBoard[i + 1][y + 1] != '-') {
                    if (chessBoard[i + 1][y + 1].charAt(1) == 'W' && i + 1 == rowBDest && y + 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][y + 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i + 1][y + 1];
                    chessBoard[i + 1][y + 1] = positionNew;
                }
            }
        } else if (columnBDest - columnB == rowB - rowBDest
            && (columnB < columnBDest && rowB > rowBDest)) {
            for (let i = rowB, y = columnB; i > rowBDest, y < columnBDest; i-- , y++) {
                if (chessBoard[i - 1][y + 1] != '-') {
                    if (chessBoard[i - 1][y + 1].charAt(1) == 'W' && i - 1 == rowBDest && y + 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][y + 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i - 1][y - 1];
                    chessBoard[i - 1][y + 1] = positionNew;
                }
            }
        } else if (columnB - columnBDest == rowBDest - rowB
            && (columnB > columnBDest && rowB < rowBDest)) {
            for (let i = rowB, y = columnB; i < rowBDest, y > columnBDest; i++ , y--) {
                if (chessBoard[i + 1][y - 1] != '-') {
                    if (chessBoard[i + 1][y - 1].charAt(1) == 'W' && i + 1 == rowBDest && y - 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][y - 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i + 1][y - 1];
                    chessBoard[i + 1][y - 1] = positionNew;
                }
            }
        } else if (columnB - columnBDest == rowB - rowBDest
            && (columnB > columnBDest && rowB > rowBDest)) {
            for (let i = rowB, y = columnB; i > rowBDest, y > columnBDest; i-- , y--) {
                if (chessBoard[i - 1][y - 1] != '-') {
                    if (chessBoard[i - 1][y - 1].charAt(1) == 'W' && i - 1 == rowBDest && y - 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][y - 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i - 1][y - 1];
                    chessBoard[i - 1][y - 1] = positionNew;
                }
            }
        } else {
            moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
        }


    } else if (chessBoard[rowB][columnB] == 'qB') {
        if (columnB == columnBDest && rowB < rowBDest) {
            for (i = rowB; i < rowBDest; i++) {
                if (chessBoard[i + 1][columnBDest] != '-') {
                    if (chessBoard[i + 1][columnBDest].charAt(1) == 'W' && i + 1 == rowBDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][columnBDest] = chessBoard[i][columnB];
                        chessBoard[i][columnB] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowB][i];
                    chessBoard[i][columnB] = chessBoard[i + 1][columnBDest];
                    chessBoard[i + 1][columnBDest] = positionNew;
                }
            }
        } else if (columnB == columnBDest && rowB > rowBDest) {
            for (i = rowB; i > rowBDest; i--) {
                if (chessBoard[i - 1][columnBDest] != '-') {
                    if (chessBoard[i - 1][columnBDest].charAt(1) == 'W' && i - 1 == rowBDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][columnBDest] = chessBoard[i][columnB];
                        chessBoard[i][columnB] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowB][i];
                    chessBoard[i][columnB] = chessBoard[i - 1][columnBDest];
                    chessBoard[i - 1][columnBDest] = positionNew;
                }
            }
        } else if (rowB == rowBDest && columnB < columnBDest) {
            for (i = columnB; i < columnBDest; i++) {
                if (chessBoard[rowBDest][i + 1] != '-') {
                    if (chessBoard[rowBDest][i + 1].charAt(1) == 'W' && i + 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[rowBDest][i + 1] = chessBoard[rowB][i];
                        chessBoard[rowB][i] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowB][i];
                    chessBoard[rowB][i] = chessBoard[rowBDest][i + 1];
                    chessBoard[rowBDest][i + 1] = positionNew;
                }
            }
        } else if (rowB == rowBDest && columnB > columnBDest) {
            for (i = columnB; i > columnBDest; i--) {
                if (chessBoard[rowBDest][i - 1] != '-') {
                    if (chessBoard[rowBDest][i - 1].charAt(1) == 'W' && i - 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[rowBDest][i - 1] = chessBoard[rowB][i];
                        chessBoard[rowB][i] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[rowB][i];
                    chessBoard[rowB][i] = chessBoard[rowBDest][i - 1];
                    chessBoard[rowBDest][i - 1] = positionNew;
                }
            }
        } else if (columnBDest - columnB == rowBDest - rowB
            && (columnB < columnBDest && rowB < rowBDest)) {
            for (let i = rowB, y = columnB; i < rowBDest, y < columnBDest; i++ , y++) {
                if (chessBoard[i + 1][y + 1] != '-') {
                    if (chessBoard[i + 1][y + 1].charAt(1) == 'W' && i + 1 == rowBDest && y + 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][y + 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i + 1][y + 1];
                    chessBoard[i + 1][y + 1] = positionNew;
                }
            }
        } else if (columnBDest - columnB == rowB - rowBDest
            && (columnB < columnBDest && rowB > rowBDest)) {
            for (let i = rowB, y = columnB; i > rowBDest, y < columnBDest; i-- , y++) {
                if (chessBoard[i - 1][y + 1] != '-') {
                    if (chessBoard[i - 1][y + 1].charAt(1) == 'W' && i - 1 == rowBDest && y + 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][y + 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i - 1][y - 1];
                    chessBoard[i - 1][y + 1] = positionNew;
                }
            }
        } else if (columnB - columnBDest == rowBDest - rowB
            && (columnB > columnBDest && rowB < rowBDest)) {
            for (let i = rowB, y = columnB; i < rowBDest, y > columnBDest; i++ , y--) {
                if (chessBoard[i + 1][y - 1] != '-') {
                    if (chessBoard[i + 1][y - 1].charAt(1) == 'W' && i + 1 == rowBDest && y - 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[i + 1][y - 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i + 1][y - 1];
                    chessBoard[i + 1][y - 1] = positionNew;
                }
            }
        } else if (columnB - columnBDest == rowB - rowBDest
            && (columnB > columnBDest && rowB > rowBDest)) {
            for (let i = rowB, y = columnB; i > rowBDest, y > columnBDest; i-- , y--) {
                if (chessBoard[i - 1][y - 1] != '-') {
                    if (chessBoard[i - 1][y - 1].charAt(1) == 'W' && i - 1 == rowBDest && y - 1 == columnBDest) {
                        var positionNew = '-';
                        chessBoard[i - 1][y - 1] = chessBoard[i][y];
                        chessBoard[i][y] = positionNew;
                        break;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                        break;
                    }
                } else {
                    var positionNew = chessBoard[i][y];
                    chessBoard[i][y] = chessBoard[i - 1][y - 1];
                    chessBoard[i - 1][y - 1] = positionNew;
                }
            }
        } else {
            moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
        }


    } else if (chessBoard[rowB][columnB] == 'kB') {
        if (move.charAt(12) == 'W' && Math.abs(columnB - columnBDest) > 0 && rowB == rowBDest
            && chessBoard[rowB][columnB] == chessBoard[0][4]) {
            if (Math.abs(columnB - columnBDest) > 1
                && columnB > columnBDest && chessBoard[0][0] == 'rB') {
                for (let i = 1; i < 4; i++) {
                    if (chessBoard[rowBDest][i] == '-') {
                        chessBoard[0][4] = '-';
                        chessBoard[0][0] = '-';
                        chessBoard[0][columnBDest] = 'kB';
                        chessBoard[0][columnBDest + 1] = 'rB';
                    }
                }
            } else if (Math.abs(columnB - columnBDest) > 0 &&
                columnB < columnBDest && chessBoard[0][7] == 'rB') {
                for (let i = 5; i < 7; i++) {
                    if (chessBoard[rowBDest][i] == '-') {
                        chessBoard[0][4] = '-';
                        chessBoard[0][7] = '-';
                        chessBoard[0][columnBDest] = 'kB';
                        chessBoard[0][columnBDest - 1] = 'rB';
                    }
                }
            } else {
                moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
            }
        } else if (Math.abs(columnB - columnBDest) <= 1) {
            if ((Math.abs(rowB - rowBDest) == 1) && (Math.abs(columnB - columnBDest) == 0)
                || (Math.abs(rowB - rowBDest) == 0) && (Math.abs(columnB - columnBDest) == 1)
                || (Math.abs(rowB - rowBDest) == 1) && (Math.abs(columnB - columnBDest) == 1)) {
                if (chessBoard[rowBDest][columnBDest] != '-') {
                    if (chessBoard[rowBDest][columnBDest].charAt(1) == 'W') {
                        var positionNew = '-';
                        chessBoard[rowB][columnB] = chessBoard[rowBDest][columnBDest];
                        chessBoard[rowBDest][columnBDest] = positionNew;
                    } else {
                        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                    }
                } else if (chessBoard[rowBDest][columnBDest] == '-') {
                    var positionNew = chessBoard[rowB][columnB];
                    chessBoard[rowB][columnB] = chessBoard[rowBDest][columnBDest];
                    chessBoard[rowBDest][columnBDest] = positionNew;
                } else {
                    moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
                }

            }
        } else {
            moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
        }


    } else if (chessBoard[rowB][columnB] == '-') {
        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));


    } else {
        moveWrongArray.push(move.charAt(6) + move.charAt(7) + move.charAt(8) + move.charAt(9) + move.charAt(10));
    }

    console.table(chessBoard);
    console.log(moveWrongArray);
}

function result() {
    var newValue = document.getElementById("myResylt");
    if (moveWrongArray != "undefined" && moveWrongArray != null && moveWrongArray.length != null && moveWrongArray.length > 0) {
        newValue.innerHTML = "Something is wrong with move: " + moveWrongArray[0] + "!";
        moveWrongArray = [];
        lastMoveArray = [];
        chessBoard = [
            ['rB', 'nB', 'bB', 'qB', 'kB', 'bB', 'nB', 'rB'],
            ['pB', 'pB', 'pB', 'pB', 'pB', 'pB', 'pB', 'pB'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['pW', 'pW', 'pW', 'pW', 'pW', 'pW', 'pW', 'pW'],
            ['rW', 'nW', 'bW', 'qW', 'kW', 'bW', 'nW', 'rW'],
        ];
    } else {
        newValue.innerHTML = "All moves are valid!";
        moveWrongArray = [];
        lastMoveArray = [];
        chessBoard = [
            ['rB', 'nB', 'bB', 'qB', 'kB', 'bB', 'nB', 'rB'],
            ['pB', 'pB', 'pB', 'pB', 'pB', 'pB', 'pB', 'pB'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['pW', 'pW', 'pW', 'pW', 'pW', 'pW', 'pW', 'pW'],
            ['rW', 'nW', 'bW', 'qW', 'kW', 'bW', 'nW', 'rW'],
        ];
    }
}