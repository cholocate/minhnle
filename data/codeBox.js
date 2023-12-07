import { Box, Code } from "@chakra-ui/react";
import React from "react";

function CodeBox() {
  const boxStyle = {
    backgroundColor: "transparent",
  };

  return (
    <Box p={4} borderRadius="sm" borderColor="transparent"  >
      {/* <Code as="code" whiteSpace="pre" display="block" style={boxStyle} color="azure">
        {`
                                        ========== COMPUTER VISION JOURNEY: BUGS COMPILATION VERSION ==========
                                        0x00 - numpy wheel BuildError 
                                        FIX - --no-deps
                                        0x01 - libmxnet.dll FileNotFoundError
                                        FIX - SSH 
                                        0x02 - out of space memory 
                                        FIX - Container Image
                                        0x03 - dataset import 
                                        FIX - Mount Dataset to Container Img 
                                        0x04 - extracting Data.rar from SCP'ed data 
                                        FIX - apt-get install in Container 
                                        0x05 - CUDA devices & Mxnet
                                        FIX - Remove CUDA devices as Container does not have that much. 
                                        ------ GET FAMILIARIZE WITH PYTORCH AND DISREGARD MXNET ------ 
                                        0x06 - Training file directory doesn't match (Face-1MB...) 
                                        FIX - Debug wider_face.py (init) 
                                        0x07 - ONNX to NCNNc conversion 
                                        FIX - Disregard, ONNX and NCNN is android stuff
                                        0x08 - MXNET out of memory GPU error 
                                        FIX [TEMP] - Pytorch + Resnet Backbone from Retina
                                        0x09 - Redirecting cached resnet50 
                                        FIX - Manually downloading resnet50 and inserting directly into dir 
                                        0x0a - Training with proper AR and AP
                                        PASS 
                                        0x0b - Training multiple datasets with proper AR and AP 
                                        FIX - Miss-matching JSON 
                                        0x0c - Investigation of low AR and AP 
                                        TEMP FIX - Potentially too much variant in combined dataset.
                                        BUG - 02 Dataset is shit. 
                                        0x0d - Training multiple datasets with proper AR and AP 
        `}
      </Code> */}
    </Box>
  );
}

export default CodeBox;
