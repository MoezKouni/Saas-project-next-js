import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import FlyingMen from 'logos/FlyingMen';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="white"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline align="center">
          <FlyingMen />
          <Link>Sites</Link>
          <Link display="block">Feedback</Link>
        </Stack>
        <Flex justifyContent="flex-start" alignItems="center">
          <Link mr={5}>Account</Link>
          <Avatar size="md" src={user.photoUrl} />
        </Flex>
      </Flex>
      <Flex
        backgroundColor="gray.100"
        justifyContent="center"
        p={8}
        height="100vh"
      >
        <Flex
          maxWidth="800px"
          width="100%"
          direction="column"
          ml="auto"
          mr="auto"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DashboardShell;
