"use client";

import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { useObjectContext } from "@/context/ObjectContext";
import { Box3, Vector3 } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    mars: THREE.MeshStandardMaterial;
  };
};

export function Model(props: React.JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | null>(null);
  const { objects, updateObject, animationProgress } = useObjectContext();
  const marsObject = objects.mars;

  const { nodes, materials } = useGLTF(
    "/mars/scene.gltf"
  ) as unknown as GLTFResult;

  useFrame((_, delta) => {
    // Rotate the planet continuously when animation is enabled
    if (animationProgress.marsRotation && group.current) {
      const rotationSpeed = (Math.PI * 2) / 20; // one full rotation every 20s
      group.current.rotation.y += rotationSpeed * delta;
    }
  });

  useEffect(() => {
    if (group.current) {
      const timeoutId = setTimeout(() => {
        if (!group.current) return;
        const boundingBox = new Box3().setFromObject(group.current);
        const size = new Vector3();
        boundingBox.getSize(size);

        const center = new Vector3();
        boundingBox.getCenter(center);

        updateObject("mars", {
          size: { width: size.x, height: size.y, depth: size.z },
          center: { x: center.x, y: center.y, z: center.z },
        });
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [updateObject]);

  return (
    <Center position={marsObject.position} scale={marsObject.scale}>
      <group
        ref={group}
        rotation={new THREE.Euler(...marsObject.rotation)}
        {...props}
      >
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-1.413, 0, 0]}
            userData={{ name: "Sketchfab_model" }}
          >
            <group name="root" userData={{ name: "root" }}>
              <group
                name="GLTF_SceneRootNode"
                rotation={[Math.PI / 2, 0, 0]}
                userData={{ name: "GLTF_SceneRootNode" }}
              >
                <group
                  name="mars_1"
                  rotation={[Math.PI, Math.PI / 2, 0]}
                  scale={0.4}
                  position={[0, 0, 0]}
                  userData={{ name: "mars_1" }}
                >
                  <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.mars}
                    userData={{ name: "Object_4" }}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </Center>
  );
}

useGLTF.preload("/mars/scene.gltf");
