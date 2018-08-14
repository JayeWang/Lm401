window.onload = function() {
  // var td = document.createElement('td');
  var user = "user";
  var op =
    '<input class="btn btn-primary sign" type="button" value="签到" onclick="sign(this)">' +
    '<input class="btn btn-danger out" type="button" value="签退" onclick="out(this)">';
  var list = document.getElementById("list");
  // var index = 20;

  //test
  // console.log(sign);
  // for (let i = 0; i < sign.length; i++) {
  //     // console.log('test');
  //     var username;
  //     out[i].setAttribute('disabled', 'disabled');
  //     sign[i].addEventListener('click', function () {
  //         username = this.parentNode.parentNode.getElementsByTagName('td')[0].innerText;
  //         console.log(username);
  //         alert('点击签到发送' + username + '签到数据（绑定问题？）');
  //         out[i].removeAttribute('disabled', 'disabled');
  //         sign[i].setAttribute('disabled', 'disabled');
  //         // console.log(i);
  //     })
  // }
  //
  function dateConvert(dateParms) {
    // 对传入的时间参数进行判断
    if (dateParms instanceof Date) {
      var datetime = dateParms;
    }
    //判断是否为字符串
    if (typeof dateParms == "string" && dateParms.constructor == String) {
      //将字符串日期转换为日期格式
      var datetime = new Date(Date.parse(dateParms.replace(/-/g, "/")));
    }
    //获取年月日时分秒
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minutes = datetime.getMinutes();
    var second = datetime.getSeconds();
    //月，日小于10时，补0
    if (month < 10) {
      month = "0" + month;
    }
    if (date < 10) {
      date = "0" + date;
    }
    //拼接日期格
    var time = year + "-" + month + "-" + date;
    //或者
    //var time = year+"年"+month+"月"+date+"日"+hour+":"+minutes+":"+second;
    //返回处理结果
    return time;
  }
  var date = new Date();
  date = dateConvert(date);
  // console.log(date);
  var ajax = $.ajax({
    type: "get",
    url: localStorage.testurl + "/info/getSignList",
    data: {
      tempDate: date
    },
    success: function(data1) {
      // console.log('test');
      if (data1.code == 0) {
        for (var i in data1.data) {
          var oBtn = document.getElementsByTagName('input');
          // if(i/2!=0){
          //   oBtn[i].setAttribute('timeId',)
          // }
          var tr = document.createElement("tr");
          // user = 'user' + i;
          list.appendChild(tr).innerHTML =
            "<td>" + data1.data[i].userName + "</td>" + "<td>" + op + "</td>";
          list.appendChild(tr).setAttribute("userId", data1.data[i].userId);
          list.appendChild(tr).setAttribute("timeId", data1.data[i].timeId);
          
          if (data1.data[i].timeState == 0) {
            var sign = document.getElementsByClassName("sign");
            var out = document.getElementsByClassName("out");
            sign[i].removeAttribute("disabled", "disabled");
            out[i].setAttribute("disabled", "disabled");
          } else {
            var sign = document.getElementsByClassName("sign");
            var out = document.getElementsByClassName("out");
            sign[i].setAttribute("disabled", "disabled");
            out[i].removeAttribute("disabled", "disabled");
          }

        }
      } else {
        alert("加载错误:" + data1.message);
      }
      //
    }
  });
}; //
// sign function //click to sign
function sign(para) {
  //send out request and corresponding userId
  var userId = para.parentNode.parentNode.getAttribute("userId");
  // user = localStorage.user = {
  //   id: userId,
  //   timeId: userId
  // };
  // console.log(user.timeId);
  var ajax = $.ajax({
    type: "get",
    url: localStorage.testurl + "/info/signIn",
    data: {
      userId: userId
    },
    success: function(data1) {
      // console.log('test');
      if (data1.code == 0) {
        var inBtn = para;
        inBtn.setAttribute("disabled", true);
        var outBtn = para.parentNode.getElementsByTagName("input")[1];
        outBtn.removeAttribute("disabled", true);
        // para.setAttribute("timeId", data1.data);
        // console.log(para.getAttribute('timeId'));
      }
    }
    //
  });
}
// out function // click to  out like sign
function out(para) {
  // var userId = para.parentNode.parentNode.getAttribute('userId');
  var timeId = para.parentNode.parentNode.getAttribute("timeId");
    // timeId = '153421611885438';
  // console.log(userId + 'sign out');
  var ajax = $.ajax({
    type: "post",
    url: localStorage.testurl + "/info/signOut",
    data: {
      timeId: timeId
    },
    success: function(data1) {
      // console.log('test');
      if (data1.code == 0) {
        var outBtn = para;
        outBtn.setAttribute("disabled", true);
        var inBtn = para.parentNode.getElementsByTagName("input")[0];
        inBtn.removeAttribute("disabled", true);
      }
    }
    //
  });
}
