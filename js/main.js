(() => {
  'use strict';
  const c = window.JCORE_CONFIG;
  const base = `https://github.com/${encodeURIComponent(c.githubOwner)}/${encodeURIComponent(c.releaseRepository)}`;
  const status = document.querySelector('#release-status');
  const labels = { runtime: '설치 파일 다운로드 ↓', client: 'SDK 다운로드 ↓', brochure: '제품소개서 다운로드 ↓', manual: '매뉴얼 다운로드 ↓' };
  const setText = (selector, text) => document.querySelectorAll(selector).forEach(el => { el.textContent = text; });
  function apply(key, url, version, date) {
    if (key === 'brochure' && url) setText('[data-format=brochure]', url.toLowerCase().endsWith('.pptx') ? 'PPTX' : 'PDF');
    document.querySelectorAll(`[data-download="${key}"]`).forEach(el => {
      if (url) { el.href = url; el.removeAttribute('aria-disabled'); el.removeAttribute('tabindex'); }
      else { el.removeAttribute('href'); el.setAttribute('aria-disabled', 'true'); el.setAttribute('tabindex', '-1'); }
      if (el.classList.contains('download-action')) el.textContent = url ? labels[key] : '배포 준비 중';
      if (key === 'brochure' && el.classList.contains('doc-row')) el.querySelector('small').textContent = url ? '제품 개요 및 주요 기능 안내' : '제품소개서 · 배포 준비 중';
    });
    setText(`[data-version="${key}"]`, url ? `Version ${version}` : '배포 준비 중');
    setText(`[data-date="${key}"]`, url ? date : '별도 배포 파일 준비 중');
  }
  document.querySelectorAll('[data-release-link]').forEach(el => { el.href = base + '/releases' + (el.dataset.releaseLink === 'latest' ? '/latest' : ''); });
  const fallback = () => {
    for (const key of Object.keys(c.assets)) {
      const filename = c.fallback.assets[key];
      apply(key, filename ? `${base}/releases/download/${encodeURIComponent(c.fallback.tag)}/${encodeURIComponent(filename)}` : null, c.fallback.version, '확인된 배포 버전');
    }
  };
  fallback();
  const toggle = document.querySelector('.menu-toggle'), nav = document.querySelector('#navigation');
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  nav.querySelectorAll('a').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); } });
  async function load() {
    const abort = new AbortController(), timer = setTimeout(() => abort.abort(), c.timeoutMs);
    try {
      const response = await fetch(`https://api.github.com/repos/${encodeURIComponent(c.githubOwner)}/${encodeURIComponent(c.releaseRepository)}/releases/latest`, { signal: abort.signal, headers: { Accept: 'application/vnd.github+json' } });
      if (!response.ok) throw new Error('Release unavailable');
      const release = await response.json();
      if (release.draft || release.prerelease || !Array.isArray(release.assets) || typeof release.tag_name !== 'string') throw new Error('Invalid stable release');
      const version = release.tag_name.replace(/^v/, '');
      const date = new Date(release.published_at);
      const dateText = Number.isNaN(date.getTime()) ? '최신 안정 버전' : `Released ${date.toLocaleDateString('ko-KR', {year:'numeric',month:'2-digit',day:'2-digit'})}`;
      for (const [key, spec] of Object.entries(c.assets)) {
        const asset = spec.names.map(name => release.assets.find(a => a.name === name)).find(Boolean) || release.assets.find(a => spec.pattern && spec.pattern.test(a.name));
        // Construct URLs from the configured public repo; never follow arbitrary URLs in API data.
        const url = asset && asset.state === 'uploaded' ? `${base}/releases/download/${encodeURIComponent(release.tag_name)}/${encodeURIComponent(asset.name)}` : null;
        apply(key, url, version, dateText);
      }
      status.textContent = `최신 안정 버전 ${version} · GitHub Releases`;
    } catch (_) {
      fallback();
      status.textContent = `최신 버전을 확인하지 못했습니다. 확인된 ${c.fallback.version} 다운로드를 제공합니다. 최신 배포 여부는 Release Notes에서 확인하세요.`;
    } finally { clearTimeout(timer); }
  }
  load();
})();
