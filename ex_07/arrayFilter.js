

toFilter = [1,2,3,4,5,6,7,8,9];

function arrayFilter(toFilter,test){

    if(typeof toFilter === "object"){

        let filteredArray = toFilter.filter(test);
        return filteredArray;
    } 
}
var passed = arrayFilter(toFilter,function(value){
    return value % 3 === 0;
});

console.log(passed);