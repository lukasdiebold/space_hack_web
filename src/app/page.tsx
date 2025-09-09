import SceneWrap from '@/components/3d/Wrapper';
import { ObjectContextProvider } from '@/context/ObjectContext';
import Atmospheric from '@/components/popups/atmospheric';
import Energy from '@/components/popups/energy';
import Water from '@/components/popups/water';
import Mass from '@/components/popups/spacex-mass-distribution';
import Food from '@/components/popups/food-supply';
import Nuclear from '@/components/popups/nuclear-table';

import { AuroraText } from '@/components/magicui/aurora-text';
import { HyperText } from '@/components/magicui/hyper-text';
import { ScrollProgress } from '@/components/magicui/scroll-progress';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

import image from './../../public/frame.png';

export default function Home() {
  const pages = [
    {
      alignItems: 'center',
      justifyContent: 'center',
      component: (
        <h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white'>
          The <AuroraText>Seed</AuroraText>
        </h1>
      ),
    },
    {},
    {
      alignItems: 'end',
      justifyContent: 'end',
      component: <Mass />,
    },
    {
      alignItems: 'start',
      justifyContent: 'end',
    },
    {
      alignItems: 'start',
      justifyContent: 'start',
      component: <Nuclear />,
    },
    {
      alignItems: 'end',
      justifyContent: 'center',
      component: (
        <Card className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
          <CardHeader className='border-b border-white/10'>
            <div className='flex items-center'>
              <CardTitle className='text-indigo-100'>
                Colony Dashboard
              </CardTitle>
            </div>
            <CardDescription className='text-indigo-200/70'>
              To manage efficiently manage, maintain and grow the different
              components of a Mars colony we developed a dashboard that provides
              an overview over the state of all systems relevant to the
              inhabitant&apos;s survival. Key metrics such as energy consumption
              and production, current irradiation values and greenhouse
              temperature can me instantly monitored and controlled. This allows
              for fast response in case of hazardous situations and
              malfunctions.
            </CardDescription>
          </CardHeader>
        </Card>
      ),
    },
    {
      alignItems: 'start',
      justifyContent: 'center',
      component: <Energy />,
    },
    {
      alignItems: 'end',
      justifyContent: 'center',
      component: <Atmospheric />,
    },
    {},
    {
      alignItems: 'start',
      justifyContent: 'start',
      component: (
        <Card className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
          <CardHeader className='border-b border-white/10'>
            <div className='flex items-center'>
              <CardTitle className='text-indigo-100'>
                Landing Position and water availability
              </CardTitle>
            </div>
            <CardDescription className='text-indigo-200/70'>
              The Landing position based on the stranded Aristronaut&apos;s
              position will determine the water availability and temperature
              around the settlement. If stranded at one of Mars&apos; poles, the
              Aristraunaut will be able to take advantage of abundant water ice.
              Accessing this water is essential for both life support and
              potential propellant production. Several technologies can be
              employed for water ice extraction.
            </CardDescription>
          </CardHeader>
        </Card>
      ),
    },
    {},
    {},
    {
      alignItems: 'start',
      justifyContent: 'end',
      component: <Water />,
    },
    {},
    {},
    {
      alignItems: 'end',
      justifyContent: 'center',
      component: <Food />,
    },
    {},
    {
      alignItems: 'center',
      justifyContent: 'center',
      component: (
        <Card className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
          <CardHeader className='border-b border-white/10 flex justify-center text-center'>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-indigo-100'>Our resources</CardTitle>
            </div>
          </CardHeader>
          <CardContent className='space-y-6 pt-6 flex justify-center items-center'>
            <Button className='mx-auto'>
              <Link href='https://docs.google.com/document/d/1BLrFvee2hIgxi1khPur8gpsBbnMxCRPGLkHmKNqLlc4/edit?usp=sharing'>
                PDF
              </Link>
            </Button>
          </CardContent>
        </Card>
      ),
    },
    {},
    {
      alignItems: 'center',
      justifyContent: 'center',
      customClass: 'flex items-end',
      component: (
        <>
          <h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white'>
            <HyperText>The Seed</HyperText>
          </h1>
          <div className='flex flex-col items-center mt-4'>
            <Button>
              <Link href='/dashboard'>Access Terminal</Link>
            </Button>
            <Image
              className='py-8'
              style={{ borderRadius: '10px', overflow: 'hidden' }}
              alt='qrcode'
              src={image}
              width={300}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <ObjectContextProvider>
      <ScrollProgress />
      <div className='h-[1800vh] z-[-100]'>
        <div className='sceneWrap fixed z-[-10] top-0 h-screen w-full'>
          <SceneWrap />
        </div>

        <div className='up z-10 w-full md:inline-block'>
          {pages.map((page, index) => {
            // Default values for alignment
            const alignItems = page.alignItems || 'center';
            const justifyContent = page.justifyContent || 'center';

            return (
              <div
                key={index}
                className={`page h-screen ${page.customClass || ''}`}>
                <div
                  className={`container m-auto flex flex-col h-[100vh] justify-${justifyContent} items-${alignItems}`}>
                  {page.component || null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ObjectContextProvider>
  );
}
