function toggleRead(){
    var readMoreContentElement = document.getElementById("read-more-content");
    var readMoreButton = document.getElementById("readMore");
    if (readMoreContentElement.style.display === "block") {
        readMoreContentElement.style.display = "none";
        readMoreButton.textContent = "Leer más...";
    } else {
        readMoreContentElement.style.display = "block";
        readMoreButton.textContent = "Leer menos...";
    }
}
function showCategory(type){
    var mascotasElement = document.getElementById("mascotas");
    var paseosElement = document.getElementById("paseos");
    var hobbiesElement = document.getElementById("hobbies");

    var mascotasBtnElement = document.getElementById("mascotas-btn");
    var paseosBtnElement = document.getElementById("paseos-btn");
    var hobbiesBtnElement = document.getElementById("hobbies-btn");

    switch (type){
        case "mascotas":
            paseosElement.style.display ="none";
            hobbiesElement.style.display ="none";
            mascotasElement.style.display ="block";

            paseosBtnElement.style.backgroundColor = "#871C64";
            hobbiesBtnElement.style.backgroundColor = "#871C64";
            mascotasBtnElement.style.backgroundColor = "#D7C9D6";
            break;

        case "paseos":
            hobbiesElement.style.display ="none";
            mascotasElement.style.display ="none";
            paseosElement.style.display ="block";

            hobbiesBtnElement.style.backgroundColor ="#871C64";
            mascotasBtnElement.style.backgroundColor ="#871C64";
            paseosBtnElement.style.backgroundColor ="#D7C9D6";
            break;

        default:
            mascotasElement.style.display ="none";
            paseosElement.style.display ="none";
            hobbiesElement.style.display ="block";

            paseosBtnElement.style.backgroundColor ="##871C64";
            mascotasBtnElement.style.backgroundColor ="#871C64";
            hobbiesBtnElement.style.backgroundColor ="#D7C9D6";
            break;   
    }
}