"use strict";
var login_modal = document.querySelector("#login-modal");
var main_content = document.querySelector("#main-content");
var logoutBt = document.getElementById("btn-logout");
var message = document.getElementById("welcome-message");
// kiểm tra thông tin đăng nhập để hiển thị giao diện trang web
viewWeb();
//gắn sự kiện logout cho bút logout
logoutBt.addEventListener("click", logout);
// hàm logout
function logout() {
  localStorage.removeItem("userLogin");
  userLogin = "";
  viewWeb();
}
// Hamf kiểm tra thông tin đăng nhập để hiển thị giao diện trang web
function viewWeb() {
  if (userLogin === "") {
    main_content.setAttribute("style", "display:none;");
    login_modal.removeAttribute("style");
  } else {
    main_content.removeAttribute("style");
    login_modal.setAttribute("style", "display:none;");
    message.textContent = `Welcome ${userLogin.firstName}`;
  }
}
