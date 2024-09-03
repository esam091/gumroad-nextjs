import ShopWindowFill from "@/icons/ShopWindowFill";
import NavLink from "./nav-link";
import SolidSearchIcon from "@/icons/SolidSearchIcon";
import Toggle from "@/components/Toggle";
import DarkModeToggle from "../dark-mode-toggle";

export default function NavigationSection() {
  return (
    <section className="bg-black flex-1 pointer-events-auto flex flex-col">
      <NavLink href="/dashboard" title="Dashboard" icon={<ShopWindowFill />} />
      <NavLink href="/discover" title="Discover" icon={<SolidSearchIcon />} />

      <div className="px-5"><DarkModeToggle /></div>

      <div className="flex-1" />
    </section>
  );
}
