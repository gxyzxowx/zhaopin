window.onload=function(){
  var tongzhi = this.document.getElementsByClassName("span-queding");
  var time = this.document.getElementsByClassName("time")[0];
  var guan = this.document.getElementsByClassName("guan")[0];
  

 for(var i=0; i<tongzhi.length; i++){
  tongzhi[i].onclick=function(){
    time.style.display = "block";
    }
 }
  
    guan.onclick=function(){
      time.style.display = "none";
      }

 }