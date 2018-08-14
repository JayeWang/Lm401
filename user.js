var week1;
var week2;
var week3;
var week4;
var week5;

window.onload = function () {
    var username = localStorage.username;
    var name = document.getElementById('name');
    name.innerHTML = username;
    var innerMonth = document.getElementById('getMonth');
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = date.getMonth() + 1; //当前是7月
    // var month = 12;
    var day = 1;
    var week;
    // 获取当前月份
    getMonth(month);
    var index = 1;
    var init;
    // 每个月的第一周肯定有1号
    //console.log(init);
    innerMonth.innerText = month;
    // 将信息显示出来
    function getMonth(month) {
        switch (month) {
            case 1:
                month = 'Jan';
                break;
            case 2:
                month = 'Feb';
                break;
            case 3:
                month = 'Mar';
                break;
            case 4:
                month = 'Apr';
                break;
            case 5:
                month = 'May';
                break;
            case 6:
                month = 'Jun';
                break;
            case 7:
                month = 'Jul';
                break;
            case 8:
                month = 'Aug';
                break;
            case 9:
                month = 'Sep';
                break;
            case 10:
                month = 'Oct';
                break;
            case 11:
                month = 'Nov';
                break;
            case 12:
                month = 'Dec';
                break;
        }
        init = new Date(month + ' 01 2018 00:00:00 GMT+0800 (中国标准时间)');
    }

    // 获取这个月一号是星期几
    // 
    function getWeek(week) {
        if (week == 'Mon') {
            week = 1;
            // //console.log(week);
        }
        if (week == 'Tue') {
            week = 2;
            // //console.log(week);
        }
        if (week == 'Wed') {
            week = 3;
            // //console.log(week);
        }
        if (week == 'Thu') {
            week = 4;
            // //console.log(week);
        }
        if (week == 'Fri') {
            week = 5;
            // //console.log(week);
        }
        if (week == 'Sat') {
            week = 6;
            // //console.log(week);
        }
        if (week == 'Sun') {
            week = 7;
            // //console.log(week);
        }
        return week;
    }

    function getNumWeek() {
        // getMonth(month);
        week = new String(init).slice(0, 3); //获取星期几
        // //console.log(week);
        week = getWeek(week);
    }
    getNumWeek();
    //console.log('week' + week);
    if (week == 7) {
        day = 1;
    }
    if (week == 1) {
        // 上个月最后一天
        if (month > 1) month = month - 1;
        if (month == 1) month = 12;
        if (month == 2) day = 28;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
            day = '31';
        if (month == 4 || month == 6 || month == 9 || month == 11) day = 30;
    }
    if (week == 2) {
        // 上个月倒数第二天
        month = month - 1;
        if (month == 2) day = 27;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
            day = '30';
        if (month == 4 || month == 6 || month == 9 || month == 11) day = 29;
    }
    if (week == 3) {
        // 上个月倒数第三天
        month = month - 1;
        if (month == 2) day = 26;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
            day = '29';
        if (month == 4 || month == 6 || month == 9 || month == 11) day = 28;
    }
    if (week == 4) {
        // 上个月倒数第四天
        month = month - 1;
        if (month == 2) day = 25;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
            day = '28';
        if (month == 4 || month == 6 || month == 9 || month == 11) day = 27;
    }
    if (week == 5) {
        // 上个月倒数第五天
        month = month - 1;
        if (month == 2) day = 24;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
            day = '27';
        if (month == 4 || month == 6 || month == 9 || month == 11) day = 26;
    }
    if (week == 6) {
        // 上个月单数第六天
        month = month - 1;
        if (month == 2) day = 23;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
            day = '26';
        if (month == 4 || month == 6 || month == 9 || month == 11) day = 25;
    }
    // var start = year +'-'+ month+'-' + day;
    var start = year + '-' + month + '-' + day;
    // if (month < 10) {
    //     var start = year + '-0' + month + '-' + day;
    // }
    // if (day < 10) {
    //     if (month < 10) var start = year + '-0' + month + '-0' + day;
    //     if (month > 9) var start = year + '-' + month + '-0' + day;
    //     // //console.log(start);
    // }
    day = 2 * day / 2;
    var oday;
    // month = month - 1;
    //console.log('month:' + month);
    // month = month + 1;
    //console.log('day:' + day);
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) oday =
        31;
    if (month == 4 || month == 6 || month == 9 || month == 11) oday = 30;
    // oday = 29;
    if (month == 2) oday = 28;
    if (day >= oday - 5) month++;
    if (month > 12) month = 1;

    //console.log('oday:' + oday);
    if (day + 6 > oday) day = day - oday;
    //console.log('day:' + day);
    var end = year + '-' + month + '-' + (day + 6);
    // if (month < 10) {
    //     var end = year + '-0' + month + '-' + day;
    // }
    // if (day < 10) {
    //     if (month < 10) var end = year + '-0' + month + '-0' + (day + 6);
    //     if (month > 9) var end = year + '-' + month + '-0' + (day + 6);
    //     // //console.log(start);
    // }
    // start = start.toDateString();
    // var end = year +'-'+ month+'-' + (day+6);
    week1 = {
        'start': start,
        'end': end
    };
    //console.log(week1);
    start = year + '-' + month + '-' + ((day + 6) + 1);
    // if (month < 10) {
    //     var start = year + '-0' + month + '-' + day;
    // }
    // if (day < 10) {
    //     if (month < 10) var start = year + '-0' + month + '-0' + (day + 6+1);
    //     if (month > 9) var start = year + '-' + month + '-0' + (day + 6+1);
    //     // //console.log(start);
    // }
    end = year + '-' + month + '-' + ((day + 6) + 1 + 6);
    // if (month < 10) {
    //     var end = year + '-0' + month + '-' + ((day + 6) + 1 + 6);
    // }
    // if (day < 10) {
    //     if (month < 10) var end = year + '-0' + month + '-0' + ((day + 6) + 1 + 6);
    //     if (month > 9) var end = year + '-' + month + '-0' + ((day + 6) + 1 + 6);
    //     // //console.log(start);
    // }
    week2 = {
        'start': start,
        'end': end
    };
    //console.log(week2);
    start = year + '-' + month + '-' + ((day + 6 * 2) + 1 * 2);
    end = year + '-' + month + '-' + ((day + 6 * 2) + 1 * 2 + 6);
    week3 = {
        'start': start,
        'end': end
    };
    //console.log(week3);
    start = year + '-' + month + '-' + ((day + 6 * 3) + 1 * 3);
    end = year + '-' + month + '-' + ((day + 6 * 3) + 1 * 3 + 6);
    week4 = {
        'start': start,
        'end': end
    };
    //console.log(week4);
    start = year + '-' + month + '-' + ((day + 6 * 4) + 1 * 4);
    // 最后一周的情况需要分析；
    //console.log(month);
    oday = mGetDate(year, month);
    //console.log(oday);
    if ((((day + 6 * 4) + 1 * 4 + 6) - oday) > 0) month++;

    if ((((day + 6 * 4) + 1 * 4 + 6) - oday) > 0) end = year + '-' + month + '-' + (((day + 6 * 4) + 1 * 4 + 6) -
        oday);
    // if(>oday) end = end-oday;
    if ((((day + 6 * 4) + 1 * 4 + 6) - oday) <= 0) end = year + '-' + month + '-' + (((day + 6 * 4) + 1 * 4 + 6));
    week5 = {
        'start': start,
        'end': end
    };
    //console.log(week5);
    count = 10;
    // //console.log(week);
    var _week1 = document.getElementById('week1');
    var _week2 = document.getElementById('week2');
    var _week3 = document.getElementById('week3');
    var _week4 = document.getElementById('week4');
    var _week5 = document.getElementById('week5');
    // getAll(week1, week2, week3, week4, week5);
    judge(date);
    sel();
    // 
}

function mGetDate(year, month) {
    var day = new Date(year, month, 0);
    return day.getDate();
    //  var date = new Date();
    //  var year = date.getFullYear();
    //  var month = month;
    // //  date.getMonth()+1;
    // //  //console.log(month);
    //  var d = new Date(year, month, 0);
    //  return d.getDate();
}

function dateConvert(dateParms) {
    // 对传入的时间参数进行判断
    if (dateParms instanceof Date) {
        var datetime = dateParms;
    }
    //判断是否为字符串
    if ((typeof dateParms == "string") && dateParms.constructor == String) {
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
    var time = year + '-' + month + '-' + date;
    //或者
    //var time = year+"年"+month+"月"+date+"日"+hour+":"+minutes+":"+second; 
    //返回处理结果
    return time;
}

function sel() {
    var select = document.getElementsByTagName('select')[0];
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    // //console.log(select);
    // //console.log(week1 + 'week1:');
    // //console.log(count);
    if (select.value == '第一周') {
        start.value = dateConvert(week1.start);
        //  week1.start;

        end.value = dateConvert(week1.end);
    }
    if (select.value == '第二周') {
        start.value = dateConvert(week2.start);
        end.value = dateConvert(week2.end);
    }
    if (select.value == '第三周') {
        start.value = dateConvert(week3.start);
        end.value = dateConvert(week3.end);
    }
    if (select.value == '第四周') {
        // alert(4);
        start.value = dateConvert(week4.start);
        end.value = dateConvert(week4.end);
    }
    if (select.value == '第五周') {
        // alert(5);
        start.value = dateConvert(week5.start);
        end.value = dateConvert(week5.end);
    }
}

function judge(date) {
    // //console.log(week1);
    //console.log(date);
    var select = document.getElementById('week');
    var start1 = new Date(week1.start);
    var start2 = new Date(week2.start);
    var start3 = new Date(week3.start);
    var start4 = new Date(week4.start);
    var start5 = new Date(week5.start);
    // //console.log(week1.start);
    if (date > start1) select.value = '第一周';
    if (date > start2) select.value = '第二周';
    if (date > start3) select.value = '第三周';
    if (date > start4) select.value = '第四周';
    if (date > start5) select.value = '第五周';
}
// 
function getAll() {
    // 
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    //var user
    var ajax = $.ajax({
        type: "get",
        url: localStorage.testurl + "/user/getSelfTimeInfo",
        data: {
            startDate: start,
            endDate: end,
            // userName:infoName
        },

        success: function (data1) {
            // console.log
            var list = document.getElementById('list');
            if (data1.code == 0) {
                ////
                var tr = document.createElement('tr');
                tr.innerHTML = '<tr><td>日期</td><td>签到时间</td><td>签退时间</td><td>纪录时长</td><td>备注</td></tr>';
                for (var i in data1.data.singleRecordVoList) {
                    var tr = document.createElement("tr");
                    tr.innerHTML =
                        //   "<td>" +
                        //   data1.data.userName +
                        //   "</td>" +
                        "<td>" +
                        data1.data.singleRecordVoList[i].timeDate +
                        "</td>" +
                        "<td>" +
                        data1.data.singleRecordVoList[i].timeIn +
                        "</td>" +
                        "<td>" +
                        data1.data.singleRecordVoList[i].timeOut +
                        "</td>" +
                        "<td>" +
                        data1.data.singleRecordVoList[i].hours +
                        "H" +
                        data1.data.singleRecordVoList[i].minutes +
                        "M" +
                        "</td>";
                    if (data1.data.singleRecordVoList[i].timeValid == "N") {
                        tr.innerHTML +=
                            '<td><input class="btn btn-danger btn-lg" type="button" value="无效" data-toggle="modal" data-target="#infoModal" ></td>';
                    } else {
                        tr.innerHTML +=
                            '<td><input class="btn btn-success btn-lg" type="button" value="有效" data-toggle="modal" data-target="#infoModal" ></td>';
                    }
                    list.appendChild(tr);
                }
            } else {
                alert(data1.message);
            }
        },
        error: function (data1) {},
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", localStorage.token);
        }
    });
}