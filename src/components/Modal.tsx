import { PropsWithChildren, ReactNode } from "react";
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

export interface ModalProps {
  title?: string;
  description?: ReactNode;
  size?: "regular" | "small";
  buttons?: ReactNode;
  children?: ReactNode;
  trigger?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?(open: boolean): void;
}

export default function Modal({
  trigger,
  title,
  description,
  size,
  buttons,
  children,
  defaultOpen,
  open,
  onOpenChange,
}: ModalProps) {
  return (
    <Root defaultOpen={defaultOpen} onOpenChange={onOpenChange} open={open}>
      {!!trigger && <Trigger asChild>{trigger}</Trigger>}
      <Portal>
        <Overlay className="fixed bg-black/50 inset-[0] transition-colors duration-150 ease-out" />

        <div className="fixed inset-[0] flex justify-center items-center">
          <Content
            className={twMerge(
              "bg-white p-6 shadow-2 rounded-1 min-w-[320px] flex flex-col gap-4",
              size === "small" ? "max-w-[320px]" : "max-w-[700px]"
            )}
          >
            <header className="flex items-center">
              <Title className="text-h2 flex-1">{title}</Title>
              <Close>
                <CloseIcon />
              </Close>
            </header>
            <Description>{description}</Description>

            {children}

            <div
              className={twMerge(
                "flex justify-end gap-4",
                size === "small" && "flex-col items-stretch"
              )}
            >
              {buttons}
            </div>
          </Content>
        </div>
      </Portal>
    </Root>
  );
}

function CloseButton({ children }: PropsWithChildren) {
  return <Close className="flex flex-col items-stretch">{children}</Close>
}

Modal.Close = CloseButton

function CloseIcon() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 14L13.5 5M4.5 5L13.5 14"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
