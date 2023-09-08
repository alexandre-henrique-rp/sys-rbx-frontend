import { Box, Flex, Heading, IconButton, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";







export const TabelaVendasVendedor = (props: { id: any }) => {
  const[Data, setData] = useState<any>([]);

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

  const ListaTable = Data.map((item: any, x: number) => {

    return (
      <>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th><IconButton aria-label="Editar"  /></Th>
        <Th><IconButton aria-label="Excluir" /></Th>
      </Tr>
      </>
    )  })

  return (
    <>
     <Flex w={'100%'} h={'33%'} flexDir={'column'} p={3}>
          <Box w={'100%'}>
            <Heading size={'md'} mb={3}>
              Pagamentos
            </Heading>
          </Box>
          <TableContainer overflowY={'auto'}>
            <Table size='sm' mx={10} mb={15}>
              <Thead bg='#ffffff12' h={10}>
                <Tr>
                  <Th color={'white'}>Ano</Th>
                  <Th color={'white'}>Mês</Th>
                  <Th color={'white'}>Meta decêndio</Th>
                  <Th color={'white'}>Salário fixo</Th>
                  <Th color={'white'}>Ajuda de custo</Th>
                  <Th color={'white'}>Prêmio decêndio 1</Th>
                  <Th color={'white'}>Prêmio decêndio 2</Th>
                  <Th color={'white'}>Prêmio decêndio 3</Th>
                  <Th color={'white'}>Prêmio meta do mês</Th>
                  <Th color={'white'}>Prêmio recorde de vendas</Th>
                  <Th color={'white'}>Entradas Atendimento</Th>
                  <Th color={'white'}>Comissão Atendimento</Th>
                  <Th color={'white'}>Entradas Venda</Th>
                  <Th color={'white'}>Comissão Venda</Th>
                  <Th color={'white'}>Entradas Conta</Th>
                  <Th color={'white'}>Comissão Conta</Th>
                  <Th color={'white'}>Editar</Th>
                  <Th color={'white'}>Excluir</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Data.length > 0 && ListaTable}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
    </>
  )
}
