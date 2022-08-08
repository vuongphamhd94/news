"use strict";
var input = document.getElementById("input-task");
var addBt = document.getElementById("btn-add");
var todo_list = document.getElementById("todo-list");
// hiển thị danh sách công việc
if (userLogin === "") {
  todo_list.innerHTML = "";
} else {
  var owner = userLogin.userName;
  getTodo(owner);
}
// thêm sự kiện thêm công việc
addBt.addEventListener("click", addTodo);
// lớp todo list
class Todo {
  constructor(task, owner, isDose) {
    this.task = task;
    this.owner = owner;
    this.isDose = isDose;
  }
}
// hàm hiển thị các công việc
function getTodo(userName) {
  let todoList = todoArr.filter(function (toDo) {
    return toDo.owner === userName;
  });
  let html = "";
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].isDose) {
      html += `<li class="checked"  onclick='dose("${todoList[i].task}")'>${todoList[i].task}<span class="close" onclick='xoa("${todoList[i].task}")'>×</span></li>`;
    } else {
      html += `<li onclick='dose("${todoList[i].task}")'>${todoList[i].task}<span class="close" onclick='xoa("${todoList[i].task}")'>×</span></li>`;
    }
  }
  todo_list.innerHTML = html;
}
// hàm thêm công việc
function addTodo() {
  //kiểm tra người dùng đã đăng nhập chưa
  if (userLogin === "") {
    alert("Bạn cần đăng nhập!");
    return;
  }
  //Lấy dữ liệu người dùng nhập
  let task = input.value;
  if (task === "") {
    alert("Chưa nhập thông tin công việc!");
    return;
  }
  let isDose = false;
  // kiểm tra công việc đã có trong list chưa
  let todoList = todoArr.filter(function (todo) {
    return todo.owner === userLogin.userName;
  });
  let taskList = todoList.map(function (todo) {
    return todo.task;
  });
  if (taskList.indexOf(task) >= 0) {
    alert("Công việc đã có trong danh sách!");
    return;
  }
  // tạo công việc mới
  const todo = new Todo(task, owner, isDose);
  todoArr.push(todo);
  getTodo(owner); //hien thi lai danh sach
  localStorage.setItem("todoArr", JSON.stringify(todoArr)); //luu lai danh sach localStorage
  input.value = "";
}

// hàm xoa công việc
function xoa(task) {
  for (let i = 0; i < todoArr.length; i++) {
    if (todoArr[i].owner === owner && todoArr[i].task === task) {
      todoArr.splice(i, 1);
      i--;
    }
  }
  getTodo(owner);
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
}
// hàm đánh đánh dấu công việc đã hoàn thành
function dose(task) {
  for (let i = 0; i < todoArr.length; i++) {
    if (todoArr[i].owner === owner && todoArr[i].task === task) {
      if (todoArr[i].isDose) {
        todoArr[i].isDose = false;
      } else {
        todoArr[i].isDose = true;
      }
    }
  }
  getTodo(owner);
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
}
