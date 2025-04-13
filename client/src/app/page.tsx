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

import { PulsatingButton } from '@/components/magicui/pulsating-button';
import { HyperText } from '@/components/magicui/hyper-text';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

import { CardContent } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';

import { ScrollProgress } from '@/components/magicui/scroll-progress';

export default function Home() {
  return (
    <ObjectContextProvider>
      <ScrollProgress />
      <div className='h-[1800vh] z-[-100]'>
        <div className='sceneWrap fixed z-[-10] top-0 h-screen w-full'>
          <SceneWrap />
        </div>

        <div className='up z-10 w-full md:inline-block'>
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
            <div className='container m-auto flex flex-col justify-center items-end h-[100vh]'>
              <Card className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
                <CardHeader className='border-b border-white/10'>
                  <div className='flex items-center'>
                    {/* <span className='h-3 w-3 rounded-full bg-green-600 mr-2'></span> */}
                    <CardTitle className='text-indigo-100'>
                      Colony Dashboard
                    </CardTitle>
                  </div>
                  <CardDescription className='text-indigo-200/70'>
                    To manage efficiently manage, maintain and grow the
                    different components of a Mars colony we developed a
                    dashboard that provides an overview over the state of all
                    systems relevant to the inhabitant&apos;s survival. Key
                    metrics such as energy consumption and production, current
                    irradiation values and greenhouse temperature can me
                    instantly monitored and controlled. This allows for fast
                    response in case of hazardous situations and malfunctions.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Spacer page */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-center items-start h-[100vh]'>
              <Energy />
            </div>
          </div>

          {/* Seventh page - Water component on the left */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-center items-end h-[100vh]'>
              <Atmospheric />
            </div>
          </div>

          {/* Spacer page */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>

          {/* Ninth page - Greenhouse component on the right */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-start items-start h-[100vh]'>
              <Card className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
                <CardHeader className='border-b border-white/10'>
                  <div className='flex items-center'>
                    {/* <span className='h-3 w-3 rounded-full bg-green-600 mr-2'></span> */}
                    <CardTitle className='text-indigo-100'>
                      Landing Position and water availability
                    </CardTitle>
                  </div>
                  <CardDescription className='text-indigo-200/70'>
                    The Landing position based on the stranded
                    Aristronaut&apos;s position will determine the water
                    availability and temperature around the settlement. If
                    stranded at one of Mars&apos; poles, the Aristraunaut will
                    be able to take advantage of abundant water ice. Accessing
                    this water is essential for both life support and potential
                    propellant production. Several technologies can be employed
                    for water ice extraction.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Tenth page - Atmospheric component on the left */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end items-start h-[100vh]'></div>
          </div>

          {/* The remaining spacer pages */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-center items-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end items-start h-[100vh]'>
              <Water />
            </div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-center items-end h-[100vh]'>
              <Food />
            </div>
          </div>
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>

          {/* <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-center items-center h-[50vh]'>
              <Button>
                <Link href='/dashboard'>Access Terminal</Link>
              </Button>
            </div>
          </div> */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-center items-center h-[50vh]'>
              <Card className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
                <CardHeader className='border-b border-white/10 flex justify-center text-center'>
                  <div className='flex items-center justify-center'>
                    {/* <span className='h-3 w-3 rounded-full bg-green-600 mr-2'></span> */}
                    <CardTitle className='text-indigo-100'>
                      Our resources
                    </CardTitle>
                  </div>
                  {/* <CardDescription className='text-indigo-200/70'>
    </CardDescription> */}
                </CardHeader>
                <CardContent className='space-y-6 pt-6 flex justify-center items-center'>
                  <Button className='mx-auto'>
                    <Link href='https://docs.google.com/document/d/1BLrFvee2hIgxi1khPur8gpsBbnMxCRPGLkHmKNqLlc4/edit?usp=sharing'>
                      PDF
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-end h-[100vh]'></div>
          </div>

          {/* Final page */}
          <div className='page h-screen'>
            <div className='container m-auto flex flex-col justify-center items-center h-[50vh]'>
              <h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white'>
                <HyperText>The Seed</HyperText>
              </h1>
              <div className='flex flex-col items-center mt-4'>
                <Button>
                  <Link href='/dashboard'>Access Terminal</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ObjectContextProvider>
  );
}
