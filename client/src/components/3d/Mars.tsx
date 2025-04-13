// // 'use client';
// // import * as THREE from 'three';
// // import React, { useEffect, useRef, useState } from 'react';
// // import { useGLTF } from '@react-three/drei';
// // import { GLTF } from 'three-stdlib';
// // import { useScroll } from 'motion/react';
// // import { useFrame } from '@react-three/fiber';
// // import { IntervalHistogram } from 'node:perf_hooks';

// // type GLTFResult = GLTF & {
// //   nodes: {
// //     s14_Material010_0: THREE.Mesh;
// //     s14_Material001_0: THREE.Mesh;
// //     s14_Material002_0: THREE.Mesh;
// //     s14_Material005_0: THREE.Mesh;
// //     s14_Material003_0: THREE.Mesh;
// //     s14_Material006_0: THREE.Mesh;
// //     s14_Material004_0: THREE.Mesh;
// //     s14_Material007_0: THREE.Mesh;
// //     s14_Material008_0: THREE.Mesh;
// //     s14_Material009_0: THREE.Mesh;
// //   };
// //   materials: {
// //     ['Material.010']: THREE.MeshStandardMaterial;
// //     ['Material.001']: THREE.MeshStandardMaterial;
// //     ['Material.002']: THREE.MeshStandardMaterial;
// //     ['Material.005']: THREE.MeshStandardMaterial;
// //     ['Material.003']: THREE.MeshStandardMaterial;
// //     ['Material.006']: THREE.MeshStandardMaterial;
// //     ['Material.004']: THREE.MeshStandardMaterial;
// //     ['Material.007']: THREE.MeshStandardMaterial;
// //     ['Material.008']: THREE.MeshStandardMaterial;
// //     ['Material.009']: THREE.MeshStandardMaterial;
// //   };
// // };

// // export function Model(props: React.JSX.IntrinsicElements['group']) {
// //   const { nodes, materials } = useGLTF('/scene.gltf') as unknown as GLTFResult;
// //   const { scrollYProgress } = useScroll();

// //   const [light, setLight] = useState(false);
// //   const intervalId = useRef<null | NodeJS.Timeout>(null); // Use a ref to store the interval ID

// //   const miqat = () => {
// //     intervalId.current = setInterval(() => {
// //       setLight((prev) => !prev);
// //     }, 200);
// //   };

// //   useEffect(() => {
// //     // Cleanup the interval when the component unmounts
// //     return () => {
// //       if (intervalId.current) {
// //         clearInterval(intervalId.current);
// //       }
// //     };
// //   }, []);

// //   useFrame(() => {
// //     if (scrollYProgress.get() > 0.95) {
// //       // Only start the interval if it hasn't been started yet
// //       if (!intervalId.current) {
// //         miqat(); // Start the interval and store the ID
// //       }
// //     } else {
// //       setLight(false);
// //       if (intervalId.current) {
// //         clearInterval(intervalId.current); // Clear the interval when scroll progress is less than 0.95
// //         intervalId.current = null;
// //       }
// //     }
// //   });

// //   return (
// //     <group {...props} dispose={null}>
// //       <group scale={0.01}>
// //         <group
// //           position={[0, -9.276, -35.343]}
// //           rotation={[-Math.PI / 2, 0, 0]}
// //           scale={[26.145, 24.845, 24.845]}>
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material010_0.geometry}
// //             material={materials['Material.010']}
// //           />
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material001_0.geometry}
// //             material={materials['Material.001']}
// //           />
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material002_0.geometry}
// //             material={materials['Material.002']}
// //           />
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material005_0.geometry}
// //             material={materials['Material.005']}
// //           />
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material003_0.geometry}
// //             material={materials['Material.003']}
// //           />
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material006_0.geometry}
// //             material={materials['Material.006']}
// //           />
// //           <mesh
// //             name='lights'
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material004_0.geometry}
// //             material={materials['Material.004']}>
// //             {light && (
// //               <meshStandardMaterial
// //                 emissive={'#aaaa55'}
// //                 emissiveIntensity={3}
// //                 color={'#ffffff'}
// //                 toneMapped={false}
// //               />
// //             )}
// //             {light && (
// //               <spotLight
// //                 color={'#ffffaa'}
// //                 intensity={100}
// //                 distance={100}
// //                 angle={1}
// //                 penumbra={10}
// //                 position={[0, -8, 1]}
// //                 target-position={[0, 0, 0]}
// //               />
// //             )}
// //           </mesh>
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material007_0.geometry}
// //             material={materials['Material.007']}
// //           />
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material008_0.geometry}
// //             material={materials['Material.008']}
// //           />
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.s14_Material009_0.geometry}
// //             material={materials['Material.009']}
// //           />
// //         </group>
// //       </group>
// //     </group>
// //   );
// // }

// // useGLTF.preload('/scene.gltf');

// 'use cleint';

// import * as THREE from 'three';
// import React, { useRef, useEffect } from 'react';
// import { Center, useGLTF } from '@react-three/drei';
// import { GLTF } from 'three-stdlib';
// import { Box3, Vector3 } from 'three';

// type GLTFResult = GLTF & {
//   nodes: {
//     Object_4: THREE.Mesh;
//   };
//   materials: {
//     mars: THREE.MeshStandardMaterial;
//   };
// };

// // type ActionName = 'Rotation';
// // type GLTFActions = Record<ActionName, THREE.AnimationAction>;

// import { Pos } from '@/components/3d/Scene';
// import { set } from 'date-fns';

// export function Model(props: React.JSX.IntrinsicElements['group']) {
//   const group = useRef<THREE.Group>(null);

//   const { nodes, materials } = useGLTF(
//     '/mars/scene.gltf'
//   ) as unknown as GLTFResult;

//   useEffect(() => {
//     if (group.current) {
//       // Create a bounding box
//       const boundingBox = new Box3().setFromObject(group.current);

//       // Calculate dimensions
//       const size = new Vector3();
//       boundingBox.getSize(size);

//       console.log('Width:', size.x);
//       console.log('Height:', size.y);
//       console.log('Depth:', size.z);
//       setPos((prev) => ({
//         ...prev,
//         mars: {
//           x: size.x,
//           y: size.y,
//           z: size.z,
//         },
//       }));

//       // You can also get the center point
//       const center = new Vector3();
//       boundingBox.getCenter(center);
//       console.log('Center:', center);
//     }
//   }, []);

//   // const { actions } = useAnimations<GLTFActions>(animations, group)

//   return (
//     <Center position={[0, 0, 0]} scale={8}>
//       <group ref={group} {...props}>
//         <group name='Sketchfab_Scene'>
//           <group
//             name='Sketchfab_model'
//             rotation={[-1.413, 0, 0]}
//             userData={{ name: 'Sketchfab_model' }}>
//             <group name='root' userData={{ name: 'root' }}>
//               <group
//                 name='GLTF_SceneRootNode'
//                 rotation={[Math.PI / 2, 0, 0]}
//                 userData={{ name: 'GLTF_SceneRootNode' }}>
//                 <group
//                   name='mars_1'
//                   rotation={[Math.PI, Math.PI / 2, 0]}
//                   scale={0.4}
//                   position={[0, 0, 0]}
//                   userData={{ name: 'mars_1' }}>
//                   <mesh
//                     name='Object_4'
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Object_4.geometry}
//                     material={materials.mars}
//                     userData={{ name: 'Object_4' }}
//                   />
//                 </group>
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>
//     </Center>
//   );
// }

// useGLTF.preload('/mars/scene.gltf');
'use client';

import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import { Center, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import { useObjectContext } from '@/context/ObjectContext';
import { motion } from 'framer-motion-3d';
import { Box3, Vector3 } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    mars: THREE.MeshStandardMaterial;
  };
};

export function Model(props: React.JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { objects, updateObject, animationProgress } = useObjectContext();
  const marsObject = objects.mars;

  const { nodes, materials } = useGLTF(
    '/mars/scene.gltf'
  ) as unknown as GLTFResult;

  // Measure the object size after it's loaded
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

        updateObject('mars', {
          size: { width: size.x, height: size.y, depth: size.z },
          center: { x: center.x, y: center.y, z: center.z },
        });

        updateObject('rocket', {
          position: [size.x, 0, 0],
        });

        console.log('Mars model measured:', size);

        console.log('All object', objects);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [updateObject]);

  // Handle animations with useFrame if needed
  useFrame(() => {
    if (group.current && animationProgress.mars) {
      // You can apply custom animations here based on animation progress
      // This runs every frame for smooth animations
    }
  });

  return (
    <Center position={marsObject.position} scale={marsObject.scale}>
      {/* Use motion.group from framer-motion-3d for animations */}
      <motion.group
        //@ts-expect-error
        ref={group}
        //@ts-expect-error
        rotation={marsObject.rotation}
        // Add framer-motion animation props
        animate={{
          rotateY: animationProgress.marsRotation ? Math.PI * 2 : 0,
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        {...props}>
        <group name='Sketchfab_Scene'>
          <group
            name='Sketchfab_model'
            rotation={[-1.413, 0, 0]}
            userData={{ name: 'Sketchfab_model' }}>
            <group name='root' userData={{ name: 'root' }}>
              <group
                name='GLTF_SceneRootNode'
                rotation={[Math.PI / 2, 0, 0]}
                userData={{ name: 'GLTF_SceneRootNode' }}>
                <group
                  name='mars_1'
                  rotation={[Math.PI, Math.PI / 2, 0]}
                  scale={0.4}
                  position={[0, 0, 0]}
                  userData={{ name: 'mars_1' }}>
                  <mesh
                    name='Object_4'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.mars}
                    userData={{ name: 'Object_4' }}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </motion.group>
    </Center>
  );
}

useGLTF.preload('/mars/scene.gltf');
