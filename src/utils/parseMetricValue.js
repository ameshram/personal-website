/**
 * Parse a metric string like "$10M", "95%", "<10", or "1.5B+" into its parts so
 * the numeric portion can be animated by <Counter>. Returns null when the value
 * is not a plain number (e.g. qualitative labels like "Most" or "8-figure"), in
 * which case the caller renders the string verbatim.
 *
 * @param {string} value
 * @returns {{ prefix: string, num: number, suffix: string } | null}
 */
export function parseMetricValue(value) {
  if (typeof value !== 'string') return null;
  const match = value.match(/^([<$]?)(\d+\.?\d*)([MBKT%+]*\+?)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  return { prefix, num: parseFloat(num), suffix };
}
