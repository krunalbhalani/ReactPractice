
const test = require('tape');
const SudokuSolver = require('./dev/js/common/libtest');
const solver = new SudokuSolver();

test('Valid puzzle', function (t) {
    t.plan(1);
    const validarr= [0,0,1,7,0,0,5,0,9,5,7,3,0,2,4,1,0,6,8,0,0,5,0,1,0,0,2,7,0,0,2,9,5,0,1,8,0,0,9,4,0,0,3,0,5,6,5,2,8,0,0,0,0,7,4,6,5,0,8,0,0,7,1,0,0,0,1,5,9,0,0,4,9,0,8,0,0,7,0,5,3];
    const result = solver.solve(validarr);
    t.equal(JSON.stringify(result), '[2,4,1,7,6,8,5,3,9,5,7,3,9,2,4,1,8,6,8,9,6,5,3,1,7,4,2,7,3,4,2,9,5,6,1,8,1,8,9,4,7,6,3,2,5,6,5,2,8,1,3,4,9,7,4,6,5,3,8,2,9,7,1,3,2,7,1,5,9,8,6,4,9,1,8,6,4,7,2,5,3]');
  })

test('Invalid puzzle', function (t) {
  t.plan(1);
  const Invalidearr= [1,2,3,4,5,6,7,8];
  var result = solver.solve(Invalidearr);
  t.equal(result, 'Puzzle is not valid.');
  })
