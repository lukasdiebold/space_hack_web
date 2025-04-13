import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

import { useObjectContext } from '@/context/ObjectContext';

type GLTFResult = GLTF & {
  nodes: {
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
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_46: THREE.Mesh;
    Object_48: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_52: THREE.Mesh;
    Object_53: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_55: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_57: THREE.Mesh;
    Object_58: THREE.Mesh;
    Object_59: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_61: THREE.Mesh;
    Object_62: THREE.Mesh;
    Object_63: THREE.Mesh;
    Object_65: THREE.Mesh;
    Object_66: THREE.Mesh;
    Object_67: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_69: THREE.Mesh;
    Object_70: THREE.Mesh;
    Object_71: THREE.Mesh;
    Object_72: THREE.Mesh;
    Object_73: THREE.Mesh;
    Object_74: THREE.Mesh;
    Object_75: THREE.Mesh;
    Object_76: THREE.Mesh;
    Object_78: THREE.Mesh;
    Object_79: THREE.Mesh;
    Object_80: THREE.Mesh;
    Object_81: THREE.Mesh;
    Object_82: THREE.Mesh;
    Object_83: THREE.Mesh;
    Object_84: THREE.Mesh;
    Object_85: THREE.Mesh;
    Object_86: THREE.Mesh;
    Object_87: THREE.Mesh;
    Object_88: THREE.Mesh;
    Object_89: THREE.Mesh;
    Object_91: THREE.Mesh;
    Object_92: THREE.Mesh;
    Object_93: THREE.Mesh;
    Object_94: THREE.Mesh;
    Object_95: THREE.Mesh;
    Object_96: THREE.Mesh;
    Object_97: THREE.Mesh;
    Object_98: THREE.Mesh;
    Object_99: THREE.Mesh;
    Object_100: THREE.Mesh;
    Object_101: THREE.Mesh;
    Object_102: THREE.Mesh;
    Object_103: THREE.Mesh;
    Object_104: THREE.Mesh;
    Object_106: THREE.Mesh;
    Object_107: THREE.Mesh;
    Object_108: THREE.Mesh;
    Object_109: THREE.Mesh;
    Object_110: THREE.Mesh;
    Object_111: THREE.Mesh;
    Object_112: THREE.Mesh;
    Object_113: THREE.Mesh;
    Object_114: THREE.Mesh;
    Object_115: THREE.Mesh;
    Object_116: THREE.Mesh;
    Object_117: THREE.Mesh;
    Object_118: THREE.Mesh;
    Object_119: THREE.Mesh;
    Object_121: THREE.Mesh;
    Object_122: THREE.Mesh;
    Object_123: THREE.Mesh;
    Object_124: THREE.Mesh;
    Object_125: THREE.Mesh;
    Object_126: THREE.Mesh;
    Object_127: THREE.Mesh;
    Object_128: THREE.Mesh;
    Object_129: THREE.Mesh;
    Object_130: THREE.Mesh;
    Object_131: THREE.Mesh;
    Object_132: THREE.Mesh;
    Object_133: THREE.Mesh;
    Object_134: THREE.Mesh;
    Object_136: THREE.Mesh;
    Object_137: THREE.Mesh;
    Object_138: THREE.Mesh;
    Object_139: THREE.Mesh;
    Object_140: THREE.Mesh;
    Object_141: THREE.Mesh;
    Object_142: THREE.Mesh;
    Object_143: THREE.Mesh;
    Object_144: THREE.Mesh;
    Object_145: THREE.Mesh;
    Object_146: THREE.Mesh;
    Object_147: THREE.Mesh;
    Object_148: THREE.Mesh;
    Object_149: THREE.Mesh;
    Object_150: THREE.Mesh;
    Object_151: THREE.Mesh;
    Object_152: THREE.Mesh;
    Object_153: THREE.Mesh;
    Object_154: THREE.Mesh;
    Object_155: THREE.Mesh;
    Object_156: THREE.Mesh;
    Object_157: THREE.Mesh;
    Object_158: THREE.Mesh;
    Object_159: THREE.Mesh;
    Object_160: THREE.Mesh;
    Object_161: THREE.Mesh;
    Object_162: THREE.Mesh;
    Object_163: THREE.Mesh;
    Object_165: THREE.Mesh;
    Object_166: THREE.Mesh;
    Object_168: THREE.Mesh;
    Object_169: THREE.Mesh;
    Object_171: THREE.Mesh;
    Object_172: THREE.Mesh;
    Object_174: THREE.Mesh;
    Object_175: THREE.Mesh;
    Object_177: THREE.Mesh;
    Object_178: THREE.Mesh;
    Object_179: THREE.Mesh;
    Object_180: THREE.Mesh;
    Object_181: THREE.Mesh;
    Object_182: THREE.Mesh;
    Object_183: THREE.Mesh;
    Object_184: THREE.Mesh;
    Object_185: THREE.Mesh;
    Object_186: THREE.Mesh;
    Object_187: THREE.Mesh;
    Object_189: THREE.Mesh;
    Object_190: THREE.Mesh;
    Object_191: THREE.Mesh;
    Object_192: THREE.Mesh;
    Object_193: THREE.Mesh;
    Object_194: THREE.Mesh;
    Object_195: THREE.Mesh;
    Object_196: THREE.Mesh;
    Object_197: THREE.Mesh;
    Object_198: THREE.Mesh;
    Object_199: THREE.Mesh;
    Object_201: THREE.Mesh;
    Object_202: THREE.Mesh;
    Object_203: THREE.Mesh;
    Object_204: THREE.Mesh;
    Object_205: THREE.Mesh;
    Object_206: THREE.Mesh;
    Object_207: THREE.Mesh;
    Object_208: THREE.Mesh;
    Object_209: THREE.Mesh;
    Object_210: THREE.Mesh;
    Object_211: THREE.Mesh;
    Object_213: THREE.Mesh;
    Object_214: THREE.Mesh;
    Object_215: THREE.Mesh;
    Object_216: THREE.Mesh;
    Object_217: THREE.Mesh;
    Object_218: THREE.Mesh;
    Object_219: THREE.Mesh;
    Object_220: THREE.Mesh;
    Object_221: THREE.Mesh;
    Object_222: THREE.Mesh;
    Object_223: THREE.Mesh;
    Object_225: THREE.Mesh;
    Object_226: THREE.Mesh;
    Object_227: THREE.Mesh;
    Object_228: THREE.Mesh;
    Object_229: THREE.Mesh;
    Object_230: THREE.Mesh;
    Object_231: THREE.Mesh;
    Object_232: THREE.Mesh;
    Object_233: THREE.Mesh;
    Object_234: THREE.Mesh;
    Object_235: THREE.Mesh;
    Object_237: THREE.Mesh;
    Object_238: THREE.Mesh;
    Object_239: THREE.Mesh;
    Object_240: THREE.Mesh;
    Object_241: THREE.Mesh;
    Object_242: THREE.Mesh;
    Object_243: THREE.Mesh;
    Object_244: THREE.Mesh;
    Object_245: THREE.Mesh;
    Object_246: THREE.Mesh;
    Object_247: THREE.Mesh;
    Object_249: THREE.Mesh;
    Object_250: THREE.Mesh;
    Object_251: THREE.Mesh;
    Object_252: THREE.Mesh;
    Object_253: THREE.Mesh;
    Object_254: THREE.Mesh;
    Object_255: THREE.Mesh;
    Object_256: THREE.Mesh;
    Object_257: THREE.Mesh;
    Object_258: THREE.Mesh;
    Object_259: THREE.Mesh;
    Object_261: THREE.Mesh;
    Object_262: THREE.Mesh;
    Object_263: THREE.Mesh;
    Object_264: THREE.Mesh;
    Object_265: THREE.Mesh;
    Object_266: THREE.Mesh;
    Object_267: THREE.Mesh;
    Object_268: THREE.Mesh;
    Object_269: THREE.Mesh;
    Object_270: THREE.Mesh;
    Object_271: THREE.Mesh;
    Object_273: THREE.Mesh;
    Object_274: THREE.Mesh;
    Object_275: THREE.Mesh;
    Object_276: THREE.Mesh;
    Object_277: THREE.Mesh;
    Object_278: THREE.Mesh;
    Object_279: THREE.Mesh;
    Object_280: THREE.Mesh;
    Object_281: THREE.Mesh;
    Object_282: THREE.Mesh;
    Object_283: THREE.Mesh;
    Object_285: THREE.Mesh;
    Object_286: THREE.Mesh;
    Object_287: THREE.Mesh;
    Object_288: THREE.Mesh;
    Object_289: THREE.Mesh;
    Object_290: THREE.Mesh;
    Object_291: THREE.Mesh;
    Object_292: THREE.Mesh;
    Object_293: THREE.Mesh;
    Object_294: THREE.Mesh;
    Object_295: THREE.Mesh;
    Object_297: THREE.Mesh;
    Object_298: THREE.Mesh;
    Object_299: THREE.Mesh;
    Object_300: THREE.Mesh;
    Object_301: THREE.Mesh;
    Object_302: THREE.Mesh;
    Object_303: THREE.Mesh;
    Object_304: THREE.Mesh;
    Object_305: THREE.Mesh;
    Object_306: THREE.Mesh;
    Object_307: THREE.Mesh;
    Object_309: THREE.Mesh;
    Object_310: THREE.Mesh;
    Object_311: THREE.Mesh;
    Object_312: THREE.Mesh;
    Object_313: THREE.Mesh;
    Object_314: THREE.Mesh;
    Object_315: THREE.Mesh;
    Object_316: THREE.Mesh;
    Object_317: THREE.Mesh;
    Object_318: THREE.Mesh;
    Object_319: THREE.Mesh;
    Object_321: THREE.Mesh;
    Object_322: THREE.Mesh;
    Object_323: THREE.Mesh;
    Object_324: THREE.Mesh;
    Object_325: THREE.Mesh;
    Object_326: THREE.Mesh;
    Object_327: THREE.Mesh;
    Object_328: THREE.Mesh;
    Object_329: THREE.Mesh;
    Object_330: THREE.Mesh;
    Object_331: THREE.Mesh;
  };
  materials: {
    Cryo_Section1: THREE.MeshPhysicalMaterial;
    Cryo_Section2: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshPhysicalMaterial;
    Heatshield_Tiles: THREE.MeshStandardMaterial;
    ['Material.021']: THREE.MeshPhysicalMaterial;
    ['Material.056']: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ['Material.053']: THREE.MeshStandardMaterial;
    ['Material.087']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    ['Material.023']: THREE.MeshStandardMaterial;
    Serial_Number: THREE.MeshPhysicalMaterial;
    Logo: THREE.MeshPhysicalMaterial;
    ['Material.022']: THREE.MeshPhysicalMaterial;
    ['Material.188']: THREE.MeshStandardMaterial;
    ['Cryo_Section1.001']: THREE.MeshStandardMaterial;
    ['Material.008']: THREE.MeshPhysicalMaterial;
    ['Material.017']: THREE.MeshStandardMaterial;
    ['Material.007']: THREE.MeshStandardMaterial;
    ['Material.009']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.033']: THREE.MeshStandardMaterial;
    ['Material.034']: THREE.MeshStandardMaterial;
    ['Material.036']: THREE.MeshStandardMaterial;
    ['Material.037']: THREE.MeshStandardMaterial;
    ['Material.030']: THREE.MeshStandardMaterial;
    ['Material.038']: THREE.MeshStandardMaterial;
    ['Material.039']: THREE.MeshStandardMaterial;
    ['Material.040']: THREE.MeshStandardMaterial;
    ['Material.041']: THREE.MeshStandardMaterial;
    ['Material.042']: THREE.MeshStandardMaterial;
    ['Material.035']: THREE.MeshStandardMaterial;
    ['Material.032']: THREE.MeshStandardMaterial;
    ['Material.031']: THREE.MeshStandardMaterial;
    ['Material.029']: THREE.MeshStandardMaterial;
    ['Material.028']: THREE.MeshStandardMaterial;
    ['Material.027']: THREE.MeshStandardMaterial;
    ['Material.026']: THREE.MeshStandardMaterial;
    ['Material.025']: THREE.MeshStandardMaterial;
    ['Material.024']: THREE.MeshStandardMaterial;
    ['Material.052']: THREE.MeshStandardMaterial;
    ['Material.051']: THREE.MeshStandardMaterial;
    ['Material.050']: THREE.MeshStandardMaterial;
    ['Material.049']: THREE.MeshStandardMaterial;
    ['Material.048']: THREE.MeshStandardMaterial;
    ['Material.047']: THREE.MeshStandardMaterial;
    ['Material.046']: THREE.MeshStandardMaterial;
    ['Material.045']: THREE.MeshStandardMaterial;
    ['Material.044']: THREE.MeshStandardMaterial;
    ['Material.043']: THREE.MeshStandardMaterial;
    ['Material.100']: THREE.MeshStandardMaterial;
    ['Material.099']: THREE.MeshStandardMaterial;
    ['Material.098']: THREE.MeshStandardMaterial;
    ['Material.097']: THREE.MeshStandardMaterial;
    ['Material.096']: THREE.MeshStandardMaterial;
    ['Material.095']: THREE.MeshStandardMaterial;
    ['Material.094']: THREE.MeshStandardMaterial;
    ['Material.093']: THREE.MeshStandardMaterial;
    ['Material.092']: THREE.MeshStandardMaterial;
    ['Material.091']: THREE.MeshStandardMaterial;
    Heat1: THREE.MeshStandardMaterial;
    Heat2: THREE.MeshStandardMaterial;
    Cryo_Section3: THREE.MeshPhysicalMaterial;
    Cryo_Section4: THREE.MeshStandardMaterial;
    ['Material.086']: THREE.MeshPhysicalMaterial;
    Heat_Tiles2: THREE.MeshStandardMaterial;
    ['Material.072']: THREE.MeshStandardMaterial;
    ['Material.071']: THREE.MeshStandardMaterial;
    ['Material.085']: THREE.MeshStandardMaterial;
    Outer_Raptor: THREE.MeshStandardMaterial;
    ['Material.083']: THREE.MeshStandardMaterial;
    ['Material.082']: THREE.MeshStandardMaterial;
    ['Material.081']: THREE.MeshStandardMaterial;
    ['Material.080']: THREE.MeshStandardMaterial;
    ['Material.079']: THREE.MeshStandardMaterial;
    ['Material.078']: THREE.MeshStandardMaterial;
    ['Material.077']: THREE.MeshStandardMaterial;
    ['Material.076']: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshPhysicalMaterial;
    ['Material.005']: THREE.MeshStandardMaterial;
    ['Material.006']: THREE.MeshStandardMaterial;
    ['Material.020']: THREE.MeshStandardMaterial;
    ['Material.019']: THREE.MeshStandardMaterial;
    ['Material.018']: THREE.MeshStandardMaterial;
    ['Material.016']: THREE.MeshStandardMaterial;
    ['Material.015']: THREE.MeshStandardMaterial;
    ['Material.014']: THREE.MeshStandardMaterial;
    ['Material.013']: THREE.MeshStandardMaterial;
    ['Material.012']: THREE.MeshStandardMaterial;
    ['Material.011']: THREE.MeshStandardMaterial;
    ['Material.010']: THREE.MeshStandardMaterial;
  };
};

export function Model(props: React.JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/rocket_new/scene.gltf'
  ) as unknown as GLTFResult;

  const { objects, updateObject } = useObjectContext();

  return (
    <Center
      position={[
        objects.rocket.position[0],
        objects.rocket.position[1],
        objects.rocket.position[2],
      ]}
      scale={objects.rocket.scale}>
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={5}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[0.038, 16.157, 0.033]}
              rotation={[0, -0.004, 0]}
              scale={0.914}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.Cryo_Section1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.Cryo_Section2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials['Material.002']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials.Heatshield_Tiles}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials['Material.021']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials['Material.056']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials.Material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials['Material.053']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials['Material.087']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials['Material.004']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials['Material.023']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_15.geometry}
                material={materials.Serial_Number}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_16.geometry}
                material={materials.Logo}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials['Material.022']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_18.geometry}
                material={materials['Material.188']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_19.geometry}
                material={materials['Cryo_Section1.001']}
              />
              <group
                position={[0.046, -3.622, 1.081]}
                scale={[0.034, 0.047, 0.034]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials['Material.008']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials['Material.023']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.Heatshield_Tiles}
                />
              </group>
              <group
                position={[0.046, -3.622, -1.081]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-0.034, 0.047, 0.034]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials['Material.023']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials['Material.017']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials.Heatshield_Tiles}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials['Material.008']}
                />
              </group>
              <group
                position={[0.046, 3.886, 1.046]}
                rotation={[-0.224, 0, 0]}
                scale={[0.034, 0.047, 0.034]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials['Material.023']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_33.geometry}
                  material={materials['Material.007']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.Heatshield_Tiles}
                />
              </group>
              <group
                position={[0.046, 3.886, -1.047]}
                rotation={[-2.917, 0, -Math.PI]}
                scale={[-0.034, 0.047, 0.034]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials['Material.023']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials['Material.017']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.Heatshield_Tiles}
                />
              </group>
              <group
                position={[0.187, -3.06, -0.001]}
                rotation={[-Math.PI, 1.49, -Math.PI]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials['Material.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials['Material.033']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials['Material.034']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials['Material.036']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials['Material.037']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials['Material.030']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials['Material.038']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials['Material.039']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials['Material.040']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials['Material.041']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.Material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials['Material.021']}
                />
              </group>
              <group
                position={[-0.126, -3.06, -0.188]}
                rotation={[-Math.PI, -1.032, -Math.PI]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_65.geometry}
                  material={materials['Material.042']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials['Material.035']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_67.geometry}
                  material={materials['Material.032']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials['Material.031']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_69.geometry}
                  material={materials['Material.029']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials['Material.028']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_71.geometry}
                  material={materials['Material.027']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials['Material.026']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_73.geometry}
                  material={materials['Material.025']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials['Material.024']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75.geometry}
                  material={materials.Material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials['Material.021']}
                />
              </group>
              <group
                position={[-0.116, -3.06, 0.181]}
                rotation={[0, -1.032, 0]}
                scale={[-0.045, 0.045, 0.045]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials['Material.052']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials['Material.051']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials['Material.050']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials['Material.049']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials['Material.048']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_83.geometry}
                  material={materials['Material.047']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials['Material.046']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_85.geometry}
                  material={materials['Material.045']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials['Material.044']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87.geometry}
                  material={materials['Material.043']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials.Material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_89.geometry}
                  material={materials['Material.021']}
                />
              </group>
              <group
                position={[0.371, -2.808, -0.6]}
                rotation={[-Math.PI, 1.234, -Math.PI]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_91.geometry}
                  material={materials['Material.100']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials['Material.099']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93.geometry}
                  material={materials['Material.098']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials['Material.097']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95.geometry}
                  material={materials['Material.096']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials['Material.095']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97.geometry}
                  material={materials['Material.094']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials['Material.093']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_99.geometry}
                  material={materials['Material.092']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials['Material.091']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_101.geometry}
                  material={materials.Heat1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.Heat2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_103.geometry}
                  material={materials.Material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials['Material.021']}
                />
              </group>
              <group
                position={[0.371, -2.808, 0.609]}
                rotation={[0, 0.737, 0]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials['Material.100']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_107.geometry}
                  material={materials['Material.099']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials['Material.098']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_109.geometry}
                  material={materials['Material.097']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials['Material.096']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_111.geometry}
                  material={materials['Material.095']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials['Material.094']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_113.geometry}
                  material={materials['Material.093']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials['Material.092']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_115.geometry}
                  material={materials['Material.091']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials.Heat1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_117.geometry}
                  material={materials.Heat2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials.Material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  material={materials['Material.021']}
                />
              </group>
              <group
                position={[-0.686, -2.808, -0.002]}
                rotation={[Math.PI, -1.527, Math.PI]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_121.geometry}
                  material={materials['Material.100']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials['Material.099']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_123.geometry}
                  material={materials['Material.098']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials['Material.097']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_125.geometry}
                  material={materials['Material.096']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials['Material.095']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_127.geometry}
                  material={materials['Material.094']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials['Material.093']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_129.geometry}
                  material={materials['Material.092']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials['Material.091']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_131.geometry}
                  material={materials.Heat1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={materials.Heat2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_133.geometry}
                  material={materials.Material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials['Material.021']}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_30.geometry}
                material={materials['Material.022']}
                position={[0.856, 2.178, 0.042]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_40.geometry}
                material={materials['Material.021']}
                position={[0, -3.828, 0.925]}
                rotation={[3.138, 0, -1.57]}
                scale={[0.007, 0.038, 0.007]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_42.geometry}
                material={materials['Material.009']}
                position={[0.837, -3.828, 0.4]}
                rotation={[-3.125, -1.062, -1.555]}
                scale={[0.007, 0.038, 0.007]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_44.geometry}
                material={materials['Material.009']}
                position={[-0.828, -3.828, 0.4]}
                rotation={[-3.123, 1.062, 1.553]}
                scale={[-0.007, 0.038, 0.007]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_46.geometry}
                material={materials['Material.009']}
                position={[0.008, -3.828, -0.929]}
                rotation={[-0.005, 0, 1.572]}
                scale={[0.007, 0.038, 0.007]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_48.geometry}
                material={materials['Material.009']}
                position={[-0.828, -3.828, -0.404]}
                rotation={[0.011, 1.062, 1.562]}
                scale={[0.007, 0.038, 0.007]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_50.geometry}
                material={materials['Material.009']}
                position={[0.837, -3.828, -0.404]}
                rotation={[-0.031, -1.061, -1.599]}
                scale={[-0.007, 0.038, 0.007]}
              />
            </group>
            <group
              position={[0.042, 8.82, 0.03]}
              rotation={[0, -0.003, 0]}
              scale={0.914}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_136.geometry}
                material={materials.Cryo_Section3}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_137.geometry}
                material={materials.Cryo_Section4}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_138.geometry}
                material={materials['Material.002']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_139.geometry}
                material={materials['Material.021']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_140.geometry}
                material={materials['Material.053']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_141.geometry}
                material={materials['Material.086']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_142.geometry}
                material={materials['Material.001']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_143.geometry}
                material={materials.Heat_Tiles2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_144.geometry}
                material={materials['Material.072']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_145.geometry}
                material={materials['Material.071']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_146.geometry}
                material={materials['Material.085']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_147.geometry}
                material={materials['Material.085']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_148.geometry}
                material={materials.Outer_Raptor}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_149.geometry}
                material={materials['Material.083']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_150.geometry}
                material={materials['Material.083']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_151.geometry}
                material={materials['Material.082']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_152.geometry}
                material={materials['Material.081']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_153.geometry}
                material={materials['Material.080']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_154.geometry}
                material={materials['Material.079']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_155.geometry}
                material={materials['Material.078']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_156.geometry}
                material={materials['Material.077']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_157.geometry}
                material={materials['Material.076']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_158.geometry}
                material={materials['Material.003']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_159.geometry}
                material={materials['Material.056']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_160.geometry}
                material={materials.Material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_161.geometry}
                material={materials['Material.023']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_162.geometry}
                material={materials['Material.022']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_163.geometry}
                material={materials['Material.087']}
              />
              <group
                position={[-0.481, 3.651, -0.825]}
                rotation={[-1.564, 0.004, 0.532]}
                scale={0.082}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_165.geometry}
                  material={materials['Material.005']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                position={[0.464, 3.651, -0.824]}
                rotation={[-1.564, -0.004, -0.534]}
                scale={[-0.082, 0.082, 0.082]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials['Material.005']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_169.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                position={[0.463, 3.651, 0.826]}
                rotation={[-1.578, -0.004, -2.609]}
                scale={0.082}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_171.geometry}
                  material={materials['Material.005']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_172.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                position={[-0.482, 3.651, 0.826]}
                rotation={[-1.578, 0.004, 2.608]}
                scale={[-0.082, 0.082, 0.082]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials['Material.005']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_175.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                position={[-0.081, -9.635, 0.168]}
                rotation={[0, -0.825, 0]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_177.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_178.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_179.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_180.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_181.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_182.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_183.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_184.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_185.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_186.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_187.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[-0.092, -9.635, -0.166]}
                rotation={[-Math.PI, -0.824, -Math.PI]}
                scale={[-0.045, 0.045, 0.045]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_189.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_190.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_191.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_193.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_195.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_196.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_197.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_198.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_199.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[0.206, -9.635, 0.006]}
                rotation={[0, 1.504, 0]}
                scale={[-0.045, 0.045, 0.045]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_201.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_202.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_203.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_204.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_205.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_206.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_207.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_208.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_209.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_210.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_211.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[0.539, -9.635, 0.02]}
                rotation={[0, 1.504, 0]}
                scale={[-0.045, 0.045, 0.045]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_213.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_214.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_215.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_216.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_217.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_219.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_220.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_221.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_222.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_223.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[0.432, -9.635, 0.32]}
                rotation={[0, 0.689, 0]}
                scale={[-0.045, 0.045, 0.045]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_225.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_226.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_228.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_229.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_230.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_231.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_232.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_233.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_234.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_235.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[0.156, -9.635, 0.51]}
                rotation={[0, 0.049, 0]}
                scale={[-0.045, 0.045, 0.045]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_237.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_238.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_239.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_240.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_241.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_242.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_243.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_244.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_245.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_246.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_247.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[-0.518, -9.635, -0.013]}
                rotation={[0, -1.506, 0]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_249.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_250.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_251.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_252.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_253.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_254.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_255.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_256.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_257.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_258.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_259.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[-0.42, -9.635, 0.296]}
                rotation={[0, -0.691, 0]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_261.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_262.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_263.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_264.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_265.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_266.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_267.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_268.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_269.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_270.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_271.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[-0.169, -9.635, 0.496]}
                rotation={[0, -0.05, 0]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_273.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_274.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_275.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_276.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_277.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_278.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_279.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_280.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_281.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_282.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_283.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[0.443, -9.635, -0.302]}
                rotation={[-Math.PI, 0.691, -Math.PI]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_285.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_286.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_287.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_288.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_289.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_290.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_291.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_292.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_293.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_294.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_295.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[0.185, -9.635, -0.498]}
                rotation={[-Math.PI, 0.05, -Math.PI]}
                scale={0.045}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_297.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_298.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_299.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_300.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_301.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_302.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_303.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_304.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_305.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_306.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_307.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[-0.412, -9.635, -0.315]}
                rotation={[-Math.PI, -0.689, -Math.PI]}
                scale={[-0.045, 0.045, 0.045]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_309.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_310.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_311.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_312.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_313.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_314.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_315.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_316.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_317.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_318.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_319.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                position={[-0.136, -9.635, -0.503]}
                rotation={[-Math.PI, -0.049, -Math.PI]}
                scale={[-0.045, 0.045, 0.045]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_321.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_322.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_323.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_324.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_325.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_326.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_327.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_328.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_329.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_330.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_331.geometry}
                  material={materials.Material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </Center>
  );
}

useGLTF.preload('/rocket_new/scene.gltf');
