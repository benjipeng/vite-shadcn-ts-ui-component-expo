import { Card } from "@/components/ui/card";
import { Info, ArrowDown } from "lucide-react";

const colorData = [
  {
    name: "PALATINATE BLUE",
    bgColor: "#2A3EF4",
    textColor: "white",
    hex: "#2A3EF4",
    rgb: "42 / 62 / 244",
    cmyk: "79 / 71 / 0 / 4",
    pantone: "2728 C",
    height: "h-[400px]",
    titleSize: "text-xl",
  },
  {
    name: "WHITE BLUE",
    bgColor: "#E4E5F2",
    textColor: "black",
    hex: "#E4E5F2",
    rgb: "228 / 229 / 242",
    cmyk: "5 / 5 / 0 / 5",
    pantone: "663 C",
    height: "h-[200px]",
    titleSize: "text-xl",
  },
  {
    name: "BLACKOUT",
    bgColor: "#000000",
    textColor: "white",
    hex: "#000000",
    rgb: "0 / 0 / 0",
    cmyk: "60 / 40 / 40 / 100",
    pantone: "BLACK C",
    height: "h-[200px]",
    titleSize: "text-xl",
  },
  {
    name: "BLACK BLUE",
    bgColor: "#0E0F28",
    textColor: "white",
    hex: "#0E0F28",
    rgb: "14 / 15 / 40",
    cmyk: "10 / 80 / 0 / 84",
    pantone: "2768 C",
    height: "h-[200px]",
    titleSize: "text-xl",
  },
];

export default function ColorSystem() {
  return (
    <div className="font-sans text-sm color-system">
      <style>{`
        @import url("https://fonts.cdnfonts.com/css/bezier-sans");
        .color-system {
          font-family: "Bezier Sans", sans-serif;
        }
      `}</style>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="grid grid-cols-2 gap-0">
          {colorData.map((color, index) => (
            <Card
              key={color.name}
              className={`${
                index === 0 || index === 3 ? "col-span-2" : ""
              } text-${color.textColor} p-4 rounded-none relative ${
                color.height
              } border-0 shadow-none`}
              style={{
                backgroundColor: color.bgColor,
              }}
            >
              <h2
                className={`${color.titleSize} font-light lowercase ${
                  index === 0 ? "mb-48" : "mb-16"
                }`}
              >
                {color.name}
              </h2>
              <Info className="absolute top-4 right-4" size={24} />
              <ArrowDown className="absolute bottom-4 right-4" size={24} />
              <div className="absolute bottom-4 left-4 grid grid-cols-2 gap-x-1 text-[9px] max-w-[190px]">
                <p>HEX</p>
                <p>{color.hex}</p>
                <p>RGB</p>
                <p>{color.rgb}</p>
                <p>CMYK</p>
                <p>{color.cmyk}</p>
                <p>PANTONE</p>
                <p>{color.pantone}</p>
              </div>
            </Card>
          ))}
        </div>
        <Card className="bg-[#E4E5F2] p-8 rounded-none h-full border-0 shadow-none">
          <div className="flex justify-between items-start mb-16">
            <h2 className="text-3xl font-light">TYPEFACE</h2>
            <p className="text-xl">Bezier Sans</p>
          </div>
          <div className="mb-16 text-lg space-y-2">
            <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
            <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            <p>1234567890 &lt;&gt;?!()@#$%&*</p>
          </div>
          <div className="space-y-4">
            <p className="text-8xl font-light">Light</p>
            <p className="text-8xl font-normal">Regular</p>
            <p className="text-8xl font-medium">Medium</p>
            <p className="text-8xl font-bold text-[#2A3EF4]">Bold</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
