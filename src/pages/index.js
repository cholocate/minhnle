import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Box, Container, Grid, Text, Image, Flex, Center} from "@chakra-ui/react";
import gif from "../../static/img/bacxiuu.gif";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { FiGithub, FiMail, FiBook, FiBookOpen, FiDatabase } from "react-icons/fi";

import github from "../../static/img/github-alt.svg";
import mail from "../../static/img/envelope-solid.svg";
import note from "../../static/img/book-solid.svg";
import chess from "../../static/img/chess-knight-solid.svg";
import blog from "../../static/img/blog-solid.svg";
import activities from '../../data/activities';
import ActivityCard from '../components/activityCard';
import sing from '../../static/img/sing.jpg'
const boxStyle = {
  backgroundImage: `url(${gif})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function HomeContent() {
  const [textRef, inView] = useInView({ triggerOnce: true }); // Initialize useInView hook
  // const [apiResponse, setApiResponse] = useState(null);

  // useEffect(() => {
  //   // Fetch API data using axios
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get("https://leetcode-api-faisalshohag.vercel.app/omegamesh");
  //       setApiResponse(response.data);
  //     } catch (error) {
  //       console.log("Error while fetching API data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <Box background="gray.700">
      <Container maxW="container.md" my="6rem"  p={6} shadow="lg">
        <Text textStyle="label0" color="white">
        "Do hard things. Who cares about the grades as long as you pass. Dont be afraid to take the hardest classes-- your parents might not get it. If you think you can pass, go for it. Work hard with your friends, achieve greatness together. The challenge is knowing what matters and being honest with yourself that you grinded with all your heart at the pace that wouldn't burn you out."
        </Text>
        <Text textStyle="body2" align="right" color="azure" fontWeight="hairline" fontStyle="italic">
          - Reddit
        </Text>
      </Container>
      <Container maxW="container.md" my="4rem">
        <Box maxW="container.lg">
          {/* Insert LeetCode Stat Box */}
          {/* <LeetCodeStats username="omegamesh" /> */}
        </Box>
        {/* {apiResponse && (
  <Box display='flex'>
    <iframe
      style={{ width: "100%", height: "100%" }}
      src={`https://leetcard.jacoblin.cool/?username=omegamesh&total_solved=${apiResponse.totalSolved}&total_submissions=${apiResponse.totalSubmissions[0].submissions}&total_questions=${apiResponse.totalQuestions}&easy_solved=${apiResponse.easySolved}&total_easy=${apiResponse.totalEasy}&medium_solved=${apiResponse.mediumSolved}&total_medium=${apiResponse.totalMedium}&hard_solved=${apiResponse.hardSolved}&total_hard=${apiResponse.totalHard}`}
      frameBorder="0"
      scrolling="no"
    />
  </Box>
)} */}
        <Box maxW="container.lg"> 
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={10}
          >
            {activities.map((card) => {
              return <ActivityCard card={card} />;
            })}
          </Grid>
        </Box>


      </Container>

      <motion.div
      ref={textRef}
      initial={{ y: 150 }} // Set initial y-position for animation
      animate={{ y: inView ? 0 : 150 }} // Animate to original position if inView is true, otherwise animate downwards
      transition={{ duration: 0.5 }} // Adjust the duration of the animation
    >

<Container maxW="container.md" p={60} display="flex">
  <Flex direction="column">
    <Center>
      <Image
        src={sing}
        borderRadius="full"
        boxSize={['50px', '75px', '100px', '150px', '175px', '200px']}
        alt="Profile"
        objectFit="cover"
        position="center"
        _hover={{ transform: "scale(1.2)" }}
      />
    </Center>
    <Box my="1rem" />
    <Box textAlign="center">
      <Text textStyle="header1" color="azure">
        Find the pebble that will create your avalanche.  
      </Text>
      <Box as="a" href="https://github.com/cholocate" target="_blank" rel="noopener noreferrer" mx={2}>
        <FiGithub size={40} color="white" />
      </Box>
      <Box as="a" href="mailto:minhle2001@berkeley.edu" mx={2}>
        <FiMail size={40} color="white" />
      </Box>
      <Box as="a" href="https://minhnle.com/docs/Overview" target="_blank" rel="noopener noreferrer" mx={2}>
        <FiDatabase size={40} color="white" />
      </Box>
      <Box as="a" href="https://minhnle.com/blog/" target="_blank" rel="noopener noreferrer" mx={2}>
        <FiBookOpen size={40} color="white" />
      </Box>
    </Box>
  </Flex>
</Container>

      </motion.div>
      
      
    </Box>
  );
}

export default function Home() {
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomeContent />
    </Layout>
  );
}
