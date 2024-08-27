import { Indicator, Root } from "@radix-ui/react-checkbox";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Checkbox = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return (
    <Root
      ref={ref}
      className={twMerge(
        "w-5 h-5 border-black border-solid border rounded-2 aria-checked:bg-pink-bold flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-30",
        className
      )}
      {...props}
    >
      <Indicator>
        <CheckIcon />
      </Indicator>
    </Root>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.91669 7.58334L5.25002 9.91668L11.0834 4.08334"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
