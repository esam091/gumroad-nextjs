import * as React from "react";
import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return (
    <Root className={twMerge("grid gap-2", className)} {...props} ref={ref} />
  );
});
RadioGroup.displayName = Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  return (
    <Item
      ref={ref}
      className={twMerge(
        "aspect-square h-5 w-5 rounded-3 border border-black ring-offset-1 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 aria-checked:bg-pink-bold",
        className
      )}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <div className="h-3 w-3 bg-black rounded-3" />
      </Indicator>
    </Item>
  );
});
RadioGroupItem.displayName = Item.displayName;

interface RadioCardProps extends React.ComponentProps<typeof Item> {
  label?: string;
  description?: string;
  leadingDecoration?: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  selectedBackgroundColor?: "white" | "gray";
}

const RadioCardItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  RadioCardProps
>(
  (
    {
      className,
      leadingDecoration,
      label,
      description,
      orientation = "horizontal",
      selectedBackgroundColor = "gray",
      ...props
    },
    ref
  ) => {
    return (
      <Item
        ref={ref}
        {...props}
        className={twMerge(
          "gap-3 flex items-start p-4 border border-black border-solid rounded-1  transition-transform hover:enabled:-translate-x-1 hover:enabled:-translate-y-1 aria-checked:shadow-1 aria-checked:-translate-x-1 aria-checked:-translate-y-1 hover:enabled:shadow-1 active:shadow-0 active:enabled:transform-none disabled:opacity-30 disabled:cursor-not-allowed",
          orientation === "horizontal" ? "flex-row" : "flex-col",
          selectedBackgroundColor === "gray"
            ? "aria-checked:bg-gray-subtle"
            : "aria-checked:bg-white",
          className
        )}
      >
        {leadingDecoration}

        <div className="flex flex-col items-start">
          <div className="font-bold">{label}</div>
          <p className="whitespace-pre-line text-left text-sm">{description}</p>
        </div>
      </Item>
    );
  }
);

RadioCardItem.displayName = 'RadioCardItem'

interface SmallCardProps extends React.ComponentProps<typeof Item> {
  title: string;
  icon?: React.ReactNode;
  selectedBackgroundColor?: "white" | "gray";
}

const SmallCardItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  SmallCardProps
>(
  (
    { className, title, icon, selectedBackgroundColor = "gray", ...props },
    ref
  ) => {
    return (
      <Item
        ref={ref}
        {...props}
        className={twMerge(
          "gap-1 border border-solid border-black rounded-1 flex flex-col items-center w-[95px] h-[58px] justify-center transition-transform hover:enabled:-translate-x-1 hover:enabled:-translate-y-1 aria-checked:shadow-1 aria-checked:-translate-x-1 aria-checked:-translate-y-1 hover:enabled:shadow-1 active:shadow-0 active:enabled:transform-none disabled:opacity-30 disabled:cursor-not-allowed",
          selectedBackgroundColor === "gray"
            ? "aria-checked:bg-gray-subtle"
            : "aria-checked:bg-white",
          className
        )}
      >
        {icon}
        <span className="text-xs font-bold">{title}</span>
      </Item>
    );
  }
);

SmallCardItem.displayName = 'SmallCardItem'

export { RadioGroup, RadioGroupItem, RadioCardItem, SmallCardItem };
