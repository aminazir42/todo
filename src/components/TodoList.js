import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../reducers/todoReducer';
import { Box, Button, Input, List, ListItem, IconButton, Heading, Flex } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import NavBar from './NavBar';
import WeeklyCalendar from './WeeklyCalendar';

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <Box>
      <NavBar />
      <Flex direction="column" align="center" p={5}>
        <WeeklyCalendar />
        <Box mt={8} p="5" maxW="500px" width="100%">
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
      </Flex>
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
