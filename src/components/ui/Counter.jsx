import { useState, useEffect } from 'react';
import useReveal from '../../hooks/useReveal';

export default function Counter({ end, prefix = '', suffix = '', duration = 1500 }) {
  const [n, setN] = useState(0);
  const { ref, visible } = useReveal(0.3);

  useEffect(() => {
    if (!visible) return;
    const t0 = performance.now();
    const frame = (now) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setN(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{n}{suffix}
    </span>
  );
}
