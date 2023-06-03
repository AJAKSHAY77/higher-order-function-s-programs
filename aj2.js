// program to generate a random number in given time interval


let delayinseconds = 10

function generaterandomnumber(){
    let randomnumber = Math.random()
    return randomnumber
}

function displayTimeAndGenerateNumber(){

    let timeRemaining = delayinseconds
    let countdownInterval = setInterval( function(){
             console.log("time remaining  : "   + timeRemaining + "   seconds");
             timeRemaining--;


             if(timeRemaining===0){   // stops the countdown

                clearInterval(countdownInterval)
                let randomnumber = generaterandomnumber()
                console.log("the number is generated" + randomnumber);
             }
    },1000) 
       
    }

    displayTimeAndGenerateNumber()

    
