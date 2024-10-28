import {
  extendTheme,
  createMultiStyleConfigHelpers,
  Textarea,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const textareaoutline = defineStyle({
  border: "2px dashed", // change the appearance of the border
  borderRadius: 0,
  bg: "white",
  // remove the border radius
  fontWeight: "semibold", // change the font weight
  _hover: {
    bg: "green.50",
    borderColor: "009688",
    _dark: {
      bg: "whiteAlpha.100",
    },
  },
  _focus: {
    borderColor: "green.500",
    borderWidth: 2,
    _dark: {
      bg: "whiteAlpha.100",
    },
  },
});

const textareaTheme = defineStyleConfig({
  variants: { outline: textareaoutline },
});
// default base style from the Input theme
const baseStyle = definePartsStyle({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
});

const variantInput = definePartsStyle((props) => {
  return {
    field: {
      fontFamily: "cursive", // change font family to mono
      bg: "white",
      borderColor: "009688",
      fontsize: "large",

      _focus: {
        borderColor: "green.500",
        borderWidth: 2,
        _dark: {
          bg: "whiteAlpha.100",
        },
      },
      _hover: {
        bg: "blue.50",
        borderColor: "009688",
        _dark: {
          bg: "whiteAlpha.100",
        },
      },
    },
  };
});

const variantTextArea = definePartsStyle((props) => {
  return {
    field: {
      fontFamily: "cursive", // change font family to mono
      bg: "white",

      borderColor: "green.500",
      borderWidth: "2px",
      fontsize: "large",

      _focus: {
        borderColor: "green.500",
        borderWidth: 2,
        _dark: {
          bg: "whiteAlpha.100",
        },
      },
      _hover: {
        bg: "green.500",
        borderColor: "009688",
      },
    },
  };
});

const disabledStyles = {
  _disabled: {
    backgroundColor: "ui.light",
  },
};
const variants = {
  outline: variantInput,
  line: variantTextArea,
};
const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

const TextAreaTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    size: "md",
    variant: "textArea",
  },
});

const themeColors = {
  ui: {
    main: "#E1AA74",
    secondary: "#3876BF",
    success: "#48BB78",
    danger: "#E53E3E",
    light: "#E3ACF9",
    dark: "#1A202C",
    darkSlate: "#252D3D",
    dim: "#000000",
    bg: "#192655",
  },
};

const theme = extendTheme({
  colors: themeColors,
  components: {
    Textarea: textareaTheme,
    Input: inputTheme,
    Button: {
      variants: {
        primary: {
          backgroundColor: "ui.main",
          color: "ui.secondary",
          _hover: {
            backgroundColor: "#7EACB5",
          },
          _disabled: {
            ...disabledStyles,
            _hover: {
              ...disabledStyles,
            },
          },
        },
        danger: {
          backgroundColor: "ui.danger",
          color: "ui.light",
          _hover: {
            backgroundColor: "#E32727",
          },
        },
      },
    },
    Tabs: {
      variants: {
        enclosed: {
          tab: {
            _selected: {
              color: "ui.main",
            },
          },
        },
      },
    },
  },

  styles: {
    global: (props) => ({
      body: {
        bg: themeColors.ui.bg,
        //fontFamily: "cursive",
        fontSize: "large",
      },
    }),
  },
});

export default theme;
