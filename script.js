const dob = document.getElementById("birthDate");
const currentDate = document.getElementById('currentDate');
const output = document.getElementById("output");
const btn = document.getElementById("calculateBtn");
const thanks = document.getElementById("thanks");

const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days")
btn.addEventListener('click' ,() =>{
    if(dob.value == "" || currentDate.value == ""){
        // output.innerHTML = "Please enter a valid date.";'
        alert("please fill the data  correctly!");
    }
    else{
        calculateAgeDifference(dob.value , currentDate.value)
    }
})

function calculateAgeDifference(start , end){
    // console.log(typeof(start));
    let dobYear = parseInt(start.substring(0,4))
    // console.log(typeof(dobYear));
    let dobMonth = parseInt(start.substring(5,7)) 
    let dobDate = parseInt(start.substring(8,10));
    let currentYear = parseInt(end.substring(0,4))
    let currentMonth = parseInt(end.substring(5,7)) 
    let currentDate = parseInt(end.substring(8,10));

    //year diff : 
    let yearDiff = currentYear - dobYear ;
    // console.log("y:"+yearDiff);

    //monthDiff : 
    let monthDiff;
    if(currentMonth >=  dobMonth ){
        monthDiff = currentMonth - dobMonth ;
    }
    else{
        yearDiff--;
        monthDiff = 12 + currentMonth - dobMonth ;
    }
    // console.log("m : "+monthDiff);

    //days diff:
    let dateDiff;
    if(currentDate >= dobDate) {
        dateDiff = currentDate -  dobDate;
    }
    else{
        monthDiff--;
        noOfDaysInDOb = daysInMonth(dobMonth,dobYear);
        dateDiff = noOfDaysInDOb + currentDate - dobDate ;

        //when monthDiff in minius
        daysInMonth(monthDiff < 0)
        {
            monthDiff = 11;
            yearDiff--;
        }
        
    }
    thanks.innerHTML = "Congratulations! Your Age Growth Rate is : " ;

    years.innerHTML = yearDiff + " years "  ;
    months.innerHTML= monthDiff + " months " ;
   days.innerHTML =  dateDiff +" days" ;
}
function daysInMonth(month , year){
    return new Date(year,month,0).getDate();
}