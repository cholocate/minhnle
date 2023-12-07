// import gitlet.svd from ...; 
// import react.svd from...; 
import nphard from "../static/img/np-hard.png"
import gitlet from "../static/img/gitlet.png"
import filesharing from "../static/img/filesharing.png"
import pintos from "../static/img/processes.png" 
import cpu from "../static/img/circuit.jpg"
import acid from "../static/img/concept-acid.png"
import numc from "../static/img/matrix.png"
import neural from "../static/img/neural.png"

import c from "../static/img/C.svg"
import go from "../static/img/go.svg"
import java from "../static/img/java.svg"
import numpy from "../static/img/numpy.svg"
import python from "../static/img/python.svg"
import react from "../static/img/react.svg"
import logisim from "../static/img/Logisim.svg"
import React from "react"

import { Icon } from "@chakra-ui/react";
import { FaJava, FaPython } from "react-icons/fa";


const projects = [
    {
        title: "Secure File System",
        imgPath : filesharing,
        languages: [["Go", <Icon as={go} />], ["Python", <Icon as={FaPython} />]],
        description: "File Sharing System with Cryptographic Primitives",
        redirect: "https://sp23.cs161.org/proj2/"
    },
    {
        title: "Pintos",
        imgPath : pintos,
        languages: [["C", <Icon as={c} />]],
        description: "Implementation of Pintos Operating System from scratch",
        redirect: "https://inst.eecs.berkeley.edu/~cs162/su22/static/proj/"
    },
    {
        title: "RookieDB",
        imgPath : acid,
        languages: [["Java", <Icon as={FaJava} />]],
        description: "Barebone Database System with ACID properties and support Recovery",
        redirect: "https://cs186.gitbook.io/project/"
    },
    {
        title: "RISC-V CPU",
        imgPath : cpu,
        languages: [["Logisim", <Icon as={logisim}/>]],
        description: "Design and Implementation of RISC-V with Logism",
        redirect: "https://inst.eecs.berkeley.edu/~cs61c/su22/projects/proj3/"
    },
    {
        title: "NumC",
        imgPath : numc,
        languages: [["C", <Icon as={c} />], ["Python", <Icon as={FaPython} />]],
        description: "Optimizing matrix operations with SIMD, OpenMP, and caching techniques.",
        redirect: "https://inst.eecs.berkeley.edu/~cs61c/su22/projects/proj4/"
    },
    {
        title: "Neural Network",
        imgPath : neural,
        languages: [["Numpy", <Icon as={numpy} />],["Python", <Icon as={FaPython} />]],
        description: "Implementation of fully-functional Neural Network from scratch. ",
        redirect: "https://people.eecs.berkeley.edu/~jrs/189/hw/hw6.pdf"
    },
    {
        title: "NPenguin",
        imgPath: nphard,
        languages: [["Numpy", <Icon as={numpy} />],["Python", <Icon as={FaPython} />]],
        description: "NP-Complete Algorithm for Graph Clustering",
        redirect: "https://github.com/Berkeley-CS170/project-sp22-skeleton"
    }, 
    {
        title: "Gitlet",
        imgPath : gitlet,
        languages: [["Java", <Icon as={FaJava} />]],
        description: "Pocket Version Control System Git Clone",
        redirect: "https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj3/index.html"
    }
]
export default projects; 