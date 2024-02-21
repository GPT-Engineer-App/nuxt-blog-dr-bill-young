import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link as={RouterLink} to="/" color="white" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="white" mr={4}>
            About
          </Link>
          <Link as={RouterLink} to="/blog" color="white" mr={4}>
            Blog
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
