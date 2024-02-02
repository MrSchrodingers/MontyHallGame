'use client';

import * as THREE from 'three';
import React, { useContext, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { OpenDoorContext } from '@/app/shared/context';

type GLTFResult = GLTF & {
  nodes: {
    DoorFrame: THREE.Mesh;
    Door: THREE.Mesh;
    Handle_Back: THREE.Mesh;
    Handle_Front: THREE.Mesh;
  };
  materials: {
    Door_material: THREE.MeshStandardMaterial;
    Handle_material: THREE.MeshStandardMaterial;
  };
};

type ActionName = 'DoorAction';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
interface MyGLTFResult extends GLTFResult {
  animations: GLTFAction[];
}

export function Door3DModel(props: JSX.IntrinsicElements['group']) {
  const { playAnimation, setPlayAnimation } = useContext(OpenDoorContext);
  
  const { nodes, materials, animations } = useGLTF(
    '/door/doorAnimMod.glb'
  ) as MyGLTFResult;

  const group = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, group);

  const clickHandler = () => {
    setPlayAnimation(true);
    actions.DoorAction!.clampWhenFinished = true;
    actions.DoorAction!.reset().play().setLoop(THREE.LoopOnce, 1);
  };

  return (
    <group ref={group} {...props} dispose={null} position={[0,0,1]}>
      <group name="Scene">
        <group name="Door_Group" onClick={clickHandler}>
          <mesh
            name="DoorFrame"
            castShadow
            receiveShadow
            geometry={nodes.DoorFrame.geometry}
            material={materials.Door_material}
          >
            <mesh
              name="Door"
              castShadow
              receiveShadow
              geometry={nodes.Door.geometry}
              material={materials.Door_material}
              position={[0.41800001, 1.04999995, 0.0221]}
              rotation={[0, 0.22846294, 0]}
            >
              <mesh
                name="Handle_Back"
                castShadow
                receiveShadow
                geometry={nodes.Handle_Back.geometry}
                material={materials.Handle_material}
                position={[-0.76400006, 0, -0.005]}
              />
              <mesh
                name="Handle_Front"
                castShadow
                receiveShadow
                geometry={nodes.Handle_Front.geometry}
                material={materials.Handle_material}
                position={[-0.764, 0, -0.02899999]}
                rotation={[-Math.PI, 0, 0]}
              />
            </mesh>
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/door/doorAnimMod.glb');