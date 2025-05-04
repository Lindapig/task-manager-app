import { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types/Task';
import { mockTasks } from '../constants/mockTasks';

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    editTask: (updatedTask: Task) => void;
    deleteTask: (id: string) => void;
    // add editTask, deleteTask, toggleStatus here if needed
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>(mockTasks);

    // Function to add a new task
    const addTask = (task: Task) => {
        setTasks((prev) => [task, ...prev]);
    };

    // Function to edit an existing task
    const editTask = (updatedTask: Task) => {
        setTasks((prev) =>
            prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
    };

    // Function to delete a task
    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error('useTaskContext must be used within TaskProvider');
    return context;
};
