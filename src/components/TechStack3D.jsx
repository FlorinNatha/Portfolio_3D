import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

// Your actual tech stack with brand colours — 3 orbital rings
const INNER = [
  { name: 'React',  color: '#61DAFB', phase: 0 },
  { name: 'Node',   color: '#339933', phase: Math.PI },
  { name: 'Docker', color: '#2496ED', phase: Math.PI / 2 },
  { name: 'Python', color: '#3776AB', phase: (3 * Math.PI) / 2 },
];
const MID = [
  { name: 'MongoDB', color: '#47A248', phase: 0.5 },
  { name: 'MySQL',   color: '#4479A1', phase: 2.1 },
  { name: 'AWS',     color: '#FF9900', phase: 3.7 },
  { name: 'GitHub',  color: '#aaaaaa', phase: 5.2 },
];
const OUTER = [
  { name: 'TypeScript', color: '#3178C6', phase: 0.9 },
  { name: 'Jenkins',    color: '#D24939', phase: 2.7 },
  { name: 'Linux',      color: '#FCC624', phase: 4.5 },
  { name: 'Next.js',    color: '#ffffff', phase: 6.0 },
];

const OrbiterGroup = ({ nodes, radius, speed, nodeSize }) => {
  const refs = useRef(nodes.map(() => ({ sphere: null, label: null })));

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    nodes.forEach((n, i) => {
      const angle = t * speed + n.phase;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 0.5) * 0.3;

      const r = refs.current[i];
      if (r.sphere) r.sphere.position.set(x, y, z);
      if (r.label)  {
        r.label.position.set(x, y + nodeSize + 0.22, z);
        // Keep labels facing forward
        r.label.lookAt(0, y + nodeSize + 0.22, 20);
      }
    });
  });

  return (
    <>
      {nodes.map((n, i) => (
        <group key={n.name}>
          <mesh ref={(el) => { if (refs.current[i]) refs.current[i].sphere = el; }}>
            <sphereGeometry args={[nodeSize, 16, 16]} />
            <meshStandardMaterial
              color={n.color}
              emissive={n.color}
              emissiveIntensity={1.5}
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>
          <Text
            ref={(el) => { if (refs.current[i]) refs.current[i].label = el; }}
            fontSize={0.16}
            color={n.color}
            anchorX="center"
            anchorY="bottom"
          >
            {n.name}
          </Text>
        </group>
      ))}
    </>
  );
};

const OrbitRing = ({ radius, opacity }) => (
  <mesh rotation={[Math.PI / 2, 0, 0]}>
    <torusGeometry args={[radius, 0.012, 6, 80]} />
    <meshBasicMaterial color="#61DAFB" transparent opacity={opacity} />
  </mesh>
);

const Nucleus = () => {
  const outer = useRef();
  const inner = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (outer.current) { outer.current.rotation.x = t * 0.3; outer.current.rotation.y = t * 0.5; }
    if (inner.current) { inner.current.rotation.z = t * 0.4; }
  });

  return (
    <group>
      <mesh ref={outer}>
        <icosahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.7} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.35, 20, 20]} />
        <meshStandardMaterial color="#010c1e" emissive="#004466" emissiveIntensity={1} metalness={1} roughness={0.1} />
      </mesh>
      {/* Equatorial ring */}
      <mesh ref={inner} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.85, 0.04, 10, 80]} />
        <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

const TechStack3D = () => {
  const scene = useRef();
  useFrame(({ clock }) => {
    if (scene.current) scene.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={scene}>
      <Nucleus />
      <OrbitRing radius={2.0} opacity={0.18} />
      <OrbitRing radius={3.3} opacity={0.12} />
      <OrbitRing radius={4.6} opacity={0.08} />
      <OrbiterGroup nodes={INNER} radius={2.0} speed={0.55} nodeSize={0.22} />
      <OrbiterGroup nodes={MID}   radius={3.3} speed={0.32} nodeSize={0.17} />
      <OrbiterGroup nodes={OUTER} radius={4.6} speed={0.18} nodeSize={0.13} />
    </group>
  );
};

export default TechStack3D;
