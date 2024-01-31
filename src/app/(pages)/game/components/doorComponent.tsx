/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
'use client';
import React, { useEffect, useState } from 'react';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useGLTF } from '@react-three/drei';
import { AnimationMixer, AnimationClip, LoopOnce } from 'three';
import {TrophyModel} from './trophyComponent';

const DoorModel: React.FC = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  const handleClick = () => {
    setPlayAnimation(true);
  };

  const gltf = useGLTF('/door/doorAnimMod.glb');
  const modelRef = useRef<any>();
  const mixer = useRef<AnimationMixer>();

  gltf.scene.position.set(0, 0, 1);

  if (modelRef.current && !mixer.current) {
    mixer.current = new AnimationMixer(modelRef.current);

    if (gltf.animations.length > 0) {
      const clip = AnimationClip.findByName(gltf.animations, 'DoorAction');
      if (clip && playAnimation) {
        const action = mixer.current.clipAction(clip);
        action.setLoop(LoopOnce, 0);
        action.clampWhenFinished = true;
        action.enabled = true;
        action.reset().play();
      }
    }
  }

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  useEffect(() => {
  }, [handleClick]);

  return (
    <group onClick={handleClick}>
      <primitive object={gltf.scene} ref={modelRef} />
    </group>
  );
};

export default function DoorModel3D() {

  
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
          <TrophyModel />
          <DoorModel />
        </Suspense>
      </Canvas>
    </div>
    
  );
}

