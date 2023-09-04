let a = document.querySelector('#celcius > input');
let b = document.querySelector('#faherenheit > input');
let c = document.querySelector('#Kelvin > input');

let btn = document.querySelector('.button button');


function rN(number){
    return Math.round(number*100)/100
}

a.addEventListener('input', function(){
    let ctemp = parseFloat(a.value)
    let ftemp = (ctemp*(9/5)) + 32
    let ktemp = ctemp + 273.15

    b.value=rN(ftemp)
    c.value = rN(ktemp)
})

b.addEventListener('input', function(){
    let ftemp = parseFloat(b.value)
    let ctemp = (ftemp-32) * (5/9)
    let ktemp = (ftemp-32) * (5/9) + 273.15

    a.value=rN(ctemp)
    c.value = rN(ktemp)
})

c.addEventListener('input', function(){
    let ktemp = parseFloat(c.value)
    let ctemp = ktemp-273.15
    let ftemp = (ktemp-273.15) * (9/5) + 32

    a.value=rN(ctemp)
    b.value = rN(ftemp)
})

btn.addEventListener('click',()=>{
    a.value = ""
    b.value = ""
    c.value = ""
})


/*
let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}*/


/* Celcius to Fahrenheit and Kelvin */
/*celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})*/


/* Fahrenheit to Celcius and Kelvin */
/*fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})
*/
/* Kelvin to Celcius and Fahrenheit */
/*kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})*/


/*btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})*/