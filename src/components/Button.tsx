import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { buttonVariants } from "./buttonVariants";

export interface ButtonProps
  extends Omit<ComponentProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant,
    className,
    size,
    label,
    leftIcon,
    rightIcon,
    ...props
  }: ButtonProps,
  ref
) {
  return (
    <button
      ref={ref}
      className={twMerge(
        buttonVariants({ variant, size }),
        className,
        size === "regular" && !label && "py-4" // give a square shape when there's no title
      )}
      {...props}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
