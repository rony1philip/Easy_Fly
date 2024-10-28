import { Center, Box, Container, FormControl, FormLabel, Text, Button } from "@chakra-ui/react";
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
        <Center>
          <Box pt={28} m={4} width="74%">
            <FormControl p={4}>
              <Center>
                <FormLabel textColor="ui.main" fontSize="2xl">
                  Select your next destination
                </FormLabel>
              </Center>
              <Box pt={4}>
                <Combobox
                  name="destination"
                  options={[
                    { value: "blue", label: "Blue", color: "#0052CC" },
                    { value: "purple", label: "Purple", color: "#5243AA" },
                    { value: "red", label: "Red", color: "#FF5630" },
                    { value: "orange", label: "Orange", color: "#FF8B00" },
                    { value: "yellow", label: "Yellow", color: "#FFC400" },
                    { value: "green", label: "Green", color: "#36B37E" },
                  ]}
                  placeholder="Where to ..."
                  closeMenuOnSelect={false}
                  size="lg"
                />
              </Box>
              <Center>
                <Button variant="primary" type="submit"> Subscribe</Button>
              </Center>
            </FormControl>
          </Box>
        </Center>
      </Container>
    </>
  );
}
