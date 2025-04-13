import React, { useRef, useMemo, useEffect } from 'react';

export default function Stars({ count = 10 }) {
  // const texture = useParticleTexture();
  const scale = 0.1;
  const meshes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push(
        <points
          key={i}
          rotation={[6 * Math.random(), 6 * Math.random(), 6 * Math.random()]}>
          <icosahedronGeometry args={[100, 4]} />
          <pointsMaterial
            size={0.3}
            sizeAttenuation={true}
            // map={texture}
            transparent={true}
          />
        </points>
      );
    }
    return temp;
  }, [count]);

  return <>{meshes}</>;
}
