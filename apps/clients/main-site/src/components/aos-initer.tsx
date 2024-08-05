"use client";

import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

const AosIniter: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <span />;
};

export default AosIniter;
