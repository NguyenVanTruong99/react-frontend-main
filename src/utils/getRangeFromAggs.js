const getRangeFromAggs = (aggs, field) => {
  const fallback = [1990, Number(new Date().getFullYear())];

  if (!Array.isArray(aggs) || aggs.length === 0) {
    return fallback;
  }

  const agg = aggs.find(agg => Array.isArray(agg) && agg[0] === field);

  if (!agg) {
    return fallback;
  }

  const buckets = agg[1].buckets;

  if (!Array.isArray(buckets) || buckets.length === 0) {
    return fallback;
  }

  return [Number(buckets[0].key), Number(buckets[buckets.length - 1].key)];
};

export default getRangeFromAggs;
