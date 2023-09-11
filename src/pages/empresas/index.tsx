import { CarteiraAusente } from "@/components/empresa/component/empresas_ausente";
import { CarteiraVendedor } from "@/components/empresa/component/empresas_vendedor";
import { FiltroEmpresa } from "@/components/empresa/component/fitro/empresa";
import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";
import axios from "axios";
import { parseISO, startOfDay } from "date-fns";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



function Empresas({ dataRetorno }: any) {
  const router = useRouter();
  const { data: session } = useSession();
  const [DataSearch, setDataSearch] = useState<any | null>([]);
  const [DataSearchUser, setDataSearchUser] = useState<any | null>([]);
  const toast = useToast()

  useEffect(() => {

    (async () => {
      try {
        const res = await axios('/api/db/empresas/empresalist');
        const repo =  res.data;

        const calcularDiferencaEmDias = (data1: Date, data2: Date): number => {
          const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
          const data1UTC = Date.UTC(data1.getFullYear(), data1.getMonth(), data1.getDate());
          const data2UTC = Date.UTC(data2.getFullYear(), data2.getMonth(), data2.getDate());
          return Math.floor((data2UTC - data1UTC) / umDiaEmMilissegundos);
        };

        const dataAtual = startOfDay(new Date());
        const filtroVendedor = repo.filter((f: any) => f.attributes.user.data?.attributes.username === session?.user.name);
        const VendedorInteracao = filtroVendedor.filter((f: any) => f.attributes.interacaos.data?.length > 0);

        const VendedorInteracaoMap = VendedorInteracao.map((i: any) => {
          const interacao = i.attributes.interacaos.data;
          const ultimaInteracao = interacao[interacao.length - 1];
          const proximaData = startOfDay(parseISO(ultimaInteracao.attributes.proxima));
          const diferencaEmDias = calcularDiferencaEmDias(dataAtual, proximaData);

          let RetornoInteracao;
          if (ultimaInteracao.attributes.status_atendimento === false) {
            RetornoInteracao = { proxima: null, cor: 'gray', info: 'Você não tem interação agendada' }
          } else if (diferencaEmDias === 0) {
            RetornoInteracao = { proxima: proximaData.toISOString(), cor: 'yellow', info: 'Você tem interação agendada para hoje' };
          } else if (diferencaEmDias < 0) {
            RetornoInteracao = { proxima: proximaData.toISOString(), cor: '#FC0707', info: `Você tem interação que já passou, a data agendada era ${proximaData.toLocaleDateString()}` };
          } else {
            RetornoInteracao = { proxima: proximaData.toISOString(), cor: '#3B2DFF', info: `Você tem interação agendada para ${proximaData.toLocaleDateString()}` };
          }

          return {
            id: i.id,
            attributes: {
              ...i.attributes,
              interacaos: {
                data: {
                  id: ultimaInteracao?.id,
                  proxima: RetornoInteracao?.proxima,
                  cor: RetornoInteracao?.cor,
                  info: RetornoInteracao?.info,
                }
              },
              diferencaEmDias: diferencaEmDias // Adicione a diferença de dias como uma propriedade
            }
          };
        });

        VendedorInteracaoMap.sort((a: any, b: any) => {
          return a.attributes.diferencaEmDias - b.attributes.diferencaEmDias;
        });
        const VendedorInteracao0 = filtroVendedor.filter((f: any) => f.attributes.interacaos.data?.length === 0);
        const DataVendedor: any = [...VendedorInteracaoMap, ...VendedorInteracao0];

        // ------------------------------------------------------------------------------------------------------------------
        // sem vendedor

        const filtroSemVendedor = repo.filter((f: any) => f.attributes.user.data?.attributes.username == null)
        const SemVendedorInteracao = filtroSemVendedor.filter((f: any) => f.attributes.interacaos.data?.length > 0);

        const SemVendedorInteracaoMap = SemVendedorInteracao.map((i: any) => {
          const interacao = i.attributes.interacaos.data;
          const ultimaInteracao = interacao[interacao.length - 1];
          const proximaData = startOfDay(parseISO(ultimaInteracao.attributes.proxima));
          const diferencaEmDias = calcularDiferencaEmDias(dataAtual, proximaData);

          let RetornoInteracao;
          if (ultimaInteracao.attributes.status_atendimento === false) {
            RetornoInteracao = { proxima: null, cor: 'gray', info: 'Você não tem interação agendada' }
          } else if (diferencaEmDias === 0) {
            RetornoInteracao = { proxima: proximaData.toISOString(), cor: 'yellow', info: 'Você tem interação agendada para hoje' };
          } else if (diferencaEmDias < 0) {
            RetornoInteracao = { proxima: proximaData.toISOString(), cor: '#FC0707', info: `Você tem interação que já passou, a data agendada era ${proximaData.toLocaleDateString()}` };
          } else {
            RetornoInteracao = { proxima: proximaData.toISOString(), cor: '#3B2DFF', info: `Você tem interação agendada para ${proximaData.toLocaleDateString()}` };
          }

          return {
            id: i.id,
            attributes: {
              ...i.attributes,
              interacaos: {
                data: {
                  id: ultimaInteracao?.id,
                  proxima: RetornoInteracao?.proxima,
                  cor: RetornoInteracao?.cor,
                  info: RetornoInteracao?.info,
                }
              },
              diferencaEmDias: diferencaEmDias // Adicione a diferença de dias como uma propriedade
            }
          };
        });

        SemVendedorInteracaoMap.sort((a: any, b: any) => {
          return a.attributes.diferencaEmDias - b.attributes.diferencaEmDias;
        });

        const SemVendedorInteracao0 = filtroSemVendedor.filter((f: any) => f.attributes.interacaos.data?.length == 0);
        const DataVendedorSemVendedor: any = [...SemVendedorInteracaoMap, ...SemVendedorInteracao0];

        setDataSearch(DataVendedorSemVendedor);
        setDataSearchUser(DataVendedor);

      } catch (error) {
        console.log(error);
        toast({
          title: 'Erro',
          description: 'Erro ao buscar dados, '+ JSON.stringify(error),
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }

    })()

  }, [session?.user.name, toast])

  function filterEmpresa(SearchEmpr: React.SetStateAction<any>): any {
    const filtro = SearchEmpr.toLowerCase();
    const vendedor = dataRetorno.DataVendedor
    const semVendedor = dataRetorno.DataVendedorSemVendedor

    const PesqisaArrayVendedor = vendedor.filter((item: any) => item.attributes.nome.toLowerCase().includes(filtro));
    const PesqisaArraySemVendedor = semVendedor.filter((item: any) => item.attributes.nome.toLowerCase().includes(filtro));
    setDataSearchUser(PesqisaArrayVendedor);
    setDataSearch(PesqisaArraySemVendedor);

  };

  return (
    <>
      <Box w={'100%'} h={'100%'} bg={'gray.800'} color={'white'} px={5} py={2} fontSize={'0.8rem'}>
        <Heading size={'lg'}>Empresas</Heading>
        <Flex w={'100%'} py={'1rem'} justifyContent={'space-between'} flexDir={'row'} alignItems={'self-end'} px={6} gap={6} borderBottom={'1px'} borderColor={'white'} mb={'1rem'}>
          <Box>
            <FiltroEmpresa empresa={filterEmpresa} />
          </Box>
          <Button size={'sm'} onClick={() => router.push('/empresas/cadastro')} colorScheme="green">+ Nova Empresa</Button>
        </Flex>
        <Box display={'flex'} flexDirection={{ base: 'column', lg: 'row' }} w={'100%'} h={'76%'} pt={5} gap={5} >
          <CarteiraVendedor filtro={DataSearchUser} />
          <CarteiraAusente filtro={DataSearch} />
        </Box>
      </Box>
    </>
  );
}

export default Empresas;
