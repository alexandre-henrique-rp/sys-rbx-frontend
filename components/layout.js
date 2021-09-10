import Navbar from "./elements/navbar";
import MobileNavbar from "./elements/mobile-navbar";
import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  
  const router = useRouter()
  const [ session, loading ] = useSession();

  if( loading ) return (<h1>Carregando...</h1>);
  
  if( !session && router.asPath !== "/auth/signin") router.push("/auth/signin");
  
  if(!session && router.asPath === "/auth/signin") return children;
  
  if( !session ) return (<h1>Redirecionando...</h1>);

  return (
    <Flex
      h={[null, null, "100vh"]}
      flexDir={["column", "column", "row"]}
      overflow="hidden"
      maxW="2000px"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        bg="gray.700"
        w={["100%", "100%", "15%", "15%", "15%"]}
        minW="150px"
      >
        <Navbar />
        <MobileNavbar />
      </Flex>
      <Flex
        minH="100vh"
        overflow="auto"
        w={["100%", "100%", "80%", "80%", "80%"]}
        flexDir="column"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
