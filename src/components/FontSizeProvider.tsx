"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type FontSize = "text-size-normal" | "text-size-large" | "text-size-xl";

const FontSizeContext = createContext<{
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}>({
  fontSize: "text-size-normal",
  setFontSize: () => {},
});

export function useFontSize() {
  return useContext(FontSizeContext);
}

export default function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>("text-size-normal");

  const handleFontSizeChange = useCallback((size: FontSize) => {
    setFontSize(size);
    document.documentElement.className = document.documentElement.className
      .replace(/text-size-\w+/g, "")
      .trim() + " " + size;
  }, []);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize: handleFontSizeChange }}>
      {children}
    </FontSizeContext.Provider>
  );
}
