import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Task {
    id: string;
    name: string;
    done: boolean;
}

const STORAGE_KEY = 'tasks';

export default function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {{
            (async () => {
                try {
                    const json = await AsyncStorage.getItem(STORAGE_KEY);
                    console.log('Loaded tasks:', json)


                    if (json) { 
                        setTasks(JSON.parse(json)); }
                } catch (e) {

                }
            })();
        }
    }, []);

    useEffect(() => {

         console.log('Saving tasks:', tasks);

        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    return { tasks, setTasks };
}