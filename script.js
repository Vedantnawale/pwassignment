let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let btn3 = document.getElementById("btn-3")
let displayValue = document.getElementById("displayValue")

// for decrement
btn1.addEventListener("click",()=>{
    let value = Number(displayValue.innerText)
    if(value > 0){
        displayValue.innerText = value - 1;
    } else{
        alert("Limit Exceed");
    }
})

// for increment
btn2.addEventListener("click",()=>{
    let value = Number(displayValue.innerText)
    if(value>= 20){
        alert("Limit Exceed");
    } else{
        displayValue.innerText = value + 1;
    }
})

// for reset
 btn3.addEventListener("click", ()=>{
    displayValue.innerText = 0;
 })
