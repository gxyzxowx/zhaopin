    // 显示选择框
    function showSelect(id,data,name){
        var data = ["2001年","2002年","2003年","2004年","2005年","2006年","2007年","2008年","2009年"] || data;
        var div = document.createElement("div");
        div.className = "scroll_select_one";
        div.id = "scroll_select_one";
        div.innerHTML = `
        <div class="scroll_select_one_mask" id="scroll_select_one_mask"></div>
        <div class="main">
            <div class="top_btn">
                <div class="left cancel" id="scroll_cancel">取消</div>
                <div class="center">出生年份</div>
                <div class="right confirm" id="scroll_confirm">确定</div>
            </div>
            <div class="scroll-wrap">
                <div class="change"></div>
                <div class="scroll" id="scroll">

                </div>
            </div>
        </div>`;
        // ${data.map(item=>{
        //     return `<div class="scroll-item">${item}</div>`
        // })}
        document.body.appendChild(div);
        var scroll_select_one = document.getElementById("scroll_select_one");
        var main = scroll_select_one.getElementsByClassName("main")[0];
        var _scroll = document.getElementById("scroll");
        // 滑动列表
        for(var i = 0;i<data.length;i++){
            var div_item = document.createElement("div");
            div_item.className = "scroll-item";
            div_item.innerHTML = data[i]
            _scroll.appendChild(div_item);
        }
        var scroll_item = _scroll.getElementsByClassName("scroll-item");
        var scroll_select_one_mask = document.getElementById("scroll_select_one_mask");
        var cancel = document.getElementById("scroll_cancel");
        var confirm = document.getElementById("scroll_confirm");
        var h = scroll_item[0].clientHeight;
        var boxText = scroll_item[0].innerHTML;
        var id = document.getElementById(id);
        
        // 显示选择框
        main.style.transition = "all 0.5s";
        scroll_select_one.style.zIndex = 3;
        scroll_select_one.style.opacity = 1;
        main.style.bottom = 0;
        document.body.style.overflow='hidden';
        // 确定按钮的点击
        confirm.onclick = function(){
            main.style.transition = "all 0.5s";
            scroll_select_one.style.zIndex = -6;
            scroll_select_one.style.opacity = 0;
            main.style.bottom = -4.76+"rem";
            id.value = boxText;
            document.body.style.overflow='';
        }
        // 背景的点击
        scroll_select_one_mask.onclick = function(){
            main.style.transition = "all 0.5s";
            scroll_select_one.style.zIndex = -6;
            scroll_select_one.style.opacity = 0;
            main.style.bottom = -4.76+"rem";
            document.body.style.overflow='';
        }
        // 取消按钮的点击
        cancel.onclick = function(){
            main.style.transition = "all 0.5s";
            scroll_select_one.style.zIndex = -6;
            scroll_select_one.style.opacity = 0;
            main.style.bottom = -4.76+"rem";
            document.body.style.overflow='';
        }
              
        // 设置选中item的样式
        function scroll_item_scrollStyle(){
            for(var i = 0;i<scroll_item.length;i++){
                scroll_item[i].style.transition = "all 0.2s";
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
        
        // 监听滚动结束
        var scrollTimer;
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
                setTimeout(function () {
                    boxText = scroll_item[parseInt(_scroll.scrollTop / h)].innerHTML || "";
                    console.log(boxText)
                }, 500)
            }, 300);
        });
    }
    