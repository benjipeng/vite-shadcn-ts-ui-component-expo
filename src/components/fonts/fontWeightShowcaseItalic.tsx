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

export default function FontWeightShowcaseItalic() {
  return (
    <div className="font-weight-showcase">
      <div className="weight-container">
        {fontWeights.map((font, index) => (
          <motion.div
            key={font.weight}
            className="weight-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
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
        <div className="variable">Italic</div>
      </div>
      <style>{`
        @import url("https://fonts.cdnfonts.com/css/sporting-grotesque");

        .font-weight-showcase {
          font-family: "Sporting Grotesque", sans-serif;
          background-color: #ffc0cb;
          color: #4a0082;
          padding: 2rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .weight-container {
          display: flex;
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
          transform: rotate(-75deg) translatey(300%) translatex(-50%);
          transform-origin: bottom;
          white-space: nowrap;
        }

        .weight-line {
          width: 1px;
          height: 200px;
          background-color: #4a0082;
          margin-bottom: 0rem;
          transform: rotate(15deg);
          transform-origin: bottom right;
        }

        .weight-demo {
          font-size: 6rem;
          line-height: 1;
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
            flex-wrap: wrap;
            gap: 1rem;
          }

          .weight-item {
            width: calc(33.33% - 1rem);
          }

          .weight-label {
            font-size: 0.7rem;
            top: -3rem;
          }

          .weight-line {
            height: 100px;
          }

          .weight-demo {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
