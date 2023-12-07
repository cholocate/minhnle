    import React, { useState } from "react";
    import Layout from "@theme/Layout";
    import {Box, Text, Container} from "@chakra-ui/react";
    import {List, ListItem, UnorderedList} from "@chakra-ui/react"; 
    import { useLocation } from "react-router-dom";
    import { useInView } from "react-intersection-observer"; // Import useInView hook
    import { motion } from "framer-motion"; // Import motion from Framer Motion

    const RelevantCoursework = () => {
        return (
            // <Box my="-2rem">
            //     <Container display="flex" maxW="container.sm"> 
                <Box mt="-2rem">
                <Text textStyle="subtitle3" color="white" fontWeight="medium" fontStyle="italic">
                        Coursework
                    </Text>
                    <Text textStyle="label3" color="azure" fontWeight="bold"> 
                        Computer Science
                    </Text>
                <Container display="flex" maxW="container.sm">
                <UnorderedList spacing={2} styleType="none">
                    <style>{`
                        li::before {
                        content: ""; 
                        display: inline-block; 
                        width: 6px; 
                        height: 6px; 
                        border: 1px solid white; 
                        border-radius: 50%; 
                        margin-right: 8px;
                        }
                    `}</style>                
        <ListItem textStyle="label3" color="white"> 
        Structure and Interpretation of Computer Programs (CS 61A)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Data Structures (CS 61B)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Machine Structures (CS 61C)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Discrete Mathematics and Probability Theory (CS 70)                            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Computer Security (CS 161)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Operating Systems (CS 162)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Efficient Algorithms and Intractable Problems (CS 170)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Introduction to Database Systems (CS 186)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Introduction to Machine Learning (CS 189)
            </ListItem>
        </UnorderedList>
                </Container>
            <Text textStyle="label3" color="azure" fontWeight="bold"> 
                Electrical Engineering & Computer Science
            </Text>
            <Container display="flex" maxW="container.sm">
                <UnorderedList spacing={2} styleType="none">
                    <style>{`
                        li::before {
                        content: ""; 
                        display: inline-block; 
                        width: 6px; 
                        height: 6px; 
                        border: 1px solid white; 
                        border-radius: 50%; 
                        margin-right: 8px;
                        }
                    `}</style>                
            <ListItem textStyle="label3" color="white"> 
            Probability and Random Processes (EECS 126)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Optimization Models in Engineering (EECS 127)
            </ListItem>
        </UnorderedList>
                </Container>
                <Text textStyle="label3" color="azure" fontWeight="bold"> 
                Data Science
            </Text>
            <Container display="flex" maxW="container.sm">
                <UnorderedList spacing={2} styleType="none">
                    <style>{`
                        li::before {
                        content: ""; 
                        display: inline-block; 
                        width: 6px; 
                        height: 6px; 
                        border: 1px solid white; 
                        border-radius: 50%; 
                        margin-right: 8px;
                        }
                    `}</style>                
            <ListItem textStyle="label3" color="white"> 
            Foundations of Data Science (Data 8)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Principles and Techniques of Data Science (Data 100)
            </ListItem>
        </UnorderedList>
                </Container>
                <Text textStyle="label3" color="azure" fontWeight="bold"> 
                Supplementary Courses 
            </Text>
            <Container display="flex" maxW="container.sm">
                <UnorderedList spacing={2} styleType="none">
                    <style>{`
                        li::before {
                        content: ""; 
                        display: inline-block; 
                        width: 6px; 
                        height: 6px; 
                        border: 1px solid white; 
                        border-radius: 50%; 
                        margin-right: 8px;
                        }
                    `}</style>                
            <ListItem textStyle="label3" color="white"> 
            Introduction to Full-Stack Development (CS 198)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Codebreaking (CS 198)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Thermodynamics (MECENG 40)
            </ListItem>
            <ListItem textStyle="label3" color="white"> 
            Solid Mechanics (MECENG 70)
            </ListItem>

        </UnorderedList>
                </Container>
            </Box>
        )
    };

    export default RelevantCoursework;
