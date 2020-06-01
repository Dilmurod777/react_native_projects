import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default class App extends Component {
  state = {
    text: "",
    todos: [],
  };

  addTodo = () => {
    newTodo = this.state.text;
    todos = this.state.todos;
    if (newTodo !== "") {
      todos.push(newTodo);
      this.setState({ todos, text: "" });
    }
  };

  deleteTodo = (todo) => {
    todos = this.state.todos;
    index = todos.indexOf(todo);
    todos.splice(index, 1);
    this.setState({ todos });
  };

  renderTodos = () => {
    return this.state.todos.map((todo, i) => {
      return (
        <TouchableOpacity key={i}>
          <Text
            style={styles.todo}
            onPress={() => {
              this.deleteTodo(todo);
            }}
          >
            {todo}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.view_content}>
          <Text style={styles.header}>Notes App</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <View style={{ marginTop: 10 }} />
          <Button title="Add Todo" onPress={this.addTodo} />
          <View style={{ marginTop: 10 }} />
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#0288D1",
  },
  view_content: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 30,
  },
  inputStyle: {
    height: 40,
    padding: 10,
    textDecorationLine: 'none',
    color: "white",
    borderColor: "white",
    alignSelf: "stretch",
    borderWidth: 1,
  },
  header: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  todo: {
    fontSize: 20,
    color: "white",
  },
});
