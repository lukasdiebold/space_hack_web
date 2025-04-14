'use client';
import React from 'react';
import Scene from '@/components/3d/Scene';
import { Canvas } from '@react-three/fiber';

const SceneWrap = () => {
  return (
    <Canvas style={{ backgroundColor: 'black' }} shadows>
      <Scene />
    </Canvas>
  );
};

export default SceneWrap;
