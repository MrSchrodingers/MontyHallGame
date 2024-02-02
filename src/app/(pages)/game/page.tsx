/* eslint-disable react/jsx-key */
'use client';
import { OpenDoorContextProvider } from '@/app/shared/context';
import { DoorModel3DComponent } from './components/doorComponent';


export default function Game () {

  return (
    <main className='w-full h-screen bg-slate-400'>
      <div className='w-full h-screen'>
        <OpenDoorContextProvider>
          <DoorModel3DComponent />
        </OpenDoorContextProvider>
      </div>
    </main>
  );
}

