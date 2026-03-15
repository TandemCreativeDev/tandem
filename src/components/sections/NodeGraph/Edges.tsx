import { type RefObject } from "react";
import * as THREE from "three";

interface EdgesProps {
  initialPositions: Float32Array;
  attrRef: RefObject<THREE.BufferAttribute | null>;
}

export default function Edges({ initialPositions, attrRef }: EdgesProps) {
  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          ref={attrRef}
          attach="attributes-position"
          args={[initialPositions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#4fffef" transparent opacity={0.07} />
    </lineSegments>
  );
}
