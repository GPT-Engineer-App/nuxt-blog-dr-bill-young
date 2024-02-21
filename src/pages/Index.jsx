import React from "react";
import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Button, Divider } from "@chakra-ui/react";
import { FaUserMd, FaBlog, FaPlus } from "react-icons/fa";

const BlogPost = ({ title, summary }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text>{summary}</Text>
    <Button mt={3} leftIcon={<FaPlus />} colorScheme="blue" variant="outline">
      Read more
    </Button>
  </Box>
);

const Index = () => {
  // Dummy blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Medical Technology",
      summary: "An exploration of upcoming trends in medical tech.",
    },
    {
      id: 2,
      title: "Nutrition and Health",
      summary: "How what you eat directly impacts your health.",
    },
    {
      id: 3,
      title: "Mental Health Awareness",
      summary: "Understanding the importance of mental health in our society.",
    },
  ];

  return (
    <Container maxW="container.xl">
      <VStack spacing={10} py={10}>
        <VStack spacing={3}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEci4lMjBCaWxsJTIwWW91bmclMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDg1MjQxNzV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Dr. Bill Young" />
          <Heading as="h1">Dr. Bill Young</Heading>
          <Text fontSize="xl" color="gray.500">
            Physician, Researcher, and Blogger
          </Text>
        </VStack>

        <Divider />

        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="lg" display="flex" alignItems="center">
            <FaUserMd />
            <Text ml={2}>About Me</Text>
          </Heading>
          <Text>I am Dr. Bill Young, a passionate physician specialized in internal medicine with over 20 years of experience. I am also an active researcher in the field of oncology and a speaker at various medical conferences around the world. In my spare time, I love to write about medical advancements, health tips, and my experiences in the field.</Text>
        </VStack>

        <Divider />

        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="lg" display="flex" alignItems="center">
            <FaBlog />
            <Text ml={2}>Blog</Text>
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            {blogPosts.map((post) => (
              <BlogPost key={post.id} title={post.title} summary={post.summary} />
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
