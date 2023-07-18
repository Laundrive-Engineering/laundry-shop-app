import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

const CustomModal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  body,
  footer,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
