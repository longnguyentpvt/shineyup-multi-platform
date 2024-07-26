import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function generateConfig(colors: Record<string, string>): string {
  const config = `
    module.exports = {
      theme: {
        extend: {
          colors: {
            ${ Object.keys(colors).map((role) => `${ role }: '${ colors[role] }'`).join(",\n\t\t\t")
},
        },
      },
      plugins: [],
    }
`;

  return config.trim();
}
