
var a = [1,2];
var b = [3,4];

function arrayIsEqual(array1,array2){

    if(typeof array1 =="object" && typeof array2 =="object"){

        return array1.join(',') === array2.join(',');
    }else{
        console.log('parameters must be arrays.');
    }
}

console.log(arrayIsEqual(a,b));