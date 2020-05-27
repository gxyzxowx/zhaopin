window.onload=function(){
  var huoqu =document.querySelector(".huoqu");
  var t = 60;
  var inter;
  var iner = true;
  var odd = false;
  var odd1 = false;
  var dtimer;
  var iscld= true;
  var iscld1= false;
  var register =document.querySelector("#register");
  var inp1  = document.querySelector("#inp1");
  var inp2  = document.querySelector("#inp2");

  function fun() {  //倒计时
    if (t >= 1){
      t--;//每次递减
      huoqu.innerHTML = t +"秒后重发";
      huoqu.style.color="#555555";
       iscld=false; //判断为false不执行
    dtimer = setTimeout(function() { //一秒执行一次调用fun函数
          fun(); //回调fun这个方法实现倒计时
     }, 1000);
    }else{
      console.log(0)
      huoqu.innerHTML = "获取验证码";
      iscld=true;//判断为true执行
      huoqu.style.color="#fefefe";
    }
  }

   
      huoqu.onclick=function(){ //点击倒计时
        checkPhone()
        if(!iscld){ //每次点击取反
          return false;
        }
        clearInterval(inter);
          if(iscld1==true){ 
            fun()
          }
        console.log(55)
          
        if(t == 0){ //重新定义倒计时
          t =60;
        }
      }

      // return false ;

 //登录正则
 function checkPhone(){  
  var phone1 =inp1.value;
  if((!/^\d{11}$/.test(phone1))){  //验证手机号
          iscld1=false;
      inp1.value="手机号不正确"
      inp1.style.color = "red";
      inp1.oninput=function(){ //监听value值的变化
        if(inp1.value.length==0){
          inp1.style.color = "#999999";
        }
      }
      return false; 
  }else{
    odd = true;//都正确才执行弹出框
    iscld1=true;
  }
 }
 function checkPhone1(){  //验证验证码
  var phone2 =inp2.value;
  if(!(/^[1-9]{4,12}$/.test(phone2) )){ 
    inp2.value="验证码错误"
    inp2.style.color = "red"; 
    inp2.oninput=function(){  //监听value值的变化
      if(inp2.value.length==0){
        inp2.style.color = "#999999";
      }
    }
      return false; 
  }else{
    odd1 = true;//都正确才执行弹出框
  }
}
  register.onclick=function(){  //登录点击
    checkPhone() //表单验证的方法要在前面调用判断要在后面 不然会出现点击两次才能触发方法
    checkPhone1()
    if(odd==true && odd1== true){ //判断短信和手机号都正确才执行
         alert("发送信息中")
    }
  }
}