import Tooltip from "@/components/Tooltip";
import CheckCircleFillIcon from "@/icons/CheckCircleFillIcon";
import CircleIcon from "@/icons/CircleIcon";
import InfoCircleIcon from "@/icons/InfoCircle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="py-6 md:py-6 md:px-8 border-b border-solid border-black">
        <h1 className="hidden md:inline text-h1">Welcome to Gumroad.</h1>
      </header>
      <div className="flex flex-col p-4 gap-7 md:p-8 md:pr-push">
        <section className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(max(min(100%,_-100000%_+_31250rem),_min(50%_-_1rem,_-100000%_+_62500rem)),_1fr))]">
          <Stats
            title="Balance"
            tooltip="Your current balance available for payout"
            amount={19382}
          />
          <Stats
            title="Last 7 days"
            tooltip="Your total sales in the last 7 days"
            amount={844791}
          />
          <Stats
            title="Last 28 days"
            tooltip="Your total sales in the last 28 days"
            amount={7945623}
          />
          <Stats
            title="Total earnings"
            tooltip="Your all-time net earnings from all products, excluding refunds and chargebacks"
            amount={22389142}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-h2">Getting Started</h2>

          <div className="grid md:grid-cols-2 rounded-1 bg-black gap-[1px] border border-black border-solid overflow-clip">
            <Step title="Customize your profile" />
            <Step title="Create your first product" completed />
            <Step title="Get your first follower" completed />
            <Step title="Make your first sale" />
            <Step title="Get your first pay out" />
            <Step title="Send out your first email blast" completed />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-h2">Best Selling</h2>

          <p className="p-6 bg-white border border-black border-dashed rounded-1 text-center">
            You haven&apos;t made any sales yet. Learn how to{" "}
            <span className="underline">build a following</span> and{" "}
            <span className="underline">sell on Gumroad Discover</span>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-h2">Activity</h2>

          <p className="p-6 bg-white border border-black border-dashed rounded-1 text-center">
            Followers and sales will sho up here as they come in. For now,
            <span className="underline">create a product</span> or{" "}
            <span className="underline">customize your profile</span>
          </p>
        </section>
      </div>
    </div>
  );
}

interface StepProps {
  completed?: boolean;
  title: string;
}

function Step({ title, completed = false }: StepProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white">
      {completed ? (
        <CheckCircleFillIcon className="w-4 fill-green-bold" />
      ) : (
        <CircleIcon className="w-4" />
      )}

      <span className={completed ? "line-through" : "underline"}>{title}</span>
    </div>
  );
}

interface StatsProps {
  title: string;
  amount: number;
  tooltip: string;
}

function Stats({ title, amount, tooltip }: StatsProps) {
  return (
    <div className="p-5 border border-black border-solid rounded-1 bg-white space-y-2">
      <div className="flex gap-1 items-center">
        {title}{" "}
        <Tooltip
          trigger={
            <button>
              <InfoCircleIcon className="w-4" />
            </button>
          }
        >
          {tooltip}
        </Tooltip>
      </div>
      <div className="text-h1">${new Intl.NumberFormat().format(amount)}</div>
    </div>
  );
}
