// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable react/no-unknown-property */
// 'use client';
// import React from 'react';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';

// export const TrophyModel: React.FC = () => {

//   const gltf = useGLTF('/door/trophy.glb');
//   gltf.scene.position.set(0,0,0);

//   return (
//     <group >
//       <primitive object={gltf.scene}/>
//     </group>
//   );
// };

// export default function TrophyModel3D() {

  
//   return (
//     <div className='h-screen z-10'>
//       <Canvas>
//         <Suspense fallback={null}>
//           <TrophyModel />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

