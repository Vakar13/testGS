function testGS(){
    
    
const url = "https://script.google.com/macros/s/AKfycbyzl35T-a2CSjtynZ3UtCMw2Xc_Xog7kO6auI5Q1YP26TFLfQ/exec"


fetch(url)
    .then(d => d.json())
    .then(d=> {
        document.getElementById("app").textContent = d[0].status;
    })
}

document.getElementById("btn").addEventListener("click",testGS);