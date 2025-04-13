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

export default function GreenhouseMonitor() {
  // Weekly data for oxygen production and CO2 absorption
  const gasExchangeData = [
    { day: 'Mon', oxygen: 420, co2: 470 },
    { day: 'Tue', oxygen: 430, co2: 480 },
    { day: 'Wed', oxygen: 448, co2: 495 },
    { day: 'Thu', oxygen: 460, co2: 505 },
    { day: 'Fri', oxygen: 455, co2: 500 },
    { day: 'Sat', oxygen: 450, co2: 495 },
    { day: 'Sun', oxygen: 445, co2: 490 },
  ];

  // Current metrics
  const temperature = 24.5; // °C
  const humidity = 65; // %
  const waterUsage = 340; // L/day

  // Plant health status
  const plantHealth = [
    { species: 'Lettuce', health: 95 },
    { species: 'Potatoes', health: 87 },
    { species: 'Tomatoes', health: 92 },
    { species: 'Soybeans', health: 80 },
    { species: 'Wheat', health: 88 },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-green-600 hover:bg-green-700'>Greenhouse</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle className='flex items-center'>
            <span className='h-3 w-3 rounded-full bg-green-500 mr-2'></span>
            Greenhouse Status
          </DialogTitle>
          <DialogDescription>
            Plant growth, gas exchange, and environmental conditions
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-6 py-4'>
          {/* Temperature and Humidity */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <div className='flex justify-between text-sm mb-1'>
                <span>Temperature</span>
                <span className='font-bold'>{temperature}°C</span>
              </div>
              <div className='h-2 w-full bg-gray-200 rounded-full overflow-hidden'>
                <div
                  className='h-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500'
                  style={{ width: `${(temperature / 40) * 100}%` }}></div>
              </div>
              <div className='flex justify-between text-xs text-gray-500 mt-1'>
                <span>10°C</span>
                <span>25°C</span>
                <span>40°C</span>
              </div>
            </div>

            <div>
              <div className='flex justify-between text-sm mb-1'>
                <span>Humidity</span>
                <span className='font-bold'>{humidity}%</span>
              </div>
              <Progress value={humidity} className='h-2' />
            </div>
          </div>

          {/* Gas Exchange Graph */}
          <div className='bg-gray-50 p-4 rounded-lg border'>
            <h3 className='text-sm font-medium mb-4'>Weekly Gas Exchange</h3>
            <ResponsiveContainer width='100%' height={200}>
              <LineChart
                data={gasExchangeData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='day' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='oxygen'
                  stroke='#16a34a'
                  name='O₂ Production (L/day)'
                />
                <Line
                  type='monotone'
                  dataKey='co2'
                  stroke='#64748b'
                  name='CO₂ Absorption (L/day)'
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Plant Health */}
          <div>
            <div className='flex justify-between mb-2'>
              <h3 className='text-sm font-medium'>Plant Health Status</h3>
              <div className='text-sm'>
                <span className='text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800'>
                  Water: {waterUsage} L/day
                </span>
              </div>
            </div>
            <div className='space-y-2'>
              {plantHealth.map((plant) => (
                <div key={plant.species} className='flex items-center'>
                  <div className='w-24 text-xs'>{plant.species}</div>
                  <div className='flex-1'>
                    <Progress
                      value={plant.health}
                      className={`h-2 ${
                        plant.health > 90
                          ? 'bg-green-100'
                          : plant.health > 80
                          ? 'bg-yellow-100'
                          : 'bg-red-100'
                      }`}
                    />
                  </div>
                  <div className='w-12 text-right text-xs'>{plant.health}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
