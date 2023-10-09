'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { Song } from '@/types';
import usePlayer from '@/hooks/usePlayer';
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';

import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

interface SideBarProps {
  children: React.ReactNode;
  songs: Song[];
}

function Sidebar({ children, songs }: SideBarProps) {
  const pathname = usePathname();
  const player = usePlayer();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        activce: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        activce: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname],
  );
  return (
    <div
      className={twMerge(
        `
        flex 
        h-full
        `,
        player.activeId && 'h-[calc(100%-80px)]',
      )}
    >
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box className="flex flex-col gap-y-4 px-5 py-4">
          <div>
            {routes.map((item: any) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2 first-letter:">
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
