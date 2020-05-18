// !function(id){
var scroll_select_one = document.getElementById("scroll_select_one");
var main = scroll_select_one.getElementsByClassName("main")[0];
var _scroll = document.getElementById("scroll");
var scroll_item = _scroll.getElementsByClassName("scroll-item");
var scroll_select_one_mask = document.getElementById("scroll_select_one_mask");
var cancel = document.getElementById("scroll_cancel");
var confirm = document.getElementById("scroll_confirm");
var h = scroll_item[0].clientHeight;
var boxText = scroll_item[0].innerHTML;
var id = null;
// 显示选择框
function showSelect(id){
    id = document.getElementById(id);
    console.log(id)
    main.style.transition = "all 0.5s";
    scroll_select_one.style.zIndex = 3;
    scroll_select_one.style.opacity = 1;
    main.style.bottom = 0;
    document.body.style.overflow='hidden';
    confirm.onclick = function(){
        main.style.transition = "all 0.5s";
        scroll_select_one.style.zIndex = -6;
        scroll_select_one.style.opacity = 0;
        main.style.bottom = -4.76+"rem";
        id.value = boxText;
        document.body.style.overflow='';
    }
}
scroll_select_one_mask.onclick = function(){
    main.style.transition = "all 0.5s";
    scroll_select_one.style.zIndex = -6;
    scroll_select_one.style.opacity = 0;
    main.style.bottom = -4.76+"rem";
    document.body.style.overflow='';
}
cancel.onclick = function(){
    main.style.transition = "all 0.5s";
    scroll_select_one.style.zIndex = -6;
    scroll_select_one.style.opacity = 0;
    main.style.bottom = -4.76+"rem";
    document.body.style.overflow='';
}


// 设置选中item的样式
function scroll_item_scrollStyle(){
    var scrollH = 0;
    for(var i = 0;i<scroll_item.length;i++){
        scroll_item[i].style.transition = "all 0.2s"
        scroll_item[i].style.color="#ccc";
        scroll_item[i].style.fontSize= 0.12+'rem';
        if(_scroll.scrollTop % h > h/2){
            scroll_item[Math.ceil(_scroll.scrollTop / h)].style.color = "#448DFB";
            scroll_item[Math.ceil(_scroll.scrollTop / h)].style.fontSize= 0.36+'rem';
        }else{
            scroll_item[Math.floor(_scroll.scrollTop / h)].style.color = "#448DFB";
            scroll_item[Math.floor(_scroll.scrollTop / h)].style.fontSize= 0.36+'rem';
        }
        // scroll_item[parseInt(_scroll.scrollTop / h)].style.color = "#448DFB";
        // scroll_item[parseInt(_scroll.scrollTop / h)].style.fontSize= 0.36+'rem';
    }
}
scroll_item_scrollStyle()

let scrollTimer;
_scroll.addEventListener("scroll", () => {
    scroll_item_scrollStyle()
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        // todo something scroll end
        // console.log("滚动停止")
        if (_scroll.scrollTop % h > h / 2 && _scroll.scrollTop % h < h) {
            _scroll.scrollTop = _scroll.scrollTop + (h - _scroll.scrollTop % h);
        }
        if (_scroll.scrollTop % h < h / 2 || _scroll.scrollTop % h === h / 2) {
            _scroll.scrollTop = _scroll.scrollTop - _scroll.scrollTop % h;
        }
        // setTimeout(function () {
            boxText = scroll_item[parseInt(_scroll.scrollTop / h)].innerHTML || "";
            console.log(boxText)
        // }, 500)
    }, 100);
});
// }("birthday")
