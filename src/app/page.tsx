/* eslint-disable react/jsx-no-undef */
import { ContentComponent, HomeComponents } from './components';
import { InfoComponent } from './components/InfoContent';



export default function Home( ) {
  return (
    <main className="h-full min-h-screen bg-slate-500">
      <div className='min-h-screen'>
        <div className="h-8 flex rounded-lg bg-zinc-900/2 p-6 mx-4 items-center justify-between">
          <HomeComponents />
        </div>
        <section 
          className="w-full min-h-screen flex flex-col justify-between lg:pb-[110px] items-end"
          id='ContentSection'
        >
          <ContentComponent />    
        </section>
      </div>
      
      <section 
        className="w-full lg:h-[755px] flex flex-col justify-between py-32 lg:pb-[110px] items-en"
        id='InformationSection'
      >
        <InfoComponent />    
      </section>
    </main>
  );
}


