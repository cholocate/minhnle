import React, { useState } from "react";
import Layout from "@theme/Layout";
import { Image, Box, Text, Container, GridItem } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import { motion } from "framer-motion"; // Import motion from Framer Motion

import { Flex } from "@chakra-ui/react";

const GridCard = ({ card }) => {
  const cardHeight = 500;
  const location = useLocation();
  const navigateToUrl = () => {
    window.open(card.redirect, '_blank');
  };

  const [cardRef, inView] = useInView({ triggerOnce: true }); // Initialize useInView hook

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 150 }} // Set initial y-position for animation
      animate={{ y: inView ? 0 : 150 }} // Animate to original position if inView is true, otherwise animate downwards
      transition={{ duration: 0.5 }} // Adjust the duration of the animation
    >
      <GridItem
        h={`${cardHeight}px`}
        _hover={{ transform: "scale(1.2)" }}
        transition="transform 0.3s"
        shadow="2xl"
        borderBottomEndRadius="8%"
        to={{ ...location, pathname: card.redirect }}
        onClick={navigateToUrl}
      >
        <Box
          display="flex"
          flexDirection="column"
          height={`${cardHeight}px`}
          borderBottomEndRadius="6%"
          background="white"
        >
          <Image
            src={card.imgPath}
            h="50%"
            w="100%"
            objectFit="cover"
            objectPosition="center"
          />

          <Box p={3} bg="gray.200" height="250px" borderBottomEndRadius="6%">
            <Container>
              <Text textStyle="body1" mt={2}>
                {card.title}
              </Text>
              <Flex mt={-2} gap={4}>
                {card.languages.map((language) => (
                  <Box
                    key={language[0]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="facebook.200"
                    borderRadius="10%"
                    p={1}
                  >
                    {language[1]}
                    <Text textStyle="label2" ml={1}>
                      {language[0]}
                    </Text>
                  </Box>
                ))}
              </Flex>
              <Text textStyle="body2" mt={4}>
                {card.description}
              </Text>
            </Container>
          </Box>
        </Box>
      </GridItem>
    </motion.div>
  );
};

export default GridCard;
