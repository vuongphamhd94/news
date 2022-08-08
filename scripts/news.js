"use strict";
var previousBt = document.getElementById("btn-prev");
var page = document.getElementById("page-num").textContent;
var nextBt = document.getElementById("btn-next");
var news_container = document.getElementById("news-container");
var pageSize = userLogin.pageSize;
var category = userLogin.category;
// gắn sự kiện click khi chọn next
nextBt.addEventListener("click", next);
// gắn sự kiện click khi chọn previous
previousBt.addEventListener("click", previous);

showData(page, pageSize, category).then((data) => {
  news_container.innerHTML = data;
});
//hàm khi click previous
function previous() {
  let page = document.getElementById("page-num").textContent;
  --page;
  document.getElementById("page-num").textContent = page;
  showData(page, pageSize, category).then((data) => {
    news_container.innerHTML = data;
  });
}
//hàm khi click next
function next() {
  let page = document.getElementById("page-num").textContent;
  ++page;
  document.getElementById("page-num").textContent = page;
  showData(page, pageSize, category).then((data) => {
    news_container.innerHTML = data;
  });
}
