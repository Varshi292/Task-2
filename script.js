const calcTemp=()=>{

    const tempval=parseFloat(document.getElementById('temp').value);
    const fromvalue=document.getElementById('fromtemp').value;
    const tovalue=document.getElementById('totemp').value;
    let fintemp;
    const result=document.getElementById('result');
    if(fromvalue==tovalue){
       result.textContent=`The temperature is: ${tempval.toFixed(2)}\u00B0 ${fromvalue}`;
       return false;
    }
    else{
    if(fromvalue=='celsius'){
        if(tovalue=='farenheit'){
            fintemp = (tempval * 9/5) + 32;
        }
        else if(tovalue=='kelvin'){
             fintemp=tempval + 273.15;
        }
        else{
           fintemp=tempval;
        }
    }
    else if(fromvalue=='farenheit'){
        if(tovalue=='celsius'){
            fintemp = (tempval - 32) * 5/9;
        }
        else if(tovalue=='kelvin'){
             fintemp=(tempval - 32) * 5/9 + 273.15;
        }
        else{
           fintemp=tempval;
        }
    }
    else if(fromvalue=='kelvin'){
        if(tovalue=='celsius'){
            fintemp = tempval - 273.15;;
        }
        else if(tovalue=='farenheit'){
             fintemp=(tempval - 273.15) * 9/5 + 32;
        }
        else{
           fintemp=tempval;
        }
    }
}
    
    result.textContent=`The converted temperature is : ${fintemp.toFixed(2)}\u00B0 ${tovalue}`;
    return false;
};