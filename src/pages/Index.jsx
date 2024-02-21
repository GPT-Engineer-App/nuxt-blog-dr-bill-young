import React from "react";
import { Link } from "react-router-dom";
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
        // Stray import removed
        <VStack spacing={3}>
          <Heading as="h1">Dr. Bill Young</Heading>
          <Button as={Link} to="/about" colorScheme="blue" leftIcon={<FaUserMd />}>
            About Me
          </Button>
        </VStack>
        // ...
        <Divider />
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
