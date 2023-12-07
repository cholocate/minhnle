import React from "react";
import Layout from "@theme/Layout";
import {
  Image,
  Box,
  Text,
  Container,
} from "@chakra-ui/react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import img from "../../static/img/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";
import berk from "../../static/img/berk.png";
import RelevantCoursework from "../components/relevantCoursework";


function About () {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
      title="About"
      description="Description will go into a meta tag in <head />"
    >
    <AnimatePresence>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
      <Container display="flex" maxW="container.lg" my="6rem">
        <Box display="flex" alignItems="center">
          <Box width="50%" paddingRight="2rem">
            <Text textStyle="title1" position="left">
              Minh Le's Productivity Space
            </Text>
            <Text textStyle="subtitle1" position="left">
              I like to learn and teach, and drink coffee!
            </Text>
          </Box>
          
          <Box width="50%" display="flex" justifyContent="flex-start" alignItems="center">
            <Image
              src={img}
              borderRadius='full'
              boxSize={['100px','200px', '300px', '400px']} // Adjust image size based on screen width
              alt="Profile"
              objectFit='cover'
              marginLeft='auto'
              _hover={{ transform: "scale(1.2)" }} // Apply zoom on hover
              transition="transform 0.3s" // Smooth transition animation
            />
          </Box>
        </Box>
      </Container>
      <Box  background="gray.700">
        <Container 
        maxW="full" display="flex" alignItems="center" justifyContent="center"> 
          <Text textStyle="header1" mt="4rem" color="azure" alignSelf="center"> 
            EDUCATION
          </Text>
          
        </Container>
        <Container mt="-1rem" maxW="full" display="flex" alignItems="center" justifyContent="center">
  <Box alignContent="center" my="4rem" display="flex">
    <Image objectFit='cover' boxSize={['50px','100px', '150px', '200px']} src={berk}/>
  </Box>
  <Box>
    <Text textStyle="header2" color="white" fontWeight="bold" p={6}>
      University of California, Berkeley
    </Text>
    <Text textStyle="label1" color="azure" fontWeight="medium" p={6} mt="-4rem">
      B.A - Computer Science <br />
      Minor in Data Science
    </Text>
   
  </Box>
</Container>
<Container maxW="container.sm"> 
  <RelevantCoursework />
</Container>
<Box maxW="full" p={6}>
      <Container>
      </Container>
</Box>

      </Box>  
      </motion.section>
      </AnimatePresence> 
        </Layout>
      );
}
export default About;
