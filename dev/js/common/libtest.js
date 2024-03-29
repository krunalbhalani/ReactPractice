function SudokuSolver() {

    function returnRow (cell)  {
        return Math.floor(cell / 9);
    }
    

    function returnCol(cell) {
        return cell % 9;
    }
    

    function returnBlock (cell) {
        return Math.floor(returnRow(cell) / 3) * 3 + Math.floor(returnCol(cell) / 3);
    }
    

    function isPossibleRow(number,row,sudoku) {
        for (var i=0; i<=8; i++) {
            if (sudoku[row*9+i] == number) {
                return false;
            }
        }
        return true;
    }
    

    function isPossibleCol(number,col,sudoku){
        for (var i=0; i<=8; i++) {
            if (sudoku[col+9*i] == number) {
                return false;
            }
        }
        return true;
    }
    

    function isPossibleBlock(number,block,sudoku){
        for (var i=0; i<=8; i++) {
            if (sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)] == number) {
                return false;
            }
        }
        return true;
    }
    

    function isPossibleNumber(cell,number,sudoku) {
        var row = returnRow(cell);
        var col = returnCol(cell);
        var block = returnBlock(cell);
        return isPossibleRow(number,row,sudoku) && isPossibleCol(number,col,sudoku) && isPossibleBlock(number,block,sudoku);
    }
    

    function isCorrectRow (row,sudoku) {
        var rightSequence = [1,2,3,4,5,6,7,8,9];
        var rowTemp= [];
        for (var i=0; i<=8; i++) {
            rowTemp[i] = sudoku[row*9+i];
        }
        rowTemp.sort();
        return rowTemp.join() == rightSequence.join();
    }
    

    function isCorrectCol (col,sudoku) {
        var rightSequence = [1,2,3,4,5,6,7,8,9];
        var colTemp= [];
        for (var i=0; i<=8; i++) {
            colTemp[i] = sudoku[col+i*9];
        }
        colTemp.sort();
        return colTemp.join() == rightSequence.join();
    }
    

    function isCorrectBlock (block,sudoku){
        var rightSequence = [1,2,3,4,5,6,7,8,9];
        var blockTemp= [];
        for (var i=0; i<=8; i++) {
            blockTemp[i] = sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)];
        }
        blockTemp.sort();
        return blockTemp.join() == rightSequence.join();
    }
    

    function isSolvedSudoku (sudoku) {
        for (var i=0; i<=8; i++) {
            if (!isCorrectBlock(i,sudoku) || !isCorrectRow(i,sudoku) || !isCorrectCol(i,sudoku)) {
                return false;
            }
        }
        return true;
    }
    

    function determinePossibleValues (cell,sudoku) {
        var possible = [];
        for (var i=1; i<=9; i++) {
            if (isPossibleNumber(cell,i,sudoku)) {
                possible.unshift(i);
            }
        }
        return possible;
    }
    

    function determineRandomPossibleValue(possible,cell){
        var randomPicked = Math.floor(Math.random() * possible[cell].length);
        return possible[cell][randomPicked];
    }
    

    function scanSudokuForUnique (sudoku) {
        var possible = [];
        for (var i=0; i<=80; i++) {
            if (sudoku[i] == 0) {
                possible[i] = [];
                possible[i] = determinePossibleValues(i,sudoku);
                if (possible[i].length==0) {
                    return false;
                }
            }
        }
        return possible;
    }
    

    function removeAttempt(attemptArray,number){
        var newArray = [];
        for (var i=0; i<attemptArray.length; i++) {
            if (attemptArray[i] != number) {
                newArray.unshift(attemptArray[i]);
            }
        }
        return newArray;
    }
    

    function nextRandom(possible){
        var max = 9;
        var minChoices = 0;
        for (var i=0; i<=80; i++) {
            if (possible[i]!=undefined) {
                if ((possible[i].length<=max) && (possible[i].length>0)) {
                    max = possible[i].length;
                    minChoices = i;
                }
            }
        }
        return minChoices;
    }
    

    this.solve = function (sudoku) {

        if (sudoku.length !== 81) return 'Puzzle is not valid.';

        var saved = [];
        var savedSudoku = [];
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
            whatToTry = nextRandom(nextMove);
            attempt = determineRandomPossibleValue(nextMove,whatToTry);
            if (nextMove[whatToTry].length>1) {
                nextMove[whatToTry] = removeAttempt(nextMove[whatToTry],attempt);
                saved.push(nextMove.slice());
                savedSudoku.push(sudoku.slice());
            }
            sudoku[whatToTry] = attempt;
        }
    
        return sudoku;
        
    }
    
    

    function showSudoku(sudoku){
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

}
if (typeof exports !== 'undefined') {
	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports = SudokuSolver;
	}
	exports.SudokuSolver = SudokuSolver;
} else {
	window.SudokuSolver = SudokuSolver;
}