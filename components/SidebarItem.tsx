import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SideBarProps {
  icon: IconType;
  label: string;
  activce?: boolean;
  href: string;
}

function SidebarItem({ icon: Icon, label, activce, href }: SideBarProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 textt-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        activce && 'text-white',
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
}

export default SidebarItem;
