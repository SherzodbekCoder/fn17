let taymer = +prompt("Vaqtni kiriting")

function timeValidate(taymer) {
    if (taymer < 0) {
       alert("Siz kiritgan vaqt notogri")
       return false
    }
    return true
}

let secund = 10;
let soat;

let int = setInterval(()=>{
    document.write(secund)
    secund--
    if (secund == 0) {
        time--
        document.write(Minut qoldi ${time} )
        secund = 10;
        if (time == 0) {
            clearInterval(int)
        }
    }
},1000)

