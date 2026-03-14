import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Node from "./Node";
import Edges from "./Edges";

export interface NodeData {
  id: number;
  position: THREE.Vector3;
  radius: number;
  isHub: boolean;
  pulseOffset: number;
  pulseSpeed: number;
  driftFreqX: number;
  driftFreqY: number;
  driftFreqZ: number;
  driftPhaseX: number;
  driftPhaseY: number;
  driftPhaseZ: number;
  driftAmp: number;
}

interface GraphProps {
  isMobile: boolean;
  seed: number;
}

const SPAWN_RADIUS = 13;
const EDGE_DISTANCE = 5.5;
const MAX_EDGES_PER_NODE = 4;
const REPULSE_RADIUS = 7;
const REPULSE_FORCE = 0.04;
const REPULSE_SPRING = 0.008;
const REPULSE_DAMPING = 0.95;

export default function Graph({ isMobile, seed }: GraphProps) {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const edgeAttrRef = useRef<THREE.BufferAttribute>(null);
  const repulseOffsets = useRef<THREE.Vector3[]>([]);
  const repulseVelocities = useRef<THREE.Vector3[]>([]);
  const _plane = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
  const _cursorLocal = useRef(new THREE.Vector3());
  const nodeCount = isMobile ? 30 : 55;

  const nodes = useMemo<NodeData[]>(() => {
    const result: NodeData[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = SPAWN_RADIUS * (0.55 + Math.random() * 0.45);
      result.push({
        id: i,
        position: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi) * 0.35,
        ),
        radius:
          i < 5 ? 0.12 + Math.random() * 0.06 : 0.04 + Math.random() * 0.04,
        isHub: i < 5,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.4 + Math.random() * 0.8,
        driftFreqX: 0.15 + Math.random() * 0.25,
        driftFreqY: 0.12 + Math.random() * 0.2,
        driftFreqZ: 0.1 + Math.random() * 0.15,
        driftPhaseX: Math.random() * Math.PI * 2,
        driftPhaseY: Math.random() * Math.PI * 2,
        driftPhaseZ: Math.random() * Math.PI * 2,
        driftAmp: 0.3 + Math.random() * 0.7,
      });
    }
    return result;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeCount, seed]);

  const { connections, initialEdgePositions } = useMemo(() => {
    const conns: [number, number][] = [];
    const edgeCounts = new Array<number>(nodes.length).fill(0);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (
          edgeCounts[i] >= MAX_EDGES_PER_NODE ||
          edgeCounts[j] >= MAX_EDGES_PER_NODE
        )
          continue;
        if (nodes[i].position.distanceTo(nodes[j].position) < EDGE_DISTANCE) {
          conns.push([i, j]);
          edgeCounts[i]++;
          edgeCounts[j]++;
        }
      }
    }
    const pos = new Float32Array(conns.length * 6);
    for (let k = 0; k < conns.length; k++) {
      const [a, b] = conns[k];
      const pa = nodes[a].position;
      const pb = nodes[b].position;
      pos[k * 6 + 0] = pa.x;
      pos[k * 6 + 1] = pa.y;
      pos[k * 6 + 2] = pa.z;
      pos[k * 6 + 3] = pb.x;
      pos[k * 6 + 4] = pb.y;
      pos[k * 6 + 5] = pb.z;
    }
    return { connections: conns, initialEdgePositions: pos };
  }, [nodes]);

  useEffect(() => {
    repulseOffsets.current = nodes.map(() => new THREE.Vector3());
    repulseVelocities.current = nodes.map(() => new THREE.Vector3());
  }, [nodes]);

  useEffect(() => {
    if (isMobile) return;
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isMobile]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.x += delta * 0.02;

    if (!isMobile) {
      state.camera.position.x +=
        (mouseRef.current.x * 2 - state.camera.position.x) * 0.02;
      state.camera.position.y +=
        (mouseRef.current.y * 1.5 - state.camera.position.y) * 0.02;
      state.camera.lookAt(0, 0, 0);
    }

    if (repulseOffsets.current.length !== nodes.length) {
      repulseOffsets.current = nodes.map(() => new THREE.Vector3());
      repulseVelocities.current = nodes.map(() => new THREE.Vector3());
    }

    let hasCursor = false;
    if (!isMobile && groupRef.current) {
      const hit = state.raycaster.ray.intersectPlane(
        _plane.current,
        _cursorLocal.current,
      );
      if (hit) {
        groupRef.current.worldToLocal(_cursorLocal.current);
        hasCursor = true;
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const mesh = nodeRefs.current[i];
      if (!mesh) continue;
      const n = nodes[i];

      const driftX =
        n.position.x + Math.sin(t * n.driftFreqX + n.driftPhaseX) * n.driftAmp;
      const driftY =
        n.position.y + Math.sin(t * n.driftFreqY + n.driftPhaseY) * n.driftAmp;
      const driftZ =
        n.position.z +
        Math.sin(t * n.driftFreqZ + n.driftPhaseZ) * n.driftAmp * 0.5;

      const offset = repulseOffsets.current[i];
      const vel = repulseVelocities.current[i];

      if (hasCursor) {
        const dx = driftX - _cursorLocal.current.x;
        const dy = driftY - _cursorLocal.current.y;
        const dz = driftZ - _cursorLocal.current.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < REPULSE_RADIUS && dist > 0.001) {
          const falloff = Math.pow(1 - dist / REPULSE_RADIUS, 1.5);
          const force = falloff * REPULSE_FORCE;
          vel.x += (dx / dist) * force;
          vel.y += (dy / dist) * force;
          vel.z += (dz / dist) * force * 0.4;
        }
      }

      // Spring pulls offset back toward zero — creates oscillation not drift
      vel.x -= offset.x * REPULSE_SPRING;
      vel.y -= offset.y * REPULSE_SPRING;
      vel.z -= offset.z * REPULSE_SPRING;

      vel.x *= REPULSE_DAMPING;
      vel.y *= REPULSE_DAMPING;
      vel.z *= REPULSE_DAMPING;
      offset.x += vel.x;
      offset.y += vel.y;
      offset.z += vel.z;

      mesh.position.set(
        driftX + offset.x,
        driftY + offset.y,
        driftZ + offset.z,
      );
      const pulse = 1 + Math.sin(t * n.pulseSpeed + n.pulseOffset) * 0.12;
      mesh.scale.setScalar(pulse);
    }

    if (edgeAttrRef.current) {
      const arr = edgeAttrRef.current.array as Float32Array;
      for (let k = 0; k < connections.length; k++) {
        const [a, b] = connections[k];
        const meshA = nodeRefs.current[a];
        const meshB = nodeRefs.current[b];
        if (!meshA || !meshB) continue;
        arr[k * 6 + 0] = meshA.position.x;
        arr[k * 6 + 1] = meshA.position.y;
        arr[k * 6 + 2] = meshA.position.z;
        arr[k * 6 + 3] = meshB.position.x;
        arr[k * 6 + 4] = meshB.position.y;
        arr[k * 6 + 5] = meshB.position.z;
      }
      edgeAttrRef.current.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <Edges initialPositions={initialEdgePositions} attrRef={edgeAttrRef} />
      {nodes.map((node, i) => (
        <Node
          key={node.id}
          data={node}
          isMobile={isMobile}
          meshRef={(el) => {
            nodeRefs.current[i] = el;
          }}
        />
      ))}
    </group>
  );
}
