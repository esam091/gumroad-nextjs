import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import giftIcon from "./gift.png";
import promoIcon from "./promo.png";
import Button from "./Button";
import Image from 'next/image'

const alertVariants = cva(
  "border-solid border p-3 rounded-1 flex  items-center",
  {
    variants: {
      variant: {
        normal: "border-black gap-2",
        success: "border-green-bold bg-green-subtle gap-2",
        danger: "border-red-bold bg-red-subtle gap-2",
        warning: "border-gold-bold bg-gold-subtle gap-2",
        info: "border-purple-bold bg-purple-subtle gap-2",
        gift: "border-pink-bold bg-pink-subtle gap-3",
        promo: "border-pink-bold bg-pink-subtle gap-3",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  }
);

export interface AlertProps
  extends VariantProps<typeof alertVariants>,
    ComponentProps<"div"> {
  closable?: boolean;
  buttons?: {
    title: string;
    onClick?(): void;
    variant: "primary" | "secondary";
  }[];
}

export default function Alert({
  closable = false,
  className,
  variant,
  children,
  buttons = [],
  ...props
}: AlertProps) {
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) {
    return null;
  }

  const icon =
    variant === "success" ? (
      <SuccessIcon />
    ) : variant === "danger" ? (
      <DangerIcon />
    ) : variant === "warning" ? (
      <WarningIcon />
    ) : variant === "info" ? (
      <InformationIcon />
    ) : variant === "gift" ? (
      <Image src={giftIcon} className="w-[40px]" alt="Gift icon" />
    ) : variant === "promo" ? (
      <Image src={promoIcon} className="w-[40px]" alt="Promo icon" />
    ) : (
      <NormalIcon />
    );

  return (
    <div className={twMerge(alertVariants({ variant }), className)} {...props}>
      <span className="min-h-5 flex items-center self-start">{icon}</span>{" "}
      <div className="flex-1">
        {children}
        {!!buttons.length && (
          <div className="mt-3 gap-2 flex">
            {buttons.map((button, index) => (
              <Button
                size="small"
                variant={button.variant}
                label={button.title}
                key={index}
                onClick={button.onClick}
              />
            ))}
          </div>
        )}
      </div>
      {closable && (
        <button className="underline" onClick={() => setIsClosed(true)}>
          close
        </button>
      )}
    </div>
  );
}

function NormalIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99999 16.2C12.9764 16.2 16.2 12.9764 16.2 8.99999C16.2 5.02354 12.9764 1.79999 8.99999 1.79999C5.02354 1.79999 1.79999 5.02354 1.79999 8.99999C1.79999 12.9764 5.02354 16.2 8.99999 16.2ZM12.3364 7.83638C12.6879 7.48491 12.6879 6.91506 12.3364 6.56359C11.9849 6.21212 11.4151 6.21212 11.0636 6.56359L8.09999 9.52719L6.93638 8.36359C6.58491 8.01212 6.01506 8.01212 5.66359 8.36359C5.31212 8.71506 5.31212 9.28491 5.66359 9.63638L7.46359 11.4364C7.81506 11.7879 8.38491 11.7879 8.73638 11.4364L12.3364 7.83638Z"
        fill="black"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99999 16.2C12.9764 16.2 16.2 12.9765 16.2 9.00005C16.2 5.0236 12.9764 1.80005 8.99999 1.80005C5.02354 1.80005 1.79999 5.0236 1.79999 9.00005C1.79999 12.9765 5.02354 16.2 8.99999 16.2ZM12.3364 7.83644C12.6879 7.48497 12.6879 6.91512 12.3364 6.56365C11.9849 6.21218 11.4151 6.21218 11.0636 6.56365L8.09999 9.52726L6.93638 8.36365C6.58491 8.01218 6.01506 8.01218 5.66359 8.36365C5.31212 8.71512 5.31212 9.28497 5.66359 9.63644L7.46359 11.4364C7.81506 11.7879 8.38491 11.7879 8.73638 11.4364L12.3364 7.83644Z"
        fill="#23A094"
      />
    </svg>
  );
}

function DangerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99999 16.2C12.9764 16.2 16.2 12.9765 16.2 9.00005C16.2 5.0236 12.9764 1.80005 8.99999 1.80005C5.02354 1.80005 1.79999 5.0236 1.79999 9.00005C1.79999 12.9765 5.02354 16.2 8.99999 16.2ZM7.83638 6.56365C7.48491 6.21218 6.91506 6.21218 6.56359 6.56365C6.21212 6.91512 6.21212 7.48497 6.56359 7.83644L7.72719 9.00005L6.56359 10.1637C6.21212 10.5151 6.21212 11.085 6.56359 11.4364C6.91506 11.7879 7.48491 11.7879 7.83638 11.4364L8.99999 10.2728L10.1636 11.4364C10.5151 11.7879 11.0849 11.7879 11.4364 11.4364C11.7879 11.085 11.7879 10.5151 11.4364 10.1637L10.2728 9.00005L11.4364 7.83644C11.7879 7.48497 11.7879 6.91512 11.4364 6.56365C11.0849 6.21218 10.5151 6.21218 10.1636 6.56365L8.99999 7.72726L7.83638 6.56365Z"
        fill="#DC341E"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99999 1.75C7.12374 3.42929 4.65692 4.46227 1.94948 4.499C1.85117 5.0847 1.79999 5.68638 1.79999 6.30002C1.79999 11.0024 4.8053 15.0028 8.99999 16.4854C13.1947 15.0028 16.2 11.0024 16.2 6.30002C16.2 5.68638 16.1488 5.0847 16.0505 4.499C13.3431 4.46227 10.8762 3.42929 8.99999 1.75ZM9.89999 12.6C9.89999 13.097 9.49704 13.5 8.99999 13.5C8.50293 13.5 8.09999 13.097 8.09999 12.6C8.09999 12.1029 8.50293 11.7 8.99999 11.7C9.49704 11.7 9.89999 12.1029 9.89999 12.6ZM9.89999 6.29999C9.89999 5.80293 9.49704 5.39999 8.99999 5.39999C8.50293 5.39999 8.09999 5.80293 8.09999 6.29999V8.99999C8.09999 9.49704 8.50293 9.89999 8.99999 9.89999C9.49704 9.89999 9.89999 9.49704 9.89999 8.99999V6.29999Z"
        fill="#FFC900"
      />
    </svg>
  );
}

function InformationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99921 1.51062C4.85711 1.51062 1.49921 4.86838 1.49921 9.01064C1.49921 13.1529 4.85711 16.5107 8.99921 16.5107C13.1413 16.5107 16.4992 13.1529 16.4992 9.01064C16.4992 4.86838 13.1413 1.51062 8.99921 1.51062ZM8.99921 5.26063C9.41343 5.26063 9.74921 5.59663 9.74921 6.01063C9.74921 6.42463 9.41343 6.76063 8.99921 6.76063C8.58498 6.76063 8.24921 6.42463 8.24921 6.01063C8.24921 5.59663 8.58498 5.26063 8.99921 5.26063ZM8.99921 7.51064C9.41343 7.51064 9.74921 7.84664 9.74921 8.26064V12.0106C9.74921 12.4246 9.41343 12.7606 8.99921 12.7606C8.58498 12.7606 8.24921 12.4246 8.24921 12.0106V8.26064C8.24921 7.84664 8.58498 7.51064 8.99921 7.51064Z"
        fill="#90A8ED"
      />
    </svg>
  );
}
