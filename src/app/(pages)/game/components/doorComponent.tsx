'use client';
import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import  {Door3DModel}  from '../render/doorRender';
import { Trophy3DModel } from '../render/trophyRender';
import { useDoorHooks } from '../hooks';

export const DoorModel3DComponent: React.FC = () => {
  const { numberOfDoors} = useDoorHooks();
  
  return (
    <div className={`w-full h-screen grid grid-cols-${numberOfDoors} px-4 py-2 justify-between items-center`}>
      {Array.from({ length: numberOfDoors }).map((_, index) => (
        <Canvas key={index}>
          <Environment preset='warehouse'/>
          <Trophy3DModel />
          <Door3DModel />
        </Canvas>
        
      ))}
    </div>
  );
};

