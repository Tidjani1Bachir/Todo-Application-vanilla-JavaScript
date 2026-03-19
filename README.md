# ✅ Todo App with Local Storage

A simple, lightweight Todo List web application built with vanilla HTML, CSS, and JavaScript. Tasks are persisted in the browser's Local Storage so they survive page refreshes.

---

## 📁 Project Structure

```
todo-app/
├── imgs/
│   ├── checked.png
│   └── unchecked.png
├── styles/
│   ├── all.min.css       # Font Awesome icons
│   ├── normalize.css     # CSS reset
│   └── styles.css        # Main stylesheet
├── webfonts/             # Font Awesome webfont files
├── index.html            # App entry point
├── main.js               # App logic
└── README.md
```

---

## 🚀 Getting Started

No build tools or dependencies required. Just open the project in a browser:

```bash
# Clone or download the project, then open:
open index.html
```

Or serve it locally with any static server:

```bash
# Using Python
python -m http.server 3000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:3000` in your browser.

---

## ✨ Features

- **Add tasks** — Type a task and click "Add Task" to add it to the list
- **Complete tasks** — Click the orange checkbox to mark a task as done (strikethrough applied)
- **Delete tasks** — Click the `x` button to remove a task
- **Persistent storage** — All tasks are saved in `localStorage` and restored on page reload

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Markup / structure |
| CSS3 | Styling and layout |
| Vanilla JavaScript | App logic and DOM manipulation |
| localStorage API | Client-side data persistence |
| Font Awesome | Icons (todo icon, checkmark) |

---

## 🧠 How It Works

1. On page load, existing tasks are read from `localStorage` and rendered to the page.
2. When the user adds a task, it is pushed to an in-memory array (`arrayOfTasks`) and saved to `localStorage`.
3. Clicking a task's checkbox toggles its `completed` state and updates both the UI and `localStorage`.
4. Clicking `x` removes the task from the array, the DOM, and `localStorage`.

---

## 📸 Preview

> Purple background with a centered white card containing the input form. Tasks appear below as white rows with a checkbox and delete button.

---

## 📝 Notes

- This project uses no frameworks or npm packages — pure vanilla JS.
- The `all.min.css` and `webfonts/` folder are from [Font Awesome 6 Free](https://fontawesome.com/).
- `normalize.css` is used to ensure consistent default styles across browsers.

---

## 📄 License

This project is for personal/educational use. Feel free to fork and build on it.