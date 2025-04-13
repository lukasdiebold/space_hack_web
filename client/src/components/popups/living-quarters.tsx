'use client';
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function LivingQuartersMonitor() {
  // Current metrics
  const occupancy = 32; // people
  const capacity = 40; // people
  const oxygenLevel = 20.8; // %
  const co2Level = 620; // ppm
  const temperature = 21.5; // °C
  const humidity = 45; // %
  const waterConsumption = 640; // L/day
  const powerConsumption = 175; // kW
  
  // Air quality history
  const airQualityData = [
    { time: '06:00', o2: 20.7, co2: 640, temp: 21.2, hum: 44 },
    { time: '09:00', o2: 20.7, co2: 680, temp: 21.3, hum: 45 },
    { time: '12:00', o2: 20.8, co2: 650, temp: 21.5, hum: 46 },
    { time: '15:00', o2: 20.9, co2: 630, temp: 21.6, hum: 45 },
    { time: '18:00', o2: 20.8, co2: 620, temp: 21.5, hum: 45 },
    { time: '21:00', o2: 20.8, co2: 610, temp: 21.4, hum: 44 },
  ];
  
  // Room occupancy data
  const roomData = [
    { name: 'Common Area', current: 8, capacity: 12 },
    { name: 'Quarter A', current: 6, capacity: 6 },
    { name: 'Quarter B', current: 5, capacity: 6 },
    { name: 'Quarter C', current: 4, capacity: 6 },
    { name: 'Quarter D', current: 6, capacity: 6 },
    { name: 'Research', current: 3, capacity: 4 }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700">Living Quarters</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-purple-500 mr-2"></span>
            Living Quarters Status
          </DialogTitle>
          <DialogDescription>
            Occupancy, environmental conditions, and resource usage
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {/* Occupancy Overview */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Habitat Occupancy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total Occupancy</div>
                  <div className="text-2xl font-bold">{occupancy}/{capacity}</div>
                  <Progress value={(occupancy/capacity)*100} className="h-2 mt-2" />
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {roomData.map((room) => (
                    <div key={room.name} className="p-1 bg-gray-50 rounded text-center">
                      <div className="text-xs">{room.name}</div>
                      <div className="font-medium">{room.current}/{room.capacity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Environmental Metrics */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Environmental Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {/* Oxygen Level */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Oxygen Level</span>
                    <span className="font-medium">{oxygenLevel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full ${
                        oxygenLevel > 23 || oxygenLevel < 19.5 ? 'bg-red-600' : 
                        oxygenLevel > 22 || oxygenLevel < 20 ? 'bg-yellow-400' : 
                        'bg-green-600'
                      }`} 
                      style={{ width: `${(oxygenLevel/25)*100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* CO2 Level */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>CO₂ Level</span>
                    <span className="font-medium">{co2Level} ppm</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full ${
                        co2Level > 1000 ? 'bg-red-600' : 
                        co2Level > 800 ? 'bg-yellow-400' : 
                        'bg-green-600'
                      }`} 
                      style={{ width: `${(co2Level/1500)*100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Temperature */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Temperature</span>
                    <span className="font-medium">{temperature}°C</span>
                  </div>
                  <Progress value={((temperature-18)/8)*100} className="h-2" />
                </div>
                
                {/* Humidity */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Humidity</span>
                    <span className="font-medium">{humidity}%</span>
                  </div>
                  <Progress value={humidity} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Air Quality Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Air Quality Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={airQualityData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" orientation="left" domain={[20.5, 21]} />
                  <YAxis yAxisId="right" orientation="right" domain={[500, 800]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="o2" 
                    stroke="#8b5cf6" 
                    name="O₂ (%)" 
                    dot={false}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="co2" 
                    stroke="#64748b" 
                    name="CO₂ (ppm)" 
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          {/* Resource Consumption */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Water Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="text-xl font-bold">{waterConsumption} L/day</div>
                <div className="text-xs text-gray-500">{Math.round(waterConsumption/occupancy)} liters per person</div>
                <Progress value={75} className="h-2 mt-2" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Hygiene: 65%</span>
                  <span>Cooking: 20%</span>
                  <span>Drinking: 15%</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Power Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="text-xl font-bold">{powerConsumption} kW</div>
                <div className="text-xs text-gray-500">{Math.round(powerConsumption/occupancy)} kW per person</div>
                <Progress value={68} className="h-2 mt-2" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Climate: 45%</span>
                  <span>Lighting: 25%</span>
                  <span>Other: 30%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
