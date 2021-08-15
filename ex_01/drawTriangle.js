function makeLine(height){

  
     let line = '';
     for(let i = 1; i<=height; i++){
        line +='$'; 
     }
    return line +"\n";

}

function drawTriangle(value){

    if(typeof value === 'number'){

    let triangle = "";
    for(let i=1; i<=value ;i++){

        triangle += makeLine(i);
    }

    console.log(triangle);
}else{

    return 'parameter must be a number';
}

}

let height = 6;
drawTriangle(height);
