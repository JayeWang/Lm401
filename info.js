window.onload = function () {
    // description of user
    var username = localStorage.username;
    var name = document.getElementById('name');
    name.innerHTML = username;
    var ajax = $.ajax({
        type: "get",
        url: localStorage.testurl + "/admin/getUserList",
        data: {

        },
        success: function (data1) {
            // console.log('test');
            for (var i in data1.data) {
                var list = document.getElementById('list');
                var nTr = document.createElement('tr');
                if (data1.data[i].userRole == 0) {
                    list.appendChild(nTr).innerHTML = '<td>' + data1.data[i].userName + '</td>' +
                        '<td>' + data1.data[i].userId + '</td>' +
                        //<td><input class="btn" type="button" value="111111" disabled="true" title="默认密码"></td>
                        '<td><input class="btn btn-warning" type="button" value="重置密码" onclick="reset(this)"></td><td><input class="btn btn-danger" type="button" value="删除" onclick="delet(this)"></td>' +
                        '<td><input class="btn btn-primary empower" type="button" value="授权" onclick="empower(this)"></td>';
                } else if (data1.data[i].userRole == 1) {
                    list.appendChild(nTr).innerHTML = '<td class="admin">' + data1.data[i].userName + '</td>' +
                        '<td class="admin">' + data1.data[i].userId + '</td>' +
                        //<td><input class="btn" type="button" value="111111" disabled="true" title="默认密码"></td>
                        '<td><input class="btn btn-warning" type="button" value="重置密码" onclick="reset(this)"></td><td><input class="btn btn-danger" type="button" value="删除" onclick="delet(this)"></td>' +
                        '<td><input class="btn btn-primary empower" type="button" value="取消授权" onclick="empower(this)"></td>';
                }

            }
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.token);
        },
    });
    // 
}
// reset anyone's password
function reset(para) {
    var re = confirm("重置密码");
    if (re == true) {
        var id = para.parentNode.parentNode.getElementsByTagName('td')[1].innerText;
        // console.log(id);
        var ajax = $.ajax({
        type: "get",
        url: localStorage.testurl + "/admin/resetPw",
        data: {
            userId:id,

        },
        success: function (data1) {
           if(data1.code == 0){
             alert("重置成功");
           }else{
            alert(data1.message);
           }
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.token);
        },
    });
        // alert('重置成功');
        // request
    } else {
        alert('已取消');
    }
}
// delete anyone member 
function delet(para) {
    var name = para.parentNode.parentNode.getElementsByTagName('td')[0].innerText;
    var id = para.parentNode.parentNode.getElementsByTagName('td')[1].innerText;        
    var delet = confirm("是否删除" + name + "的信息");
    if (delet == true) {
        var ajax = $.ajax({
        type: "get",
        url: localStorage.testurl + "/admin/delUser",
        data: {
            userId:id,
            // userName:nUser
        },
        success: function (data1) {
           if(data1.code == 0){
             alert("删除成功");
           }else{
            alert(data1.message);
           }
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.token);
        },
    });
        // alert('删除成功');
        // request
        var line = para.parentNode.parentNode;
        // .getElementsByTagName('td')[0].innerText;
        line.innerHTML = null;
        // console.log(line);//get success
    } else {
        alert('已取消删除');
    }
}
// grant function 
function empower(para) {
    var name = para.parentNode.parentNode.getElementsByTagName('td')[0].innerText;
    var id = para.parentNode.parentNode.getElementsByTagName('td')[1].innerText;
    // console.log(para.value);
    if (para.value == "授权") {
        var emp = confirm("是否给予" + name + "管理员权限");
        if (emp == true) {
            var ajax = $.ajax({
                type: "post",
                url: localStorage.testurl + "/admin/grant",
                data: {
                    userId: id,
                },

                success: function (data1) {
                    // console.log('test');
                    alert('授权成功');
                    para.value = "取消授权";
                    para.parentNode.parentNode.getElementsByTagName('td')[0].setAttribute('class','admin');
                    para.parentNode.parentNode.getElementsByTagName('td')[1].setAttribute('class','admin');
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', localStorage.token);
                },
            });
        } else {
            alert('已取消授权');
        }
    } else {
        var emp = confirm("是否取消" + name + "管理员权限");
        if (emp == true) {
            var ajax = $.ajax({
                type: "post",
                url: localStorage.testurl + "/admin/cancelAuth",
                data: {
                    userId: id,
                },

                success: function (data1) {
                    // console.log('test');
                    para.value = '授权';
                    para.parentNode.parentNode.getElementsByTagName('td')[0].removeAttribute('class','admin');
                    para.parentNode.parentNode.getElementsByTagName('td')[1].removeAttribute('class','admin');
                    alert('取消成功');
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', localStorage.token);
                },
            });
        } else {
            alert('未取消授权');
        }
    }
}
// add new member
function addMember() {
    var list = document.getElementById('list');
    var nTr = document.createElement('tr');
    var nName = document.getElementById('newName').value;
    var nUser = document.getElementById('newUsername').value;
    if (nName.length == 0 || nUser.length == 0) {
        alert('请填写完整新成员信息');
    } else {
        // 
        var ajax = $.ajax({
        type: "post",
        url: localStorage.testurl + "/admin/addUser",
        data: {
            userId:nUser,
            userName:nName
        },
        success: function (data1) {
           if(data1.code == 0){
             alert("添加成功");
           }else{
            alert(data1.message);
           }
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.token);
        },
    });
        // alert("成员添加成功");
        $('#memberModal').modal('hide')
        list.appendChild(nTr).innerHTML = '<td>' + nName + '</td>' +
            '<td>' + nUser + '</td>' +
            //<td><input class="btn" type="button" value="111111" disabled="true" title="默认密码"></td>
            '<td><input class="btn btn-warning" type="button" value="重置密码" onclick="reset()"></td><td><input class="btn btn-danger" type="button" value="删除" onclick="delet(this)"></td><td><input class="btn btn-primary empower" type="button" value="授权" onclick="empower(this)"></td>';
    }
}