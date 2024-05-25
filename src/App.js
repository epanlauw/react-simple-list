import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <VStack p={4} minH="100vh">
      <Heading
        mt="5"
        p="5"
        fontWeight="extrabold"
        size="xl"
        bgGradient="linear(to-l, teal.300, blue.500)"
        bgClip="text"
      >
        Todo List
      </Heading>
      <AddTask />
      <TaskList />
    </VStack>
  );
};

export default App;
