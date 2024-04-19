import { Box, Flex, Text, Image, Button, VStack, Input, useToast } from "@chakra-ui/react";
import { FaHome, FaImages, FaUser } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const sendMessage = () => {
    toast({
      title: "Message sent.",
      description: "We've received your message and will respond soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Flex bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          ArtNova
        </Text>
        <Flex>
          <Button leftIcon={<FaHome />} variant="ghost">
            Home
          </Button>
          <Button leftIcon={<FaImages />} variant="ghost">
            Gallery
          </Button>
          <Button leftIcon={<FaUser />} variant="ghost">
            Profile
          </Button>
        </Flex>
      </Flex>
      <Flex height="calc(100vh - 64px)">
        <Box flex="1" p={4} borderRight="1px" borderColor="gray.200">
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Chat with Us
            </Text>
            <Text>Welcome to ArtNova. Please describe your tattoo requirements.</Text>
            <Input placeholder="Type your message here..." />
            <Button onClick={sendMessage} colorScheme="blue">
              Send
            </Button>
          </VStack>
        </Box>
        <Flex flex="1" p={4} flexWrap="wrap" justifyContent="space-around" alignItems="center">
          <Image src="https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydHxlbnwwfHx8fDE3MTM1NjY3NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="45%" m={2} />
          <Image src="https://images.unsplash.com/photo-1641406755423-968570743031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0YXR0b28lMjBhcnR8ZW58MHx8fHwxNzEzNTY2NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="45%" m={2} />
          <Image src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRhdHRvbyUyMGRlc2lnbnxlbnwwfHx8fDE3MTM1NjY3NTF8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="45%" m={2} />
          <Image src="https://images.unsplash.com/photo-1543379344-402b42ddbe8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwdGF0dG9vfGVufDB8fHx8MTcxMzU2Njc1MXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="45%" m={2} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
