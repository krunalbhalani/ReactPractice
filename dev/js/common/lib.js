import util from './util'

const objUtil = new util();

const returnBlock = (cell) => {
    return Math.floor(objUtil.returnRow(cell) / 3) * 3 + Math.floor(objUtil.returnCol(cell) / 3);
}


const isPossibleNumber = (cell,number,sudoku) => {
    var row = objUtil.returnRow(cell);
    var col = objUtil.returnCol(cell);
    var block = returnBlock(cell);
    return objUtil.isPossibleRow(number,row,sudoku) && objUtil.isPossibleCol(number,col,sudoku) && objUtil.isPossibleBlock(number,block,sudoku);
}


const isSolvedSudoku= (sudoku) => {
    for (var i=0; i<=8; i++) {
        if (!objUtil.isCorrectBlock(i,sudoku) || !objUtil.isCorrectRow(i,sudoku) || !objUtil.isCorrectCol(i,sudoku)) {
            return false;
        }
    }
    return true;
}


const determinePossibleValues = (cell,sudoku) => {
    var possible = new Array();
    for (var i=1; i<=9; i++) {
        if (isPossibleNumber(cell,i,sudoku)) {
            possible.unshift(i);
        }
    }
    return possible;
}

const scanSudokuForUnique = (sudoku) => {
    var possible = new Array();
    for (var i=0; i<=80; i++) {
        if (sudoku[i] == 0) {
            possible[i] = new Array();
            possible[i] = determinePossibleValues(i,sudoku);
            if (possible[i].length==0) {
                return false;
            }
        }
    }
    return possible;
}


const solve = (sudoku) => {
    
    if (sudoku.length !== 81) return 'Puzzle is not valid.';

    var saved = new Array();
    var savedSudoku = new Array();
    var i=0;
    var nextMove;
    var whatToTry;
    var attempt;
    while (!isSolvedSudoku(sudoku)) {
        i++;
        nextMove = scanSudokuForUnique(sudoku);
        if (nextMove == false) {
            nextMove = saved.pop();
            sudoku = savedSudoku.pop();
        }
        whatToTry = objUtil.nextRandom(nextMove);
        attempt = objUtil.determineRandomPossibleValue(nextMove,whatToTry);
        if (nextMove[whatToTry].length>1) {
            nextMove[whatToTry] = objUtil.removeAttempt(nextMove[whatToTry],attempt);
            saved.push(nextMove.slice());
            savedSudoku.push(sudoku.slice());
        }
        sudoku[whatToTry] = attempt;
    }

    return sudoku;
    
}


const showSudoku = (sudoku) => {
    var sudokuText = "";
    for (var i=0; i<=8; i++) {
        for (var j=0; j<=8; j++) {
            sudokuText+=" ";
            sudokuText+=sudoku[i*9+j];
            sudokuText+=" ";
            if (j!=8) {
                sudokuText+="|";
            }
        }
        if (i!=8) {
            sudokuText+="\n---+---+---+---+---+---+---+---+---\n";
        }
    }
    document.write("<pre>"+sudokuText+"</pre>");
}


export {solve, showSudoku};