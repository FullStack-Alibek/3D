import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Sun, Moon, RotateCcw, Box as BoxIcon, Layers } from 'lucide-react';

export const Interactive3DViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [nightMode, setNightMode] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [materialStyle, setMaterialStyle] = useState<'modern' | 'glass' | 'concrete'>('modern');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const houseGroupRef = useRef<THREE.Group | null>(null);
  const materialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const lightsRef = useRef<{ dirLight: THREE.DirectionalLight; ambientLight: THREE.AmbientLight; pointLights: THREE.PointLight[] }>({
    dirLight: new THREE.DirectionalLight(0xffffff, 1),
    ambientLight: new THREE.AmbientLight(0xffffff, 0.4),
    pointLights: []
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(nightMode ? 0x090d16 : 0xf1f5f9);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(12, 10, 16);
    camera.lookAt(0, 2, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(nightMode ? 0x1e293b : 0xffffff, nightMode ? 0.3 : 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(nightMode ? 0x38bdf8 : 0xfef08a, nightMode ? 0.8 : 1.8);
    dirLight.position.set(15, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Warm Interior Point Lights
    const pointLight1 = new THREE.PointLight(0xf59e0b, 2, 8);
    pointLight1.position.set(0, 3, 0);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xf59e0b, 1.5, 6);
    pointLight2.position.set(3, 1.5, 2);
    scene.add(pointLight2);

    lightsRef.current = {
      dirLight,
      ambientLight,
      pointLights: [pointLight1, pointLight2]
    };

    // Build 3D Architectural House Group
    const houseGroup = new THREE.Group();
    houseGroupRef.current = houseGroup;
    materialsRef.current = [];

    // Materials
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.3,
      metalness: 0.2,
      wireframe: wireframe
    });

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.6,
      wireframe: wireframe
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: wireframe
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: wireframe
    });

    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.8,
      wireframe: wireframe
    });

    materialsRef.current.push(baseMat, wallMat, accentMat, glassMat, darkMat);

    // Ground Platform
    const platformGeo = new THREE.BoxGeometry(16, 0.4, 16);
    const platform = new THREE.Mesh(platformGeo, baseMat);
    platform.position.y = -0.2;
    platform.receiveShadow = true;
    houseGroup.add(platform);

    // Main 1st Floor
    const floor1Geo = new THREE.BoxGeometry(8, 3.5, 7);
    const floor1 = new THREE.Mesh(floor1Geo, wallMat);
    floor1.position.set(-0.5, 1.75, -0.5);
    floor1.castShadow = true;
    floor1.receiveShadow = true;
    houseGroup.add(floor1);

    // 2nd Floor Cantilever Block
    const floor2Geo = new THREE.BoxGeometry(7, 3, 8);
    const floor2 = new THREE.Mesh(floor2Geo, darkMat);
    floor2.position.set(1, 5, 0.5);
    floor2.castShadow = true;
    floor2.receiveShadow = true;
    houseGroup.add(floor2);

    // Glass Panoramic Windows
    const windowGeo1 = new THREE.BoxGeometry(5, 2.2, 0.1);
    const window1 = new THREE.Mesh(windowGeo1, glassMat);
    window1.position.set(-0.5, 1.8, 3.01);
    houseGroup.add(window1);

    const windowGeo2 = new THREE.BoxGeometry(4.5, 2, 0.1);
    const window2 = new THREE.Mesh(windowGeo2, glassMat);
    window2.position.set(1, 5, 4.51);
    houseGroup.add(window2);

    // Golden Accent Frame / Columns
    const colGeo = new THREE.CylinderGeometry(0.15, 0.15, 3.5, 16);
    const col1 = new THREE.Mesh(colGeo, accentMat);
    col1.position.set(4, 1.75, 4);
    col1.castShadow = true;
    houseGroup.add(col1);

    const col2 = new THREE.Mesh(colGeo, accentMat);
    col2.position.set(-3.5, 1.75, 4);
    col2.castShadow = true;
    houseGroup.add(col2);

    // Pool / Reflection Surface
    const poolGeo = new THREE.BoxGeometry(6, 0.1, 4);
    const poolMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.8
    });
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.position.set(-1, 0.05, 5);
    houseGroup.add(pool);

    scene.add(houseGroup);

    // Orbit Controls simulation (Mouse Drag)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !houseGroup) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      houseGroup.rotation.y += deltaMove.x * 0.008;
      houseGroup.rotation.x += deltaMove.y * 0.005;

      // Limit X tilt
      houseGroup.rotation.x = Math.max(-0.4, Math.min(0.8, houseGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (autoRotate && houseGroup && !isDragging) {
        houseGroup.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(domElem)) {
        container.removeChild(domElem);
      }
    };
  }, [nightMode]);

  // Handle wireframe update
  useEffect(() => {
    materialsRef.current.forEach(mat => {
      mat.wireframe = wireframe;
    });
  }, [wireframe]);

  // Handle Material Preset Update
  useEffect(() => {
    if (!materialsRef.current.length) return;

    const [baseMat, wallMat, accentMat, glassMat, darkMat] = materialsRef.current;

    if (materialStyle === 'modern') {
      wallMat.color.setHex(0xe2e8f0);
      darkMat.color.setHex(0x0f172a);
      accentMat.color.setHex(0xf59e0b);
    } else if (materialStyle === 'glass') {
      wallMat.color.setHex(0x38bdf8);
      darkMat.color.setHex(0x0284c7);
      accentMat.color.setHex(0xe0f2fe);
    } else if (materialStyle === 'concrete') {
      wallMat.color.setHex(0x64748b);
      darkMat.color.setHex(0x334155);
      accentMat.color.setHex(0xd97706);
    }
  }, [materialStyle]);

  const resetView = () => {
    if (houseGroupRef.current) {
      houseGroupRef.current.rotation.set(0, 0, 0);
    }
  };

  return (
    <div className="relative w-full h-[450px] lg:h-[520px] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-2xl group">
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Instructions Overlay */}
      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/50 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs text-slate-300 font-mono">Interactive 3D Model • Drag to Rotate</span>
      </div>

      {/* Control Tools Panel */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 p-2 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800">
        {/* Left Toggles */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setWireframe(!wireframe)}
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              wireframe
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
            title="Toggle Blueprint Wireframe Mode"
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Wireframe</span>
          </button>

          <button
            onClick={() => setNightMode(!nightMode)}
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              nightMode
                ? 'bg-indigo-600 text-white'
                : 'bg-amber-400 text-slate-950'
            }`}
            title="Toggle Day/Night Lighting"
          >
            {nightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            <span className="hidden sm:inline">{nightMode ? 'Night Mode' : 'Day Mode'}</span>
          </button>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-2 rounded-xl text-xs font-semibold transition-all ${
              autoRotate ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-slate-800 text-slate-400'
            }`}
            title="Auto Rotate"
          >
            <RotateCcw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Style Preset Selector */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          {(['modern', 'glass', 'concrete'] as const).map((style) => (
            <button
              key={style}
              onClick={() => setMaterialStyle(style)}
              className={`px-2.5 py-1 text-[11px] font-mono capitalize rounded-lg transition-all ${
                materialStyle === style
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Reset */}
        <button
          onClick={resetView}
          className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 text-xs font-semibold"
          title="Reset Camera View"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
