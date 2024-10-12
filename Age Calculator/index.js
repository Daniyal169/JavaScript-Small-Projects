let inputDate = document.getElementById("date");
let dispDate = document.getElementById("result");

inputDate.max = new Date().toISOString().split("T")[0];


getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

const calcDate = () => {
    let birthDate = new Date(inputDate.value);
    //       20 / 9 / 2003

    let bDate = birthDate.getDate()  //20
    let bMonth = birthDate.getMonth() + 1  //9
    let bYear = birthDate.getFullYear()  //2003

    let currDate = new Date();
    //       16 / 9 / 2024

    let pDate = currDate.getDate()  //16
    let pMonth = currDate.getMonth() + 1  //9
    let pYear = currDate.getFullYear() //2024

    let rDate, rMonth, rYear;

    rYear = pYear - bYear;  //21

    if (pMonth > bMonth) {
        rMonth = pMonth - bMonth;
    }

    else {
        rYear--;   //20
        rMonth = 12 + pMonth - bMonth;  //12
    }

    if (pDate >= bDate) {
        rDate = pDate - bDate;
    }
    else {
        rMonth--;  //11
        rDate = getDaysInMonth(bYear, bMonth) + pDate - bDate  //30+16-20=26
    }


    dispDate.innerHTML = `You are <span> ${rYear}</span>
      years  <span>${rMonth}</span> months and 
       <span>${rDate}</span> days old`;
}