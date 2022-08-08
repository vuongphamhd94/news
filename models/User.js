"use strict";
//lay du lieu cac tai khoan nguoi dung
var userArrString = localStorage.getItem("userArr");
var userArr = userArrString === null ? [] : JSON.parse(userArrString);
// lấy thông tin người đăng nhập thành công
var userLoginString = localStorage.getItem("userLogin");
var userLogin = userLoginString === null ? "" : JSON.parse(userLoginString);
// lấy dữ liệu todo list
var todoArrString = localStorage.getItem("todoArr");
var todoArr = todoArrString === null ? [] : JSON.parse(todoArrString);
