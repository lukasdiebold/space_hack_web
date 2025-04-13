'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
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
  // Sample data for power generation over time
  const powerData = [
    { time: '00:00', output: 320, consumption: 280 },
    { time: '04:00', output: 340, consumption: 290 },
    { time: '08:00', output: 380, consumption: 340 },
    { time: '12:00', output: 390, consumption: 360 },
    { time: '16:00', output: 370, consumption: 350 },
    { time: '20:00', output: 350, consumption: 310 },
  ];

  // Current metrics
  const currentPower = 370; // kW
  const fuelLevel = 78; // %
  const efficiency = 92; // %

  // Power consumption breakdown
  const consumptionBreakdown = [
    { name: 'Life Support', value: 120 },
    { name: 'Agriculture', value: 95 },
    { name: 'Research', value: 60 },
    { name: 'Comms', value: 45 },
    { name: 'Other', value: 40 },
  ];

  return (
    <Card className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
      <CardHeader className='border-b border-white/10'>
        <div className='flex items-center'>
          <span className='h-3 w-3 rounded-full bg-green-500 mr-2'></span>
          <CardTitle className='text-indigo-100'>Nuclear Reactor Status</CardTitle>
        </div>
        <CardDescription className='text-indigo-200/70'>
          Current power generation and consumption metrics
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6 pt-6'>
        {/* Power Output and Fuel Level */}
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <div className='flex justify-between text-sm'>
              <span className='text-indigo-100/80'>Current Power</span>
              <span className='font-bold text-indigo-100'>{currentPower} kW</span>
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

        {/* Efficiency */}
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

        {/* Power Generation Graph */}
        <div className='backdrop-blur-md p-4 rounded-lg border border-white/20'>
          <h3 className='text-sm font-medium mb-4 text-indigo-100'>24-Hour Power Profile</h3>
          <ResponsiveContainer width='100%' height={200}>
            <LineChart
              data={powerData}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray='3 3' opacity={0.2} stroke='#fff' />
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

        {/* System Consumption */}
        <div>
          <h3 className='text-sm font-medium mb-2 text-indigo-100'>
            Power Consumption by System
          </h3>
          <div className='space-y-2'>
            {consumptionBreakdown.map((item) => (
              <div key={item.name} className='flex items-center'>
                <div className='w-24 text-xs text-indigo-100'>{item.name}</div>
                <div className='flex-1'>
                  <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
                    <div
                      className='h-full rounded-full bg-yellow-400'
                      style={{ width: `${(item.value / 360) * 100}%` }}></div>
                  </div>
                </div>
                <div className='w-12 text-right text-xs text-indigo-100'>{item.value} kW</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
