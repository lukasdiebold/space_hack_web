'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function FoodSupplyMonitor() {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  // Current food metrics
  const foodInventory = 8600; // kg
  const dailyProduction = 42; // kg/day
  const dailyConsumption = 38; // kg/day
  const caloriesPerPerson = 2250; // kcal/day
  const foodWaste = 3.2; // kg/day
  
  // Days of supply remaining
  const daysRemaining = Math.floor(foodInventory / (dailyConsumption - dailyProduction));
  
  // Food inventory by type
  const foodTypesData = [
    { name: 'Grains', inventory: 2800, production: 12 },
    { name: 'Vegetables', inventory: 1900, production: 15 },
    { name: 'Proteins', inventory: 1600, production: 6 },
    { name: 'Fruits', inventory: 950, production: 8 },
    { name: 'Dairy', inventory: 850, production: 1 },
    { name: 'Processed', inventory: 500, production: 0 }
  ];
  
  // Nutritional data
  const nutritionData = [
    { name: 'Carbs', percent: 52 },
    { name: 'Protein', percent: 25 },
    { name: 'Fat', percent: 23 }
  ];

  return (
    <>
      <Card className='w-full max-w-lg bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
        <CardHeader className='border-b border-white/10'>
          <div className='flex items-center'>
            <span className='h-3 w-3 rounded-full bg-amber-500 mr-2'></span>
            <CardTitle className='text-indigo-100'>Food Supply Status</CardTitle>
          </div>
          <CardDescription 
            className='text-indigo-200/70 cursor-pointer hover:text-indigo-200'
            onClick={() => setInfoDialogOpen(true)}
          >
            Thermal treatment/ chemical leaching of soil,  Controlled Environment Agriculture (CEA)
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6 pt-6">
          {/* Overall Food Status */}
          <Card className="bg-amber-50/30 border-amber-200/30 backdrop-blur-sm">
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-indigo-100/80">Total Food Supply</p>
                  <p className="text-2xl font-bold text-indigo-100">{foodInventory.toLocaleString()} kg</p>
                  <p className="text-xs text-amber-300 mt-1">
                    {daysRemaining > 100 ? 'Stable Supply' : 
                     daysRemaining > 30 ? 'Monitor Levels' : 'Supply Alert'}
                  </p>
                </div>
                <div>
                  <div className="text-sm text-indigo-100/80">Daily Balance</div>
                  <div className="flex items-baseline mt-1">
                    <span className="text-green-400 font-medium">+{dailyProduction} kg</span>
                    <span className="mx-2 text-indigo-100/60">/</span>
                    <span className="text-red-400 font-medium">-{dailyConsumption} kg</span>
                  </div>
                  <div className="mt-2 text-xs text-indigo-100/80">
                    <span className="font-medium">Est. Supply Duration:</span> {daysRemaining} days
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Food Inventory Chart */}
          <div className="backdrop-blur-md p-4 rounded-lg border border-white/20">
            <h3 className="text-sm font-medium text-indigo-100 mb-4">Food Supply by Category</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={foodTypesData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} stroke="#fff" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Bar dataKey="inventory" fill="#f59e0b" name="Inventory (kg)" />
                <Bar dataKey="production" fill="#84cc16" name="Daily Production (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Nutrition and Consumption */}
          <div className="grid grid-cols-2 gap-4">
            {/* Nutrition Breakdown */}
            <div className="backdrop-blur-md p-4 rounded-lg border border-white/20">
              <h3 className="text-sm font-medium text-indigo-100 mb-3">Nutritional Profile</h3>
              <div className="space-y-3">
                {nutritionData.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-xs text-indigo-100/80">
                      <span>{item.name}</span>
                      <span>{item.percent}%</span>
                    </div>
                    <Progress value={item.percent} className="h-1.5" />
                  </div>
                ))}
                <div className="text-xs text-center pt-2 text-indigo-100/80">
                  <span className="font-medium">{caloriesPerPerson} kcal</span>
                  <span className="text-indigo-100/60"> daily per colonist</span>
                </div>
              </div>
            </div>
            
            {/* Waste and Efficiency */}
            <div className="backdrop-blur-md p-4 rounded-lg border border-white/20">
              <h3 className="text-sm font-medium text-indigo-100 mb-3">System Efficiency</h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-indigo-100/80">
                    <span>Food Waste</span>
                    <span>{foodWaste} kg/day</span>
                  </div>
                  <Progress value={(foodWaste/dailyProduction)*100} className="h-1.5" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-indigo-100/80">
                    <span>Storage Utilization</span>
                    <span>72%</span>
                  </div>
                  <Progress value={72} className="h-1.5" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-indigo-100/80">
                    <span>Processing Efficiency</span>
                    <span>91%</span>
                  </div>
                  <Progress value={91} className="h-1.5" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Status Indicators */}
          <div className="grid grid-cols-3 gap-2">
            <div className="backdrop-blur-md p-3 rounded-lg border border-white/20 text-center">
              <p className="text-xs text-indigo-100/70">Production</p>
              <p className="text-sm font-medium text-green-400">Normal</p>
            </div>
            <div className="backdrop-blur-md p-3 rounded-lg border border-white/20 text-center">
              <p className="text-xs text-indigo-100/70">Storage</p>
              <p className="text-sm font-medium text-green-400">Optimal</p>
            </div>
            <div className="backdrop-blur-md p-3 rounded-lg border border-white/20 text-center">
              <p className="text-xs text-indigo-100/70">Processing</p>
              <p className="text-sm font-medium text-green-400">Normal</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={infoDialogOpen} onOpenChange={setInfoDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Food Supply System Information</AlertDialogTitle>
            <AlertDialogDescription>
              <p className="mb-4">This dashboard provides comprehensive monitoring of the Mars habitat food system, tracking inventory levels, nutritional balance, and production efficiency.</p>
              <p className="mb-4">The food production cycle incorporates hydroponic and aeroponic farming technologies, utilizing specialized Mars-adapted crop varieties that maximize resource efficiency while maintaining nutritional quality.</p>
              <p>Regular monitoring of these metrics is essential for maintaining food security in the isolated Mars environment, where supply chains from Earth are limited by launch windows occurring only every 26 months.</p>
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
