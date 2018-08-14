var oldpsw = document.getElementById('oldpsw');
// console.log(oldpsw);
oldpsw.addEventListener('keyup',function (){
  var psw = document.getElementById('oldpsw').value;
  var tips = document.getElementById('tips');
  // console.log('length'+psw.length);
  // console.log('slice'+psw.slice(0,psw.length+1));
  // console.log('new'+psw);
  if(psw!=localStorage.password){
    tips.innerText = '原密码错误，请检查';
    
    // console.log('old'+localStorage.password);
  }else{
    tips.innerText = '原密码正确，请修改密码';
  }
})
var newpsw = document.getElementById('newpsw');
newpsw.addEventListener('keyup',function (){
  // console.log(para.value);
  var p1 = /[0-9]/;
  var p2 = /[a-z]/i;
  var p3 = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
  );
  var weak = document.getElementById("weak");
  var mid = document.getElementById("middle");
  var str = document.getElementById("strong");
  var psw = document.getElementById('newpsw').value;
  localStorage.passwodr = psw;
  console.log(psw);
  if (p1.test(psw)) {
    // alert('请先输入');
    weak.style.background = "red";
  }
  if (p2.test(psw)) {
    weak.style.background = "red";
    mid.style.background = "orange";
  }
  if (p3.test(psw)) {
    weak.style.background = "red";
    mid.style.background = "orange";
    str.style.background = "green";
  }
  if (psw.length < 4) {
    weak.style.background = "red";
    mid.style.background = "white";
    str.style.background = "white";
  }
  if (psw.length == 0) {
    weak.style.background = "white";
    mid.style.background = "white";
    str.style.background = "white";
  }
})
