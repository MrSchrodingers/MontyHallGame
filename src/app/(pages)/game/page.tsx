import DoorModel3D from './components/doorComponent';
import TrophyModel3D from './components/trophyComponent';

export default function Game () {


  return (
    <main className='w-full h-screen bg-slate-400'>
      <div className='w-full h-screen'>
        <DoorModel3D />
      </div>
    </main>
  );
}

