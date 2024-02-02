
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    ['Scene_-_Root']: THREE.MeshPhysicalMaterial;
  };
};

export function Trophy3DModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/door/trophy.glb') as GLTFResult;
  const groupRef = useRef(null);
  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
          position={[0.702, 0, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/door/trophy.glb');
