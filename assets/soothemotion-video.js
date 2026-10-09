// Set to the actual public YouTube demonstration URL when it is ready.
// Leave empty to retain the honest "Video coming soon" placeholder.
const SOOTHEMOTION_YOUTUBE_URL = '';
if (SOOTHEMOTION_YOUTUBE_URL) {
  try {
    const url = new URL(SOOTHEMOTION_YOUTUBE_URL);
    if (url.protocol === 'https:' && ['www.youtube.com', 'youtube.com', 'youtu.be'].includes(url.hostname)) {
      const panel = document.getElementById('demo-video');
      const link = document.createElement('a');
      link.className = 'button';
      link.href = url.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Watch the demonstration on YouTube ↗';
      panel.querySelector('p').textContent = 'See the prototype in action.';
      panel.querySelector('.video-tag').replaceWith(link);
    }
  } catch { /* Keep the placeholder when configuration is invalid. */ }
}
