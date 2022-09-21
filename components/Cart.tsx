import { Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Details from "./cart/Details";
import Form from "./cart/Form";

function Cart() {
  return (
    <Container maxW="container.xl" p="0">
    <Flex h="100vh" py={20} flexDir={{ base: "column", lg: "row" }}>
      <Form/>
      <Details/>
    </Flex>
  </Container>
  )
}

export default Cart