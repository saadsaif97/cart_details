import { AspectRatio, Box, Button, Flex, Heading, HStack, Image, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";

function Details() {
  const { toggleColorMode } = useColorMode()
  const detailsBG = useColorModeValue("gray.50", "gray.700")
  return (
    <VStack w="full" h="full" p="10" spacing="6" bg={detailsBG} alignItems="flex-start">
      <VStack spacing="3" alignItems="flex-start">
        <Heading fontSize="5xl" fontWeight="black">
          Your cart
        </Heading>
        <Text>
          If price is too hard on your eyes, <Button onClick={toggleColorMode} variant="link">try changing the theme.</Button>
        </Text>
      </VStack>
      <Flex columnGap={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/static/images/product.png" alt="product"></Image>
        </AspectRatio>
        <Box>
          <Text fontSize="lg" fontWeight="bold">Penny board</Text>
          <Text fontSize="lg">PNYCOMP27541</Text>
        </Box>
        <Box ml="auto">
          <Text fontWeight="bold">$119.0</Text>
        </Box>
      </Flex>
      <VStack spacing="2" alignItems="flex-start" w="full">
        <HStack justifyContent="space-between" w="full">
          <Text>
            Subtotal
          </Text>
          <Text fontWeight="bold">
            $119.00
          </Text>
        </HStack>
        <HStack justifyContent="space-between" w="full">
          <Text>
            Shipping
          </Text>
          <Text fontWeight="bold">
            $19.99
          </Text>
        </HStack>
        <HStack justifyContent="space-between" w="full">
          <Text>
            Taxes (estimated)
          </Text>
          <Text fontWeight="bold">
            $23.80
          </Text>
        </HStack>
      </VStack>
      <Box w="full" h="px" bg="gray.200" my={6}/>
      <HStack justifyContent="space-between" w="full">
          <Text>
            Taxes (estimated)
          </Text>
          <Text fontSize="3xl" fontWeight="bold">
            $162.79
          </Text>
        </HStack>
    </VStack>
  );
}

export default Details;
