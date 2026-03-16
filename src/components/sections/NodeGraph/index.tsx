"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Graph from "./Graph";

interface NodeGraphProps {
  seed: number;
}

export default function NodeGraph({ seed }: NodeGraphProps) {
  const [isMobile, setIsMobile] = useState(false);
  const reducedMotion = useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="w-full h-full animate-fade-in">
      <Canvas
        flat
        camera={{ position: [0, 0, 18], fov: 70 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, isMobile ? 1.5 : 2]}
      >
        <color attach="background" args={["#000000"]} />
        <AdaptiveDpr pixelated />
        <Graph isMobile={isMobile} seed={seed} />
        <EffectComposer>
          <Bloom
            intensity={isMobile ? 0.6 : 1.4}
            luminanceThreshold={0.05}
            luminanceSmoothing={0.9}
            radius={isMobile ? 0.3 : 0.65}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
