'use client';
import { ContentComponent, HomeComponents } from './components';
import { InfoComponent } from './components/InfoContent';



export default function Home( ) {
  return (
    <main className="h-full min-h-screen-lg bg-slate-800 font-mono">
      <div className='overflow-hidden max-h-screen h-full'>
        <div className="h-8 flex rounded-lg bg-zinc-900/2 p-6 mx-4 items-center justify-between">
          <HomeComponents />
        </div>
        <section 
          className="overflow-hidden w-full h-full flex flex-col"
          id='ContentSection'
        >
          <ContentComponent />    
        </section>
      </div>
      
      <section 
        className="overflow-hidden w-full  min-h-screen flex flex-col justify-between py-32 items-center "
        id='InformationSection'
      >
        <InfoComponent />    
      </section>
    </main>
  );
}


