import { Heading, Box, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box p={8} backgroundColor="white" borderRadius={8}>
        <Heading size="md">Get feedback on your site instantly.</Heading>
        <Text>Start today, then grow with us 🌱</Text>
        <Button variant="solid" size="md">
          Upgrade to Starter
        </Button>
      </Box>
    </DashboardShell>
  );
};
export default FreePlanEmptyState;
