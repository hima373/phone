 {//Checks if there is atleast one minute to charge for
    if (s >= min1) {
        minutes = minutes + 1;
        s = s - min1;
        //Console Update
        console.log("Call Length: " + minutes + " mins" + " |" + " Cents Left: " + s + " ¢");
    }
    
    //Checks how many minutes it can call for in between 2 and 10
    for (let i = 0; i < 9; i++) {
        if (s > 1) {
            minutes = minutes + 1;
            s = s - min2_10;
            //Console Update
            console.log("Call Length: " + minutes + " mins" + " |" + " Cents Left: " + s + " ¢");
        } 
        
        
        //Checks if minutes equals 10 and then checks for how many minutes it can afford
        if (minutes === 10) {
            if (s >= 1) {
                minutes = minutes + Math.floor(s / min11);
                taken = taken + Math.floor(s / min11); 
                s = s - (taken * min11);
                //Console Update
                console.log("Call Length: " + minutes + " mins" + " |" + " Cents Left: " + s + " ¢");
            }
        }
    }
    
    //Returns the minutes
    return minutes;
}