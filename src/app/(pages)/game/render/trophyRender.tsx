// Trophy3DModel.tsx
import React, { useRef } from 'react';
import { Sparkles, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { IDoorProps } from '@/app/model';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    ['Scene_-_Root']: THREE.MeshPhysicalMaterial;
  };
};

interface ITrophy3DModelProps extends IDoorProps {
  presentFound: boolean,
}

const Trophy3DModel: React.FC<Omit<ITrophy3DModelProps, 'doorNumber' | 'havePresent' | 'selected' >> = ({ presentFound }) => {
  const { nodes, materials } = useGLTF('/door/trophy.glb') as GLTFResult;
  const groupRef = useRef(null);

  return (
    <group dispose={null} ref={groupRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
          position={[1.4, 0, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.02}
        />
        {presentFound ? <Sparkles size={20} count={15} scale={[0.4,2,-2]} position={[0,15,2.5]}/> : null}
      </group>
    </group>
  );
};

useGLTF.preload('/door/trophy.glb');
export default Trophy3DModel;
