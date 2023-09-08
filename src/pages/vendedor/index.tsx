import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, IconButton, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

// import { Box } from "@chakra-ui/react";
interface VendedorProps {
  // Define component props here, if any
}

const Vendedor: React.FC<VendedorProps> = () => {
  const [Dados, setDados] = useState<any>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    (async () => {
      try {
        const Response = await axios.get('/api/db/user/getGeral');
        const data = Response.data;
        setDados(data);
      } catch (error) {
        // Handle error here
      }
    })();
  }, []);



  return (
    <>
      <Flex w={'100%'} h={'100%'} overflowY={'auto'} justifyContent={'center'} alignItems={'center'} p={4}>
        <Box w={'100%'} h={'auto'} bg={'gray.700'} p={10} rounded={10}>
          <Flex justifyContent={'space-between'}>
            <Heading size={'lg'}>Vendedor</Heading>
            <IconButton
              isRound={true}
              variant='solid'
              colorScheme='whatsapp'
              aria-label='Adicionar vendedor'
              fontSize='30px'
              p={1.5}
              onClick={onOpen}
              icon={<MdOutlineAddCircleOutline color="#ffff" />}
            />

          </Flex>
          <Box w={'100%'} maxH={'30rem'} overflowY={'auto'} px={10} my={5}>
            <TableContainer>
              <Table size='sm'>
                <Thead bg='#ffffff12' h={5}>
                  <Tr>
                    <Th color={'white'}>#</Th>
                    <Th color={'white'}>Vendedor</Th>
                    <Th color={'white'}>status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Dados.map((item: any, x: number) => {
                    const confirmed = item.confirmed ? 'Ativo' : 'Bloqueado';
                    return (
                      <Tr key={item.id}>
                        <Td>{x}</Td>
                        <Td>{item.username}</Td>
                        <Td>{confirmed}</Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Flex>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        size={'lg'}
      >
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='40%'
          backdropBlur='2px'
        />
        <ModalContent bg={'gray.800'}>
          <ModalHeader  p={8}>Modal Title</ModalHeader>
          <ModalBody bg={'gray.800'}>
            <Flex w={'100%'} gap={5} flexWrap={'wrap'} px={8}>

              <Box w={'100%'}>
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input w={'100%'} />
                  <FormHelperText>Nome do Vendedor é obrigatório</FormHelperText>
                </FormControl>
              </Box>
              <Box w={'100%'}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input  w={'100%'} />
                  <FormHelperText>O email é obrigatório</FormHelperText>
                </FormControl>
              </Box>
              <Box w={'100%'}>
                <FormControl>
                  <FormLabel>Telefone</FormLabel>
                  <Input  w={'100%'} />
                </FormControl>
              </Box>
              <Box w={'100%'}>
                <FormControl>
                  <FormLabel>Recorde de venda</FormLabel>
                  <Input  w={'100%'} />
                </FormControl>
              </Box>


            </Flex>
          </ModalBody>
          <ModalFooter bg={'gray.800'} py={5}>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Salvar
            </Button>
            <Button variant='solid' colorScheme='red'>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default Vendedor;
