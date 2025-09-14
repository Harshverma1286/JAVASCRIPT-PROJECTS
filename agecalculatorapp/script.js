let userinput = document.getElementById("thedate");


userinput.max = new Date().toISOString().split("T")[0];

function calculatetheage(){
    let birthdate = new Date(userinput.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth()+1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let td = today.getDate();
    let tm = today.getMonth()+1;
    let ty = today.getFullYear();


    let thevalueoftheyear = ty-y1;

    let valueofmonth;
    if(tm>=m1) valueofmonth = tm-m1;
    else{
       thevalueoftheyear--;
       valueofmonth = 12+tm-m1; 
    }

    let valueofday;

    if(td>=d1){
        valueofday = td-d1;
    }
    else{
        valueofmonth--;
        valueofday = getdaysinmonth(y1,m1)+td-d1;
    }

    if(valueofmonth<0){
        valueofmonth=11;
        thevalueoftheyear--;
    }

    const agedisplay = document.querySelector("#para");
    agedisplay.innerHTML = `You Are ${thevalueoftheyear} years, ${valueofmonth} months and ${valueofday} days older`;



}

function getdaysinmonth(year,month){
    return new Date(year,month,0).getDate();
}