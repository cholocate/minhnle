import React from "react";
import Layout from "@theme/Layout"; 
import {Image, Box, Text, Container, Grid, GridItem} from "@chakra-ui/react";

const WorkCard = ({ card }) => 
    {
        return (
            <Box>
                
                <Container maxW="container.lg" my="2rem" shadow='xl' background="white">
                <Box p={2}>
                    <Text textStyle="label0" fontWeight="bold"> 
                        {card.title}
                    </Text>
                        <Text textStyle="body2"> 
                            {card.description}
                        </Text>
                </Box>
                <Image src={card.imgPath} alt='GIF' height='90%' width='90%'></Image>
                
                
                </Container>
            </Box>
        )
    }

export default WorkCard; 
