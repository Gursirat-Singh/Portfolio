import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`relative flex items-center justify-center min-h-screen overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Subtle background overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(var(--bg-primary-rgb, 3, 4, 18), 0.3) 0%, transparent 50%, rgba(var(--bg-primary-rgb, 3, 4, 18), 0.3) 100%)",
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden z-5">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse"
          style={{
            backgroundColor: "var(--text-secondary)",
            opacity: 0.3,
            animationDelay: "0s",
            animationDuration: "3s",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full animate-pulse"
          style={{
            backgroundColor: "var(--text-secondary)",
            opacity: 0.4,
            animationDelay: "1s",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse"
          style={{
            backgroundColor: "var(--text-secondary)",
            opacity: 0.25,
            animationDelay: "2s",
            animationDuration: "5s",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full animate-pulse"
          style={{
            backgroundColor: "var(--text-secondary)",
            opacity: 0.35,
            animationDelay: "0.5s",
            animationDuration: "3.5s",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/2 w-2 h-2 rounded-full animate-pulse"
          style={{
            backgroundColor: "var(--text-secondary)",
            opacity: 0.3,
            animationDelay: "1.5s",
            animationDuration: "4.5s",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-20">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <HeroText />
          </div>

          {/* 3D Model container */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg h-96 lg:h-[500px]">
              {/* Glow effect behind 3D model */}
              <div className="absolute inset-0 bg-gradient-radial from-aqua/30 via-transparent to-transparent rounded-full blur-3xl scale-150" />

              <Canvas camera={{ position: [0, 1, 3] }} className="rounded-2xl">
                <Suspense fallback={<Loader />}>
                  <Float
                    speed={1.5}
                    rotationIntensity={0.5}
                    floatIntensity={0.5}
                  >
                    <Astronaut
                      scale={isMobile ? 0.23 : 0.3}
                      position={isMobile ? [0, -1.5, 0] : [0, -0.5, 0]}
                    />
                  </Float>
                  <Rig />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax background */}
      <ParallaxBackground />
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta,
    );
  });
}

export default Hero;
