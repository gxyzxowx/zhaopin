var mask = document.getElementById("mask");
var confirm = document.getElementById("confirm");
var cancel = document.getElementById("cancel");

console.log(mask)


function showMask(){
    mask.style.display = "block";       
}

function cancelMask(){
    mask.style.display = ""; 
}

function confirmData(){
    mask.style.display = ""; 
}
  