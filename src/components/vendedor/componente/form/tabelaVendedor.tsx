import { Box, Flex, Heading, IconButton, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";







export const TabelaVendasVendedor = (props: { id: any }) => {
  const IDVendedor = props.id
  const [Data, setData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios(`/api/db/config/getid/${IDVendedor}`);
        const retorno = request.data;
        setData(retorno)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [IDVendedor]);

  const ListaTable = Data.map((item: any, x: number) => {

    return (
      <>
        <Tr>
          <Th>{item.attributes.ano}</Th>
          <Th>{item.attributes.mes}</Th>
          <Th>{item.attributes.meta_decendio}</Th>
          <Th>{item.attributes.salario_fixo}</Th>
          <Th>{item.attributes.ajuda_de_custo}</Th>
          <Th>{item.attributes.premio_decendio_1}</Th>
          <Th>{item.attributes.premio_decendio_2}</Th>
          <Th>{item.attributes.premio_decendio_3}</Th>
          <Th>{item.attributes.premio_meta_do_mes}</Th>
          <Th>{item.attributes.premio_recorde_de_vendas}</Th>
          <Th>{item.attributes.entradas_atendimento}</Th>
          <Th>{item.attributes.comisao_atendimento}</Th>
          <Th>{item.attributes.entradas_venda}</Th>
          <Th>{item.attributes.comissao_venda}</Th>
          <Th>{item.attributes.entradas_contas}</Th>
          <Th>{item.attributes.comissao_conta}</Th>
          <Th><IconButton aria-label="Editar" /></Th>
          <Th><IconButton aria-label="Excluir" /></Th>
        </Tr>
      </>
    )
  })

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
