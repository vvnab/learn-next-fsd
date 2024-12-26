"use client";

import { links } from "../model";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(({name, href, icon}) => {
        const LinkIcon = icon;
        return (
          <Link
            key={name}
            href={href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{name}</p>
          </Link>
        );
      })}
    </>
  );
}
