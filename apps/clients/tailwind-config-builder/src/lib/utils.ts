import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { ColorRole } from "./type";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function generateConfig(colors: Record<ColorRole, string>): string {
  const config = `
    module.exports = {
      theme: {
        extend: {
          colors: {
            ${ Object.keys(colors).map((role) => `${ role }: '${ colors[role as ColorRole] }'`).join(",\n\t\t\t")
},
        },
      }
    }
`;

  return config.trim();
}
