function getTotalScore(array1, array2){
    let result = 0;
    for (let index = 0; index < array1.length; index++) {
        if(array2[index] == array1[index]){
            result+= 4;
        }
        if(array2[index] == ''){
            result += 0;
        }
        if(array2[index] != array1[index] && array2[index] != ''){
            result += -1;
        }
    }
    if(result<0){
        return 0;
    }
    return result;
}

console.log(getTotalScore(['a','a', 'b', 'b'], ['a', 'c', 'b', 'd'] ));
console.log(getTotalScore(['a','a', 'c', 'b'], ['a', 'a', 'b', ''] ));
console.log(getTotalScore(['a','a', 'b', 'c'], ['a', 'a', 'b', 'c'] ));
console.log(getTotalScore(['b','c', 'b', 'a'], ['', 'a', 'a', 'c'] ));