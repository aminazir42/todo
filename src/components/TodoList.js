// src/components/TodoList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../reducers/todoReducer'; // Updated import
import { Box, Button, Input, List, ListItem, IconButton, Heading } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <Box p="5" maxW="500px" mx="auto">
      <Heading mb="4">Todo List</Heading>
      <Box display="flex" mb="4">
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new task"
          mr="2"
        />
        <Button onClick={handleAddTodo} colorScheme="teal">Add</Button>
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between">
            {todo}
            <IconButton
              icon={<DeleteIcon />}
              colorScheme="red"
              onClick={() => removeTodo(index)}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
