import { Heading, Flex, Text, Button } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';
import DashboardShell from './DashboardShell';

const EmptyState = () => {
  return (
    <DashboardShell>
      <Flex
        p={16}
        backgroundColor="white"
        borderRadius={8}
        justify="center"
        align="center"
        direction="column"
      >
        <Heading size="lg" mb={2}>
          You haven't added any sites.
        </Heading>
        <Text mb={4}>Welcome 👋 Let's get started.</Text>
        <AddSiteModal />
      </Flex>
    </DashboardShell>
  );
};
export default EmptyState;
