import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ftm.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.25}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.character_0.geometry}
          material={materials.roof}
          position={[2.114, 4.374, -1.137]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sky_0.geometry}
          material={materials.material_10}
          rotation={[0, 0, -0.096]}
          scale={0.55}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground_0.geometry}
          material={materials.ground}
          position={[1.983, -3.326, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_leaves_0.geometry}
          material={materials.tree_leaves}
          position={[1.983, -3.326, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_leaves_inv_0.geometry}
          material={materials.tree_leaves}
          position={[1.983, -3.326, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.roof_0.geometry}
          material={materials.roof}
          position={[1.983, -3.326, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.madera_0.geometry}
          material={materials.madera}
          position={[1.983, -3.326, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.piedras_0.geometry}
          material={materials.piedras}
          position={[1.983, -3.326, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dec_0.geometry}
          material={materials.material}
          position={[1.983, -3.326, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.outline_0.geometry}
          material={materials.outline}
          position={[1.983, -3.326, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monster_001_0.geometry}
          material={materials.monster_001}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monster_0.geometry}
          material={materials.monster}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eyes002_0.geometry}
          material={materials.eyes002}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/ftm.glb')