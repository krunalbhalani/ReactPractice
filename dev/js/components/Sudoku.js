import React, {Component} from 'react';
import {solve, showSudoku} from '../common/lib';

class Sudoku extends Component
{
    render(){
        
        // Valid Array
       const arr = [0,0,1,7,0,0,5,0,9,5,7,3,0,2,4,1,0,6,8,0,0,5,0,1,0,0,2,7,0,0,2,9,5,0,1,8,0,0,9,4,0,0,3,0,5,6,5,2,8,0,0,0,0,7,4,6,5,0,8,0,0,7,1,0,0,0,1,5,9,0,0,4,9,0,8,0,0,7,0,5,3];

        //Invalid Array
        //const arr = [1,2,3,4,5,6,7,8];

        const result = solve(arr);

        const displaySudoku = result != 'Puzzle is not valid.' ? showSudoku(result) : result; 
        return (
                <div>
                    {displaySudoku}
                </div>
        );
    }
}

export default Sudoku;