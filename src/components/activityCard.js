import React, { useState } from "react";
import Layout from "@theme/Layout";
import { Image, Box, Text, Container, GridItem } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import { motion } from "framer-motion"; // Import motion from Framer Motion

import { Flex } from "@chakra-ui/react";

const ActivityCard = ({card}) => { 
    const cardHeight = 200; 
    
    const [cardRef, inView] = useInView({ triggerOnce: true});

    return (
        <motion.div
            ref={cardRef}
            initial={{ y:150}}
            animate={{ y:inView ? 0:150}}
            transition={{ duration:0.5}} 
        >
            <GridItem
                h={`${cardHeight}px`}
                _hover={{ transform: "scale(1.2)"}}
                transition="transform 0.3s"
                shadow="lg"
                borderRadius="8%"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    height={`${cardHeight}px`}
                    borderRadius="8%"
                    p={1}
                    bg="white"
                >
                    {/* <Image
                        src={card.img}
                        h="80%"
                        w="100%"
                        objectFit="cover"
                        objectPosition="center"
                    /> */}
                    {card.img}
                    <Box
                        key={card.title}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={3}
                    >
                        <Text textStyle="label2">
                            {card.title}
                        </Text>

                    </Box>

                </Box>

            </GridItem>


        </motion.div>
    )
}

export default ActivityCard;