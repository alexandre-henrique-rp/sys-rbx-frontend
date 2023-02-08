/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, chakra, Link } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function CardEmpresaRibermax() {
  const [dados, setDados] = useState([]);
  const router = useRouter();
  const SetEmail = localStorage.getItem('email');
  const Email = JSON.parse(SetEmail);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    await fetch('/api/ribermax/empresas/get', {
      method: 'POST',
      body: Email,
    })
      .then((resp) => resp.json())
      .then((json) => {
        setDados(json);
      });
  };

  const render = dados.map((item) => {
    console.log(item.data.attributes.nome);

    const cnpj = () => {
      const dig01 =
        item.data.attributes.CNPJ === null
          ? '00'
          : item.data.attributes.CNPJ.substr(0, 2);
      const dig02 =
        item.data.attributes.CNPJ === null
          ? '000'
          : item.data.attributes.CNPJ.substr(2, 3);
      const dig03 =
        item.data.attributes.CNPJ === null
          ? '000'
          : item.data.attributes.CNPJ.substr(5, 3);
      const dig04 =
        item.data.attributes.CNPJ === null
          ? '0000'
          : item.data.attributes.CNPJ.substr(8, 4);
      const dig05 =
        item.data.attributes.CNPJ === null
          ? '00'
          : item.data.attributes.CNPJ.substr(12, 2);
      const result =
        dig01 + '.' + dig02 + '.' + dig03 + '/' + dig04 + '-' + dig05;
      return result;
    };

    return (
      <Box
        mx="auto"
        px={8}
        py={5}
        mb={5}
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
          ></chakra.span>
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
                const cnpj = item.data.attributes.CNPJ;
                await axios({
                  method: 'PUT',
                  url: '/api/empresas/delete/' + cnpj,
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
                const cnpj = item.data.attributes.CNPJ;
                await router.push('/empresas/atualizar/ribermax/' + cnpj);
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
            {item.data.attributes.nome}
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
              CNPJ:
            </chakra.p>
            <chakra.p
              mt={2}
              color="gray.600"
              ms={2}
              _dark={{
                color: 'gray.300',
              }}
            >
              {cnpj()}
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
            ></chakra.p>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: 'gray.300',
              }}
            >
              Responsavel:
            </chakra.p>
            <chakra.p
              mt={2}
              color="gray.600"
              ms={2}
              _dark={{
                color: 'gray.300',
              }}
            >
              não tem
            </chakra.p>
          </Box>
        </Box>
      </Box>
    );
  });
  const display = !dados ? '' : render;
  return (
    <>
      <Box h={'95%'}>{display}</Box>
    </>
  );
}
