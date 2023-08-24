import data from './data.json' assert { type : 'json' }

let max = {day: "", amount: 0}

// Find the day with the highest amount
data.forEach((i) => {
    if (max.amount < i.amount) {
        max = i
    }  
})

console.log(max)

// Calculate bar heights
data.forEach((i) => {
    let scale = i.amount / max.amount
    i.height = 18 * scale
    
    if(i.height < 2) {
        i.height = 2
    }
})

// Set graph values
let mon_dec = document.getElementById("mon_active_dec")
let mon_no_dec = document.getElementById("mon_active_no_dec")

let tue_dec = document.getElementById("tue_active_dec")
let tue_no_dec = document.getElementById("tue_active_no_dec")

let wed_dec = document.getElementById("wed_active_dec")
let wed_no_dec = document.getElementById("wed_active_no_dec")

let thu_dec = document.getElementById("thu_active_dec")
let thu_no_dec = document.getElementById("thu_active_no_dec")

let fri_dec = document.getElementById("fri_active_dec")
let fri_no_dec = document.getElementById("fri_active_no_dec")

let sat_dec = document.getElementById("sat_active_dec")
let sat_no_dec = document.getElementById("sat_active_no_dec")

let sun_dec = document.getElementById("sun_active_dec")
let sun_no_dec = document.getElementById("sun_active_no_dec")

let mon = document.getElementById("mon")
let tue = document.getElementById("tue")
let wed = document.getElementById("wed")
let thu = document.getElementById("thu")
let fri = document.getElementById("fri")
let sat = document.getElementById("sat")
let sun = document.getElementById("sun")

mon.style.height = `${data[0].height}rem`
tue.style.height = `${data[1].height}rem`
wed.style.height = `${data[2].height}rem`
thu.style.height = `${data[3].height}rem`
fri.style.height = `${data[4].height}rem`
sat.style.height = `${data[5].height}rem`
sun.style.height = `${data[6].height}rem`

mon_dec.innerText = `$${Math.round(data[0].amount * 100) / 100}`
mon_no_dec.innerText = `$${Math.round(data[0].amount)}`

tue_dec.innerText = `$${Math.round(data[1].amount * 100) / 100}`
tue_no_dec.innerText = `$${Math.round(data[1].amount)}`

wed_dec.innerText = `$${Math.round(data[2].amount * 100) / 100}`
wed_no_dec.innerText = `$${Math.round(data[2].amount)}`

thu_dec.innerText = `$${Math.round(data[3].amount * 100) / 100}`
thu_no_dec.innerText = `$${Math.round(data[3].amount)}`

fri_dec.innerText = `$${Math.round(data[4].amount * 100) / 100}`
fri_no_dec.innerText = `$${Math.round(data[4].amount)}`

sat_dec.innerText = `$${Math.round(data[5].amount * 100) / 100}`
sat_no_dec.innerText = `$${Math.round(data[5].amount)}`

sun_dec.innerText = `$${Math.round(data[6].amount * 100) / 100}`
sun_no_dec.innerText = `$${Math.round(data[6].amount)}`

// Set todays bar to blue
let date = new Date()
let today = date.toLocaleString(window.navigator.language, {weekday: "short"}).toLowerCase();

if(today === "mon") {
    mon.classList.add('today')
} else if (today === "tue") {
    tue.classList.add('today')
} else if (today === "wed") {
    wed.classList.add('today')
} else if (today === "thu") {
    thu.classList.add('today')
} else if (today === "fri") {
    fri.classList.add('today')
} else if (today === "sat") {
    sat.classList.add('today')
} else if (today === "sun") {
    sun.classList.add('today')
}

let date1 = new Date()
let date2 = date1.toLocaleString(window.navigator.language, {weekday: "short"});
console.log(date2)