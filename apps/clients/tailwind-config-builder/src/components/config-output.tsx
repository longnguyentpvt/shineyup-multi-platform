"use client";

import { useState } from "react";

import { Button } from "./ui/button";

interface ConfigOutputProps {
  config: string;
}

export default function ConfigOutput({ config }: ConfigOutputProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(config);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-accent">Generated Config</h2>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        <code>{ config }</code>
      </pre>
      <Button
        onClick={ handleCopy }
        className="mt-4 px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-md
        focus:outline-none focus:ring-2 focus:ring-accent-hover focus:ring-offset-2">
        { copied ? "Copied!" : "Copy to Clipboard" }
      </Button>
    </div>
  );
}
