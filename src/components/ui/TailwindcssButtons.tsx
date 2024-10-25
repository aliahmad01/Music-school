"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./tailwindcss-buttons";

export function TailwindcssButtons() {
  const copy = (button: any) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    let buttonString = reactElementToJSXString(button.component);

    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };
  return (
    <div className="inline-block">
      <Toaster position="top-center" />
      <div>
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} onClick={() => copy(button)}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}
export const buttons = [
  

  {
    name: "View All Courses",
    description: "Gradient button with perfect corners",
    component: (
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px] text-xl relative group transition duration-200 text-white hover:text-black hover:bg-transparent">
        View All Courses
        </div>
      </button>
    ),
  },
 
];
