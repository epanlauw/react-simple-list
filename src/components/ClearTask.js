import { Button, Flex, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import supabase from '../supabase';

const ClearTask = () => {
  const [loading, setLoading] = useState(false);

  const handleClear = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('todos')
      .delete()
      .not('text', 'eq', 'Do not delete me');

    setLoading(false);
  };

  return (
    <Flex>
      <Button
        colorScheme="gray"
        px="8"
        h="45"
        color="gray.500"
        mt="10"
        onClick={handleClear}
        isLoading={loading}
        loadingText="Clearing"
      >
        Clear Tasks
      </Button>
    </Flex>
  );
};

export default ClearTask;
