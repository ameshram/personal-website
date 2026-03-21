import { useRef, useEffect } from 'react';

export default function DottedWaveSurface() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let count = 0;
    let raf;
    const COLS = 50, ROWS = 28, SEP = 26;

    const resize = () => {
      c.width = c.offsetWidth * 2;
      c.height = c.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      const w = c.offsetWidth;
      const h = c.offsetHeight;
      const ox = (w - (COLS - 1) * SEP) / 2;
      const oy = h * 0.5;
      for (let ix = 0; ix < COLS; ix++) {
        for (let iy = 0; iy < ROWS; iy++) {
          const x = ox + ix * SEP;
          const wave = Math.sin((ix + count) * 0.25) * 14 + Math.sin((iy + count) * 0.4) * 10;
          const y = oy + (iy - ROWS / 2) * SEP + wave;
          const dist = Math.abs(wave) / 24;
          const alpha = 0.08 + dist * 0.2;
          const size = 1 + dist * 1.3;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 210, 190, ${alpha})`;
          ctx.fill();
        }
      }
      count += 0.035;
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  );
}
