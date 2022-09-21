import { Button, Checkbox, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Text, VStack } from "@chakra-ui/react";

function Form() {
  return (
    <VStack w="full" h="full" p="10" spacing="10" alignItems="flex-start">
      <VStack spacing="3" alignItems="flex-start">
        <Heading fontSize="5xl" fontWeight="black">
          Your details
        </Heading>
        <Text m={0}>
          If you already have an account, click here to log in.
        </Text>
      </VStack>
      <SimpleGrid rowGap={6} columnGap={3} columns={2} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" variant="filled" placeholder="Saad"/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" variant="filled" placeholder="Saif"/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input type="text" variant="filled" placeholder="UMT Lahore"/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input type="text" variant="filled" placeholder="Lahore"/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder='Country' variant="filled">
              <option selected value='pk'>Pakistan</option>
              <option value='tur'>Turkey</option>
              <option value='af'>Afghanistan</option>
              <option value='sa'>Saudi Arabia</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked colorScheme="green">Ship to the billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme="green" size="lg" w="full">Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}

export default Form;
