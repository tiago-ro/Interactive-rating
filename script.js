"use strict"

const rating = [...document.querySelectorAll(".button")]
let x = 0

rating.map((el)=>{
    el.addEventListener("click",()=>{
        document.getElementById("rating").innerHTML = el.value
        x = el.value
    })
})

const changeCard = document.querySelector(".submit")

changeCard.addEventListener("click",()=>{
    if (x == 0){
        alert("Please select a number")
    } else {
        document.getElementById("icard").style.display = "none"
        document.getElementById("icard2").style.display = "flex"
    }    
})