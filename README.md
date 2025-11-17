# ProU Assessment - Employee/Task Manager

This is my full-stack (MERN) project for the ProU assessment.

---

## Tech Stack

* **Client:** React
* **Server:** Node.js, Express
* **Database:** MongoDB Atlas (with Mongoose)

---

## How to Run This

There are two parts, the `backend` and the `client`. You need to run both in separate terminals.

### 1. Run the Backend (The API)

1.  `cd backend`
2.  `npm install`
3.  **Important:** Open `backend/index.js` and add your MongoDB Atlas connection string to the `dbUrl` variable.
4.  `node index.js`
    *(The API should now be running on http://localhost:5000)*

### 2. Run the Frontend (The App)

1.  Open a new terminal.
2.  `cd client`
3.  `npm install`
4.  `npm start`
    *(The app should open in your browser on http://localhost:3000)*

---

## Features

* **Employees:** You can create new employees and see the full list.
* **Tasks:** You can create new tasks (with a title, status, etc.) and see the full list.
* **Linked Data:** The "Create Task" form has a dropdown that pulls all employees from the API, so you can assign a task to a real employee.

---

## Screenshot

*(I'll add a screenshot of the app running here once it's on GitHub.)*
