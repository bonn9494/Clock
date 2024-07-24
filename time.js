let input = document.getElementById("input")
let button = document.getElementById("button")
button.addEventListener("click",getAge)
let text = document.getElementById("result")

/*function getAge(){
    let date = new Date(input.value)

    let birthdayDay = date.getDate()
    let birthdayMonth = date.getMonth()+1
    let birthdayYear = date.getFullYear()
    
    let todayDate = new Date()

    let todayDay = todayDate.getDate()
    let todayMonth = todayDate.getMonth()+1
    let todayYear = todayDate.getFullYear()
    
    let ageDay = todayDay - birthdayDay
    let ageMonth = todayMonth - birthdayMonth
    let ageYear = todayYear - birthdayYear

    if(birthdayDay>todayDay){
        ageMonth = ageMonth - 1
        if(ageMonth%2==0){
            ageDay = ageDay + 30
            if(ageDay>31){
                ageDay = ageDay - 31
                ageMonth = ageMonth + 1
            }
        }
    }
        else{
            ageDay = ageDay + 31
            if(ageDay>31){
                ageDay = ageDay - 31
                ageMonth = ageMonth + 1
        }
    if(birthdayMonth>todayMonth){     
        ageMonth = ageMonth + 11  
        ageYear = ageYear - 1
        if(ageMonth>12){
            ageMonth = ageMonth - 12
            ageYear = ageYear + 1
        }

    }
    
}   

    text.innerHTML = `You are ${ageYear} years old, ${ageMonth} months and ${ageDay} days`
}*/
function getAge() {
    let date = new Date(input.value);

    let birthdayDay = date.getDate();
    let birthdayMonth = date.getMonth() + 1; // Adding 1 to convert from 0-11 to 1-12
    let birthdayYear = date.getFullYear();
    
    let todayDate = new Date();

    let todayDay = todayDate.getDate();
    let todayMonth = todayDate.getMonth() + 1; // Adding 1 to convert from 0-11 to 1-12
    let todayYear = todayDate.getFullYear();
    
    let ageDay = todayDay - birthdayDay;
    let ageMonth = todayMonth - birthdayMonth;
    let ageYear = todayYear - birthdayYear;

    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        ageYear--;
        ageMonth = (12 + todayMonth) - birthdayMonth;
        if (ageDay < 0) {
            let temp = new Date(todayYear, todayMonth - 1, 0);
            ageDay = temp.getDate() - birthdayDay + todayDay;
        }
    } else if (ageMonth === 0 && ageDay < 0) {
        ageYear--;
        ageMonth = 11;
        ageDay = new Date(todayYear, todayMonth, 0).getDate() - birthdayDay + todayDay;
    }

    text.innerHTML = `You are ${ageYear} years old, ${ageMonth} months and ${ageDay} days`;
}