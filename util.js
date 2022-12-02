function matrixProduct(m1, m2){
    let result = [];
    for(let i = 0; i < m1.length; i++){
        result[i] = [];
        for(let j = 0; j < m2[i].length; j++){
            let sum = 0;
            for(let k = 0; k < m1[j].length; k++){
                sum += m1[i][k]*m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    console.log(result);
}

function sumOfMatrices(m1, m2){
    let result = [];
    for(let i = 0; i < m1.length; i++){
        result[i] = [];
        for(let j = 0; j < m2[i].length; j++){
            let sum = 0;
            sum += m1[i][j] + m2[i][j];
            result[i][j] = sum;
        }
    }
    console.log(result);
}

function sumOfArray(arr, i){
    let sum = 0;
    for(let j = 0; j < arr[i].length; j++){
        sum += arr[i][j];
    }
    return sum;
}

function sumOfEachRow(arr){
    let i, sum = 0;
    result = [];
    for(i = 0; i< arr.length; i++){
        sum = sumOfArray(arr, i);
        result.push(sum);
        sum = 0;
    }
    console.log(result);
}

const prompt = require('readline-sync');
function countWords(){
    let str = prompt.question("Insert you text:\n");
    str = str.trim();
    let count = 1;
    if(str.length == 0){
        count = 0;
    }
    for(let i = 0; i < str.length; i++){
        if(str[i]!=" " && str[i+1]==" "){
            count++;
        }
    }
    console.log(count);
}

function trim(str){
    let stringStart = false;
    let newString = "";
    let res = "";

    for(let i = 0; i < str.length; i++){
        if(!stringStart && str[i]==" "){
            continue;
        }
        else if(!stringStart){
            stringStart = true;
        }
        newString += str[i];
    }

    let stringEnd = false;
    for(let k = newString.length - 1; k >= 0 ; k--){
        if(!stringEnd && newString[k]==" "){
            continue;
        }
        else if(!stringEnd){
            stringEnd = true;
        }
        res += newString[k];
    }
    let final = "";
    for(let j = res.length - 1; j >= 0; j--){
        final += res[j];
    }
    console.log(final);
    console.log(final.length);
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfArray,
    sumOfEachRow,
    countWords,
    trim
}