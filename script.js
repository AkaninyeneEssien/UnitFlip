/*
For approximation results
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*
For Precise results
1 foot = 0.3048 meters
1 gallon = 3.785411784 liters
1 pound = 0.45359237 kilogram
*/

const convertBtn = document.getElementById("btn-convert")
const inputEl = document.getElementById("text-input")
const meterToFeet = document.getElementById("meter-to-feet")
const feetToMeter = document.getElementById("feet-to-meter")
const literToGallon = document.getElementById("liter-to-gallon")
const gallonToLiter = document.getElementById("gallon-to-liter")
const kiloToPound = document.getElementById("kilo-to-pound")
const poundToKilo = document.getElementById("pound-to-kilo")

const feetMeter = 0.3048
const literGallon = 3.785411784
const kiloPound = 0.45359237

function convert(){
    const inputValue = inputEl.value

    const feet = inputValue / feetMeter
    const meter = inputValue * feetMeter

    const liter = inputValue * literGallon
    const gallon = inputValue / literGallon

    const kilo = inputValue * kiloPound 
    const pound = inputValue / kiloPound 

    if(inputEl.value === "") return
    
    meterToFeet.textContent =  `${inputValue} Meter = ${feet.toFixed(3)} Feet`
    feetToMeter.textContent =  `${inputValue} Feet = ${meter.toFixed(3)} Meter`

    literToGallon.textContent =  `${inputValue} Liters = ${gallon.toFixed(3)} Gallons`
    gallonToLiter.textContent =  `${inputValue} Gallons = ${liter.toFixed(3)} Liters`

    kiloToPound.textContent =  `${inputValue} Kilos = ${pound.toFixed(3)} Pounds`
    poundToKilo.textContent =  `${inputValue} Pounds = ${kilo.toFixed(3)} Kilos`
}

convertBtn.addEventListener("click", function(){
    convert()
    localStorage.setItem("lastInput", inputEl.value)
})

window.addEventListener("load", function(){
    const savedValue = localStorage.getItem("lastInput")
    convert()

    if(savedValue !== null){
        inputEl.value = savedValue
        convert()
    }
})


localStorage.clear()