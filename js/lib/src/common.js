
var select_box = document.getElementById("select-box");
var box1 = select_box.getElementsByClassName("box1")[0];
var box2 = select_box.getElementsByClassName("box2")[0];
var box1_item = box1.getElementsByClassName("box1-item");
var box2_item = box2.getElementsByClassName("box2-item");

var select_box2 = document.getElementById("select-box2");
// var more1 = select_box2.getElementsByClassName("more1")[0];
// var more2 = select_box2.getElementsByClassName("more2")[0];
// var more1_item = more1.getElementsByClassName("more1-item");
// var more2_item = more2.getElementsByClassName("more2-item");

var select_img = document.getElementsByClassName("select-img");
var select_text = document.getElementsByClassName("select-text");

var select_box_mask = document.getElementById("select-box-mask");

var index = null;
// 点击显示一级列表
function showBox(i){
    select_text[3].style.color = "#666666"; 
    select_box_mask.style.display = "block";
    // 第一行选中
    for(let k = 0;k<box1_item.length;k++){
        box1_item[k].style.backgroundColor = "";   
    }
    box1_item[0].style.backgroundColor = "#F5F5F5";
    select_box2.style.display = "";
    // more1.style.display = "";
    // more2.style.display = "";
    if(index != i){
        // 获取一级列表  
              
        // 显示一级列表    
        box1.style.display = "block";
        for(let j = 0;j<select_img.length-1;j++){
            select_img[j].src = "../../image/icon_join_bottom.png";
            select_text[j].style.color = "#666666";
        }
        select_img[i].src = "../../image/icon_join_top.png";
        select_text[i].style.color = "#448DFB";
        box2.style.display = "";
        
    }else{
        select_box_mask.style.display = "none";
        box1.style.display = "";
        select_img[i].src = "../../image/icon_join_bottom.png";
        select_text[i].style.color = "#666666";
        box2.style.display = "";
        index = null;
        return
    }
    index = i;
}
// 一级列表的点击
for(let i = 0; i<box1_item.length;i++){
    box1_item[i].onclick = function(){
        for(let j = 0;j<box1_item.length;j++){
            box1_item[j].style.backgroundColor = "";   
        }
        box1_item[i].style.backgroundColor = "#F5F5F5";
        box2.style.height = box1.clientHeight+ "px";
        // 获取二级列表

        // 显示二级列表
        box2.style.display = "block";
        // 第一行选中
        for(let j = 0;j<box2_item.length;j++){
            box2_item[j].style.color = "#666666";   
        }
        box2_item[0].style.color = "#448DFB";
    }
}
// 二级列表的点击
for(let i = 0; i<box2_item.length;i++){
    box2_item[i].onclick = function(){
        for(let j = 0;j<box2_item.length;j++){
            box2_item[j].style.color = "#666666";   
        }
        box2_item[i].style.color = "#448DFB";    
        
        box1.style.display = ""; 
        box2.style.display = "";
        // more1.style.display = "";
        index = null;
        for(let j = 0;j<select_img.length-1;j++){
            select_img[j].src = "../../image/icon_join_bottom.png";
            select_text[j].style.color = "#666666";
        }  
        select_box_mask.style.display = "none";
    }
}

// 更多
function showMore(i){
    if(select_box2.style.display == ""){
        box1.style.display = ""; 
        box2.style.display = "";
        select_box2.style.display = "block";
        select_box_mask.style.display = "block";
        select_text[i].style.color = "#448DFB";
        index = null; 
    }else{
        select_box_mask.style.display = "none";
        select_box2.style.display = "";
        select_text[i].style.color = "#666666";
    }
}

// 确认按钮点击
function confirm(){
    select_box_mask.style.display = "none";

    box1.style.display = ""; 
    box2.style.display = "";
    // more1.style.display = "";
    select_box2.style.display = "";
    index = null;
    for(let j = 0;j<select_img.length-1;j++){
        select_img[j].src = "../../image/icon_join_bottom.png";
        select_text[j].style.color = "#666666";
    } 
    select_text[3].style.color = "#666666"; 
}

// 遮罩点击
select_box_mask.onclick = function(){
        select_box_mask.style.display = "none";

        box1.style.display = ""; 
        box2.style.display = "";
        // more1.style.display = "";
        select_box2.style.display = "";
        index = null;
        for(let j = 0;j<select_img.length-1;j++){
            select_img[j].src = "../../image/icon_join_bottom.png";
            select_text[j].style.color = "#666666";
        } 


        // more1.style.display = "";
        // more2.style.display = "";
        // select_box2.style.display = "";
        select_text[3].style.color = "#666666"; 
}






