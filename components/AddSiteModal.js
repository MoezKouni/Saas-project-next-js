import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/firestore';

function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const { handleSubmit, register, errors } = useForm();

  const createNewSite = (value) => createSite(value);

  return (
    <>
      <Button
        onClick={onOpen}
        variant="solid"
        size="md"
        fontWeight="medium"
        maxWidth="200px"
      >
        Add Your First Site
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createNewSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My site"
                {...{
                  ...register('site', { required: true }),
                  ref: initialRef,
                }}
              />
              {/* {errors.site && <p>{errors.site.message}</p>} */}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://mysite.com"
                {...register('url', { required: true })}
              />
              {/* {errors.url && <p>{errors.url.message}</p>} */}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              fontWeight="medium"
              backgroundColor="#9818d6"
              color="white"
              _active={{ backgroundColor: '#9818d6' }}
              _hover={{ backgroundColor: '#6930c3' }}
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSiteModal;
