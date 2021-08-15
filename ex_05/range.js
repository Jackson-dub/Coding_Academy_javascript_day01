
function range(start,end,step){

    if(typeof start == 'number' && typeof end == 'number'){

    let count = [];

     if(step && step != undefined && typeof end == 'number'){ 

        count.push(start);

        if(start <= end){
            while(start < end-step){
                   count.push(start += step);
                }
        }else{
                while(start >= end){
                count.push(start += step);
            }      
        }
     }else{
        while(start <= end){
            count.push(start ++);
         }
     }
     return count;
     
    }else{

        console.log('parameters must be numbers');
    }
}

console.log(range(1,10,2));
console.log(range(19,22));
console.log(range(5,2,-1));