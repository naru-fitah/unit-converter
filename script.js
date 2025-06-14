/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

const lengthEl = document.querySelectorAll(".card p")[0]
const volumeEl = document.querySelectorAll(".card p")[1]
const massEl = document.querySelectorAll(".card p")[2]


    convertBtn.addEventListener("click", function () {

        const value = Number(inputEl.value)
    
        if (!value) {
            alert("Please enter a number")
            return
        }
    
        // Conversion factors
        const meterToFeet = 3.281
        const literToGallon = 0.264
        const kiloToPound = 2.204
    
        // Length
        const feet = (value * meterToFeet).toFixed(2)
        const meters = (value / meterToFeet).toFixed(2)
    
        // Volume
        const gallons = (value * literToGallon).toFixed(2)
        const liters = (value / literToGallon).toFixed(2)
    
        // Mass
        const pounds = (value * kiloToPound).toFixed(2)
        const kilos = (value / kiloToPound).toFixed(2)
    
        // Update the UI
        lengthEl.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`
        volumeEl.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`
        massEl.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`

        inputEl.value = ""
        inputEl.focus()
    })

    inputEl.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            convertBtn.click()
        }
    })
