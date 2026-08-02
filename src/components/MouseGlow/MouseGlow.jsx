import { useEffect, useState } from "react";
import "./MouseGlow.css";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      className="mouse-glow"
      style={{
        transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
      }}
    />
  );
}