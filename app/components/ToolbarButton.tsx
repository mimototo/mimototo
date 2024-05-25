"use client";

import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function ToolbarButton({
  href,
  icon,
  title,
}: {
  href: string;
  icon: ReactNode;
  title: string;
}) {
  const pathname = usePathname();

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn("rounded-full", href === pathname && "bg-accent")}
      asChild
    >
      <Link href={href}>
        <Slot className="size-5">{icon}</Slot>
        <span className="sr-only">{title}</span>
      </Link>
    </Button>
  );
}
