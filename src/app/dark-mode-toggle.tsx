"use client";

import Toggle from "@/components/Toggle";
import BrightnessHighFillIcon from "@/icons/BrightnessHighFillIcon";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const DarkModeContext = createContext<{
  useDarkMode: boolean;
  setUseDarkMode(value: boolean): void;
}>(null as any);

export function DarkModeProvider({ children }: PropsWithChildren) {
  const [useDarkMode, setUseDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ useDarkMode, setUseDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default function DarkModeToggle() {
  const { useDarkMode, setUseDarkMode } = useContext(DarkModeContext);

  return (
    <span className="flex gap-2 items-center">
      <Toggle
        className="border-white/35"
        checked={!useDarkMode}
        onCheckedChange={(checked) => {
          setUseDarkMode(!checked);

          if (checked) {
            document.body.classList.remove("dark");
          } else {
            document.body.classList.add("dark");
          }
        }}
      />

      <BrightnessHighFillIcon className="fill-white w-5" />
    </span>
  );
}
