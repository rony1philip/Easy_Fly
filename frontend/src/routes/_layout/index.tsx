import { Box, Container, FormControl, FormLabel, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Combobox, { CreatableSelect } from "../../components/Combobox";
import useAuth from "../../hooks/useAuth";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});

function Dashboard() {
  const { user: currentUser } = useAuth();

  return (
    <>
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Text fontSize="2xl">
            Hi, {currentUser?.full_name || currentUser?.email} 👋🏼
          </Text>
          <Text>Welcome back, nice to see you again!</Text>
          <FormControl p={4}>
            <FormLabel>Select Colors and Flavours</FormLabel>
            <Combobox
              name="colors"
              options={[
                { value: "blue", label: "Blue", color: "#0052CC" },
                { value: "purple", label: "Purple", color: "#5243AA" },
                { value: "red", label: "Red", color: "#FF5630" },
                { value: "orange", label: "Orange", color: "#FF8B00" },
                { value: "yellow", label: "Yellow", color: "#FFC400" },
                { value: "green", label: "Green", color: "#36B37E" },
              ]}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
              size="sm"
            />
          </FormControl>
        </Box>
      </Container>
    </>
  );
}
