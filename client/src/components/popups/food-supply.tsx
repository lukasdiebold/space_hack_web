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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function FoodSupplyMonitor() {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-amber-600 hover:bg-amber-700">Food Supply</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-amber-500 mr-2"></span>
            Food Supply Status
          </DialogTitle>
          <DialogDescription>
            Food inventory, production, and consumption metrics
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {/* Overall Food Status */}
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Total Food Supply</p>
                  <p className="text-2xl font-bold">{foodInventory.toLocaleString()} kg</p>
                  <p className="text-xs text-amber-700 mt-1">
                    {daysRemaining > 100 ? 'Stable Supply' : 
                     daysRemaining > 30 ? 'Monitor Levels' : 'Supply Alert'}
                  </p>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Daily Balance</div>
                  <div className="flex items-baseline mt-1">
                    <span className="text-green-600 font-medium">+{dailyProduction} kg</span>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-red-600 font-medium">-{dailyConsumption} kg</span>
                  </div>
                  <div className="mt-2 text-xs">
                    <span className="font-medium">Est. Supply Duration:</span> {daysRemaining} days
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Food Inventory Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Food Supply by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={foodTypesData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="inventory" fill="#f59e0b" name="Inventory (kg)" />
                  <Bar dataKey="production" fill="#84cc16" name="Daily Production (kg)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          {/* Nutrition and Consumption */}
          <div className="grid grid-cols-2 gap-4">
            {/* Nutrition Breakdown */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Nutritional Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {nutritionData.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>{item.name}</span>
                      <span>{item.percent}%</span>
                    </div>
                    <Progress value={item.percent} className="h-1.5" />
                  </div>
                ))}
                <div className="text-xs text-center pt-2">
                  <span className="font-medium">{caloriesPerPerson} kcal</span>
                  <span className="text-gray-500"> daily per colonist</span>
                </div>
              </CardContent>
            </Card>
            
            {/* Waste and Efficiency */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">System Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Food Waste</span>
                      <span>{foodWaste} kg/day</span>
                    </div>
                    <Progress value={(foodWaste/dailyProduction)*100} className="h-1.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Storage Utilization</span>
                      <span>72%</span>
                    </div>
                    <Progress value={72} className="h-1.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Processing Efficiency</span>
                      <span>91%</span>
                    </div>
                    <Progress value={91} className="h-1.5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Status Indicators */}
          <div className="grid grid-cols-3 gap-2">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-3 text-center">
                <p className="text-xs text-gray-500">Production</p>
                <p className="text-sm font-medium text-green-700">Normal</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-3 text-center">
                <p className="text-xs text-gray-500">Storage</p>
                <p className="text-sm font-medium text-green-700">Optimal</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-3 text-center">
                <p className="text-xs text-gray-500">Processing</p>
                <p className="text-sm font-medium text-green-700">Normal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
