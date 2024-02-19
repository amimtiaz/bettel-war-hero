var price = 550;


var seatBtn1 = document.getElementById("seatBtn1");
var seatBtn2 = document.getElementById("seatBtn2");
var seatBtn3 = document.getElementById("seatBtn3");
var seatBtn4 = document.getElementById("seatBtn4");

//var seatCounter = document.getTextElementValueById('seatCounter');

// 
var button = document.getElementById("myBtn");






function handleClick(event) {
    
    if(event.target.style.backgroundColor === ""){
        event.target.style.backgroundColor = "#1DD100";
        
    } else{
        event.target.style.backgroundColor = "";
    }


    
  
}






seatBtn1.addEventListener("click", handleClick, function(){
    

});
seatBtn2.addEventListener("click", handleClick);
seatBtn3.addEventListener("click", handleClick);
seatBtn4.addEventListener("click", handleClick);

