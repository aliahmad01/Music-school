"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/utils/cn";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div >
      {children}
    </div>
  );
};
