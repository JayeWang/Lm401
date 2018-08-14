var bannerbtn = document.getElementsByClassName('bannerbtn')[0];
var dBtn = document.getElementById('details');
var nBtn = document.getElementById('addname');
var fBtn = document.getElementById('addfun');
// console.log(dBtn);//test
dBtn.addEventListener('click',function (){
    window.location.href = 'admin.html';
})
nBtn.addEventListener('click',function (){
    window.location.href = 'info.html';
})
fBtn.addEventListener('click',function (){
    // window.location.href = 'admin.html';
    alert('待添加，你还有什么想法吗？');
})