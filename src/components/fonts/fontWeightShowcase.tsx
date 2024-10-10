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

export default function FontWeightShowcase() {
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
            <span className="weight-label" style={{}}>
              {font.weight}
            </span>
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
        <div className="variable">Non Variable</div>
      </div>
      <style>{`
        @import url("https://fonts.cdnfonts.com/css/sporting-grotesque");

        .font-weight-showcase {
          font-family: "Sporting Grotesque", sans-serif;
          background-color: #4a0082;
          color: #ffc0cb;
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
          margin-bottom: 0.5rem;
          position: absolute;
          top: -0.5rem;
          left: 50%;
          transform: translateX(-100%) rotate(-90deg);
          transform-origin: bottom right;
        }

        .weight-line {
          width: 2px;
          height: 200px;
          background-color: #ffc0cb;
          margin-bottom: 0.5rem;
        }

        .weight-demo {
          font-size: 4rem;
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
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
