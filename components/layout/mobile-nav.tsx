"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavigation } from "@/content/navigation";

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Abrir menú"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 p-2 text-neutral-900 transition hover:bg-neutral-50"
          >
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85%] max-w-sm px-0">
          <SheetHeader className="border-b border-neutral-200 px-4 py-4 text-left">
            <SheetTitle className="text-base font-semibold text-neutral-950">
              VERDESAL
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-1 px-4 py-4">
            {mainNavigation.map((item) => (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base font-medium text-neutral-800 transition hover:bg-neutral-50 hover:text-neutral-950"
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </nav>

          <div className="mt-auto border-t border-neutral-200 px-4 py-4">
            <p className="text-sm font-semibold text-neutral-900">BioSalINN</p>
            <p className="text-sm text-neutral-600">
              Agricultura biosalina y plantas halófitas comestibles.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
