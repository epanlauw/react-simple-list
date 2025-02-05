import { IconButton, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import supabase from '../supabase';

const DeleteTask = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleDelete = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('todos').delete().eq('id', id);
    setLoading(false);

    toast({
      title: error || 'Task deleted!',
      position: 'top',
      status: error ? 'error' : 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <IconButton
      isRound="true"
      icon={<FiTrash2 />}
      onClick={handleDelete}
      isLoading={loading}
    />
  );
};

export default DeleteTask;
