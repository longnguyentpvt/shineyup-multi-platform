"use client";

import { ColorRole } from "@app/lib/type";
import { generateConfig } from "@app/lib/utils";
import { useState } from "react";

import ColorInput from "./color-input";
import ConfigOutput from "./config-output";
import ConfigShowcase from "./config-showcase";

const DEFAULT_COLORS: Record<ColorRole, string> = {
  primary: "#2b2d3e",
  secondary: "#939185",
  background: "#f1f1f1",
  accent: "#d4a593"
};

export default function ConfigSection(): JSX.Element {
  const [prevColors, setPrevColors] = useState<Record<ColorRole, string>>(DEFAULT_COLORS);
  const [colors, setColors] = useState<Record<ColorRole, string>>(DEFAULT_COLORS);

  const handleColorChange = (role: ColorRole, value: string): void => {
    setColors((prevState) => {
      setPrevColors(prevState);
      return { ...prevState, [role]: value };
    });
  };

  const generatedConfig = generateConfig(colors);

  return (
    <div className="w-full mx-auto ">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-accent">Color Inputs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          { Object.entries(colors).map(([role, value]) => (
            <ColorInput
              key={ role }
              role={ role as ColorRole }
              value={ value }
              onChange={ handleColorChange } />
          )) }
        </div>
      </div>
      <div>
        <ConfigShowcase prevColors={ prevColors } colors={ colors } />
      </div>
      <div>
        <ConfigOutput config={ generatedConfig } />
      </div>
    </div>
  );
}
