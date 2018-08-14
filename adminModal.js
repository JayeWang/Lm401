$(function () { $('#myModal').modal('hide') });
$('#savebtn').click(function () {
    var id = localStorage.userId;
    var oldpsw = document.getElementById('oldpsw').value;
    var newpsw = document.getElementById('newpsw').value;
    var ajax = $.ajax({
    type: "post",
    url: localStorage.testurl + "/user/modifyPw",
    data: {
        userId:id,
        oldPw:oldpsw,
        newPw:newpsw
    },

    success: function (data1) {
        // console.log
       if(data1.code == 0){
         alert("信息修改保存成功点击确定1秒后返回到登陆");//('test');
         var timer = setTimeout(function (){
            window.location = 'login.html';
         },3000);
       }else{
        alert(data1.message);
       }
    },
    error: function (data1) {
        
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.token);
    },
});
    // alert("信息修改保存成功");
    oldpsw.value = null;
    newpsw.value = null;
    // console.log(oldpsw.value);
    $('#myModal').modal('hide')
})