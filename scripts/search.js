"use strict";
var inputSearch = document.getElementById("input-query");
var page_num = document.getElementById("nav-page-num");
var searchKey = "";
var searchBt = document.getElementById("btn-submit");
var news_container = document.getElementById("news-container");
var previousBt = document.getElementById("btn-prev");
var page = document.getElementById("page-num").textContent;
var nextBt = document.getElementById("btn-next");
var pageSize = userLogin.pageSize;
var category = userLogin.category;
// ẩn nút previous và next khi chưa tim kiếm
nextBt.style = "display:none;";
previousBt.style = "display:none;";
document.getElementById("page-num").style = "display:none;";
// gắn sự kiện click khi chọn next
nextBt.addEventListener("click", next);
// gắn sự kiện click khi chọn previous
previousBt.addEventListener("click", previous);
//gắn sự kiên click cho nút search
searchBt.addEventListener("click", search);
// ham search
function search() {
  if (inputSearch.value === "") {
    alert("chưa nhập thông tin tìm kiếm");
    return;
  }
  searchKey = `q=${inputSearch.value}&`;
  showData(page, pageSize, category, searchKey).then((data) => {
    if (data === "") {
      news_container.innerHTML =
        "<p style='text-align: center;'>Không tìm thấy bài viết phù hợp </p>";
    } else {
      news_container.innerHTML = data;
      document.getElementById("page-num").removeAttribute("style");
    }
  });
}
//hàm khi click previous
function previous() {
  let page = document.getElementById("page-num").textContent;
  --page;
  document.getElementById("page-num").textContent = page;
  showData(page, pageSize, category, searchKey).then((data) => {
    news_container.innerHTML = data;
  });
}
//hàm khi click next
function next() {
  let page = document.getElementById("page-num").textContent;
  ++page;
  document.getElementById("page-num").textContent = page;
  showData(page, pageSize, category, searchKey).then((data) => {
    news_container.innerHTML = data;
  });
}
