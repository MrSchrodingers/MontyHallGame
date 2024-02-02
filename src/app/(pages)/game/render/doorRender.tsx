'use client';
import * as THREE from 'three';
import React, { useCallback, useRef } from 'react';
import { useGLTF, useAnimations, SpotLight } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { IDoorProps } from '@/app/model';

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

interface Door3DModelProps extends IDoorProps {
  onClick: () => void;
  onClickSelected: () => void;
}

export const Door3DModel: React.FC<Door3DModelProps> = ({ openStatus, onClick, onClickSelected, selected }) => {  
  const { nodes, materials, animations } = useGLTF(
    '/door/doorAnimMod.glb'
  ) as MyGLTFResult;

  const group = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, group);

  const clickHandler = useCallback(() => {
    actions.DoorAction!.clampWhenFinished = true;
    actions.DoorAction!.reset().play().setLoop(THREE.LoopOnce, 1);
    onClick();
  }, [openStatus]);

  const selectHandler = useCallback(() => {
    onClickSelected();
  }, [openStatus]);


  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  return (
    <group ref={group} dispose={null} position={[0,0,1]}>
      <group name="Scene">
        <group name="Door_Group" >
          {selected ? 
            <SpotLight 
              angle={0.5}
              position={[0,2.3,1.5]}
              intensity={10}
              decay={3.3}
            /> : null}
          <mesh onClick={selectHandler}
            name="DoorFrame"
            castShadow
            receiveShadow
            geometry={nodes.DoorFrame.geometry}
            material={materials.Door_material}
          >
            <mesh onClick={(e) => {
              e.stopPropagation(); // Impede a propagação do evento para elementos pai
              clickHandler();
            }}
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
};

useGLTF.preload('/door/doorAnimMod.glb');