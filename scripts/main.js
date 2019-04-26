function raket() {
    let circle = document.querySelectorAll(".circle");
    let info = document.querySelectorAll(".infographic");
    let content = document.querySelectorAll(".infocontent");
    let even = document.querySelectorAll(".even");
    let oneven = document.querySelectorAll(".oneven");
    
    for (let i = 0; i < circle.length; i++) {
        circle[i].style.marginTop = "25px";
        circle[i].style.marginBottom = "25px";
    }

    for (let i = 0; i < info.length; i++) {
        info[i].style.top = "20%";
        content[i].style.top = "20%";
    }
    
    for (let i = 0; i < even.length; i++) {
        even[i].style.marginTop = "25px";
        even[i].style.marginBottom = "25px";
    }
    
    for (let i = 0; i < oneven.length; i++) {
        oneven[i].style.marginTop = "25px";
        oneven[i].style.marginBottom = "25px";
    }


    document.getElementById('raket').style.marginTop = "10px";
    document.getElementById('staart').style.height = "450px";

}

window.onload = raket;
