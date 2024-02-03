/* eslint-disable react/jsx-key */
'use client';
import { OpenDoorContextProvider } from '@/app/shared/context';
import { DoorModel3DComponent } from './components/doorComponent';
import { TrophyContextProvider } from '@/app/shared/context/TrophyContext';


export default function Game () {

  return (
    <main className='w-full h-screen bg-slate-800'>
      <div className='w-full h-screen'>
        <OpenDoorContextProvider>
          <TrophyContextProvider>
            <DoorModel3DComponent />
          </TrophyContextProvider>
        </OpenDoorContextProvider>
      </div>
    </main>
  );
}

