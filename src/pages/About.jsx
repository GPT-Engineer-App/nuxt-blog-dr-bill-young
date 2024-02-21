import React from "react";
import { Box, Container, Heading, Text, VStack, Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10} py={10}>
        <Heading as="h1">About Dr. Bill Young</Heading>
        <Divider />
        <Text>Dr. Bill Young is a passionate physician specialized in internal medicine with over 20 years of experience. He is an active researcher in the field of oncology and a speaker at various medical conferences around the world. In his spare time, he loves to write about medical advancements, health tips, and his experiences in the field.</Text>
      </VStack>
    </Container>
  );
};

export default About;
