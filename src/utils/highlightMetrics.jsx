/**
 * Highlights metrics in text by wrapping numbers with accent styling
 * Matches patterns like: $28M, 95%, <10 min, $5M+/yr, 350M, 1.5B, 97.96%, 100Bn, 1.2T
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
