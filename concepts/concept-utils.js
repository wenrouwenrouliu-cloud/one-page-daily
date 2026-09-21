window.Concept = (() => {
  const data = window.DAILY_BRIEF_DATA;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);
  const url = value => {
    try {
      const parsed = new URL(value);
      return ['http:', 'https:'].includes(parsed.protocol) ? parsed.href : '#';
    } catch { return '#'; }
  };
  const recommendations = data?.recommendations || [];
  return {
    data,
    esc,
    url,
    light: recommendations.slice(0, 4),
    deep: recommendations.slice(4, 6),
    platforms: data?.social?.platforms || [],
    latest: data?.latest || [],
    sources: data?.sources || []
  };
})();
