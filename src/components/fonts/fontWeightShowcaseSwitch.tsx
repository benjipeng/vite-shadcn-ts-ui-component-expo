import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fontWeights = [
  { weight: "Hairline", value: 100 },
  { weight: "Thin", value: 200 },
  { weight: "Light", value: 300 },
  { weight: "Regular", value: 400 },
  { weight: "Medium", value: 500 },
  { weight: "SemiBold", value: 600 },
  { weight: "Bold", value: 700 },
  { weight: "ExtraBold", value: 800 },
  { weight: "Black", value: 900 },
];

export default function FontWeightShowcaseSwitch() {
  const [isItalic, setIsItalic] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsItalic((prev) => !prev);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    normal: {
      backgroundColor: "#4a0082",
      color: "#ffc0cb",
      transition: { duration: 0.5 },
    },
    italic: {
      backgroundColor: "#ffc0cb",
      color: "#4a0082",
      transition: { duration: 0.5 },
    },
  };

  const labelVariants = {
    normal: {
      rotate: -90,
      x: "-50%",
      y: 0,
      transformOrigin: "bottom right",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    pushOut: {
      rotate: -100,
      x: "calc(-50% - 1em)",
      y: "-10%",
      transition: { duration: 0.1 },
    },
    italic: {
      rotate: -75,
      x: "calc(-50% + 5em)",
      y: "0%",
      transformOrigin: "bottom right",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 500,
        damping: 20,
      },
    },
  };

  const lineVariants = {
    normal: {
      rotate: 0,
      width: "1px",
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    pushOut: {
      rotate: 25,
      width: "1px",
      x: "20px",
      transition: { duration: 0.1 },
    },
    italic: {
      rotate: 15,
      width: "1px",
      x: "35px",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const demoVariants = {
    normal: {
      fontSize: "5rem",
      fontStyle: "normal",
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    pushOut: {
      fontSize: "6rem",
      fontStyle: "italic",
      rotate: 5,
      transition: { duration: 0.2 },
    },
    italic: {
      fontSize: "5rem",
      fontStyle: "italic",
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  // Add a new variant for the outer container
  const outerContainerVariants = {
    normal: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    italic: {
      x: 10,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      animate={isItalic ? "italic" : "normal"}
      className="font-weight-showcase"
    >
      <motion.div
        variants={outerContainerVariants}
        animate={isItalic ? "italic" : "normal"}
      >
        <div className="weight-container">
          {fontWeights.map((font, index) => (
            <div key={font.weight} className="weight-item">
              <motion.span
                className="weight-label"
                variants={labelVariants}
                animate={
                  isItalic ? ["pushOut", "italic"] : ["pushOut", "normal"]
                }
                transition={{ duration: 0.4 }}
              >
                {font.weight}
              </motion.span>
              <motion.div
                className="weight-line"
                variants={lineVariants}
                animate={
                  isItalic ? ["pushOut", "italic"] : ["pushOut", "normal"]
                }
                transition={{ duration: 0.4 }}
              ></motion.div>
              <motion.span
                className="weight-demo"
                style={{ fontWeight: font.value }}
                variants={demoVariants}
                animate={
                  isItalic ? ["pushOut", "italic"] : ["pushOut", "normal"]
                }
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                f
              </motion.span>
            </div>
          ))}
        </div>
        <div className="info">
          <div>Limited styles yet Stylish / Sporting Grotesque Font Family</div>
          <br />
          <div className="variable">{isItalic ? "Italic" : "Non Variable"}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const styles = `
  @import url("https://fonts.cdnfonts.com/css/sporting-grotesque");

  .font-weight-showcase {
    font-family: "Sporting Grotesque", sans-serif;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .weight-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    padding-top: 6rem;
  }

  .weight-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: end;
    position: relative;
  }

  .weight-label {
    font-size: 0.8rem;
    position: absolute;
    top: -1rem;
    white-space: nowrap;
    transform-origin: bottom right;
  }

  .weight-line {
    height: 200px;
    margin-bottom: 0.5rem;
    background-color: currentColor;
  }

  .weight-demo {
    line-height: 1;
  }

  .info {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .variable {
    font-style: italic;
  }

  @media (max-width: 768px) {
    .weight-container {
      flex-direction: column;
    }

    .weight-item {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    .weight-label {
      font-size: 1rem;
      margin-bottom: 0;
    }

    .weight-demo {
      font-size: 3rem !important;
    }
  }
`;

FontWeightShowcaseSwitch.styles = styles;
