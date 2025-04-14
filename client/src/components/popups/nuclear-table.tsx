'use client';

import React from 'react';

export default function NuclearReactorTable() {
  const reactors = [
    {
      reactorType: 'Radioisotope Thermoelectric Generator (RTG)',
      powerOutput: '~0.11',
      fuelType: 'Plutonium-238',
      keySafetyFeatures: 'Simple, no moving parts',
      developmentStatus: 'Operational on Mars',
      suitabilityForRescueMission:
        'Insufficient power for primary mission needs',
    },
    {
      reactorType: 'Kilopower Heat Pipe Reactor',
      powerOutput: '1-10 (scalable)',
      fuelType: 'Enriched Uranium-235',
      keySafetyFeatures:
        'Inherently safe, passive heat removal, self-regulating',
      developmentStatus: 'Prototype tested successfully (KRUSTY)',
      suitabilityForRescueMission:
        'Strong candidate due to scalability and demonstrated technology',
    },
    {
      reactorType: 'Fission Surface Power (FSP)',
      powerOutput: '≥ 40',
      fuelType: 'Low-Enriched Uranium',
      keySafetyFeatures: 'Robust, reliable for crew safety',
      developmentStatus: 'Under development, lunar demonstration planned',
      suitabilityForRescueMission: 'Excellent candidate for high power demands',
    },
    {
      reactorType: 'SAFE-400',
      powerOutput: '100',
      fuelType: 'Uranium Nitride',
      keySafetyFeatures: 'No positive void reactivity coefficient',
      developmentStatus: 'Development in early 2000s, less recent research',
      suitabilityForRescueMission:
        'Potentially high power, but development status less certain',
    },
    {
      reactorType: 'Uranium Molten Salt Reactor (UMSR)',
      powerOutput: 'Conceptual',
      fuelType: 'Uranium-233 (from Th-232)',
      keySafetyFeatures: 'Reduced weight, efficient heat transfer',
      developmentStatus: 'Conceptual',
      suitabilityForRescueMission:
        'Not a near-term solution due to conceptual nature and fuel source',
    },
  ];

  return (
    <div className='w-full bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100'>
      <div className='border-b border-white/10 p-4'>
        <h2 className='text-lg font-medium text-indigo-100'>
          Nuclear Reactor Options for Mars Rescue Mission
        </h2>
      </div>

      <div className='p-4'>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='border-b border-white/10'>
                <th className='text-left p-3 text-indigo-100/80'>
                  Reactor Type
                </th>
                <th className='text-left p-3 text-indigo-100/80'>
                  Power Output (kWe)
                </th>
                <th className='text-left p-3 text-indigo-100/80'>Fuel Type</th>
                <th className='text-left p-3 text-indigo-100/80'>
                  Key Safety Features
                </th>
                <th className='text-left p-3 text-indigo-100/80'>
                  Development Status
                </th>
                <th className='text-left p-3 text-indigo-100/80'>
                  Suitability for Rescue Mission
                </th>
              </tr>
            </thead>
            <tbody>
              {reactors.map((reactor, index) => (
                <tr key={index} className='border-b border-white/10'>
                  <td className='p-3 text-indigo-100'>{reactor.reactorType}</td>
                  <td className='p-3 text-indigo-100'>{reactor.powerOutput}</td>
                  <td className='p-3 text-indigo-100'>{reactor.fuelType}</td>
                  <td className='p-3 text-indigo-100'>
                    {reactor.keySafetyFeatures}
                  </td>
                  <td className='p-3 text-indigo-100'>
                    {reactor.developmentStatus}
                  </td>
                  <td className='p-3 text-indigo-100'>
                    {reactor.suitabilityForRescueMission}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
