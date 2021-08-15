

function fizzBuzz(){

    let FizzBuzz = [];
    for(i=1;i<=20;i++){
        if(i>=3 && i%3 == 0 && i%5 != 0){
            FizzBuzz.push('Fizz');
        }else if(i>=5 && i%5 == 0 && i%3 !=0){

            FizzBuzz.push('Buzz');

        }else if(i%3 == 0 && i%5 == 0){
            FizzBuzz.push('FizzBuzz');
        }else{
            FizzBuzz.push(i);
        }
    }
    console.log(FizzBuzz.toString());
}

fizzBuzz();