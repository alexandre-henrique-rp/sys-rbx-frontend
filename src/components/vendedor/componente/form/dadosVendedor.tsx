import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"


export const DadosVendedor = (props: { id: any }) => {
  const IDVendedor = props.id
  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [Recorde, setRecorde] = useState('');
  const [Status, setStatus] = useState('');
  const toast = useToast();


  useEffect(() => {
    (async () => {
      try {
        const request = await axios(``);
        const resposta = request.data;


      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  const salvar = async () => {
    try {
      const Data = {
        data: {

        }
      };

      const request = await axios(``, {
        method: 'PUT',
        data: Data
      });

      const resposta = request.data;
      console.log(resposta);
      toast({
        title: 'Salvo com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* dados do vendedor */}
      <Flex w={'100%'} flexDir={'column'} justifyContent={'space-between'} p={5}>
        <Box w={'100%'}><Heading size={'md'} mb={3}>Vendedor</Heading></Box>
        <Flex gap={4} w={'100%'} px={3} flexWrap={'wrap'} >

          <Box w={'20%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Nome do vendedor</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
                value={''}
              // onChange={()=>}
              />
            </FormControl>
          </Box>

          <Box w={'20%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>E-mail do vendedor</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
                value={''}
              // onChange={()=>}
              />
            </FormControl>
          </Box>

          <Box w={'20%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Telefone do vendedor</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
                value={''}
              // onChange={()=>}
              />
            </FormControl>
          </Box>

          <Box w={'20%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Recorde de venda</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
                value={''}
              // onChange={()=>}
              />
            </FormControl>
          </Box>

          <Box w={'20%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Status</FormLabel>
              <Select
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                rounded="md"
                value={''}
              // onChange={()=>}
              >
                <option style={{ backgroundColor: "#1A202C" }}>Ativo</option>
                <option style={{ backgroundColor: "#1A202C" }}>Inativo</option>
              </Select>
            </FormControl>
          </Box>

        </Flex>

        <Flex gap={4} justifyContent={'end'}>
          <Button colorScheme="green" onClick={salvar}>Salvar</Button>
          <Button colorScheme="red">Excluir</Button>
        </Flex>
      </Flex>
    </>
  )
}
