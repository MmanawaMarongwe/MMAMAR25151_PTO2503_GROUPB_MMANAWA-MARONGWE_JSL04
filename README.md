# JSL04 Project Brief: Dynamic Task Display & Modal View

## Overview
This project is a simple **Kanban-style task board** built with vanilla JavaScript.  
Tasks are dynamically created from an initial dataset and displayed in the correct columns ("To Do", "Doing", "Done").  
Clicking a task opens a **modal** that shows its details (title, description, and status), making it easier to view and potentially update task information.

The goal was to practice **DOM manipulation**, **event handling**, and **modular JavaScript structure**, while following a clean and maintainable coding style with **JSDoc documentation**.

---

## Technologies Used
- **HTML5** – base structure of the board and modal  
- **CSS3** – styling for columns, tasks, and modal (responsive design included)  
- **JavaScript (ES6)** – dynamically rendering tasks, handling events, modal interaction  
- **JSDoc** – documenting major functions for clarity and maintainability  

---


### Dynamic Task Display & Interaction

- Dynamically generate **task elements** from the given initial data and insert them into the DOM.
- Ensure tasks are placed in the **correct columns** ("To Do", "In Progress", "Done") based on their status.
- Clicking a task should **open a modal** displaying its details.
- The modal should include:
  - **Editable input fields** for the task title and description.
  - **A select dropdown** showing the current status with other status options available.
  - **A close button** that allows users to exit the modal easily.

### Design & Responsiveness

- Ensure the **modal matches the Figma design**, including a **backdrop effect** for focus.
- Implement a **fully responsive modal** that works on both desktop and mobile devices.

### Code Structure & Maintainability

- Structure JavaScript using **modular, single-responsibility functions**.
- Use **descriptive and meaningful variable and function names** for clarity.
- Add **JSDoc comments** to major functions, describing their purpose, parameters, and return values for better documentation.

## Expected Outcome

A fully functional **dynamic task board** where tasks appear under the correct columns, and users can **open a modal to view/edit** task details. The project will follow **clean, well-documented, and maintainable code practices**, ensuring a professional and scalable implementation.
