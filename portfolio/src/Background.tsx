import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

interface Vanta {
  el: any;
  THREE: any;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  backgroundColor: number;
  points: number;
  maxDistance: number;
  spacing: number;
}

const Background: React.FC<Partial<Vanta>> = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaBackground: any;
    const renderBackground = () => {
      if (vantaRef.current && !vantaBackground) {
        vantaBackground = NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x773fff,
          backgroundColor: 0xb0b0c,
          points: 8.0,
          maxDistance: 21.0,
          spacing: 20.0,
        });
      }
    };
    renderBackground();
    return () => {
      if (vantaBackground) {
        vantaBackground.destroy();
      }
    };
  }, []);
  return <div className="vanta-background" ref={vantaRef}></div>;
};
export default Background;
