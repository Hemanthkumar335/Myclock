function digitalClock(){
    let dateobj = new Date();

    let selectedElem = document.getElementsByTagName("span")

    selectedElem[0].innerText = dateobj.getHours()
    selectedElem[1].innerText = dateobj.getMinutes()
    selectedElem[2].innerText = dateobj.getSeconds()

    selectedElem[3].innerText = dateobj.getDate()
    let curmonth = dateobj.getMonth()
    switch(curmonth)
    {
        case 0 : curmonth = "january";break;
        case 1 : curmonth = "Febrauary";break;
        case 3 : curmonth = "March";break;
        case 4 : curmonth = "April";break;
        case 5 : curmonth = "May";break;
        case 6 : curmonth = "June";break;
        case 7 : curmonth = "July";break;
        case 8 : curmonth = "September";break;
        case 9 : curmonth = "October";break;
        case 10 : curmonth = "November";break;
        case 11 : curmonth = "December";break;
    }
    selectedElem[4].innerText = curmonth
    selectedElem[5].innerText = dateobj.getFullYear()

    let curday = dateobj.getDay()
    switch(curday)
    {
        case 0:curday = sunday;break;
        case 1:curday = Monday;break;
        case 2:curday = Tuesday;break;
        case 3:curday = Wednesday;break;
        case 4:curday = Thursday;break;
        case 5:curday = Friday;break;
        case 6:curday = Saturday;break;
    }
    select[6].innerText = curday;
}