import EmptyState from '@/components/EmptyState';
import Logo from 'logos/Logo';
import { useAuth } from '@/lib/auth';
import { Flex, Button } from '@chakra-ui/react';

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }
  return <EmptyState />;

  //       auth.user ? (
  //         <EmptyState />
  //       ) : (
  //         // <Button onClick={() => auth.signout()}>Sign out</Button>
  //         <Button
  //           variant="link"
  //           size="sm"
  //           mt={4}
  //           onClick={() => auth.signinWithGithub()}
  //         >
  //           Sign in
  //         </Button>
  //       )
  //   );
}
