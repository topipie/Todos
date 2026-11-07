import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

interface Props {
  input: string;
  setInput: (text: string) => void;
  addTask: () => void;
}

const TodoInput: React.FC<Props> = ({ input, setInput, addTask }) => {
  return (
    <View style={styles.inputRow}>
        <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Add task"
      />
      <Button title="Save" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'stretch',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
});

export default TodoInput;