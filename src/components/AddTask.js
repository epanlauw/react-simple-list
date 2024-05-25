import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import supabase from '../supabase';

const AddTask = () => {
  const [text, setText] = useState('');
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);
    const { data, error } = await supabase.from('todos').insert([{ text }]);
    setLoading(false);
    setText('');

    toast({
      title: error || 'Task added!',
      position: 'top',
      status: error ? 'error' : 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack my="4" h="45">
        <Input
          h="100%"
          variant="filled"
          placeholder="Do the laundry"
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={loading}
        />
        <Button
          colorScheme="blue"
          px="10"
          h="100%"
          type="submit"
          isLoading={loading}
          loadingText="Adding"
        >
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default AddTask;
