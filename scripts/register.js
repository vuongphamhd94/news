"use strict";
//gắn sự kiện click cho nút register
var registerBt = document.querySelector("#btn-submit");
registerBt.addEventListener("click", register);

//hàm khi click nút register
function register() {
  // lay danh sach cac user name da co
  let listUser = userArr.map(function (user) {
    return user.userName;
  });
  console.log(listUser);
  // lay du lieu nguoi dung nhap
  let userData = {
    firstName: document.getElementById("input-firstname").value,
    lastName: document.getElementById("input-lastname").value,
    userName: document.getElementById("input-username").value,
    password: document.getElementById("input-password").value,
    confirmPassword: document.getElementById("input-password-confirm").value,
  };
  // kiểm tra thong tin đăng ký
  if (
    userData.firstName === "" ||
    userData.lastName === "" ||
    userData.userName === "" ||
    userData.password === "" ||
    userData.confirmPassword === ""
  ) {
    alert("Bạn chưa nhập đầy đủ thông tin");
  } else if (listUser.indexOf(userData.userName) >= 0) {
    alert("Username Đã tồn tại!");
  } else if (userData.password.length <= 8) {
    alert("Password phải có nhiều hơn 8 ký tự!");
  } else if (userData.password !== userData.confirmPassword) {
    alert("Password và Confirm Password phải giống nhau");
  } else {
    // tạo thông tin user
    let user = new User(
      userData.firstName,
      userData.lastName,
      userData.userName,
      userData.password
    );
    // thêm thông tin user mới vào danh sách các user
    userArr.push(user);
    localStorage.setItem("userArr", JSON.stringify(userArr));
    //xoa thong tin nhap
    document.getElementById("input-firstname").value = "";
    document.getElementById("input-lastname").value = "";
    document.getElementById("input-username").value = "";
    document.getElementById("input-password").value = "";
    document.getElementById("input-password-confirm").value = "";
    // thong bao dang ky thah cong
    alert("Đăng ký thành công");
    //chuyển người dùng về trang Login
    window.open("./login.html", "_self");
  }
}
