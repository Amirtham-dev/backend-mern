 
 const add=(a,b,callback)=>{

    let result=a+b;
    callback(result);
 };
 add(10,20,(result)=>{
    console.log(result);

 });

 // task 2

 function checkNumber(num){

    return new Promise((resolve,reject)=>{

        if(num>10){
            resolve("valid number");
        }
        else{
            reject("invalid number");
        }
    });


    function checknumber (num){
        return num;
    }

    


 }