let tasks = [];

function renderList() {
  let ul = document.getElementById("myUL");
  ul.innerHTML = "";

  tasks.sort(function (a, b) {
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    if (a.dueDate && !b.dueDate) return -1;
    if (!a.dueDate && b.dueDate) return 1;
    return 0;
  });

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("LI");

    let text = tasks[i].text;
    if (tasks[i].dueDate) {
      text += " (Due: " + tasks[i].dueDate + ")";
    }

    li.appendChild(document.createTextNode(text));

    if (tasks[i].checked) {
      li.classList.add("checked");
    }

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function (ev) {
      ev.stopPropagation();
      tasks.splice(i, 1);
      renderList();
    };

    li.onclick = function () {
      tasks[i].checked = !tasks[i].checked;
      renderList();
    };

    ul.appendChild(li);
  }
}

function newElement() {
  let inputValue = document.getElementById("myInput").value.trim();
  let dueDateValue = document.getElementById("dueDateInput").value;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    tasks.push({
      text: inputValue,
      dueDate: dueDateValue,
      checked: false
    });
    renderList();
  }

  document.getElementById("myInput").value = "";
  document.getElementById("dueDateInput").value = "";
}