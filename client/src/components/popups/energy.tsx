import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-yellow-600 hover:bg-yellow-700'>
          Energy Monitor
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle className='flex items-center'>
            <span className='h-3 w-3 rounded-full bg-green-500 mr-2'></span>
            Nuclear Reactor Status
          </DialogTitle>
          <DialogDescription>
            Current power generation and consumption metrics
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-6 py-4'>
          {/* Power Output and Fuel Level */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <div className='flex justify-between text-sm'>
                <span>Current Power</span>
                <span className='font-bold'>{currentPower} kW</span>
              </div>
              <Progress value={currentPower / 5} className='h-2' />
            </div>
            <div className='space-y-2'>
              <div className='flex justify-between text-sm'>
                <span>Fuel Level</span>
                <span className='font-bold'>{fuelLevel}%</span>
              </div>
              <Progress value={fuelLevel} className='h-2' />
            </div>
          </div>

          {/* Efficiency */}
          <div className='space-y-2'>
            <div className='flex justify-between text-sm'>
              <span>Reactor Efficiency</span>
              <span className='font-bold'>{efficiency}%</span>
            </div>
            <Progress value={efficiency} className='h-2' />
          </div>

          {/* Power Generation Graph */}
          <div className='bg-gray-50 p-4 rounded-lg border'>
            <h3 className='text-sm font-medium mb-4'>24-Hour Power Profile</h3>
            <ResponsiveContainer width='100%' height={200}>
              <LineChart
                data={powerData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='time' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='output'
                  stroke='#eab308'
                  name='Generation (kW)'
                />
                <Line
                  type='monotone'
                  dataKey='consumption'
                  stroke='#64748b'
                  name='Consumption (kW)'
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* System Consumption */}
          <div>
            <h3 className='text-sm font-medium mb-2'>
              Power Consumption by System
            </h3>
            <div className='space-y-2'>
              {consumptionBreakdown.map((item) => (
                <div key={item.name} className='flex items-center'>
                  <div className='w-24 text-xs'>{item.name}</div>
                  <div className='flex-1'>
                    <Progress
                      value={(item.value / 360) * 100}
                      className='h-2'
                    />
                  </div>
                  <div className='w-12 text-right text-xs'>{item.value} kW</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
