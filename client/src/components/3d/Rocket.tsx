'use client';

import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react';
import { Center, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import { motion } from 'framer-motion-3d';
import { Box3, Vector3 } from 'three';
import { useObjectContext } from '@/context/ObjectContext';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_31: THREE.Mesh;
  };
  materials: {
    ['Chicago_98e9fdb2-1b90-4093-86bf-cce671758749']: THREE.MeshStandardMaterial;
    ['Happy_Days_1_5068df76-8e9a-4091-8a3a-c162ca8c3573']: THREE.MeshStandardMaterial;
    ['Happy_Days_2_ca7b3b59-df34-451b-b4b9-ad92bbab3821']: THREE.MeshStandardMaterial;
    ['Happy_Days_3_996dde34-0523-4413-bf61-dcf1f34d0b9f']: THREE.MeshStandardMaterial;
    ['Happy_Days_4_fef7e831-3bb2-4ae3-b483-7b6a93aabee1']: THREE.MeshStandardMaterial;
    ['Happy_Days_5_e974301b-cc5e-4894-9b8e-1562036aa4e6']: THREE.MeshStandardMaterial;
    ['Happy_Days_9043997e-52f1-4b23-80bd-41a5a8458bbd']: THREE.MeshStandardMaterial;
    ['Nautico_1_3cdfcdef-3cf4-4b7c-a8f2-281446401d82']: THREE.MeshStandardMaterial;
    ['Nautico_2_28fac0ff-cb57-4db3-a8d1-9de8504d63f4']: THREE.MeshStandardMaterial;
    ['Nautico_3_5fe769a9-5bfd-44be-a411-8449f4469088']: THREE.MeshStandardMaterial;
    ['Nautico_4_06691868-c85f-45c4-984a-c1e746991103']: THREE.MeshStandardMaterial;
    ['Nautico_5_64260b9e-7b19-4748-8657-e20e376895e5']: THREE.MeshStandardMaterial;
    ['Nautico_405b10d5-8b05-4992-93ae-ac5779a87d95']: THREE.MeshStandardMaterial;
    ['filesConnector_material_623275ae-7a32-46ab-8219-e95201cf8750']: THREE.MeshStandardMaterial;
    ['filesEngine_Mount_material_0dec2446-0d86-4ee5-94ec-531ae64f98e7']: THREE.MeshStandardMaterial;
    ['filesSea_Level_Raptor_Engine_material_1_170543de-b148-4d02-9b5b-96f9936f8562']: THREE.MeshStandardMaterial;
    ['filesSea_Level_Raptor_Engine_material_2_d656db08-fa7c-4fa0-b3e3-c04d2d0a439f']: THREE.MeshStandardMaterial;
    ['filesSea_Level_Raptor_Engine_material_953dea12-6935-4514-9f43-22a7a56fdae6']: THREE.MeshStandardMaterial;
    ['filesStarship_Nose_material_1_dde8aebe-a792-435e-a2e3-7ddb1f28a6d9']: THREE.MeshStandardMaterial;
    ['filesTail_B_fold_out_legs_material_e58697e3-abb8-4562-b818-46d16c107f39']: THREE.MeshStandardMaterial;
    ['filesVacuum_Raptor_Engine_material_1_80479c1d-11a5-4847-b1fb-e184d6943e0d']: THREE.MeshStandardMaterial;
    ['filesVacuum_Raptor_Engine_material_2_84f9e388-7594-4644-8aa0-1c841d1ff00f']: THREE.MeshStandardMaterial;
    ['filesVacuum_Raptor_Engine_material_25679283-3050-4486-bae1-df13fc08276b']: THREE.MeshStandardMaterial;
  };
};

export function Model(props: React.JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { objects, updateObject, animationProgress } = useObjectContext();
  const rocketObject = objects.rocket || {
    position: [0, 0, 0],
    rotation: [Math.PI / 2, 0, 0],
    scale: 0.0005,
  };

  const { nodes, materials } = useGLTF(
    '/rocket/scene.gltf'
  ) as unknown as GLTFResult;

  // const [keys, setKeys] = useState({
  //   w: false,
  //   a: false,
  //   s: false,
  //   d: false,
  //   space: false,
  //   shift: false,
  // });

  // // Movement speed and parameters
  // const speed = useRef(0.001);
  // const rotationSpeed = useRef(0.05);
  // const maxSpeed = useRef(0.3);

  // // Direction vector for movement
  // const direction = useRef(new Vector3(0, 0, 1));

  // // Current velocity
  // const velocity = useRef(new Vector3(0, 0, 0));

  // // Current rocket position and rotation
  // const position = useRef(new Vector3(...rocketObject.position));
  // const rotation = useRef(new THREE.Euler(...rocketObject.rotation));

  // // Setup keyboard listeners
  // useEffect(() => {
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.repeat) return; // Prevent key repeat

  //     switch (e.key.toLowerCase()) {
  //       case 'w':
  //         setKeys((prev) => ({ ...prev, w: true }));
  //         break;
  //       case 'a':
  //         setKeys((prev) => ({ ...prev, a: true }));
  //         break;
  //       case 's':
  //         setKeys((prev) => ({ ...prev, s: true }));
  //         break;
  //       case 'd':
  //         setKeys((prev) => ({ ...prev, d: true }));
  //         break;
  //       case ' ':
  //         setKeys((prev) => ({ ...prev, space: true }));
  //         break;
  //       case 'shift':
  //         setKeys((prev) => ({ ...prev, shift: true }));
  //         break;
  //     }
  //   };

  //   const handleKeyUp = (e: KeyboardEvent) => {
  //     switch (e.key.toLowerCase()) {
  //       case 'w':
  //         setKeys((prev) => ({ ...prev, w: false }));
  //         break;
  //       case 'a':
  //         setKeys((prev) => ({ ...prev, a: false }));
  //         break;
  //       case 's':
  //         setKeys((prev) => ({ ...prev, s: false }));
  //         break;
  //       case 'd':
  //         setKeys((prev) => ({ ...prev, d: false }));
  //         break;
  //       case ' ':
  //         setKeys((prev) => ({ ...prev, space: false }));
  //         break;
  //       case 'shift':
  //         setKeys((prev) => ({ ...prev, shift: false }));
  //         break;
  //     }
  //   };

  //   // Add event listeners
  //   window.addEventListener('keydown', handleKeyDown);
  //   window.addEventListener('keyup', handleKeyUp);

  //   // Initial position and rotation
  //   position.current.set(...rocketObject.position);
  //   rotation.current.set(...rocketObject.rotation);

  //   // Clean up
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //     window.removeEventListener('keyup', handleKeyUp);
  //   };
  // }, [rocketObject.position, rocketObject.rotation]);

  // Measure the rocket size after loading
  useEffect(() => {
    if (group.current) {
      const timeoutId = setTimeout(() => {
        if (!group.current) return;
        const boundingBox = new Box3().setFromObject(group.current);
        const size = new Vector3();
        boundingBox.getSize(size);

        const center = new Vector3();
        boundingBox.getCenter(center);

        console.log('Rocket model measured:', size);
        console.log('Rocket model measured:', objects);

        updateObject('rocket', {
          size: { width: size.x, height: size.y, depth: size.z },
          center: { x: center.x, y: center.y, z: center.z },
        });
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [updateObject]);

  // Handle rocket movement based on keyboard input
  // useFrame((state, delta) => {
  //   if (!group.current || animationProgress.rocketOrbit) return;

  //   // Calculate the forward direction based on current rotation
  //   const forward = new Vector3(0, 0, 1);
  //   const rotationMatrix = new THREE.Matrix4().makeRotationFromEuler(
  //     rotation.current
  //   );
  //   forward.applyMatrix4(rotationMatrix);
  //   forward.normalize();

  //   // Calculate right vector (perpendicular to forward)
  //   const right = new Vector3(1, 0, 0);
  //   right.applyMatrix4(rotationMatrix);
  //   right.normalize();

  //   // Calculate up vector
  //   const up = new Vector3(0, 1, 0);

  //   // Update velocity based on keys pressed
  //   if (keys.w) {
  //     // Move forward
  //     velocity.current.addScaledVector(forward, speed.current);
  //   }
  //   if (keys.s) {
  //     // Move backward
  //     velocity.current.addScaledVector(forward, -speed.current);
  //   }
  //   if (keys.a) {
  //     // Rotate left around up axis
  //     rotation.current.y -= rotationSpeed.current;
  //   }
  //   if (keys.d) {
  //     // Rotate right around up axis
  //     rotation.current.y += rotationSpeed.current;
  //   }
  //   if (keys.space) {
  //     // Move up
  //     velocity.current.addScaledVector(up, speed.current);
  //   }
  //   if (keys.shift) {
  //     // Move down
  //     velocity.current.addScaledVector(up, -speed.current);
  //   }

  //   // Apply drag to slow down when not accelerating
  //   velocity.current.multiplyScalar(0.95);

  //   // Limit maximum speed
  //   if (velocity.current.length() > maxSpeed.current) {
  //     velocity.current.normalize().multiplyScalar(maxSpeed.current);
  //   }

  //   // Update position
  //   position.current.add(velocity.current);

  //   // Update object position and rotation in the scene
  //   group.current.position.copy(position.current);
  //   group.current.rotation.copy(rotation.current);

  //   // Update position in context for other components
  //   updateObject('rocket', {
  //     position: [position.current.x, position.current.y, position.current.z],
  //     rotation: [rotation.current.x, rotation.current.y, rotation.current.z],
  //   });
  // });

  // Measure the rocket size after loading
  useEffect(() => {
    if (group.current) {
      // Use a small timeout to ensure the model is fully loaded
      const timeoutId = setTimeout(() => {
        if (!group.current) return;
        const boundingBox = new Box3().setFromObject(group.current);
        const size = new Vector3();
        boundingBox.getSize(size);

        const center = new Vector3();
        boundingBox.getCenter(center);

        // updateObject('rocket', {
        //   size: { width: size.x, height: size.y, depth: size.z },
        //   center: { x: center.x, y: center.y, z: center.z },
        // });

        // console.log('Rocket model measured:', size);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [updateObject]);

  // Handle rocket animations with useFrame if needed
  useFrame(() => {
    if (group.current && animationProgress.rocketThrust) {
      // Add thruster animation or other effects here
      // This runs every frame for smooth animations
    }
  });

  return (
    <Center
      position={[
        rocketObject.position[0],
        rocketObject.position[1],
        rocketObject.position[2],
      ]}
      scale={rocketObject.scale}
      rotation={rocketObject.rotation}>
      <motion.group
        // @ts-ignore
        ref={group}
        {...props}
        // Add rocket-specific Framer Motion animations
        animate={{
          // Example: Make the rocket hover slightly
          y: animationProgress.rocketHover ? [-0.2, 0.2] : 0,
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        }}>
        {/* {keys && (
          <pointLight
            position={[0, -0.5, 0]}
            color='#00ffff'
            intensity={5}
            distance={2}
          />
        )} */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Chicago_98e9fdb2-1b90-4093-86bf-cce671758749']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={
            materials['Happy_Days_1_5068df76-8e9a-4091-8a3a-c162ca8c3573']
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={
            materials['Happy_Days_2_ca7b3b59-df34-451b-b4b9-ad92bbab3821']
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={
            materials['Happy_Days_3_996dde34-0523-4413-bf61-dcf1f34d0b9f']
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={
            materials['Happy_Days_4_fef7e831-3bb2-4ae3-b483-7b6a93aabee1']
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={
            materials['Happy_Days_5_e974301b-cc5e-4894-9b8e-1562036aa4e6']
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={
            materials['Happy_Days_9043997e-52f1-4b23-80bd-41a5a8458bbd']
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['Nautico_1_3cdfcdef-3cf4-4b7c-a8f2-281446401d82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['Nautico_2_28fac0ff-cb57-4db3-a8d1-9de8504d63f4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials['Nautico_3_5fe769a9-5bfd-44be-a411-8449f4469088']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials['Nautico_4_06691868-c85f-45c4-984a-c1e746991103']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials['Nautico_5_64260b9e-7b19-4748-8657-e20e376895e5']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials['Nautico_405b10d5-8b05-4992-93ae-ac5779a87d95']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={
            materials[
              'filesConnector_material_623275ae-7a32-46ab-8219-e95201cf8750'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={
            materials[
              'filesEngine_Mount_material_0dec2446-0d86-4ee5-94ec-531ae64f98e7'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={
            materials[
              'filesSea_Level_Raptor_Engine_material_1_170543de-b148-4d02-9b5b-96f9936f8562'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={
            materials[
              'filesSea_Level_Raptor_Engine_material_1_170543de-b148-4d02-9b5b-96f9936f8562'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={
            materials[
              'filesSea_Level_Raptor_Engine_material_2_d656db08-fa7c-4fa0-b3e3-c04d2d0a439f'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={
            materials[
              'filesSea_Level_Raptor_Engine_material_2_d656db08-fa7c-4fa0-b3e3-c04d2d0a439f'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={
            materials[
              'filesSea_Level_Raptor_Engine_material_953dea12-6935-4514-9f43-22a7a56fdae6'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={
            materials[
              'filesSea_Level_Raptor_Engine_material_953dea12-6935-4514-9f43-22a7a56fdae6'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={
            materials[
              'filesStarship_Nose_material_1_dde8aebe-a792-435e-a2e3-7ddb1f28a6d9'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={
            materials[
              'filesStarship_Nose_material_1_dde8aebe-a792-435e-a2e3-7ddb1f28a6d9'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={
            materials[
              'filesTail_B_fold_out_legs_material_e58697e3-abb8-4562-b818-46d16c107f39'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={
            materials[
              'filesVacuum_Raptor_Engine_material_1_80479c1d-11a5-4847-b1fb-e184d6943e0d'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={
            materials[
              'filesVacuum_Raptor_Engine_material_1_80479c1d-11a5-4847-b1fb-e184d6943e0d'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={
            materials[
              'filesVacuum_Raptor_Engine_material_2_84f9e388-7594-4644-8aa0-1c841d1ff00f'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={
            materials[
              'filesVacuum_Raptor_Engine_material_2_84f9e388-7594-4644-8aa0-1c841d1ff00f'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={
            materials[
              'filesVacuum_Raptor_Engine_material_25679283-3050-4486-bae1-df13fc08276b'
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={
            materials[
              'filesVacuum_Raptor_Engine_material_25679283-3050-4486-bae1-df13fc08276b'
            ]
          }
        />
      </motion.group>
    </Center>
  );
}

useGLTF.preload('/rocket/scene.gltf');
