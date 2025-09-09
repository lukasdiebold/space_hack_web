'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function EnergySourceMonitor() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const powerData = [
    { time: '00:00', output: 320, consumption: 280 },
    { time: '04:00', output: 340, consumption: 290 },
    { time: '08:00', output: 380, consumption: 340 },
    { time: '12:00', output: 390, consumption: 360 },
    { time: '16:00', output: 370, consumption: 350 },
    { time: '20:00', output: 350, consumption: 310 },
  ];

  const currentPower = 370; // kW
  const fuelLevel = 78; // %
  const efficiency = 92; // %

  const consumptionBreakdown = [
    { name: 'Life Support', value: 120 },
    { name: 'Agriculture', value: 95 },
    { name: 'Research', value: 60 },
    { name: 'Comms', value: 45 },
    { name: 'Other', value: 40 },
  ];

  const reactorInfo = {
    type: 'Compact Molten Salt Reactor (MSR)',
    manufacturer: 'Thorium Energy Technologies',
    operatingTemp: '700°C',
    coolingSystem: 'Helium-based closed-cycle',
    maintenanceSchedule: 'Quarterly inspection and refueling',
    backupSystems: 'Dual redundant emergency generators',
    safetyRating: 'Class A+',
    lifetimeRemaining: '15 years',
  };

  return (
    <>
      <Card
        onClick={() => setDialogOpen(true)}
        className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100 cursor-pointer hover:border-indigo-200/50 hover:shadow-lg transition-all'>
        <CardHeader className='border-b border-white/10 hover:bg-white/10 transition-colors'>
          <div className='flex items-center'>
            <span className='h-3 w-3 rounded-full bg-green-500 mr-2'></span>
            <CardTitle className='text-indigo-100'>
              Nuclear Reactor Status
            </CardTitle>
          </div>
          <CardDescription className='text-indigo-200/70'>
            Current power generation and consumption metrics
          </CardDescription>
        </CardHeader>

        <CardContent className='space-y-6 pt-6'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <div className='flex justify-between text-sm'>
                <span className='text-indigo-100/80'>Current Power</span>
                <span className='font-bold text-indigo-100'>
                  {currentPower} kW
                </span>
              </div>
              <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
                <div
                  className='h-full rounded-full bg-yellow-400'
                  style={{ width: `${currentPower / 5}%` }}></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex justify-between text-sm'>
                <span className='text-indigo-100/80'>Fuel Level</span>
                <span className='font-bold text-indigo-100'>{fuelLevel}%</span>
              </div>
              <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
                <div
                  className='h-full rounded-full bg-white'
                  style={{ width: `${fuelLevel}%` }}></div>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex justify-between text-sm'>
              <span className='text-indigo-100/80'>Reactor Efficiency</span>
              <span className='font-bold text-indigo-100'>{efficiency}%</span>
            </div>
            <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
              <div
                className='h-full rounded-full bg-white'
                style={{ width: `${efficiency}%` }}></div>
            </div>
          </div>

          <div className='backdrop-blur-md p-4 rounded-lg border border-white/20'>
            <h3 className='text-sm font-medium mb-4 text-indigo-100'>
              24-Hour Power Profile
            </h3>
            <ResponsiveContainer width='100%' height={200}>
              <LineChart
                data={powerData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <CartesianGrid
                  strokeDasharray='3 3'
                  opacity={0.2}
                  stroke='#fff'
                />
                <XAxis dataKey='time' stroke='#fff' />
                <YAxis stroke='#fff' />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='output'
                  stroke='#eab308'
                  name='Generation (kW)'
                  strokeWidth={2}
                />
                <Line
                  type='monotone'
                  dataKey='consumption'
                  stroke='#64748b'
                  name='Consumption (kW)'
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-2 text-indigo-100'>
              Power Consumption by System
            </h3>
            <div className='space-y-2'>
              {consumptionBreakdown.map((item) => (
                <div key={item.name} className='flex items-center'>
                  <div className='w-24 text-xs text-indigo-100'>
                    {item.name}
                  </div>
                  <div className='flex-1'>
                    <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
                      <div
                        className='h-full rounded-full bg-yellow-400'
                        style={{ width: `${(item.value / 360) * 100}%` }}></div>
                    </div>
                  </div>
                  <div className='w-12 text-right text-xs text-indigo-100'>
                    {item.value} kW
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className='max-w-3xl'>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-xl text-indigo-900'>
              Nuclear Reactor Information
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className='space-y-6 text-sm'>
                <p className='text-gray-700'>
                  The nuclear reactor provides primary power for all Mars base
                  operations. This panel displays real-time metrics on power
                  generation, consumption, and reactor status.
                </p>

                <div className='grid grid-cols-2 gap-4 mt-4 border-t pt-4'>
                  <div>
                    <h4 className='font-medium text-indigo-700 mb-2'>
                      Reactor Specifications
                    </h4>
                    <ul className='space-y-1 text-gray-600'>
                      <li>
                        <span className='font-medium'>Type:</span>{' '}
                        {reactorInfo.type}
                      </li>
                      <li>
                        <span className='font-medium'>Manufacturer:</span>{' '}
                        {reactorInfo.manufacturer}
                      </li>
                      <li>
                        <span className='font-medium'>
                          Operating Temperature:
                        </span>{' '}
                        {reactorInfo.operatingTemp}
                      </li>
                      <li>
                        <span className='font-medium'>Cooling System:</span>{' '}
                        {reactorInfo.coolingSystem}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className='font-medium text-indigo-700 mb-2'>
                      Maintenance & Safety
                    </h4>
                    <ul className='space-y-1 text-gray-600'>
                      <li>
                        <span className='font-medium'>
                          Maintenance Schedule:
                        </span>{' '}
                        {reactorInfo.maintenanceSchedule}
                      </li>
                      <li>
                        <span className='font-medium'>Backup Systems:</span>{' '}
                        {reactorInfo.backupSystems}
                      </li>
                      <li>
                        <span className='font-medium'>Safety Rating:</span>{' '}
                        {reactorInfo.safetyRating}
                      </li>
                      <li>
                        <span className='font-medium'>Lifetime Remaining:</span>{' '}
                        {reactorInfo.lifetimeRemaining}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='border-t pt-4'>
                  <h4 className='font-medium text-indigo-700 mb-2'>
                    Power Management
                  </h4>
                  <p className='text-gray-700'>
                    The current power output of {currentPower}kW supports all
                    critical and non-critical systems with a{' '}
                    {currentPower -
                      consumptionBreakdown.reduce(
                        (acc, item) => acc + item.value,
                        0
                      )}
                    kW reserve. With {fuelLevel}% fuel remaining, the next
                    refueling is scheduled in approximately{' '}
                    {Math.floor(fuelLevel / 3)} months.
                  </p>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
