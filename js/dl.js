function button(){
    var login="孤风若影";
    var possword="yh2698287603";
    var id=document.getElementById("id").value;
    var pwd=document.getElementById("pwd").value;
    if(login==id&&possword==pwd){
        window.location.href="../html/mm.html"
    }else {
        alert("登录失败");
    }
}