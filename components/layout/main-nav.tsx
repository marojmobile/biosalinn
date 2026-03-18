import Link from "next/link";
import { mainNavigation } from "@/content/navigation";

export function MainNav() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {mainNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
