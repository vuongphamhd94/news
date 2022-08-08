"use strict";
// gắn sự kiện click cho nút login
var loginBt = document.getElementById("btn-submit");
loginBt.addEventListener("click", login);
class LoginData {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
function login() {
  var username = document.getElementById("input-username").value;
  var password = document.getElementById("input-password").value;
  var loginData = new LoginData(username, password);
  var loginUser = userArr.filter(function (user) {
    return user.userName === username;
  });
  if (username === "" || password === "") {
    alert("Chưa đủ thông tin đăng nhập!");
  } else if (loginUser.length === 0) {
    alert("UserName chưa được đăng ký!");
  } else if (loginUser[0].password !== password) {
    alert("password không đúng!");
  } else {
    localStorage.setItem("userLogin", JSON.stringify(loginUser[0]));
    window.open("../index.html", "_self");
  }
}
