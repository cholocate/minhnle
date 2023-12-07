import React from "react";
import Layout from "@theme/Layout"; 
import {Image, Box, Text, Container, Grid, GridItem} from "@chakra-ui/react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { motion, AnimatePresence } from "framer-motion";

function Coursework () {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title="Coursework"
        description="">
            <Container maxW="container.md" my="6rem">
                <Box> 
                    <Text textStyle="subtitle1" fontWeight="bold"> 
                        Academic Coursework
                    </Text>
                    <Text>
                        Undergraduate Listing
                    </Text>
                </Box>
                <Grid templateColumns='repeat(3,1fr)' gap={10}>
                    <GridItem w='100%' h='200px' bg='blackAlpha.100' borderRadius='5%'></GridItem>
                    <GridItem w='100%' h='200px' bg='blackAlpha.100' borderRadius='5%'></GridItem>
                    <GridItem w='100%' h='200px' bg='blackAlpha.100' borderRadius='5%'></GridItem>
                    <GridItem w='100%' h='200px' bg='blackAlpha.100' borderRadius='5%'></GridItem>
                      </Grid>
            </Container>
        </Layout>
    )
};

export default Coursework;