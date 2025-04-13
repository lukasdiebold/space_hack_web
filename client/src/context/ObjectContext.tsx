'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

// Define reusable types
interface Vector3 {
  x: number;
  y: number;
  z: number;
}

interface ObjectProperties {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  size: { width: number; height: number; depth: number };
  center: Vector3;
}

interface ObjectContextType {
  objects: Record<string, ObjectProperties>;
  updateObject: (
    objectId: string,
    properties: Partial<ObjectProperties>
  ) => void;
  animationProgress: any;
  setAnimationProgress: React.Dispatch<React.SetStateAction<{}>>;
}

// Create the context
const ObjectContext = createContext<ObjectContextType | null>(null);

// Context provider component
export function ObjectContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Store positions and other properties of multiple objects

  const factor = 2; // Adjust this factor as needed
  const [objects, setObjects] = useState<Record<string, ObjectProperties>>({
    mars: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: 8 * factor,
      size: { width: 0, height: 0, depth: 0 },
      center: { x: 0, y: 0, z: 0 },
    },
    rocket: {
      position: [0, 0, 0],
      rotation: [0, 0, -Math.PI / 2],
      scale: 0.005 * factor,
      size: { width: 0, height: 0, depth: 0 },
      center: { x: 0, y: 0, z: 0 },
    },
  });

  // Update object properties
  const updateObject = useCallback(
    (objectId: string, properties: Partial<ObjectProperties>) => {
      setObjects((prev) => ({
        ...prev,
        [objectId]: {
          ...prev[objectId],
          ...properties,
        },
      }));
    },
    []
  );

  // Animation progress state (for framer motion animations)
  const [animationProgress, setAnimationProgress] = useState({});

  return (
    <ObjectContext.Provider
      value={{
        objects,
        updateObject,
        animationProgress,
        setAnimationProgress,
      }}>
      {children}
    </ObjectContext.Provider>
  );
}

// Custom hook to use the context
export function useObjectContext() {
  const context = useContext(ObjectContext);
  if (!context) {
    throw new Error(
      'useObjectContext must be used within an ObjectContextProvider'
    );
  }
  return context;
}
