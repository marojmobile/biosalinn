import Link from "next/link";
import { MainNav } from "@/components/layout/main-nav";
import { PageContainer } from "@/components/layout/page-container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <PageContainer className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-wide text-neutral-950">
            VERDESAL
          </span>
        </Link>

        <MainNav />
      </PageContainer>
    </header>
  );
}
