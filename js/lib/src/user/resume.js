var mask = document.getElementById("mask");
var confirm = document.getElementById("confirm");
var cancel = document.getElementById("cancel");

console.log(mask)


function showMask(){
    mask.style.display = "block"; 
    stop();      
}

function cancelMask(){
    mask.style.display = ""; 
    move();
}

function confirmData(){
    mask.style.display = ""; 
    move();
}
  


var mo=function(e){e.preventDefault();};
function stop(){
        document.body.style.overflow='hidden';       
        document.addEventListener("touchmove",mo,{passive:false});//禁止页面滑动
}
/***取消滑动限制***/
function move(){
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,{passive:false});       
}