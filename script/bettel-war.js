var price = 550;


var seatBtn1 = document.getElementById("seatBtn1");
var seatBtn2 = document.getElementById("seatBtn2");
var seatBtn3 = document.getElementById("seatBtn3");
var seatBtn4 = document.getElementById("seatBtn4");
var seatBtn5 = document.getElementById("seatBtn5");
var seatBtn6 = document.getElementById("seatBtn6");
var seatBtn7 = document.getElementById("seatBtn7");
var seatBtn8 = document.getElementById("seatBtn8");

var nextBtn = document.getElementById("nextBtn");




var seatArry=[];

var button = document.getElementById("myBtn");

if(seatArry.length <= 3) {
    var coupon=[{coupon:'new15', percentage:20},{coupon:'couple 20', percentage:20}]
    document.getElementById("btnApply").onclick = function() {applyCoupon()};

}


function applyCoupon() {

    if(seatArry.length >= 3){
        var txtCoupon = document.getElementById("txtCoupon").value;
        const couponArr = coupon.filter(object => {
            return object.coupon == txtCoupon.toLowerCase();
          });
     
          if(couponArr.length>0){
            var percentage = couponArr[0].percentage;
            var grandTotal   = parseFloat(document.getElementById("grandTotal").innerText);
       
            var percentageAmout = (grandTotal*percentage)/100;
       
            document.getElementById("grandTotal").innerText = grandTotal-percentageAmout;
            document.getElementById("txtCoupon").hidden = true;
            document.getElementById("btnApply").style.visibility = "hidden";
    
          }
          else{
            alert('Invalid coupon');
          } 
    }
    
}


function handleClick(event) {
    
    if(event.target.style.backgroundColor === ""){
        if(seatArry.length<=3){
            event.target.style.backgroundColor = "#1DD100"; 
            var obj ={
                'SeatNo':event.target.textContent,
                'Class':'Economoy',
                'Price':550
            }
            seatArry.push(obj); 
        }               
        
    } else{
        event.target.style.backgroundColor = "";
                
        const newArr = seatArry.filter(object => {
            return object.SeatNo !== event.target.textContent;
          });
        seatArry =newArr
    } 
    
    //seatCounter

    document.getElementById("seatCounter").innerText=seatArry.length;
    document.getElementById("seatAvilable").innerText = 8 - seatArry.length;
    addRow();
    
}


function addRow(){
    var total=0;
    var seatList = document.getElementById("seatList");
    seatList.innerHTML = ''
    for(var i=0;i<seatArry.length;i++){
        total+=seatArry[i].Price;
        seatList.innerHTML+= '<div class="flex md:gap-20 gap-10 pl-6 pr-6 mt-2 text-[#030712B3]"><h1 class="text-xl ">'+seatArry[i].SeatNo+'</h1><h1 class="text-xl ">'+seatArry[i].Class+'</h1> <h1 class="text-xl ">'+seatArry[i].Price+'</h1> </div>';
    }
    document.getElementById("totalPrice").innerText=total;

   
    document.getElementById("grandTotal").innerText=total;


    
    
}





seatBtn1.addEventListener("click", handleClick);
seatBtn2.addEventListener("click", handleClick);
seatBtn3.addEventListener("click", handleClick);
seatBtn4.addEventListener("click", handleClick);

seatBtn5.addEventListener("click", handleClick);
seatBtn6.addEventListener("click", handleClick);
seatBtn7.addEventListener("click", handleClick);
seatBtn8.addEventListener("click", handleClick);

// const openBtn = document.getElementById("applyBtn");
// const closeBtn = document.getElementById("closeModal");
// const modale = document.getElementById("modale")
// modale.classList.remove;


// openBtn.addEventListener("click", () =>{
//     modal.classList.add("open");
// });

// closeBtn.addEventListener("click", () => {
//     modal.classList.remove("close");
// });

 nextBtn.addEventListener("click",  function toggleVisibility() {
    var element = document.getElementById("modale");
    // if (element.style.display === "none") {
    //     element.style.display = "block"; // or any other display value
    // } else {
    //     element.style.display = "none";
    // }
    element.style.display = "block";
});

cotinueBtn.addEventListener("click", function hideElement(){
    var element = document.getElementById("modale");
    element.style.display = "none";
    reloadPage();
})


function reloadPage() {
    location.reload();
}

