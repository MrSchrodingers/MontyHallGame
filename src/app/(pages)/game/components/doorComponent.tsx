/* eslint-disable react/no-children-prop */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Html } from '@react-three/drei';
import { Door3DModel } from '../render/doorRender';
import { Trophy3DModel } from '../render/trophyRender';
import { useDoorHooks } from '../hooks';

const TrophyWithSparkles: React.FC<{ presentFound: boolean, openStatus: boolean }> = ({ presentFound, openStatus }) => (
  <>
    <Trophy3DModel openStatus={openStatus} presentFound={presentFound} />
  </>
);

export const DoorModel3DComponent: React.FC = () => {
  const { doors, numberOfDoors, handleDoor, handleSelected } = useDoorHooks();
  const grid = `grid-cols-${numberOfDoors}`;

  return (
    <div className={`w-full h-screen grid ${grid} px-4 py-2 justify-between items-center`}>
      {doors.map((door) => (
        <Canvas key={door.doorNumber} camera={{ position: [0, 0.5, 6] }}>
          <Suspense fallback={null}>
            <Environment preset={'dawn'}/>
            <Door3DModel {...door} onClick={() => handleDoor(door.doorNumber)} onClickSelected={() => handleSelected(door.doorNumber)}/>
            {door.havePresent && 
            <TrophyWithSparkles openStatus={door.openStatus} presentFound={door.havePresent && door.openStatus} 
            />}
          </Suspense>
        </Canvas>
      ))}
    </div>
  );
};
