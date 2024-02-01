'use client';
import {DoorModel3D} from './components/doorComponent';
import { DoorProvider } from './context/DoorContext';
import { useDoorHooks } from './hooks';


export default function Game () {
  const {doors, handleDoorClick} = useDoorHooks();

  return (
    <main className='w-full h-screen bg-slate-400'>
      <div className='w-full h-screen'>
        <DoorProvider>
          <DoorModel3D />
        </DoorProvider>
      </div>
    </main>
  );
}

