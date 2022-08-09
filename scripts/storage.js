"use strict";
//lớp thông tin người dùng đăng ký
class User {
  constructor(firstname, lastname, username, password) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.userName = username;
    this.password = password;
    this.pageSize = 10;
    this.category = "sports";
  }
}
//Hàm lấy dữ liệu về và ghi ra màn hình
async function showData(page, pageSize = 5, category = "sports", search = "") {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&${search}apiKey=3d27c44ec6474e28a77815835df96fa9`;
  let response = await fetch(url);
  let data = await response.json();
  let articles = data.articles;
  dieuHuong(page, data.totalResults, pageSize);
  return View(articles);
}
//hàm hiện thị previous và next khi điều hướng trang
function dieuHuong(page, totalResults, pageSize) {
  let maxPage =
    totalResults % pageSize === 0
      ? totalResults / pageSize
      : Math.floor(totalResults / pageSize) + 1;
  // kiểm tra giá trị page hiện tại để hiển thị
  if (totalResults <= pageSize) {
    nextBt.setAttribute("style", "display:none");
    previousBt.setAttribute("style", "display:none");
    return;
  }
  if (page == 1) {
    previousBt.setAttribute("style", "display:none");
    nextBt.removeAttribute("style");
  } else if (page < maxPage) {
    previousBt.removeAttribute("style");
    nextBt.removeAttribute("style");
  } else {
    previousBt.removeAttribute("style");
    nextBt.setAttribute("style", "display:none");
  }
}
// hàm hiển thị nội dung khi lấy về
function View(articles) {
  var html = "";
  for (let i = 0; i < articles.length; i++) {
    html += `<div class="row" style="margin-bottom: 20px">
    <div class="col-sm-4">
      <img src="${
        articles[i].urlToImage == null ? "#" : articles[i].urlToImage
      }" alt="Ảnh" style="width: 100%"/>
    </div>

    <div class="col-sm-8">
      <h3>${articles[i].title} </h3>
      <p>${articles[i].description}</p>
      <a
        href="${articles[i].url}"
        ><button type="button" class="btn btn-primary" id="btn-logout">
          View
        </button></a
      >
    </div>
  </div>`;
  }
  return html;
}
