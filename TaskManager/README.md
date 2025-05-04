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

/app
├── index.tsx # Home screen (task list)
├── create.tsx # Create task screen
├── edit/[id].tsx # Edit task screen
/components
├── TaskCard.tsx # Task display card
├── AddButton.tsx # Reusable add button
├── BackButton.tsx # Back navigation
/contexts
└── TaskContext.tsx # Context to store task list
/constants
└── mockTasks.ts # Initial mock data
/types
└── Task.ts # Type definition for Task


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
