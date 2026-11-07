import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

interface Item {
  id: string;
  name: string;
  done: boolean;
}

interface Props {
  items: Item[];
  toggleItem: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ items, toggleItem }) => {
  return (
    <SwipeListView
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
      <Pressable onPress={() => toggleItem(item.id)}>
        <View style={styles.rowFront}>
          <Text style={{ textDecorationLine: item.done ? "line-through" : "none" }}>
            {item.name}
            </Text>
        </View>
        </Pressable>
    )}
    renderHiddenItem={() => <View style={styles.rowBack} />}
    rightOpenValue={-75}
    disableRightSwipe
    disableLeftSwipe
  />
);
}

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 16,
  },
  rowBack: {
    backgroundColor: '#ddd',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
});

export default TodoList;