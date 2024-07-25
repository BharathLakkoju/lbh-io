import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface LinkedBadgeProps {
  Icon: React.ReactNode;
  href: string;
  className?: string;
  name: string;
}

export default function LinkedBadge({
  href,
  className,
  Icon,
  name,
}: LinkedBadgeProps) {
  return (
    <>
      <Link className={className} href={href} target="_blank">
        <Badge
          variant="outline"
          className="border-none w-fit h-fit p-0 pb-0.5 bg-transparent align-middle text-gray-900 dark:text-gray-100"
        >
          {Icon}
          {name}
        </Badge>
      </Link>
    </>
  );
}
