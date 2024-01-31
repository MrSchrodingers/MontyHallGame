'use client';

import { DoorOpen, DoorClosed } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useCallback} from 'react';

export default function NotFound() {
  const [hover, setHover] = useState(false);

  const hoverIcons = useCallback(() => {
    setHover((prevHover) => !prevHover);
  }, [setHover]);

  return (
    <main>
      <Head>
        Página não encontrada
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl font-bold text-gray-500 dark:text-gray-400 select-none">404</h1>
        <h2 className="text-3xl font-medium text-gray-500 dark:text-gray-400 mb-4 select-none">
        Página não encontrada
        </h2>
        <div 
          className="flex mx-2 p-2 items-center scale-125 hover:cursor-pointer transition-transform transform" 
          onMouseEnter={hoverIcons} 
          onMouseLeave={hoverIcons}
        >
          {hover ? <DoorOpen /> : <DoorClosed />}
          <Link href={'/'} />
        </div>
      </div>
    </main>
  );
}
