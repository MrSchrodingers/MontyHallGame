'use client';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer, AnimationClip, LoopOnce } from 'three';


export const Door3DModel: React.FC = () => {
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

  return (
    <group onClick={handleClick}>
      <primitive object={gltf.scene} ref={modelRef} />
    </group>
  );
};