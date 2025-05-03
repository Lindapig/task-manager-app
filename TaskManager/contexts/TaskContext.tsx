import { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types/Task';
import { mockTasks } from '../constants/mockTasks';

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    // add editTask, deleteTask, toggleStatus here if needed
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>(mockTasks);

    const addTask = (task: Task) => {
        setTasks((prev) => [task, ...prev]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error('useTaskContext must be used within TaskProvider');
    return context;
};
