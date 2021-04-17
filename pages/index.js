import Logo from 'logos/Logo';
import { useAuth } from '@/lib/auth';
import { Flex, Button } from '@chakra-ui/react';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      // maxW="300"
      h="100vh"
    >
      <Logo />
      {auth.user ? (
        <Button onClick={() => auth.signout()}>Sign out</Button>
      ) : (
        <Button
          variant="link"
          size="sm"
          mt={4}
          onClick={() => auth.signinWithGithub()}
        >
          Sign in
        </Button>
      )}
    </Flex>
  );
}
