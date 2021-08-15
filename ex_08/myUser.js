
export default class myUser{

    constructor(name,age){

        if(!name || typeof name !== "string" || name === undefined || age <= 0){
            console.log('name must be string and age must be over 0');
            return
        }else{
            this.name = name;
            if(age && age !== undefined){
                this.age = age;
            }
        }

    }

    printMe(){
        
        return "Hello, my name is"+' '+this.name+' and I am '+this.age+' years hold.';
    }
}

let user = new myUser('Bernard',42);

console.log(user.printMe());


