import SceneWrap from '@/components/3d/Wrapper';
import { ObjectContextProvider } from '@/context/ObjectContext';
import Atmospheric from '@/components/popups/atmospheric';
import Energy from '@/components/popups/energy';
import Greenhouse from '@/components/popups/greenhouse';
import Water from '@/components/popups/water';
import Mass from '@/components/popups/spacex-mass-distribution';
import Living from '@/components/popups/living-quarters';
import Food from '@/components/popups/food-supply';
import Nuclear from '@/components/popups/nuclear-table';

import { NumberTicker } from '@/components/magicui/number-ticker';
import { AuroraText } from '@/components/magicui/aurora-text';

import Image from 'next/image';

export default function Home() {
  return (
    <ObjectContextProvider>
      <div className='h-[1800vh] relative z-[-100]'>
        <div className='fixed z-[-25] top-0 h-screen w-full bg-transparent' />
        <div className='sceneWrap fixed z-[-10] top-0 h-screen w-full'>
          <SceneWrap />
        </div>

        <div className='up z-10 w-full absolute overflow-hidden hidden md:inline-block'>
          {/* First page - Aurora Text centered in the middle */}
          <div className='page h-screen min-h-screen'>
            <div className='container m-auto flex flex-col justify-center items-center h-[100vh]'>
              <h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white'>
                The <AuroraText>Seed</AuroraText>
              </h1>
            </div>
          </div>

          {/* Second page - Mass component on the right */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'></div>
          </div>

          {/* Spacer page */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <Mass />
            </div>
          </div>

          {/* Fourth page - Component on the left */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end items-start h-[100vh]'>
              {/* You can place any component here if needed */}
            </div>
          </div>

          {/* Fifth page - Energy component on the right */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-start items-start h-[100vh]'>
              <Nuclear />
            </div>
          </div>
          
          {/* Seventh page - Water component on the left */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-start items-start h-[100vh]'>
              <Energy />
            </div>
          </div>

          {/* Spacer page */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>

          {/* Seventh page - Water component on the left */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-start items-start h-[100vh]'>
              <Atmospheric />
            </div>
          </div>

          {/* Spacer page */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>

          {/* Ninth page - Greenhouse component on the right */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <Water />
            </div>
          </div>

          {/* Tenth page - Atmospheric component on the left */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end items-start h-[100vh]'>
              <Food />
            </div>
          </div>

          {/* The remaining spacer pages */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>

          {/* Final page */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-center items-center h-[50vh]'>
              {/* Your final page content is commented out in the original code */}
            </div>
          </div>
        </div>
      </div>
    </ObjectContextProvider>
  );
}
