let imgBx = document.getElementById("img-bx")
let qrImg = document.getElementById("qrimage")

let btn = document.getElementById("btn")
let qrText = document.getElementById("input-txt")



qrText.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.key === "Enter") {
     document.getElementById("btn").click()
    }
})

btn.addEventListener("click", ()=> {
     if(qrText.value.length > 0) {
        generateCode()
     }else {
        qrText.classList.add("error")
        setTimeout(()=>{
            qrText.classList.remove("error")
        },1000)
     }
})

function generateCode(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
    imgBx.classList.toggle("show-Img")
}