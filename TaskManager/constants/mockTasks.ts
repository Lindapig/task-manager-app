import { Task } from '../types/Task';

export const mockTasks: Task[] = [
    {
        id: '1',
        title: 'Buy groceries',
        description: 'Milk, Bread, Eggs, Cheese',
        status: 'pending',
    },
    {
        id: '2',
        title: 'Study React Native',
        description: 'Finish the Expo Router section',
        status: 'completed',
    },
    {
        id: '3',
        title: 'Go to the gym',
        description: '30 min workout',
        status: 'completed',
    },
    {
        id: '4',
        title: 'Reading',
        description: 'Read 20 pages of a book',
        status: 'completed',
    },
    {
        id: '5',
        title: 'Meeting with John',
        description: 'Discuss project updates',
        status: 'pending',
    },
];
