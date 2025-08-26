const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

const todoContainer = document.getElementById("todo-list");
const doingContainer = document.getElementById("doing-list");
const doneContainer = document.getElementById("done-list");

const modal = document.getElementsByClassName("overlay")[0];
const tasks = document.getElementsByClassName("task-name");
const modalCloseBtn = document.getElementsByClassName("modal-close")[0];

const modalTitle = document.getElementById("task-name-field");
const modalDescription = document.getElementById("task-description");
const modalStatus = document.getElementById("task-status");

function displayTasks() {
  initialTasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-name";
    const taskElement = document.createElement("p");
    taskElement.textContent = task.title;
    taskContainer.appendChild(taskElement);
    taskContainer.addEventListener("click", () => displayTasksInModal(task));

    console.log(taskElement);
    if (task.status === "done") {
      doneContainer.appendChild(taskContainer);
    }
    if (task.status === "todo") {
      todoContainer.appendChild(taskContainer);
    }
    if (task.status === "doing") {
      doingContainer.appendChild(taskContainer);
    }
  });
}

displayTasks();

/*for (let i = 0; i < tasks.length; i++) {
  tasks[i].addEventListener("click", () => {
    modal.style.display = "flex";
  });
} */

function displayTasksInModal(task) {
  modalTitle.value = task.title;
  modalDescription.value = task.description;
  modalStatus.value = task.status;
  modal.style.display = "flex";
}

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
