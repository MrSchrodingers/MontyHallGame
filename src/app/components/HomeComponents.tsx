'use client';

import { DoorOpen,DoorClosed, History } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useState } from 'react';


export const HomeComponents: React.FC = () => {
  const [hover, setHover] = useState(false);

  const hoverIcons = useCallback(() => {
    setHover((prevHover) => !prevHover);
  }, [setHover]);

  return (
    <>
      <div className="flex w-10 h-8 items-center scale-125 hover:cursor-pointer transition-transform transform" 
        onMouseEnter={hoverIcons} 
        onMouseLeave={hoverIcons}>
        {hover ? <DoorOpen /> : <DoorClosed />}
        <Link href='/' />
      </div>
      <div className="flex gap-2 items-center hover:cursor-pointer hover:transition-transform hover:transform hover:scale-105 ">
        <div className="col-span-1 hover:animate-spin-finite-reverse"><History /></div>
        <div className="col-span-2 max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400"> Meu Histórico </div>
      </div>
    </>
  );
};