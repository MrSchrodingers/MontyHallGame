'use client';

import React, { useCallback, useContext, useRef } from 'react';
import { useGLTF, useAnimations, SpotLight } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { IDoorProps } from '@/app/model';
import { SelectedDoorContext } from '@/app/shared/context';
import { Mesh, MeshStandardMaterial, Group, LoopOnce } from 'three';


// Tipos específicos do GLTF
type GLTFResult = GLTF & {
  nodes: {
    DoorFrame: Mesh;
    Door: Mesh;
    Handle_Back: Mesh;
    Handle_Front: Mesh;
  };
  materials: {
    Door_material: MeshStandardMaterial;
    Handle_material: MeshStandardMaterial;
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

const Door3DModel: React.FC<Door3DModelProps> = ({ openStatus, onClick, onClickSelected, selected, doorNumber }) => {  
  const { nodes, materials, animations } = useGLTF('/door/doorAnimMod.glb') as MyGLTFResult;
  const group = useRef<Group>(null);
  const { actions } = useAnimations(animations, group);
  const { selectedDoorNumber, setSelectedDoorNumber } = useContext(SelectedDoorContext);

  const clickHandler = useCallback(() => {
    actions.DoorAction!.clampWhenFinished = true;
    actions.DoorAction!.reset().play().setLoop(LoopOnce, 1);
    onClick();
  }, [openStatus]);

  const selectHandler = useCallback(() => {
    if (!selectedDoorNumber) {
      setSelectedDoorNumber(doorNumber);
      onClickSelected();
    }
  }, [selectedDoorNumber, doorNumber, onClickSelected]);

  const createSpotLight = () => {
    return selected ? (
      <SpotLight angle={0.5} position={[0, 2.3, 1.5]} intensity={10} decay={3.3} />
    ) : null;
  };

  return (
    <group ref={group} dispose={null} position={[0, 0, 1]}>
      <group name="Scene">
        <group name="Door_Group">
          {createSpotLight()}
          <mesh
            onClick={selectHandler}
            name="DoorFrame"
            castShadow
            receiveShadow
            geometry={nodes.DoorFrame.geometry}
            material={materials.Door_material}
          >
            <mesh
              onClick={(e) => {
                e.stopPropagation();
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
export default Door3DModel;
