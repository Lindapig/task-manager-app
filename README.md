# 📋 Task Manager App

A simple React Native app built with Expo and TypeScript that lets users manage personal tasks. Features include viewing, adding, editing, deleting, and toggling task statuses — all stored using in-app mock data (no backend).

---

## 🚀 Features

- 📄 **Task List**: View tasks with title, description, and status.
- ➕ **Add Task**: Create new tasks using a form.
- 📝 **Edit Task**: Modify existing task information.
- ❌ **Delete Task**: Remove tasks with confirmation.
- 🔄 **Toggle Status**: Mark tasks as ✅ completed or 🕒 pending.
- 🔍 **Search (Optional)**: Filter tasks by title in real time.

---

## 🛠️ Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://expo.github.io/router/)

---

## 📁 Project Structure
```
task-manager-app/
├── app/
│ ├── index.tsx # Home screen (task list with search)
│ ├── create.tsx # Create task screen
│ ├── edit/[id].tsx # Edit task screen
│ └── detail/[id].tsx # Task detail screen
├── components/
│ ├── TaskCard.tsx # Task display card with actions
│ ├── AddButton.tsx # Reusable add button
│ └── BackButton.tsx # Back navigation button
├── contexts/
│ └── TaskContext.tsx # Context to manage global task state
├── constants/
│ └── mockTasks.ts # Initial hardcoded task data
├── types/
│ └── Task.ts # TypeScript interface for Task
├── assets/ # Static assets (images, fonts, etc.)
├── package.json
├── tsconfig.json
├── README.md
└── ...
```


---

## ✅ Setup & Run

1. Clone the repo:
   ```bash
   git clone https://github.com/Lindapig/task-manager-app.git
   cd task-manager-app

2. Install dependencies
   ```bash
   npm install

3. Start the development server:
   ```bash
   npx expo start
   
4. Scan the QR code using Expo Go on your iOS/Android device or run on a simulator.
