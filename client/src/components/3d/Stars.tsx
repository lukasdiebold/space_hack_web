import React, { useRef, useMemo, useEffect } from 'react';

export default function Stars({ count = 10 }) {
  // const texture = useParticleTexture();
  const meshes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push(
        <points
          key={i}
          rotation={[6 * Math.random(), 6 * Math.random(), 6 * Math.random()]}>
          <icosahedronGeometry args={[20, 4]} />
          <pointsMaterial
            size={1 / 30}
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
