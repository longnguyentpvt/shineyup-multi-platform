"use client";

import { ColorRole } from "@app/lib/type";
import { ChangeEvent } from "react";

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
          className="h-8 w-8 rounded-md border-primary mr-2" />
        <input
          type="text"
          value={ value }
          onChange={ handleChange }
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300
          shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="#000000" />
      </div>
    </div>
  );
}
