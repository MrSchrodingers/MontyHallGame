'use client';
import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Door3DModel } from '../render/doorRender';
import { Trophy3DModel } from '../render/trophyRender';

export const DoorModel3D: React.FC = () => {
  
  return (
    <div className='h-screen'>
      <Canvas>
        <Stars />
        <ambientLight />
        <directionalLight
          position={[0, 4, 7.5]}
          castShadow
          intensity={1}
        />
        <spotLight
          position={[0, 0.6, 0.8]}
          intensity={20}
          angle={0.7}
          decay={3}

        />
        <Suspense fallback={null}>
          <Trophy3DModel />
          <Door3DModel />
        </Suspense>
      </Canvas>
    </div>
    
  );
};

