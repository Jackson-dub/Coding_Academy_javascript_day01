
var _=require('lodash');

function objectsDeeplyEqual(param1,param2){
    if(_.isEqual(param1,param2)){
        return true;
    }else{
        return false;
    }
}

var obj = {here:{is:"an"},object:2};

console.log(objectsDeeplyEqual(obj,obj));
console.log(objectsDeeplyEqual(obj,{here:1,object:2}));
console.log(objectsDeeplyEqual(obj,{here:{is:"an"},object:2}));
