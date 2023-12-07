import React from "react";
import Layout from "@theme/Layout";
import { Image, Box, Text, Container, Grid, VStack } from "@chakra-ui/react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { motion, AnimatePresence } from "framer-motion";
import img from "../../static/img/Traffic Counting.png";
import GridCard from "../components/gridCard";
import projects from "../../data/projects";
import products from "../../data/products";
import WorkCard from "../components/workCard";

function Projects() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Projects" description="">
      <Box background="gray.700">
        <Container maxW="container.md" my="2rem" centerContent>
          <Text textStyle="header1" color="white" fontWeight="bold">
            Industrial Projects
          </Text>
          <Text textStyle="header2" color="azure">
            Deployed and on-going research projects from my work with Nautlius
            JSC.
          </Text>
        </Container>
        <VStack>
          {products.map((card) => {
            return <WorkCard card={card}></WorkCard>;
          })}
        </VStack>
        <Box>
          <Container maxW="container.lg" my="4rem">
            <Text textStyle="header1" color="white" fontWeight="medium">
              Coursework Projects
            </Text>
            <Text textStyle="header2" color="azure">
              Compilation of class projects during my undergrad.
            </Text>
            <Box py={4}>
              <Grid
                templateColumns={[
                  "repeat(1, 1fr)", // 1 column on small screens
                  "repeat(2, 1fr)", // 2 columns on medium screens
                  "repeat(3, 1fr)", // 3 columns on large screens
                ]}
                gap={20}
              >
                {projects.map((card) => {
                  return <GridCard card={card} />;
                })}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}

export default Projects;
