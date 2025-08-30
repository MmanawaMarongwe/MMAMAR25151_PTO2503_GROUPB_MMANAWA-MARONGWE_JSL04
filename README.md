# JSL04 Project Brief: Dynamic Task Display & Modal View

## 📽️ Overview
This project is a simple **Kanban-style task board** built with vanilla JavaScript.  
Tasks are dynamically created from an initial dataset and displayed in the correct columns ("To Do", "Doing", "Done").  
Clicking a task opens a **modal** that shows its details (title, description, and status), making it easier to view and potentially update task information.

The goal was to practice **DOM manipulation**, **event handling**, and **modular JavaScript structure**, while following a clean and maintainable coding style with **JSDoc documentation**.

---

## 🛠️ Technologies Used
- **HTML5** – base structure of the board and modal  
- **CSS3** – styling for columns, tasks, and modal (responsive design included)  
- **JavaScript (ES6)** – dynamically rendering tasks, handling events, modal interaction  
- **JSDoc** – documenting major functions for clarity and maintainability  

---

# 📋 Features
- ✅ Display tasks dynamically from `initialTasks` array (no hard-coded HTML).  
- ✅ Tasks are placed in the correct column based on their `status`.  
- ✅ Each task card shows its **title**.  
- ✅ Clicking a task opens a **modal**.  
- ✅ Modal displays:
  - Task **title** (input field)  
  - Task **description** (textarea)  
  - Task **status** (select dropdown, always lowercase)  
- ✅ Modal can be closed by clicking the **X button**.  
- ✅ Clean, single-responsibility JavaScript functions with **JSDoc comments**.  

---
## 📂 Setup Instructions
1. Clone or download this repository.  
2. Open the project folder on your computer.  
3. Launch `index.html` in your browser.
4. Tasks load automatically when the page is opened.
5. Click on a task card → modal opens with its details.
6. Close the modal by clicking the X button.

---

### 💻 Code Structure & Maintainability

- JavaScript functions are small and focused (rendering, creating tasks, arranging tasks, modal display).
- All major functions include JSDoc comments describing their purpose, parameters, and return values.
- Variables and functions use descriptive, meaningful names for readability.

---
## Expected Outcome

A fully functional **dynamic task board** where tasks appear under the correct columns, and users can **open a modal to view/edit** task details. The project will follow **clean, well-documented, and maintainable code practices**, ensuring a professional and scalable implementation.

## 🔮 Future Improvements
- Close modal by clicking the backdrop or pressing the ESC key.
- Make modal fields editable and persist changes to tasks.
- Save tasks to localStorage so they remain after refresh.
- Add support for creating new tasks dynamically.
