import React from "react";
import textStyles from "./textStyles";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        body: "Poppins, system-ui, sans-serif", // Specify the font family for body text
      },
    textStyles, 
    components: {
        Box : { 
            baseStyle : {
                borderWidth: 0,
                borderRadius: 0,
            },  
        },
        Link : {
            variants : {
                button: { 
                    w: "fit-content",
                    _hover: {
                        textDecoration:"none", 
                    },
                },
            },
        },
        Button : { 
            baseStyle : {
                border: "none",
                cursor: "pointer", 
                color: "white", 
                _focus: { 
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                },
            },
        },
    },
});

const Root = ({ children }) => {
    return (
      <ChakraProvider resetCSS={false} theme={theme}>
        {children}
      </ChakraProvider>
    );
  };
  
  export default Root;