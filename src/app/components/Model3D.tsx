/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
'use client';

import React, { useEffect, useState } from 'react';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer, AnimationClip, LoopOnce } from 'three';

const SpotLightModel: React.FC = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  const handleClick = () => {
    setPlayAnimation(true);
  };

  const gltf = useGLTF('/spot_lightAnim.glb');
  const modelRef = useRef<any>();
  const mixer = useRef<AnimationMixer>();

  gltf.scene.position.set(0,0,4);

  if (modelRef.current && !mixer.current) {
    mixer.current = new AnimationMixer(modelRef.current);

    if (gltf.animations.length > 0) {
      const clip = AnimationClip.findByName(gltf.animations, 'spotMotion');
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
    handleClick();
  }, []);

  return (
    <group>
      <primitive object={gltf.scene} ref={modelRef} scale={0.8}/>
    </group>
  );
};

export default function Model3D() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight
        position={[0, -0.5, 4]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-20}
        shadow-camera-right={40}
        shadow-camera-top={30}
      />
      <Suspense fallback={null}>
        <SpotLightModel />
      </Suspense>
    </Canvas>
  );
}
