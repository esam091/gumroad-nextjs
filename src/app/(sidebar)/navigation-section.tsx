import ShopWindowFill from "@/icons/ShopWindowFill";
import NavLink from "./nav-link";
import SolidSearchIcon from "@/icons/SolidSearchIcon";

export default function NavigationSection() {
  return (
    <section className="bg-black flex-1 pointer-events-auto flex flex-col">
      <NavLink href="/dashboard" title="Dashboard" icon={<ShopWindowFill />} />
      <NavLink href="/discover" title="Discover" icon={<SolidSearchIcon />} />

      <div className="flex-1" />
    </section>
  );
}
