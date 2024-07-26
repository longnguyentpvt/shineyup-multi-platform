"use client";

import { ColorRole } from "@app/lib/type";
import { generateConfig } from "@app/lib/utils";
import { useState } from "react";

import ColorInput from "./color-input";
import ConfigOutput from "./config-output";

export default function ConfigSection(): JSX.Element {
  const [colors, setColors] = useState<Record<string, string>>({
    primary: "",
    secondary: "",
    accent: "",
    background: "",
    text: ""
  });

  const handleColorChange = (role: ColorRole, value: string): void => {
    setColors((prevColors) => ({ ...prevColors, [role]: value }));
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
      <ConfigOutput config={ generatedConfig } />
    </div>
  );
}
