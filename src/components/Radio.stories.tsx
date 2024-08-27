import type { Meta, StoryObj } from "@storybook/react";

import {
  RadioGroupItem,
  RadioGroup,
  RadioCardItem,
  SmallCardItem,
} from "./Radio";
import Pill from "./Pill";

interface CustomProp {
  disabled: boolean;
}

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
  render({ disabled }) {
    return (
      <RadioGroup disabled={disabled}>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="economy" id="economy" className="peer" />
          <label
            htmlFor="economy"
            className="peer-disabled:opacity-30 peer-disabled:cursor-not-allowed"
          >
            Economy
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="business" id="business" className="peer" />
          <label
            htmlFor="business"
            className="peer-disabled:opacity-30 peer-disabled:cursor-not-allowed"
          >
            Business
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="first" id="first" className="peer" />
          <label
            htmlFor="first"
            className="peer-disabled:opacity-30 peer-disabled:cursor-not-allowed"
          >
            First
          </label>
        </div>
      </RadioGroup>
    );
  },
} satisfies Meta<CustomProp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

interface CardStoryProps {
  orientation: "horizontal" | "vertical";
  selectionBackground: "gray" | "white";
  disabled: boolean;
}

export const Card: StoryObj<Meta<CardStoryProps>> = {
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    selectionBackground: {
      control: "radio",
      options: ["gray", "white"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    orientation: "horizontal",
    selectionBackground: "gray",
    disabled: false,
  },
  render({ orientation, selectionBackground, disabled }) {
    return (
      <RadioGroup className="gap-3" disabled={disabled}>
        <RadioCardItem
          value="basic"
          label="Basic"
          description={`Basic package includes:
          • 128 pages of e-Book
          • Limited email support
          • Free updates for one year
          `}
          orientation={orientation}
          selectedBackgroundColor={selectionBackground}
          leadingDecoration={<Pill label="$100" variant={"secondary"} />}
        />

        <RadioCardItem
          value="premium"
          label="Premium"
          description={`Premium package includes:
          • Everything in basic
          • 5 case study videos
          • Lifetime Discord access
          `}
          orientation={orientation}
          selectedBackgroundColor={selectionBackground}
          leadingDecoration={<Pill label="$250" variant={"secondary"} />}
        />

        <RadioCardItem
          value="complete"
          label="Complete"
          description={`Complete package includes:
        • Everything in premium
        • Weekly check-in calls for 8 weeks
        `}
          orientation={orientation}
          selectedBackgroundColor={selectionBackground}
          leadingDecoration={<Pill label="$500" variant={"secondary"} />}
        />
      </RadioGroup>
    );
  },
};

export const SmallCard: Story = {
  render({disabled}) {
    return (
      <RadioGroup className="flex flex-row" disabled={disabled}>
        <SmallCardItem title="Card" value="card" icon={<CardIcon />} />
        <SmallCardItem title="Paypal" value="paypal" icon={<PaypalIcon />} />
        <SmallCardItem title="Google Pay" value="googlePay" icon={<GoogleIcon />} />
      </RadioGroup>
    );
  },
};

function GoogleIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33366 1.34277C4.65179 1.34277 1.66699 4.30812 1.66699 8.00946C1.66699 11.7108 4.65179 14.6761 8.33366 14.6761C11.5299 14.6761 14.9933 12.1381 15.0003 7.96812V6.67612H8.33366V9.3428H12.0629C11.5107 10.8908 10.0713 12.0095 8.33366 12.0095C6.12452 12.0095 4.33366 10.2188 4.33366 8.00946C4.33366 5.80012 6.12452 4.00945 8.33366 4.00945C9.27052 4.00945 10.1396 4.32346 10.8107 4.87013C11.0291 4.65213 12.3337 3.34279 12.7562 3.00546C11.5805 1.95212 10.0433 1.34277 8.33366 1.34277Z"
        fill="black"
      />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33398 6.66659H14.334M5.00065 9.99992H5.66732M8.33398 9.99992H9.00065M4.33398 12.6666H12.334C13.4386 12.6666 14.334 11.7712 14.334 10.6666V5.33325C14.334 4.22868 13.4386 3.33325 12.334 3.33325H4.33398C3.22941 3.33325 2.33398 4.22868 2.33398 5.33325V10.6666C2.33398 11.7712 3.22942 12.6666 4.33398 12.6666Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaypalIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.334 6.52333C14.334 6.84493 14.295 7.17372 14.2326 7.49952C13.7244 10.1509 11.985 11.0671 9.7632 11.0671H9.42C9.1482 11.0671 8.9172 11.2675 8.8752 11.5405L8.39341 14.5945C8.35081 14.8663 8.11981 15.0667 7.84861 15.0667H6.20701C5.97301 15.0667 5.79422 14.8579 5.83022 14.6275L6.66181 9.29952L6.69901 9.26592H7.99201C11.133 9.26592 13.0974 7.69512 13.6758 4.72513C14.163 5.21353 14.334 5.85073 14.334 6.52333ZM5.80442 9.07452C5.87402 8.57892 6.07981 8.36832 6.63541 8.36712L7.99141 8.36592C10.7358 8.36592 12.3102 7.11192 12.8052 4.53193C13.2852 2.05154 11.544 0.666748 9.1866 0.666748H4.78022C4.47002 0.666748 4.20542 0.895947 4.15742 1.20735C2.77503 10.1083 2.37543 12.3715 2.33463 13.0621C2.32203 13.2793 2.49603 13.4653 2.71563 13.4653H5.10902L5.80442 9.07452Z"
        fill="black"
      />
    </svg>
  );
}
