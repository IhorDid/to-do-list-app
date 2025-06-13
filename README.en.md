# 📝 To-Do List App

A simple yet functional task management app with support for dark mode, task
filtering, validation, toast notifications, and persistent filter state via
localStorage.

## 🚀 How to Run Locally

1. **Clone the repository or unzip the archive**

```bash
git clone https://github.com/your-username/to-do-list-app.git
cd to-do-list-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

App will be available at `http://localhost:5173` (Vite).

## 🛠️ Technologies Used

- **React 19** – for building the UI
- **Redux Toolkit** – for managing global state
- **react-redux** – integration between Redux and React
- **axios** – for making HTTP requests to the mock API
- **react-hot-toast** – for toast notifications
- **next-themes** – for dark/light mode support
- **clsx** – for dynamic class management

## 🧱 Architecture

- `/src/components` – reusable UI components (`TaskItem`, `ThemeToggle`,
  `FilterStatus`, etc.)
- `/src/redux` – Redux slices and async thunks
- `/src/utils` – utility functions (like toast messages)
- `localStorage` – used to persist theme and filter state

## ✅ Features

- Add, delete, and edit tasks
- Toggle between dark and light themes
- Filter tasks (all / active / completed)
- Input validation for empty task entries
- Toast notifications for API errors and invalid actions

## 📦 API

Uses **MockAPI.io** as a fake backend. Base URL is set in
`axios.defaults.baseURL`.

## 🔄 Development

Built with **Vite**. ESLint and Prettier are used to maintain clean code
formatting.

## 📄 License

MIT – free to use with attribution.
