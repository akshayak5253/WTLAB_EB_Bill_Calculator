function bill() {
    const num = document.form.number;
    const cur1 = document.form.current;
    const monthly = document.form.cycle;
    let amount=0;
    let unit=parseInt(cur1.value);
    let disp=unit
    console.log(unit)
    let tot=0;
    if(unit >100 && unit <=200){
        unit =unit -100
        tot += unit *1.5
        if(cycle.value=='0'){
            tot+=40
        }else{
            tot+=20
        }

    }else if(unit >200 && unit <=500){
        tot+= 100 * 2
        unit = unit -200
        tot+=unit * 3
        if(cycle.value=='0'){
            tot+=60
        }else{
            tot+=30
        }
    }
    else if(unit > 500){
        tot+=(100*3.5)+(300*4.6)
        unit-=500
        tot+=unit*6.6
        if(cycle.value=='0'){
            tot+=100
        }else{
            tot+=50
        }
    }
    let mon
    if(monthly.value=='0'){
        mon='Bi-Monthly'
    }else{
        mon='Monthly'
    }
    document.getElementById("consu").innerHTML = "" + num.value;
    document.getElementById("units").innerHTML = "" + disp;
    document.getElementById("billcycle").innerHTML = "" + mon;
    document.getElementById("total").innerHTML = "&#8377;" + tot;
}
