var hamburger = document.querySelector(".hamburger");
var hamburgerMenu = document.querySelector(".hamburger_menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("header_menu");
}





var slider = document.querySelector(".range")
var values = document.querySelector(".value")

values.textContent = slider.value;
slider.oninput = function (){
    values.textContent = this.value + "$";
}

var slideri = document.getElementById("rangei")
var valuesi = document.getElementById("ui")

valuesi.textContent = slideri.value;
slideri.oninput = function (){
    valuesi.textContent = this.value + "$";
}

var sliderii = document.getElementById("rangeii")
var valuesii = document.getElementById("uii")

valuesii.textContent = sliderii.value;
sliderii.oninput = function (){
    valuesii.textContent = this.value + "$";
}


// var x = document.getElementById("price_input").value;
var y =document.querySelector(".value");
// var o =document.querySelector(".range::-webkit-slider-thumb")
// if (x == 10) {
//     console.log("true")
// }else{console.log("flase")}


document.querySelector("#range").addEventListener("click",call);
document.querySelector("#rangei").addEventListener("click",calli);
document.querySelector("#rangeii").addEventListener("click",callii);

function call() {
//    window.history.back()
// alert(location.href)
// alert("helo")
// if(confirm("are you sure"))
    // location.href = "https://www.youtube.com/results?search_query=how+make+auto+maltiflu+calculator+javascript"
 
    // var first = document.querySelector("#range").value 
    document.querySelector("#first").style.display="flex"
    document.querySelector(".secound").style.display="none"
    document.querySelector(".threed").style.display="none"
        
        
        }
       
        

function calli() {
        document.querySelector("#first").style.display="none"
        document.querySelector(".secound").style.display="flex"
        document.querySelector(".threed").style.display="none"
        // var secound = document.querySelector("#rangei").value 
  
}
    function callii() {
        document.querySelector("#first").style.display="none"
        document.querySelector(".secound").style.display="none"
        document.querySelector(".threed").style.display="flex"
            var threed = document.querySelector("#rangeii").value 
        if(threed < "70000$"){
           alert("hellow")
        }else{
            
           alert("world")
        }
        
        }
            

