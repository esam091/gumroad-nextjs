import { Root, Thumb } from "@radix-ui/react-switch";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Toggle = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return (
    <Root
      ref={ref}
      className={twMerge(
        "border-black border-solid border h-5 w-[42px] px-[3px] rounded-3 aria-checked:bg-pink-bold transition-colors disabled:cursor-not-allowed disabled:opacity-30",
        className
      )}
      {...props}
    >
      <Thumb className="bg-black dark:bg-white w-[18px] h-[18px] rounded-3 block data-[state=checked]:translate-x-[17px] transition-transform" />
    </Root>
  );
});

Toggle.displayName = 'Toggle'

export default Toggle;
