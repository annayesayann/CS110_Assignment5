const ex = require('./util');
let m1 = [
    [1, 2, 4],
    [42, 5, 7]
];
let m2 = [
    [1, 2],
    [3, 4],
    [42, 7]
];
let mat1 = [
    [1, 2],
    [42, 5]
];
let mat2 = [
    [3, 1],
    [2, 7]
];
let str = "   My String  ";
const MatrixProduct = ex.matrixProduct(m1, m2);
const MatrixSum = ex.sumOfMatrices(mat1, mat2);
const MatrixSumRow = ex.sumOfEachRow(m1);
const wordCount = ex.countWords();
const trimAlg = ex.trim(str);