'use client';
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function SpaceXMassDistribution() {
  const [payload, setPayload] = useState(50);
  
  // SpaceX Super Heavy booster and Starship specifications (approximate values in tons)
  const boosterDryMass = 200;
  const boosterFuelMass = 3400;
  
  const starshipDryMass = 120;
  const starshipMaxFuelMass = 1200;
  
  // Calculate starship fuel mass based on payload (simplified model)
  // As payload increases, available fuel mass decreases
  const starshipFuelMass = Math.max(starshipMaxFuelMass - (payload * 0.5), starshipMaxFuelMass * 0.7);
  
  const totalMass = boosterDryMass + boosterFuelMass + starshipDryMass + starshipFuelMass + payload;
  
  const massData = [
    {
      name: 'Super Heavy Booster',
      Fuel: boosterFuelMass,
      'Dry Mass': boosterDryMass,
      Payload: 0,
    },
    {
      name: 'Starship',
      Fuel: starshipFuelMass,
      'Dry Mass': starshipDryMass,
      Payload: payload,
    }
  ];
  
  const percentageData = [
    {
      name: 'Super Heavy Booster',
      Fuel: (boosterFuelMass / totalMass * 100).toFixed(1),
      'Dry Mass': (boosterDryMass / totalMass * 100).toFixed(1),
      Payload: 0,
    },
    {
      name: 'Starship',
      Fuel: (starshipFuelMass / totalMass * 100).toFixed(1),
      'Dry Mass': (starshipDryMass / totalMass * 100).toFixed(1),
      Payload: (payload / totalMass * 100).toFixed(1),
    }
  ];

  return (
    <Card className='w-full max-w-2xl bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
      <CardHeader className='border-b border-white/10'>
        <div className='flex items-center'>
          <span className='h-3 w-3 rounded-full bg-orange-500 mr-2'></span>
          <CardTitle className='text-indigo-100'>
            SpaceX Starship Mass Distribution
          </CardTitle>
        </div>
        <CardDescription className='text-indigo-200/70'>
          Adjust the payload mass to see how it affects the distribution of mass in the Starship system heading to Mars.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-indigo-100/80">Payload Mass: {payload} tons</span>
            <span className="text-indigo-100/60">(0-150 tons)</span>
          </div>
          <div className="py-4">
            <Slider
              value={[payload]}
              min={0}
              max={150}
              step={1}
              onValueChange={(value) => setPayload(value[0])}
              className="w-full z-30"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-indigo-100">Absolute Mass Distribution (tons)</h3>
          <div className="backdrop-blur-md p-4 rounded-lg border border-white/20 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={massData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} stroke="#fff" />
                <XAxis type="number" stroke="#fff" />
                <YAxis dataKey="name" type="category" width={120} stroke="#fff" />
                <Tooltip formatter={(value) => `${value} tons`} />
                <Legend />
                <Bar dataKey="Fuel" fill="#3b82f6" stackId="a" />
                <Bar dataKey="Dry Mass" fill="#6b7280" stackId="a" />
                <Bar dataKey="Payload" fill="#10b981" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-indigo-100">Percentage Mass Distribution (%)</h3>
          <div className="backdrop-blur-md p-4 rounded-lg border border-white/20 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={percentageData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} stroke="#fff" />
                <XAxis type="number" domain={[0, 100]} stroke="#fff" />
                <YAxis dataKey="name" type="category" width={120} stroke="#fff" />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="Fuel" fill="#3b82f6" stackId="a" />
                <Bar dataKey="Dry Mass" fill="#6b7280" stackId="a" />
                <Bar dataKey="Payload" fill="#10b981" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="backdrop-blur-md p-4 rounded-lg border border-white/20">
          <h3 className="text-sm font-medium mb-2 text-indigo-100">Mass Summary</h3>
          <ul className="space-y-1 text-indigo-100/80 text-sm">
            <li><span className="font-medium">Total Mass:</span> {totalMass.toFixed(0)} tons</li>
            <li><span className="font-medium">Fuel Percentage:</span> {((boosterFuelMass + starshipFuelMass) / totalMass * 100).toFixed(1)}%</li>
            <li><span className="font-medium">Dry Mass Percentage:</span> {((boosterDryMass + starshipDryMass) / totalMass * 100).toFixed(1)}%</li>
            <li><span className="font-medium">Payload Percentage:</span> {(payload / totalMass * 100).toFixed(1)}%</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
