
   window.onload=function(){
    var yaoqin = this.document.getElementsByClassName("footerbox3")[0];
    var time = this.document.getElementsByClassName("time")[0];
    var guan = this.document.getElementsByClassName("guan")[0];
  

    yaoqin.onclick=function(){
      time.style.display = "block";
      }
      guan.onclick=function(){
        time.style.display = "none";
        }

   }