'use client';

import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Flat_Panel_Connector_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panel_Light_Base_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panel_Light_Bolt_1_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panel_Light_Bolt_2_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panel_Light_Bulb_Flat_Panel_Light_Bulb_M_0: THREE.Mesh;
    Flat_Panels_Reflector_1_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panels_Rotator_1_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panels_Reflector_2_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panels_Rotator_2_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panels_Reflector_3_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panels_Rotator_3_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panels_Reflector_4_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panels_Rotator_4_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
    Flat_Panel_Light_Holder_Flat_Panel_Light_Metal_M_0: THREE.Mesh;
  };
  materials: {
    Flat_Panel_Light_Metal_M: THREE.MeshStandardMaterial;
    Flat_Panel_Light_Bulb_M: THREE.MeshStandardMaterial;
  };
};

type ActionName = 'spotMotion';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
interface MyGLTFResult extends GLTFResult {
  animations: GLTFAction[];
}


export const SpotLight3DModel: React.FC = () => {
  const { nodes, materials, animations } = useGLTF(
    '/Spotlight/spotlight.glb'
  ) as MyGLTFResult;
  
  const group = useRef(null);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.spotMotion!.clampWhenFinished = true;
    actions.spotMotion!.reset().play().setLoop(THREE.LoopOnce, 1);
  }, []);



  return (
    <group ref={group} dispose={null} scale={2} position={[0,1,1.5]}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0, -0.682, 0]}
          rotation={[-Math.PI / 2, 0, -0.005]}
          scale={0.659}
        >
          <group
            name="54410e13abf34fb18ed4edbe5de5fa29fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode">
              <group
                name="Flat_Panel_Light_Grp"
                position={[0, 0, 0.166]}
                scale={0.01}
              >
                <group name="Flat_Panel_Connector">
                  <mesh
                    name="Flat_Panel_Connector_Flat_Panel_Light_Metal_M_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Flat_Panel_Connector_Flat_Panel_Light_Metal_M_0
                        .geometry
                    }
                    material={materials.Flat_Panel_Light_Metal_M}
                  />
                </group>
                <group name="Flat_Panel_Cylinder_Grp">
                  <group name="Flat_Panel_Light_Base">
                    <mesh
                      name="Flat_Panel_Light_Base_Flat_Panel_Light_Metal_M_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Panel_Light_Base_Flat_Panel_Light_Metal_M_0
                          .geometry
                      }
                      material={materials.Flat_Panel_Light_Metal_M}
                    />
                  </group>
                  <group name="Flat_Panel_Light_Bolt_Grp">
                    <group name="Flat_Panel_Light_Bolt_1">
                      <mesh
                        name="Flat_Panel_Light_Bolt_1_Flat_Panel_Light_Metal_M_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .Flat_Panel_Light_Bolt_1_Flat_Panel_Light_Metal_M_0
                            .geometry
                        }
                        material={materials.Flat_Panel_Light_Metal_M}
                      />
                    </group>
                    <group name="Flat_Panel_Light_Bolt_2">
                      <mesh
                        name="Flat_Panel_Light_Bolt_2_Flat_Panel_Light_Metal_M_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .Flat_Panel_Light_Bolt_2_Flat_Panel_Light_Metal_M_0
                            .geometry
                        }
                        material={materials.Flat_Panel_Light_Metal_M}
                      />
                    </group>
                  </group>
                  <group name="Flat_Panel_Light_Bulb">
                    <mesh
                      name="Flat_Panel_Light_Bulb_Flat_Panel_Light_Bulb_M_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Panel_Light_Bulb_Flat_Panel_Light_Bulb_M_0
                          .geometry
                      }
                      material={materials.Flat_Panel_Light_Bulb_M}
                      position={[0, -1, 0]}
                    />
                  </group>
                  <group name="Flat_Panels_Grp">
                    <group name="Flat_Panels_1">
                      <group name="Flat_Panels_Reflector_1">
                        <mesh
                          name="Flat_Panels_Reflector_1_Flat_Panel_Light_Metal_M_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .Flat_Panels_Reflector_1_Flat_Panel_Light_Metal_M_0
                              .geometry
                          }
                          material={materials.Flat_Panel_Light_Metal_M}
                        />
                      </group>
                      <group name="Flat_Panels_Rotator_1">
                        <mesh
                          name="Flat_Panels_Rotator_1_Flat_Panel_Light_Metal_M_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .Flat_Panels_Rotator_1_Flat_Panel_Light_Metal_M_0
                              .geometry
                          }
                          material={materials.Flat_Panel_Light_Metal_M}
                        />
                      </group>
                    </group>
                    <group name="Flat_Panels_2">
                      <group name="Flat_Panels_Reflector_2">
                        <mesh
                          name="Flat_Panels_Reflector_2_Flat_Panel_Light_Metal_M_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .Flat_Panels_Reflector_2_Flat_Panel_Light_Metal_M_0
                              .geometry
                          }
                          material={materials.Flat_Panel_Light_Metal_M}
                        />
                      </group>
                      <group name="Flat_Panels_Rotator_2">
                        <mesh
                          name="Flat_Panels_Rotator_2_Flat_Panel_Light_Metal_M_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .Flat_Panels_Rotator_2_Flat_Panel_Light_Metal_M_0
                              .geometry
                          }
                          material={materials.Flat_Panel_Light_Metal_M}
                        />
                      </group>
                    </group>
                    <group name="Flat_Panels_3">
                      <group name="Flat_Panels_Reflector_3">
                        <mesh
                          name="Flat_Panels_Reflector_3_Flat_Panel_Light_Metal_M_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .Flat_Panels_Reflector_3_Flat_Panel_Light_Metal_M_0
                              .geometry
                          }
                          material={materials.Flat_Panel_Light_Metal_M}
                        />
                      </group>
                      <group name="Flat_Panels_Rotator_3">
                        <mesh
                          name="Flat_Panels_Rotator_3_Flat_Panel_Light_Metal_M_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .Flat_Panels_Rotator_3_Flat_Panel_Light_Metal_M_0
                              .geometry
                          }
                          material={materials.Flat_Panel_Light_Metal_M}
                        />
                      </group>
                    </group>
                    <group name="Flat_Panels_4">
                      <group name="Flat_Panels_Reflector_4">
                        <mesh
                          name="Flat_Panels_Reflector_4_Flat_Panel_Light_Metal_M_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .Flat_Panels_Reflector_4_Flat_Panel_Light_Metal_M_0
                              .geometry
                          }
                          material={materials.Flat_Panel_Light_Metal_M}
                        />
                      </group>
                      <group name="Flat_Panels_Rotator_4">
                        <mesh
                          name="Flat_Panels_Rotator_4_Flat_Panel_Light_Metal_M_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .Flat_Panels_Rotator_4_Flat_Panel_Light_Metal_M_0
                              .geometry
                          }
                          material={materials.Flat_Panel_Light_Metal_M}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="Flat_Panel_Light_Holder">
                  <mesh
                    name="Flat_Panel_Light_Holder_Flat_Panel_Light_Metal_M_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Flat_Panel_Light_Holder_Flat_Panel_Light_Metal_M_0
                        .geometry
                    }
                    material={materials.Flat_Panel_Light_Metal_M}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/Spotlight/spotlight.glb');
