// Event Listener Setup
let mon = document.getElementById("mon")
let tue = document.getElementById("tue")
let wed = document.getElementById("wed")
let thu = document.getElementById("thu")
let fri = document.getElementById("fri")
let sat = document.getElementById("sat")
let sun = document.getElementById("sun")

mon.addEventListener('mouseover', function(){
    if(window.innerWidth > 675) {
        document.getElementById("mon_active_dec").style.display = 'block'
    } else {
        document.getElementById("mon_active_no_dec").style.display = 'block'
    }
})

mon.addEventListener('mouseleave', function(){
    document.getElementById("mon_active_dec").style.display = 'none'
    document.getElementById("mon_active_no_dec").style.display = 'none'
})

tue.addEventListener('mouseover', function(){
    if(window.innerWidth > 675) {
        document.getElementById("tue_active_dec").style.display = 'block'
    } else {
        document.getElementById("tue_active_no_dec").style.display = 'block'
    }
})

tue.addEventListener('mouseleave', function(){
    document.getElementById("tue_active_dec").style.display = 'none'
    document.getElementById("tue_active_no_dec").style.display = 'none'
})

wed.addEventListener('mouseover', function(){
    if(window.innerWidth > 675) {
        document.getElementById("wed_active_dec").style.display = 'block'
    } else {
        document.getElementById("wed_active_no_dec").style.display = 'block'
    }
})

wed.addEventListener('mouseleave', function(){
    document.getElementById("wed_active_dec").style.display = 'none'
    document.getElementById("wed_active_no_dec").style.display = 'none'
})

thu.addEventListener('mouseover', function(){
    if(window.innerWidth > 675) {
        document.getElementById("thu_active_dec").style.display = 'block'
    } else {
        document.getElementById("thu_active_no_dec").style.display = 'block'
    }
})

thu.addEventListener('mouseleave', function(){
    document.getElementById("thu_active_dec").style.display = 'none'
    document.getElementById("thu_active_no_dec").style.display = 'none'
})

fri.addEventListener('mouseover', function(){
    if(window.innerWidth > 675) {
        document.getElementById("fri_active_dec").style.display = 'block'
    } else {
        document.getElementById("fri_active_no_dec").style.display = 'block'
    }
})

fri.addEventListener('mouseleave', function(){
    document.getElementById("fri_active_dec").style.display = 'none'
    document.getElementById("fri_active_no_dec").style.display = 'none'
})

sat.addEventListener('mouseover', function(){
    if(window.innerWidth > 675) {
        document.getElementById("sat_active_dec").style.display = 'block'
    } else {
        document.getElementById("sat_active_no_dec").style.display = 'block'
    }
})

sat.addEventListener('mouseleave', function(){
    document.getElementById("sat_active_dec").style.display = 'none'
    document.getElementById("sat_active_no_dec").style.display = 'none'
})

sun.addEventListener('mouseover', function(){
    if(window.innerWidth > 675) {
        document.getElementById("sun_active_dec").style.display = 'block'
    } else {
        document.getElementById("sun_active_no_dec").style.display = 'block'
    }
})

sun.addEventListener('mouseleave', function(){
    document.getElementById("sun_active_dec").style.display = 'none'
    document.getElementById("sun_active_no_dec").style.display = 'none'
})