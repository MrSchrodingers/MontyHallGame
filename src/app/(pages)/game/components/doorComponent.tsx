import React, { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useDoorHooks } from '../hooks';

const Trophy3DModel = lazy(() => import('../render/trophyRender'));
const Door3DModel = lazy(() => import('../render/doorRender'));

const TrophyWithSparkles: React.FC<{ presentFound: boolean; openStatus: boolean }> = ({ presentFound, openStatus }) => (
  <Trophy3DModel openStatus={openStatus} presentFound={presentFound} />
);

const DoorModel3DComponent: React.FC = () => {
  const { doors, handleDoor, handleSelected } = useDoorHooks();


  return (
    <div className="w-full h-screen grid grid-cols-3 px-4 py-2 justify-between items-center">
      {doors.map((door) => (
        <Canvas key={door.doorNumber} camera={{ position: [0, 0.5, 6] }}>
          <Suspense fallback={null}>
            <Environment preset="dawn" />
            <Door3DModel {...door} onClick={() => handleDoor(door.doorNumber)} onClickSelected={() => handleSelected(door.doorNumber)} />
            {door.havePresent && <TrophyWithSparkles openStatus={door.openStatus} presentFound={door.havePresent && door.openStatus} />}
          </Suspense>
        </Canvas>
      ))}
    </div>
  );
};

export default DoorModel3DComponent;
