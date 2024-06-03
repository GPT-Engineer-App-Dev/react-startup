import { Box, Container, Flex, Text, VStack, Button } from "@chakra-ui/react";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Box>
      <Container maxW="container.lg" py={10}>
        <VStack spacing={4}>
          {!session ? (
            <>
              <Text fontSize="2xl">Login to Your Account</Text>
              <SupabaseAuthUI />
            </>
          ) : (
            <>
              <Text fontSize="2xl">You are already logged in</Text>
              <Button onClick={logout}>Logout</Button>
            </>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Login;