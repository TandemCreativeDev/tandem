import * as THREE from "three";
import { NodeData } from "./Graph";

interface NodeProps {
  data: NodeData;
  isMobile: boolean;
  meshRef: (el: THREE.Mesh | null) => void;
}

export default function Node({ data, isMobile, meshRef }: NodeProps) {
  const { position, radius, isHub } = data;
  const segments = isMobile ? 8 : 12;
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, segments, segments]} />
      <meshStandardMaterial
        color={isHub ? "#ffffff" : "#4fffef"}
        emissive={isHub ? "#ffffff" : "#4fffef"}
        emissiveIntensity={isHub ? 4 : 2}
        toneMapped={false}
      />
    </mesh>
  );
}
