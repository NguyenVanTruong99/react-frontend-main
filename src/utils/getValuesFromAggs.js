const getValuesFromAggs = (aggs, field) => {
  const fallback = [];

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

  return buckets.map(bucket => bucket.key);
};

export default getValuesFromAggs;
