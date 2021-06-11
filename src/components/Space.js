import React from 'react';
// import three from 'three';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';
import './Space.css';
export default function Space() {
    return(
        <div className="space">
            <Canvas>
                <Stars />
                <OrbitControls />
            </Canvas>
        </div>
    )
}