/**
 * Highlights metric-shaped tokens in text by wrapping them with accent styling
 * (currency, percentages, durations, and abbreviated magnitudes).
 */
export function highlightMetrics(text) {
  const metricPattern = /(<?\$?\d+\.?\d*[MBKT]?(?:Bn)?\+?(?:\/yr|\/mo|%| pts| min)?)/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = metricPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <span key={match.index} className="text-accent font-semibold">
        {match[0]}
      </span>
    );
    lastIndex = metricPattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
