import React, { useEffect, useState } from "react";

function Mouse() {
  const [enabled, setEnabled] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <div
        className={`absolute bg-gradient-radial from-green-l from-33% via-violet-d via-66% to-transparent to-60% rounded-full opacity-20 pointer-events-none left-[-100px] top-[-100px] w-52 h-52`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
{/*       <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button> */}
    </>
  );
}

export default Mouse;
