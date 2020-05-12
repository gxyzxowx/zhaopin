window.onload=function(){
  var zhiding = this.document.getElementsByClassName("zhiding");
  var inp = this.document.getElementsByClassName("inp");
  var inp1 = this.document.getElementsByClassName("inp1");
  var Stick= this.document.getElementsByClassName("Stick")[0];
  var guan = this.document.getElementsByClassName("guan")[0];
  var timee = this.document.getElementsByClassName("time")[0];
  

 for(let i=0; i<zhiding.length; i++){
    zhiding[i].onclick=function(){
      for(let j=0; j<zhiding.length;j++){
      inp1[j].style.color = "#666";
      inp[j].style.backgroundImage = "none";
   }
    inp1[i].style.color = "#448DFB";
    inp[i].style.backgroundImage = "url(../image/female11.png)";
    
    }
 }
 
    Stick.onclick=function(){
      timee.style.display = "block";
      }
  
    guan.onclick=function(){
      timee.style.display = "none";
      }

 }