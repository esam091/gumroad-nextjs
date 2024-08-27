import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const pillVariants = cva("cursor-default inline-flex gap-2 items-center", {
  variants: {
    variant: {
      primary: "bg-black text-white",
      secondary: "border border-black border-solid text-black bg-white",
      link: "border border-[transparent] hover:border-black border-solid",
    },
    size: {
      regular: "px-3 py-2 rounded-3 text-sm min-h-[36px]",
      small: "text-xs p-1 rounded-1",
    },
  },
  defaultVariants: {
    size: "regular",
    variant: "primary",
  },
});

export interface PillProps extends VariantProps<typeof pillVariants> {
  label: string;
  className?: string;
  rightIcon?: ReactNode
}

export default function Pill({ variant, size, label, className, rightIcon, ...props }: PillProps) {
  return (
    <span className={twMerge(pillVariants({ variant, size }), className)} {...props}>
      {label}
      {rightIcon}
    </span>
  );
}
