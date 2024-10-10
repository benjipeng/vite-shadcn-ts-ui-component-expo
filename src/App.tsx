import NavigationBar from "./components/navigationBar";
import GridLayout from "./components/layouts/GridLayout";
import IntegratedGlassEffectParallaxHero from "./components/animation/integratedGlassEffectParallaxHero";
import FontWeightShowcaseSwitch from "./components/fonts/fontWeightShowcaseSwitch";
import ColorSystem from "./components/colors/colorSystem";
import "./App.css";

// Placeholder components for demonstration
const Placeholder = ({
  text,
  height = "h-40",
}: {
  text: string;
  height?: string;
}) => (
  <div
    className={`${height} flex items-center justify-center bg-muted text-muted-foreground`}
  >
    {text}
  </div>
);

function App() {
  const gridItems = [
    {
      title: "Glass Effect Parallax Hero",
      content: <Placeholder text="Glass Effect Parallax Hero" />,
      component: <IntegratedGlassEffectParallaxHero />,
    },
    {
      title: "Font Weight Showcase",
      content: <Placeholder text="Font Weight Showcase" />,
      component: <FontWeightShowcaseSwitch />,
    },
    {
      title: "Color System",
      content: <Placeholder text="Color System" />,
      component: <ColorSystem />,
    },
    // ... other items
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationBar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">UI Component Showcase</h1>
        <GridLayout items={gridItems} />
      </main>
      <style>{FontWeightShowcaseSwitch.styles}</style>
    </div>
  );
}

export default App;
