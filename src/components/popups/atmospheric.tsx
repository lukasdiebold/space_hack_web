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
  ResponsiveContainer,
} from 'recharts';

export default function AtmosphericRegulationCard() {
  // Current atmospheric metrics
  const oxygenLevel = 21.2; // %
  const co2Level = 820; // ppm
  const pressure = 101.3; // kPa (Earth-like)
  const temperature = 22.6; // °C
  const filtrationEfficiency = 96; // %

  // Historical data for last 24 hours (hourly)
  const historicalData = [
    { time: '00:00', oxygen: 21.1, co2: 810, pressure: 101.2, temp: 22.0 },
    { time: '03:00', oxygen: 21.0, co2: 830, pressure: 101.1, temp: 21.8 },
    { time: '06:00', oxygen: 21.0, co2: 850, pressure: 101.2, temp: 21.9 },
    { time: '09:00', oxygen: 21.1, co2: 840, pressure: 101.3, temp: 22.2 },
    { time: '12:00', oxygen: 21.2, co2: 820, pressure: 101.4, temp: 22.6 },
    { time: '15:00', oxygen: 21.3, co2: 810, pressure: 101.3, temp: 22.8 },
    { time: '18:00', oxygen: 21.2, co2: 815, pressure: 101.3, temp: 22.7 },
    { time: '21:00', oxygen: 21.2, co2: 820, pressure: 101.3, temp: 22.6 },
  ];

  return (
    // <Card className='w-full max-w-lg bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl rounded-xl'>
    <Card
      className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100
'>
      <CardHeader className='border-b border-white/10'>
        <div className='flex items-center'>
          <span className='h-3 w-3 rounded-full bg-green-600 mr-2'></span>
          <CardTitle className='text-indigo-100'>
            Atmospheric Regulation Status
          </CardTitle>
        </div>
        <CardDescription className='text-indigo-200/70'>
        Solid oxide electrolysis/ Electrolysis of water ice
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6 pt-6'>
        {/* Current Metrics */}
        <div className='grid grid-cols-2 gap-x-4 gap-y-4'>
          {/* Oxygen Level */}
          <div>
            <div className='flex justify-between text-sm mb-1'>
              <span className='text-indigo-100/80'>Oxygen Level</span>
              <span className='font-bold text-indigo-100'>{oxygenLevel}%</span>
            </div>
            <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
              <div
                className={`h-full rounded-full ${
                  oxygenLevel > 23 || oxygenLevel < 19.5
                    ? 'bg-red-600'
                    : oxygenLevel > 22 || oxygenLevel < 20
                    ? 'bg-yellow-400'
                    : 'bg-green-600'
                }`}
                style={{ width: `${(oxygenLevel / 25) * 100}%` }}></div>
            </div>
            <div className='flex justify-between text-xs text-indigo-100/60 mt-1'>
              <span>18%</span>
              <span>21%</span>
              <span>24%</span>
            </div>
          </div>

          {/* CO2 Level */}
          <div>
            <div className='flex justify-between text-sm mb-1'>
              <span className='text-indigo-100/80'>CO₂ Level</span>
              <span className='font-bold text-indigo-100'>{co2Level} ppm</span>
            </div>
            <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
              <div
                className={`h-full rounded-full ${
                  co2Level > 1500
                    ? 'bg-red-600'
                    : co2Level > 1000
                    ? 'bg-yellow-400'
                    : 'bg-green-600'
                }`}
                style={{ width: `${(co2Level / 2000) * 100}%` }}></div>
            </div>
            <div className='flex justify-between text-xs text-indigo-100/60 mt-1'>
              <span>400</span>
              <span>1000</span>
              <span>2000</span>
            </div>
          </div>

          {/* Pressure */}
          <div>
            <div className='flex justify-between text-sm mb-1'>
              <span className='text-indigo-100/80'>Pressure</span>
              <span className='font-bold text-indigo-100'>{pressure} kPa</span>
            </div>
            {/* <Progress value={pressure} max={120}  className='h-2.5 bg-white' />
             */}
            <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
              <div
                className={`h-full rounded-full bg-white`}
                style={{ width: `${(oxygenLevel / 25) * 100}%` }}></div>
            </div>
          </div>

          {/* Temperature */}
          <div>
            <div className='flex justify-between text-sm mb-1'>
              <span className='text-indigo-100/80'>Temperature</span>
              <span className='font-bold text-indigo-100'>{temperature}°C</span>
            </div>
            <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
              <div
                className='h-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500'
                style={{
                  width: `${((temperature + 10) / 40) * 100}%`,
                }}></div>
              s
            </div>
            <div className='flex justify-between text-xs text-indigo-100/60 mt-1'>
              <span>10°C</span>
              <span>22°C</span>
              <span>30°C</span>
            </div>
          </div>
        </div>

        {/* Filtration System */}
        <div className='space-y-2'>
          <div className='flex justify-between text-sm'>
            <span className='text-indigo-100/80'>
              Air Filtration Efficiency
            </span>
            <span className='font-bold text-indigo-100'>
              {filtrationEfficiency}%
            </span>
          </div>
          {/* <Progress value={filtrationEfficiency} className='h-2 bg-white/30' /> */}
          <div className='w-full bg-white/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
            <div
              className={`h-full rounded-full bg-white`}
              style={{ width: `${filtrationEfficiency}%` }}></div>
          </div>

          <div className='text-xs text-indigo-100/60'>
            Next maintenance scheduled: 14 days
          </div>
        </div>

        {/* Historical Data Graph */}
        <div className=' backdrop-blur-md p-4 rounded-lg border border-white/20'>
          <h3 className='text-sm font-medium mb-4 text-indigo-100'>
            24-Hour Atmospheric Trends
          </h3>
          <div className='flex justify-end space-x-2 mb-2'>
            <button className='px-2 py-1 text-xs bg-indigo-100/80  rounded backdrop-blur-sm'>
              Oxygen
            </button>
            <button className='px-2 py-1 text-xs bg-white/20 text-indigo-200/70 rounded backdrop-blur-sm'>
              CO₂
            </button>
            <button className='px-2 py-1 text-xs bg-white/20 text-indigo-200/70 rounded backdrop-blur-sm'>
              Pressure
            </button>
            <button className='px-2 py-1 text-xs bg-white/20 text-indigo-200/70 rounded backdrop-blur-sm'>
              Temperature
            </button>
          </div>
          <ResponsiveContainer width='100%' height={180}>
            <LineChart
              data={historicalData}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray='3 3'
                opacity={0.2}
                stroke='#fff'
              />
              <XAxis dataKey='time' stroke='#fff' />
              <YAxis domain={[20.8, 21.5]} stroke='#fff' />
              <Tooltip
              // contentStyle={{
              //   backgroundColor: '#000',
              //   backdropFilter: 'blur(4px)',
              // }}
              />
              <Line
                type='monotone'
                dataKey='oxygen'
                stroke='#fff'
                name='O₂ (%)'
                strokeWidth={2}
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* System Status */}
        <div className='grid grid-cols-3 gap-2 text-center'>
          <div className='p-2  backdrop-blur-sm rounded-lg border '>
            <div className='text-xs text-gray-300'>O₂ Generation</div>
            <div className='text-sm font-medium text-white'>Normal</div>
          </div>
          <div className='p-2  backdrop-blur-sm rounded-lg border '>
            <div className='text-xs text-gray-300'>CO₂ Scrubbers</div>
            <div className='text-sm font-medium text-white'>Optimal</div>
          </div>
          <div className='p-2  backdrop-blur-sm rounded-lg border '>
            <div className='text-xs text-gray-300'>HVAC</div>
            <div className='text-sm font-medium text-white'>Normal</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
