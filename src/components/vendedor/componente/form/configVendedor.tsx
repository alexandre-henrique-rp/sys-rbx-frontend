import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, useToast } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";






export const ConfigVendedor = (props: { id: any }) => {
  const IDVendedor = props.id
  const toast = useToast();
  const [Ano, setAno] = useState('');
  const [Mes, setMes] = useState('');
  const [Meta, setMeta] = useState('');
  const [Salario, setSalario] = useState('');
  const [Custo, setCusto] = useState('');
  const [Premio1, setPremio1] = useState('');
  const [Premio2, setPremio2] = useState('');
  const [Premio3, setPremio3] = useState('');
  const [PremioMeta, setPremioMeta] = useState('');
  const [PremioRecord, setPremioRecord] = useState('');
  const [EntradaAt, setEntradaAt] = useState('');
  const [ComicaoAt, setComicaoAt] = useState('');
  const [EntradaVe, setEntradaVe] = useState('');
  const [ComicaoVe, setComicaoVe] = useState('');
  const [EntradaCont, setEntradaCont] = useState('');
  const [ComicaoCont, setComicaoCont] = useState('');



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
      <Flex w={'100%'} flexDir={'column'} justifyContent={'space-between'} p={3}>
        <Box w={'100%'}>
          <Heading size={'md'} mb={3}>
            Pagamentos
          </Heading>
        </Box>
        <Flex gap={4} w={'100%'} px={3} flexWrap={'wrap'} >

          <Box w={'5%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Ano</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'5%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Mês</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Meta decêndio</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Salário fixo</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Ajuda de custo</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Prêmio decêndio 1</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Prêmio decêndio 2</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Prêmio decêndio 3</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Prêmio meta do mês</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Prêmio recorde de vendas</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Entradas Atendimento</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Comissão Atendimento</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Entradas Venda</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Comissão Venda</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Entradas Conta</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
            </FormControl>
          </Box>

          <Box w={'12%'}>
            <FormControl>
              <FormLabel fontSize={'xs'}>Comissão Conta</FormLabel>
              <Input
                focusBorderColor="#ffff"
                bg='#ffffff12'
                shadow="sm"
                size="xs"
                w="full"
                fontSize="xs"
                rounded="md"
              />
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
