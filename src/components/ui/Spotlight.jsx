export default function Spotlight() {
  return (
    <svg
      style={{
        position: 'absolute',
        top: '-30%',
        left: '-10%',
        width: '130%',
        height: '160%',
        pointerEvents: 'none',
        opacity: 0,
        animation: 'spotIn 1.5s ease forwards 0.4s',
      }}
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#sf)">
        <ellipse
          cx="1924"
          cy="273"
          rx="1924"
          ry="273"
          transform="matrix(-0.82 -0.57 -0.57 0.82 3631 2291)"
          fill="rgba(0,210,190,0.1)"
        />
      </g>
      <defs>
        <filter id="sf" x="0" y="0" width="3787" height="2842" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" result="s" />
          <feGaussianBlur stdDeviation="151" result="b" />
        </filter>
      </defs>
    </svg>
  );
}
