"use strict";
var pageSizeIp = document.getElementById("input-page-size");
var category = document.getElementById("input-category");
var saveBt = document.getElementById("btn-submit");
// Dán sự kiện click cho nút save
saveBt.addEventListener("click", save);
// Hàm save
function save() {
  //kiem tra co login ko?
  if (userLogin === "") {
    alert("Chưa đăng nhập! ");
    return;
  }
  //kiem tra nhap thong tin
  if (pageSizeIp.value === "") {
    alert("Chưa nhập thông tin 'News per page'! ");
    return;
  }
  let pageSize = pageSizeIp.value;
  let categoryNew = category.value;
  userLogin.pageSize = pageSize; // thay đổi thông tin cho user hiện tại
  userLogin.category = categoryNew; // thay đổi thông tin cho user hiện tại
  localStorage.setItem("userLogin", JSON.stringify(userLogin)); // lưu lại thay đổi
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].userName === userLogin.userName) {
      userArr[i].pageSize = pageSize;
      userArr[i].category = categoryNew;
      alert("Đã thay đổi thông tin"); // thông báo đã thay đổi
      localStorage.setItem("userArr", JSON.stringify(userArr)); // lưu lại thay đổi
      pageSizeIp.value = ""; // xoa thông tin đã nhập
      category.value = "General"; // xoa thông tin đã nhập
      window.open("./news.html", "_self"); //chuyển người dùng về trang news
    }
  }
}
