function bestFriends(txt, a, b){
    let array = txt.split('');
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] == a && array[index + 1] == b){
            count+= 1;
        }
        if(array[index] == a && array[index + 1] != b){
            count += -1
        }
    }
    return count>0;
}

console.log(bestFriends('i found an ounce with my hound', 'o', 'u'));
console.log(bestFriends('we found your dynamite', 'd', 'y'));
console.log(bestFriends('abcdee', 'e', 'e'));
console.log(bestFriends('he headed to the store', 'h', 'e'));