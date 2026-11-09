import { useEffect, useRef } from "react";

/** Browser-only WebGL, with the CSS architecture retained underneath as a fallback. */
export function ArchitecturalScene() {
  const mount = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    let stopped = false;
    let dispose: (() => void) | undefined;
    void import("three").then((THREE) => {
      if (stopped) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch {
        return;
      }
      const theme = getComputedStyle(document.documentElement);
      const bronze = theme.getPropertyValue("--bronze").trim();
      const graphite = theme.getPropertyValue("--graphite").trim();
      const platinum = theme.getPropertyValue("--platinum").trim();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
      camera.position.set(0, 2.8, 17);
      camera.lookAt(0, 2, 0);
      scene.add(new THREE.AmbientLight(platinum, 1.3));
      const key = new THREE.DirectionalLight(platinum, 6);
      key.position.set(4, 7, 5);
      scene.add(key);
      const rim = new THREE.PointLight(bronze, 140, 25);
      rim.position.set(2, 3, 4);
      scene.add(rim);
      const architecture = new THREE.Group();
      scene.add(architecture);
      const metal = new THREE.MeshStandardMaterial({ color: graphite, metalness: 0.85, roughness: 0.27 });
      const trim = new THREE.MeshStandardMaterial({ color: bronze, metalness: 0.8, roughness: 0.3 });
      const floor = new THREE.Mesh(new THREE.PlaneGeometry(50, 40), metal);
      floor.rotation.x = -Math.PI / 2;
      floor.position.set(0, -1.3, -8);
      architecture.add(floor);
      const grid = new THREE.GridHelper(38, 38, bronze, graphite);
      grid.position.set(0, -1.28, -8);
      architecture.add(grid);
      for (let i = 0; i < 9; i++) {
        const height = 3.4 + (i % 4) * 1.1;
        const tower = new THREE.Mesh(new THREE.BoxGeometry(0.85, height, 1.3), metal);
        tower.position.set(1.8 + i * 1.05, height / 2 - 1.2, -2.5 - (i % 3) * 1.5);
        architecture.add(tower);
        const edge = new THREE.LineSegments(new THREE.EdgesGeometry(tower.geometry), new THREE.LineBasicMaterial({ color: bronze, transparent: true, opacity: 0.2 }));
        edge.position.copy(tower.position);
        architecture.add(edge);
      }
      for (let i = 0; i < 3; i++) {
        const frame = new THREE.Mesh(new THREE.TorusGeometry(3.7 + i * 0.65, 0.065, 12, 100), trim);
        frame.position.set(3.25, 2.5, -0.6 - i * 0.8);
        frame.rotation.y = -0.28;
        architecture.add(frame);
      }
      host.appendChild(renderer.domElement);
      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        renderer.setSize(width, height);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
      };
      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(host);
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      let targetX = 0;
      let targetY = 0;
      const pointer = (e: PointerEvent) => {
        if (e.pointerType !== "mouse" || reduced.matches) return;
        targetX = (e.clientX / window.innerWidth - 0.5) * 0.06;
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.025;
      };
      window.addEventListener("pointermove", pointer, { passive: true });
      let frameId = 0;
      const render = () => {
        if (stopped) return;
        architecture.rotation.y += (targetX - architecture.rotation.y) * 0.04;
        architecture.rotation.x += (targetY - architecture.rotation.x) * 0.04;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(render);
      };
      render();
      dispose = () => {
        cancelAnimationFrame(frameId);
        observer.disconnect();
        window.removeEventListener("pointermove", pointer);
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
            object.geometry.dispose();
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => material.dispose());
          }
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => { /* The static architecture remains visible if WebGL is unavailable. */ });
    return () => { stopped = true; dispose?.(); };
  }, []);
  return <div ref={mount} className="architectural-canvas" aria-hidden="true" />;
}
