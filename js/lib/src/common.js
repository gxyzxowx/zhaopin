window.onload = function(){
    var select_box = document.getElementById("select-box");
    var box1 = select_box.getElementsByClassName("box1")[0];
    var box2 = select_box.getElementsByClassName("box2")[0];
    var select_box2 = document.getElementById("select-box2");
    var box11 = select_box2.getElementsByClassName("box1")[0];
    var box22 = select_box2.getElementsByClassName("box2")[0];
}

// 选择
function showBox(i){
    box11.style.display = "";
    box22.style.display = "";
    if(box1.style.display == ""){
        box1.style.display = "block";
    }else{
        box1.style.display = "";
        box2.style.display = "";
    }
}
function showBox2(){
    box2.style.height = box1.clientHeight+ "px";
    box2.style.display = "block"; 
}

// 更多
function showMore(i){
    box1.style.display = "";
    box2.style.display = "";
    if(box11.style.display == ""){
        box11.style.display = "block";
    }else{
        box11.style.display = "";
        box22.style.display = "";
    }
}
function showBox22(){
    box22.style.display = "block"; 
}