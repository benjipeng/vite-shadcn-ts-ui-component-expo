import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isItalic ? "italic" : "normal"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`font-weight-showcase ${isItalic ? "italic" : "normal"}`}
      >
        <div className="weight-container">
          {fontWeights.map((font, index) => (
            <motion.div
              key={font.weight}
              className="weight-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <span className="weight-label">{font.weight}</span>
              <div className="weight-line"></div>
              <span className="weight-demo" style={{ fontWeight: font.value }}>
                f
              </span>
            </motion.div>
          ))}
        </div>
        <div className="info">
          <div>Limited styles yet Stylish / Sporting Grotesque Font Family</div>
          <br />
          <div className="variable">{isItalic ? "Italic" : "Non Variable"}</div>
        </div>
      </motion.div>
    </AnimatePresence>
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
    transition: all 1s ease-in-out;
  }

  .font-weight-showcase.normal {
    background-color: #4a0082;
    color: #ffc0cb;
  }

  .font-weight-showcase.italic {
    background-color: #ffc0cb;
    color: #4a0082;
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
    text-align: center;
    position: relative;
  }

  .weight-label {
    font-size: 0.8rem;
    position: absolute;
    top: -1rem;
    white-space: nowrap;
  }

  .normal .weight-label {
    transform: rotate(-90deg) translatey(0%) translatex(-50%);
    transform-origin: bottom;
  }

  .italic .weight-label {
    transform: rotate(-75deg) translatey(250%) translatex(-50%);
    transform-origin: bottom;
  }

  .weight-line {
    width: 2px;
    height: 200px;
    margin-bottom: 0.5rem;
    transition: all 1s ease-in-out;
  }

  .normal .weight-line {
    background-color: #ffc0cb;
  }

  .italic .weight-line {
    background-color: #4a0082;
    transform: rotate(15deg);
    transform-origin: bottom right;
  }

  .weight-demo {
    font-size: 5rem;
    line-height: 1;
    transition: all 1s ease-in-out;
  }

  .italic .weight-demo {
    font-size: 5rem;
    font-style: italic;
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
      font-size: 3rem;
    }

    .italic .weight-demo {
      font-size: 3rem;
    }
  }
`;

FontWeightShowcaseSwitch.styles = styles;
