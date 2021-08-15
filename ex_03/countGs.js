
const string = 'abdcdGefdsGfdsfdfdGfdfdfGdfG';

function countGs($tring){
    if(typeof string == "string"){
        arrayGs = [];    
        string.split('').forEach(letter => {
    
            if(letter == 'G'){
                arrayGs.push(letter);
            }
        });

        console.log(arrayGs.length);

    }else{

        console.log('parameter must be a string');
    }
}

countGs(string);