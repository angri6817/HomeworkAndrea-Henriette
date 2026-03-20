let tasks = [];

function renderList() {
    const list = document.getElementById("myUL");
    list.innerHTML = "";

    tasks.sort(function(a, b) {
        if (a.dueDate && b.dueDate) {
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
        if (a.dueDate && !b.dueDate) return -1;
        if (!a.dueDate && b.dueDate) return 1;
        return 0;
    });

    for (let i = 0; i < tasks.length; i++) {

        const li = document.createElement("li");

        if (tasks[i].checked) {
            li.classList.add("checked");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "taskCheckbox";
        checkbox.checked = tasks[i].checked;

        checkbox.onchange = function() {
            tasks[i].checked = this.checked;
            renderList();
        };

        const text = document.createElement("span");
        text.className = "taskText";
        text.textContent = tasks[i].text;

        li.append(checkbox, text);

        if (tasks[i].dueDate) {
            const due = document.createElement("span");
            due.className = "dueDate";
            due.textContent = "Due: " + tasks[i].dueDate;
            li.append(due);
        }

        const remove = document.createElement("span");
        remove.className = "close";
        remove.textContent = "x";

        remove.onclick = function() {
            tasks.splice(i, 1);
            renderList();
        };

        li.append(remove);

        list.append(li);
    }
}

function newElement() {
    const input = document.getElementById("myInput");
    const dueDateInput = document.getElementById("dueDateInput");

    const text = input.value.trim();
    const dueDate = dueDateInput.value;

    if (text === "") {
        alert("You must write something!");
        return;
    }

    tasks.push({
        text: text,
        dueDate: dueDate || "",
        checked: false
    });

    input.value = "";
    dueDateInput.value = "";

    renderList();
}