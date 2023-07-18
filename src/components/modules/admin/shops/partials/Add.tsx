import React from 'react';
import CustomButton from '@/components/elements/Button';
import CustomModal from '@/components/elements/Modal';
import { Box, useDisclosure } from '@chakra-ui/react';

import Form from './Form';

const AddShop: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box pb={3} textAlign="right">
        <CustomButton color="white" onClick={onOpen}>
          Add shop
        </CustomButton>
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title="Add Shop"
        body={<Form onClose={onClose} />}
      />
    </>
  );
};

export default AddShop;
