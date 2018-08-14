var ubtn = document.getElementById("userbtn");
var abtn = document.getElementById("adminbtn");
//保存后台url地址
var url = "";
localStorage.testurl = url;
// console.log(localStorage.testurl);
var bgc = "pink";
ubtn.addEventListener("click", function() {
  ubtn.style.background = bgc;
  abtn.style.background = "none";
});
abtn.addEventListener("click", function() {
  ubtn.style.background = "none";
  abtn.style.background = bgc;
});
function login() {
  var user = document.getElementById("username").value;
  var psw = document.getElementById("password").value;
  localStorage.password = psw;
  if (user.length == 0) {
    alert("请输入您的账号");
  } else {
    if (psw.length == 0) {
      alert("请输入您的密码");
    } else {
      // 保存username
      if (abtn.style.background == bgc) {
        //
        var ajax = $.ajax({
          type: "post",
          url: url + "/user/loginA",
          data: {
            userId: user,
            password: psw
          },
          success: function(data1) {
            // console.log('test');
            if (data1.code == 0) {
              localStorage.username = data1.data.userName;
              localStorage.userId = user;
              localStorage.token = data1.data.authorization;
              // console.log(localStorage.token);
              window.location.href = "admin.html";
            } else {
              alert("登录错误:" + data1.message);
            }
            //
          }
        });
      } else {
        // localStorage.username = user;
        var ajax = $.ajax({
          type: "post",
          url: url + "/user/loginU",
          data: {
            userId: user,
            password: psw
          },
          success: function(data1) {
            // console.log('test');
            if (data1.code == 0) {
              localStorage.username = data1.data.userName;
              localStorage.userId = user;
              window.location.href = "user.html";
            } else {
              alert("登录错误:" + data1.message);
            }
            // window.location.href = 'user.html';
          }
        });
      }
    }
  }
}
