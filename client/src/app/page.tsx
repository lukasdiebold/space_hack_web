import SceneWrap from '@/components/3d/Wrapper';
import { ObjectContextProvider } from '@/context/ObjectContext';
import Atmospheric from '@/components/popups/atmospheric';
import Energy from '@/components/popups/energy';
import Greenhouse from '@/components/popups/greenhouse';
import Water from '@/components/popups/water';
import Mass from '@/components/popups/spacex-mass-distribution';

import { NumberTicker } from '@/components/magicui/number-ticker';
import { AuroraText } from '@/components/magicui/aurora-text';

export default function Home() {
  return (
    <ObjectContextProvider>
      <div className='h-[1800vh] relative z-[-100] '>
        <div className='fixed z-[-25] top-0 h-screen w-full bg-transparent' />
        <div className='sceneWrap fixed z-[-10] top-0 h-screen w-full '>
          <SceneWrap />
        </div>

        <div className='up z-10  w-full absolute overflow-hidden hidden md:inline-block'>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-center items-end h-[100vh]'>
              <h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white'>
                The <AuroraText>Seed</AuroraText>
              </h1>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <Mass />
            </div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                <Atmospheric />
              </p>
            </div>
          </div>

          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
          <div className='page h-screen '>
            <div className='container m-auto flex flex-col justify-end items-end h-[100vh]'>
              <p className='text-white  lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl '>
                AAA
              </p>
            </div>
          </div>
        </div>
      </div>
    </ObjectContextProvider>
  );
}
