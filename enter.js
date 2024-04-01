const formE1 = document.getElementById("form")
const textE = document.getElementById("text1")
const lable = document.getElementById("lab")
const bodyE = document.querySelector(".body")

let color = localStorage.getItem("color")
if(color==null)
{
    color="white"
    lable.innerText= `The background-color is default white Enter color`
}else{
    lable.classList.add("enter")
}
bodyE.style.setProperty("--Cor",color)
formE1.addEventListener("submit",()=>{
 
    color = localStorage.setItem("color",textE.value)
})
