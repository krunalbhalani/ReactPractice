export default class util{
    returnRow(cell) {
        return Math.floor(cell / 9);
    }
    
    returnCol(cell) {
        return cell % 9;
    }

    isPossibleRow (number,row,sudoku){
        for (var i=0; i<=8; i++) {
            if (sudoku[row*9+i] == number) {
                return false;
            }
        }
        return true;
    }
    
    isPossibleCol(number,col,sudoku){
        for (var i=0; i<=8; i++) {
            if (sudoku[col+9*i] == number) {
                return false;
            }
        }
        return true;
    }
    
    
    isPossibleBlock(number,block,sudoku){
        for (var i=0; i<=8; i++) {
            if (sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)] == number) {
                return false;
            }
        }
        return true;
    }

    isCorrectRow (row,sudoku) {
        var rightSequence = new Array(1,2,3,4,5,6,7,8,9);
        var rowTemp= new Array();
        for (var i=0; i<=8; i++) {
            rowTemp[i] = sudoku[row*9+i];
        }
        rowTemp.sort();
        return rowTemp.join() == rightSequence.join();
    }
    
    
    isCorrectCol (col,sudoku) {
        var rightSequence = new Array(1,2,3,4,5,6,7,8,9);
        var colTemp= new Array();
        for (var i=0; i<=8; i++) {
            colTemp[i] = sudoku[col+i*9];
        }
        colTemp.sort();
        return colTemp.join() == rightSequence.join();
    }
    
    
    isCorrectBlock (block,sudoku) {
        var rightSequence = new Array(1,2,3,4,5,6,7,8,9);
        var blockTemp= new Array();
        for (var i=0; i<=8; i++) {
            blockTemp[i] = sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)];
        }
        blockTemp.sort();
        return blockTemp.join() == rightSequence.join();
    }

    determineRandomPossibleValue (possible,cell)  {
        var randomPicked = Math.floor(Math.random() * possible[cell].length);
        return possible[cell][randomPicked];
    }

    removeAttempt(attemptArray,number) {
        var newArray = new Array();
        for (var i=0; i<attemptArray.length; i++) {
            if (attemptArray[i] != number) {
                newArray.unshift(attemptArray[i]);
            }
        }
        return newArray;
    }
    
    
    nextRandom (possible) {
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
}