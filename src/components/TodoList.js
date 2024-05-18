// src/components/TodoList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../reducers/todoReducer';
import { Box, Button, Input, List, ListItem, IconButton, Heading, Checkbox, Flex } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import NavBar from './NavBar';
import WeeklyCalendar from './WeeklyCalendar';
import { format } from 'date-fns'; // Ensure format is imported from date-fns

const TodoList = ({ todos, addTodo, removeTodo, toggleTodo }) => {
  const [todo, setTodo] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      addTodo({
        text: todo,
        day: selectedDay,
        done: false,
      });
      setTodo('');
    }
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <Box>
      <NavBar />
      <Flex direction="column" align="center" p={5}>
        <WeeklyCalendar onSelectDay={handleSelectDay} />
        <Box mt={8} p="5" maxW="500px" width="100%">
          <Heading mb="4">Todo List</Heading>
          <Box display="flex" mb="4">
            <Input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add a new task"
              mr="2"
            />
            <Button onClick={handleAddTodo} colorScheme="teal" disabled={!selectedDay}>
              Add
            </Button>
          </Box>
          <List spacing={3}>
            {todos
              .filter((t) => format(new Date(t.day), 'dd/MM/yyyy') === format(new Date(selectedDay), 'dd/MM/yyyy'))
              .map((todo, index) => (
                <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
                  <Checkbox isChecked={todo.done} onChange={() => toggleTodo(index)}>
                    <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
                  </Checkbox>
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
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
