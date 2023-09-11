import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, useToast } from "@chakra-ui/react"
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export const ConfigVendedor = (props: { id: any }) => {
  const IDVendedor = props.id
  const toast = useToast();
  const [ID, setID] = useState('');
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
  const {data: session} = useSession();
  const [Bloq, setBloq] = useState(false);



  useEffect(() => {
    (async () => {
      try {
        const request = await axios(`/api/db/config/getid/${IDVendedor}`);
        const resposta = request.data;
        console.log('config',resposta);
        setID(resposta.id);
        setAno(resposta.attributes.ano);
        setMes(resposta.attributes.mes);
        setMeta(resposta.attributes.meta_decendio);
        setSalario(resposta.attributes.salario_fixo);
        setCusto(resposta.attributes.ajuda_de_custo);
        setPremio1(resposta.attributes.premio_decendio_1);
        setPremio2(resposta.attributes.premio_decendio_2);
        setPremio3(resposta.attributes.premio_decendio_3);
        setPremioMeta(resposta.attributes.premio_meta_do_mes);
        setPremioRecord(resposta.attributes.premio_recorde_de_vendas);
        setEntradaAt(resposta.attributes.entradas_atendimento);
        setComicaoAt(resposta.attributes.comisao_atendimento);
        setEntradaVe(resposta.attributes.entradas_venda);
        setComicaoVe(resposta.attributes.comissao_venda);
        setEntradaCont(resposta.attributes.entradaCont);
        setComicaoCont(resposta.attributes.comissao_conta);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [IDVendedor]);


  const salvar = async () => {
    setBloq(true);
    try {
      const Data = {
        "data": {
          "ano": Ano,
          "mes": Mes,
          "meta_decendio": Meta,
          "salario_fixo": Salario,
          "ajuda_de_custo": Custo,
          "premio_decendio_1": Premio1,
          "premio_decendio_2": Premio2,
          "premio_decendio_3": Premio3,
          "premio_meta_do_mes": PremioMeta,
          "premio_recorde_de_vendas": PremioRecord,
          "entradas_atendimento": EntradaAt,
          "comisao_atendimento": ComicaoAt,
          "entradas_venda": EntradaVe,
          "comissao_venda": ComicaoVe,
          "entradas_contas": EntradaCont,
          "comissao_conta": ComicaoCont,
          "vendedor": session?.user.name,
          "user": session?.user.id,
        }
      };

      const request = await axios(`/api/db/config/put/${ID}`, {
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
      setBloq(false);
    } catch (error) {
      console.log(error);
      toast({
        title: 'Erro',
        description: 'Erro ao cadastrar usuario,' + JSON.stringify(error),
        status: 'error',
        duration: 9000,
        isClosable: true
      })
      setBloq(false);
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
                value={Ano}
                onChange={(e) => setAno(e.target.value)}
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
                value={Mes}
                onChange={(e) => setMes(e.target.value)}
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
                value={Meta}
                onChange={(e) => setMeta(e.target.value)}
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
                value={Salario}
                onChange={(e) => setSalario(e.target.value)}
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
                value={Custo}
                onChange={(e) => setCusto(e.target.value)}
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
                value={Premio1}
                onChange={(e) => setPremio1(e.target.value)}
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
                value={Premio2}
                onChange={(e) => setPremio2(e.target.value)}
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
                value={Premio3}
                onChange={(e) => setPremio3(e.target.value)}
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
                value={PremioMeta}
                onChange={(e) => setPremioMeta(e.target.value)}
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
                value={PremioRecord}
                onChange={(e) => setPremioRecord(e.target.value)}
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
                value={EntradaAt}
                onChange={(e) => setEntradaAt(e.target.value)}
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
                value={ComicaoAt}
                onChange={(e) => setComicaoAt(e.target.value)}
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
                value={EntradaVe}
                onChange={(e) => setEntradaVe(e.target.value)}
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
                value={ComicaoVe}
                onChange={(e) =>  setComicaoVe(e.target.value)}
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
                value={EntradaCont}
                onChange={(e) => setEntradaCont(e.target.value)}
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
                value={ComicaoCont}
                onChange={(e) => setComicaoCont(e.target.value)}
              />
            </FormControl>
          </Box>

        </Flex>

        <Flex gap={4} justifyContent={'end'}>
          <Button colorScheme="green" isDisabled={Bloq} onClick={salvar}>Salvar</Button>
          <Button colorScheme="red">Excluir</Button>
        </Flex>
      </Flex>
    </>
  )
}
