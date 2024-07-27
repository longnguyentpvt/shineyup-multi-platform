"use client";

import { ColorRole } from "@app/lib/type";
import { ChangeEvent } from "react";

import { Input } from "./ui/input";

interface ColorInputProps {
  role: ColorRole;
  value: string;
  onChange: (role: ColorRole, value: string) => void;
}

export default function ColorInput({ role, value, onChange }: ColorInputProps): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(role, e.target.value);
  };

  return (
    <div>
      <label htmlFor={ role } className="block text-sm font-medium text-primary mb-1 capitalize">
        { role }
      </label>
      <div className="flex items-center">
        <input
          type="color"
          id={ role }
          name={ role }
          value={ value }
          onChange={ handleChange }
          className="h-8 w-8 mr-2" />
        <Input
          type="text"
          value={ value }
          onChange={ handleChange }
          placeholder="#000000" />
      </div>
    </div>
  );
}
