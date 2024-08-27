import { ReactNode } from "react";
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
  TooltipContentProps,
} from "@radix-ui/react-tooltip";

export interface TooltipProps {
  trigger: ReactNode;
  children?: ReactNode;
  side?: TooltipContentProps["side"];
}

export default function Tooltip({
  trigger,
  children,
  side = "top",
}: TooltipProps) {
  return (
    <Provider delayDuration={0}>
      <Root>
        <Trigger asChild>{trigger}</Trigger>

        <Portal>
          <Content
            sideOffset={4}
            className="max-w-[160px] text-white bg-black p-3 rounded-1 text-sm"
            side={side}
          >
            {children} <Arrow />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
}
