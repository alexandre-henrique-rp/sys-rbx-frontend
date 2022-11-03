import { Box, Flex, chakra, Link } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function CardPessoas() {
  const [dados, setDados] = useState([]);
  const router = useRouter();
  const get = async () => {
    const response = await axios({
      method: 'GET',
      url: '/api/pessoas/Get',
    });
    setDados(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    get();
  }, []);

  const render = dados.map((item) => {
    const data = () => {
      const ano = item.attributes.createdAt.substr(0, 4);
      const mes = item.attributes.createdAt.substr(5, 2);
      const dia = item.attributes.createdAt.substr(8, 2);
      const mesesLieral =
        mes === '1'
          ? 'Jan'
          : mes === '2'
          ? 'Fev'
          : mes === '3'
          ? 'Mar'
          : mes === '4'
          ? 'Abr'
          : mes === '5'
          ? 'Mai'
          : mes === '6'
          ? 'Jun'
          : mes === '7'
          ? 'Jul'
          : mes === '8'
          ? 'Ago'
          : mes === '9'
          ? 'Set'
          : mes === '10'
          ? 'Out'
          : mes === '11'
          ? 'Nov'
          : 'Dez';
      const date = mesesLieral + ' ' + dia + ', ' + ano + ' date add';

      return date;
    };

    const cpf = () => {
      const dig01 =
        item.attributes.cpf === null ? '000' : item.attributes.CPF.substr(0, 3);
      const dig02 =
        item.attributes.CPF === null ? '000' : item.attributes.CPF.substr(3, 3);
      const dig03 =
        item.attributes.CPF === null ? '000' : item.attributes.CPF.substr(6, 3);
      const dig04 =
        item.attributes.CPF === null ? '00' : item.attributes.CPF.substr(9, 2);

      const result = dig01 + '.' + dig02 + '.' + dig03 + '-' + dig04;
      return result;
    };
    const end =
      item.attributes.endereco +
      ', ' +
      item.attributes.numero +
      ' - ' +
      item.attributes.bairro +
      ', ' +
      item.attributes.cidade +
      ' - ' +
      item.attributes.uf;

    const empresaLink = item.attributes.empresas.data[0].attributes.nome;
    console.log(item.attributes.empresas.data[0].attributes.nome);

    return (
      <Box
        mx="auto"
        px={8}
        py={5}
        rounded="lg"
        shadow="lg"
        boxShadow="dark-lg"
        bg="white"
        _dark={{
          bg: 'gray.900',
        }}
        w={['xs', 'sm', 'lg', 'xl', '3xl', '5xl', '6xl']}
        key={item.id}
        fontSize="sm"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: 'gray.400',
            }}
          >
            {data()}
          </chakra.span>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection={['column', 'row', 'row']}
            w={36}
            gap={5}
          >
            <Link
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{
                bg: 'gray.500',
              }}
              onClick={async () => {
                const id = item.id;
                await axios({
                  method: 'PUT',
                  url: '/api/pessoas/delete/' + id,
                });
              }}
            >
              Delete
            </Link>
            <Link
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{
                bg: 'gray.500',
              }}
              onClick={async () => {
                localStorage.setItem('atid', item.id);
                const id = item.id
                await router.push('/pessoas/atualizar/'+id);
              }}
            >
              editar
            </Link>
          </Flex>
        </Flex>

        <Box mt={2}>
          <Link
            fontSize="2xl"
            color="gray.700"
            _dark={{
              color: 'white',
            }}
            fontWeight="700"
            _hover={{
              color: 'gray.600',
              _dark: {
                color: 'gray.200',
              },
              textDecor: 'underline',
            }}
          >
            {item.attributes.nome}
          </Link>
          <Box
            mt={2}
            display={'flex'}
            flexDirection={['column', 'column', 'row', 'row']}
          >
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: 'gray.300',
              }}
            >
              CPF:
            </chakra.p>
            <chakra.p
              mt={2}
              color="gray.600"
              ms={2}
              _dark={{
                color: 'gray.300',
              }}
            >
              {cpf()}
            </chakra.p>
            <chakra.p
              mt={2}
              color="gray.600"
              ms={5}
              _dark={{
                color: 'gray.300',
              }}
            >
              End:
            </chakra.p>
            <chakra.p
              mt={2}
              color="gray.600"
              ms={2}
              _dark={{
                color: 'gray.300',
              }}
            >
              {end}
            </chakra.p>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: 'gray.300',
              }}
            >
              empresas:
            </chakra.p>
            <chakra.p
              mt={2}
              color="gray.600"
              ms={2}
              _dark={{
                color: 'gray.300',
              }}
            >
              {empresaLink === null ? 'não tem' : empresaLink}
            </chakra.p>
            <chakra.p
              mt={2}
              color="gray.600"
              ms={5}
              _dark={{
                color: 'gray.300',
              }}
            >
              Quant compra:
            </chakra.p>
            <chakra.p
              mt={2}
              color="gray.600"
              ms={2}
              fontSize={'3xl'}
              _dark={{
                color: 'gray.300',
              }}
            >
              7
            </chakra.p>
          </Box>
        </Box>
      </Box>
    );
  });
  const display = !dados ? null : render;
  return <>{display}</>;
}
