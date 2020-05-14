

// 弹框************************************
var mask = document.getElementById("mask");
// var confirm = document.getElementById("confirm");
// var cancel = document.getElementById("cancel");
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

// 一级列表选择************************************
// var scroll_select_one = document.getElementById("scroll_select_one");
// var scroll_select_one_mask = scroll_select_one.getElementsByClassName("scroll_select_one_mask")[0];
// var main = scroll_select_one.getElementsByClassName("main")[0];
// var cancel = document.getElementById("cancel");
// var confirm = document.getElementById("confirm");
// var _scroll = document.getElementById("scroll");
// var scroll_item = _scroll.getElementsByClassName("scroll-item");
// var birthday = document.getElementById("birthday");
// var h = scroll_item[0].clientHeight;
// var boxText = null;

// // 显示选择框
// function showSelect(){
//     main.style.transition = "all 0.5s";
//     scroll_select_one.style.zIndex = 3;
//     scroll_select_one.style.opacity = 1;
//     main.style.bottom = 0;
//     // stop()
//     document.body.style.overflow='hidden';
// }
// // 点击取消选择框
// function cancelSelect(){
//     main.style.transition = "all 0.5s";
//     scroll_select_one.style.zIndex = -6;
//     scroll_select_one.style.opacity = 0;
//     main.style.bottom = -4.76+"rem";
//     document.body.style.overflow='';
// }

// // 点击确认选择框
// function confirmSelect(){
//     main.style.transition = "all 0.5s";
//     scroll_select_one.style.zIndex = -6;
//     scroll_select_one.style.opacity = 0;
//     main.style.bottom = -4.76+"rem";
//     birthday.value = boxText;
//     document.body.style.overflow='';
// }

// // 设置选中item的样式
// function scroll_item_scrollStyle(){
//     var scrollH = 0;
//     for(var i = 0;i<scroll_item.length;i++){
//         scroll_item[i].style.color="#ccc";
//         scroll_item[i].style.fontSize= 0.12+'rem';
//         scroll_item[parseInt(_scroll.scrollTop / h)].style.color = "#448DFB";
//         scroll_item[parseInt(_scroll.scrollTop / h)].style.fontSize= 0.36+'rem';
//     }
// }
// scroll_item_scrollStyle()

// let scrollTimer;
// _scroll.addEventListener("scroll", () => {
//     scroll_item_scrollStyle()
//     clearTimeout(scrollTimer);
//     scrollTimer = setTimeout(() => {
//         // todo something scroll end
//         // console.log("滚动停止")
//         if (_scroll.scrollTop % h > h / 2 && _scroll.scrollTop % h < h) {
//             _scroll.scrollTop = _scroll.scrollTop + (h - _scroll.scrollTop % h);
//         }
//         if (_scroll.scrollTop % h < h / 2 || _scroll.scrollTop % h === h / 2) {
//             _scroll.scrollTop = _scroll.scrollTop - _scroll.scrollTop % h;
//         }
//         setTimeout(function () {
//             boxText = scroll_item[parseInt(_scroll.scrollTop / h)].innerHTML || "";
//             console.log(boxText)
//         }, 500)
//     }, 300);
// });



// 插件三级选择列表************************************
window.onload = function(){
$(function() {
    /**
     * 通过数组id获取地址列表数组
     *
     * @param {Number} id
     * @return {Array} 
     */ 
    function getAddrsArrayById(id) {
        var results = [];
        if (addr_arr[id] != undefined)
            addr_arr[id].forEach(function(subArr) {
                results.push({
                    key: subArr[0],
                    val: subArr[1]
                });
            });
        else {
            return;
        }
        return results;
    }
    /**
     * 通过开始的key获取开始时应该选中开始数组中哪个元素
     *
     * @param {Array} StartArr
     * @param {Number|String} key
     * @return {Number} 
     */         
    function getStartIndexByKeyFromStartArr(startArr, key) {
        var result = 0;
        if (startArr != undefined)
            startArr.forEach(function(obj, index) {
                if (obj.key == key) {
                    result = index;
                    return false;
                }
            });
        return result;
    }

    //bind the click event for 'input' element
    $("#myAddrs").click(function() {
        document.body.style.overflow='hidden';
        var PROVINCES = [],
            startCities = [],
            startDists = [];
        //Province data，shall never change.
        addr_arr[0].forEach(function(prov) {
            PROVINCES.push({
                key: prov[0],
                val: prov[1]
            });
        });
        //init other data.
        var $input = $(this),
            dataKey = $input.attr("data-key"),
            provKey = 1, //default province 北京
            cityKey = 36, //default city 北京
            distKey = 37, //default district 北京东城区
            distStartIndex = 0, //default 0
            cityStartIndex = 0, //default 0
            provStartIndex = 0; //default 0

        if (dataKey != "" && dataKey != undefined) {
            var sArr = dataKey.split("-");
            if (sArr.length == 3) {
                provKey = sArr[0];
                cityKey = sArr[1];
                distKey = sArr[2];

            } else if (sArr.length == 2) { //such as 台湾，香港 and the like.
                provKey = sArr[0];
                cityKey = sArr[1];
            }
            startCities = getAddrsArrayById(provKey);
            startDists = getAddrsArrayById(cityKey);
            provStartIndex = getStartIndexByKeyFromStartArr(PROVINCES, provKey);
            cityStartIndex = getStartIndexByKeyFromStartArr(startCities, cityKey);
            distStartIndex = getStartIndexByKeyFromStartArr(startDists, distKey);
        }
        var navArr = [{//3 scrollers, and the title and id will be as follows:
            title: "省",
            id: "scs_items_prov"
        }, {
            title: "市",
            id: "scs_items_city"
        }, {
            title: "区",
            id: "scs_items_dist"
        }];
        SCS.init({
            navArr: navArr,
            onOk: function(selectedKey, selectedValue) {
                $input.val(selectedValue).attr("data-key", selectedKey);
            }
        });
        var distScroller = new SCS.scrollCascadeSelect({
            el: "#" + navArr[2].id,
            dataArr: startDists,
            startIndex: distStartIndex
        });
        var cityScroller = new SCS.scrollCascadeSelect({
            el: "#" + navArr[1].id,
            dataArr: startCities,
            startIndex: cityStartIndex,
            onChange: function(selectedItem, selectedIndex) {
                distScroller.render(getAddrsArrayById(selectedItem.key), 0); //re-render distScroller when cityScroller change
            }
        });
        var provScroller = new SCS.scrollCascadeSelect({
            el: "#" + navArr[0].id,
            dataArr: PROVINCES,
            startIndex: provStartIndex,
            onChange: function(selectedItem, selectedIndex) { //re-render both cityScroller and distScroller when provScroller change
                cityScroller.render(getAddrsArrayById(selectedItem.key), 0);
                distScroller.render(getAddrsArrayById(cityScroller.getSelectedItem().key), 0);
            }
        });
    });
});

}


