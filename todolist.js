const toDoListSection = document.querySelector(".todolist-section");
const newToDoItem = document.querySelector(".newtodo");


  function addToDo(){
    if(newToDoItem.value != ""){
      toDoListSection.insertAdjacentHTML('beforeend', `
      <li class="todolist-item">
      <input type="checkbox" class="todocheck" onchange="crossOut()"/>${newToDoItem.value}
      </li>
      `);
      newToDoItem.value = "";
    }

  }


function crossOut() {
    const toDoCheck = document.querySelectorAll(".todocheck");
    const toDoItem = document.querySelectorAll(".todolist-item");
    for(let i = 0; i < toDoItem.length; i++){
      if(toDoCheck[i].checked){
        toDoItem[i].classList.add("done");
      } else {
        toDoItem[i].classList.remove("done");
      }
    }

    }

function clearList() {
  while (toDoListSection.hasChildNodes()) {
  toDoListSection.removeChild(toDoListSection.childNodes[0]);
}
}
