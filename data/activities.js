import chess from "../static/img/chess-knight-solid.svg";
import docker from "../static/img/docker.svg";
import gym from "../static/img/dumbbell-solid.svg";
import glasses from "../static/img/glasses-solid.svg";
import cv from "../static/img/eye-solid.svg";
import prob from "../static/img/p-solid.svg";
import cook from "../static/img/utensils-solid.svg";
import work from "../static/img/briefcase-solid.svg";
import research from "../static/img/arxiv-logomark-small.svg";
import { Icon } from "@chakra-ui/react";
import React from "react"
import arxiv from "../static/img/arxiv.svg"





const activities = [
    {
        title: "Chess",
        img: <Icon as={chess} p={3} h="80%" w="100%" objectFit="cover" objectPosition="center"/>, 
    },
    {
        title: "Reading",
        img: <Icon as={glasses} p={3} h="80%" w="100%" objectFit="cover" objectPosition="center"/>, 
    },
    {
        title: "Gym",
        img: <Icon as={gym} p={3} h="80%" w="100%" objectFit="cover" objectPosition="center"/>, 
    },
    {
        title: "Cooking",
        img: <Icon as={cook} p={3} h="80%" w="100%" objectFit="cover" objectPosition="center"/>, 
    },
    {
        title: "Research",
        img: <Icon as={arxiv} p={3} h="80%" w="100%" objectFit="cover" objectPosition="center"/>, 
    },
    {
        title: "Working",
        img: <Icon as={work} p={3} h="80%" w="100%" objectFit="cover" objectPosition="center"/>, 
    },
]

export default activities; 