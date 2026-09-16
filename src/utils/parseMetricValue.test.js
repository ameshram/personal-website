import { describe, it, expect } from 'vitest';
import { parseMetricValue } from './parseMetricValue';

describe('parseMetricValue', () => {
  it('parses a magnitude with prefix and suffix', () => {
    expect(parseMetricValue('$10M')).toEqual({ prefix: '$', num: 10, suffix: 'M' });
    expect(parseMetricValue('1.5B+')).toEqual({ prefix: '', num: 1.5, suffix: 'B+' });
    expect(parseMetricValue('95%')).toEqual({ prefix: '', num: 95, suffix: '%' });
    expect(parseMetricValue('<10')).toEqual({ prefix: '<', num: 10, suffix: '' });
  });

  it('returns null for qualitative labels (rendered verbatim, not animated)', () => {
    // These are the actual metric values shipped in content.js - deliberately
    // generalized to buckets rather than exact figures, so Counter must NOT try
    // to animate them.
    for (const label of ['Most', 'Minutes', '7-figure', '8-figure', 'Majority',
      'Double-digit', 'Real-time', '~⅓', 'Millions', 'Trillions', 'Halved+',
      'Billions', '~98%']) {
      expect(parseMetricValue(label)).toBeNull();
    }
  });

  it('returns null for non-string input', () => {
    expect(parseMetricValue(undefined)).toBeNull();
    expect(parseMetricValue(42)).toBeNull();
  });
});
