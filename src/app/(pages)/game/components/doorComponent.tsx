/* eslint-disable react/no-children-prop */
'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Html } from '@react-three/drei';
import  {Door3DModel}  from '../render/doorRender';
import { Trophy3DModel } from '../render/trophyRender';
import { useDoorHooks } from '../hooks';

export const DoorModel3DComponent: React.FC = () => {
  const {doors, numberOfDoors} = useDoorHooks();
  
  return (
    <div className={`w-full h-screen grid ${'grid-cols-' + numberOfDoors} px-4 py-2 justify-between items-center`}>
      {Array.from({ length: numberOfDoors }).map((_, index) => (
        <Canvas key={index} camera={{ position: [0, 0.5, 6] }}>
          <Environment preset='warehouse'/>
          <Suspense
            fallback={null}
          >
            <Door3DModel />
            <Trophy3DModel />
          </Suspense>
        </Canvas>
        
      ))}
    </div>
  );
};

