import React from 'react'

import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader'
import { useLoader } from '@react-three/fiber'
import model from '../assets/crab.3mf'

const Model = () => {
  const geometry = useLoader(ThreeMFLoader, model)

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <primitive object={geometry} />
    </group>
  )
}

export default Model
