window.onload = function(){


var mask = document.getElementById("mask");
var confirm = document.getElementById("confirm");
var cancel = document.getElementById("cancel");



// 显示工作经历教育经历弹框
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
  

// 显示弹框时禁止页面滑动
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


// scroll
var select = document.getElementById("select");
var province = document.getElementById("province");
var p_item = province.getElementsByClassName("p-item");
var h = p_item[0].clientHeight; // 每一个item的高度

// $("#province").on("scrollstart",function(){
//     // console.log("开始滚动!");
// });

// // 设置选中item的样式
// function p_item_scrollStyle(){
//     for(var i = 0;i<p_item.length;i++){
//         p_item[i].style.color="#ccc";
//         p_item[i].style.fontSize= 0.12+'rem';
//         p_item[parseInt(province.scrollTop / p_item[0].clientHeight)].style.color = "red";
//         p_item[parseInt(province.scrollTop / p_item[0].clientHeight)].style.fontSize= 0.36+'rem';
//     }
// }
// p_item_scrollStyle()

// // 监听province滚动结束
// $("#province").on("scrollstop",function(){
//     if(province.scrollTop%p_item[0].clientHeight < p_item[0].clientHeight/2 || 
//         province.scrollTop%p_item[0].clientHeight == p_item[0].clientHeight/2){
//         province.scrollTop -= province.scrollTop%p_item[0].clientHeight
//     }else{
//         province.scrollTop = province.scrollTop + province.scrollTop%p_item[0].clientHeight
//     }
//     p_item_scrollStyle()
// });

}