function validate(){

    var name = document.getElementById("HoTen").value;
    var phone = document.getElementById("phone").value;
    var password1=document.getElementById("pw1").value;
    var password2=document.getElementById("pw2").value;
    if(name == ""){
        alert("Vui lòng nhập tên!");
        return false;
    }
    else if(phone == ""){
        alert("Vui lòng nhập số điện thoại!");
        return false;
    }
    else if(password1 == ""){
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    else if(password2 == ""){
        alert("Vui lòng nhập lại mật khẩu!")
        return false;
    }
    else if(password1 !== password2) {
        alert("Mật khẩu không trùng khớp!")
        return false;
    }
    else{
        location.href="D:/ThuchanhWWeb/TrangWebBanLen/TrangChu.html";
    }
}