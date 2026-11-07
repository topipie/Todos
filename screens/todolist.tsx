import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import useTasks from '../hooks/useTasks';

import TodoInput from '../components/todoinput';
import TodoList from '../components/todolist';


const TodoScreen: React.FC = () => {
const { tasks, setTasks } = useTasks();
const [input, setInput] = useState('');


const addTask = () => {
    if (input.trim()) {
        setTasks(prev => [
            ...prev, 
            { id: Date.now().toString(), name: input.trim(), done: false },
        ]);
        setInput('');
    }
};

const toggleTask = (id: string) => {
    setTasks(prev => 
        prev.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        )
    );
}

return (
  <View style={styles.container}>
    <Text style={styles.title}>Todo List</Text>

 <TodoInput 
    input={input} 
    setInput={setInput} 
    addTask={addTask} 
    />

<TodoList    
    items={tasks} 
    toggleItem={toggleTask} 
    />

</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: 60,
paddingHorizontal: 16,
backgroundColor: '#fff',
width: '100%',
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 16,
textAlign: 'center',
},
});

export default TodoScreen;