(async function () {
  const versionNode = document.getElementById('app-version');
  const button = document.getElementById('download-button');
  const statusNode = document.getElementById('release-status');
  const notesNode = document.getElementById('release-notes');
  const helpNode = document.getElementById('download-help');

  if (!versionNode && !button && !notesNode) return;

  try {
    const response = await fetch('site-config.json?v=' + Date.now(), { cache: 'no-store' });
    if (!response.ok) throw new Error('Could not load site-config.json');
    const config = await response.json();

    if (versionNode) versionNode.textContent = config.version || 'Version not set';
    if (statusNode) statusNode.textContent = config.versionLabel || config.status || 'Release details';

    if (button) {
      const url = String(config.downloadUrl || '').trim();
      if (/^https:\/\//i.test(url)) {
        button.href = url;
        button.removeAttribute('aria-disabled');
        button.classList.remove('is-disabled');
      } else {
        button.href = '#';
        button.setAttribute('aria-disabled', 'true');
        button.classList.add('is-disabled');
        if (helpNode) helpNode.textContent = 'The download link has not been configured yet.';
      }
    }

    if (notesNode) {
      notesNode.replaceChildren();
      const notes = Array.isArray(config.releaseNotes) ? config.releaseNotes : [];
      (notes.length ? notes : ['No release notes have been added yet.']).forEach((note) => {
        const item = document.createElement('li');
        item.textContent = String(note);
        notesNode.appendChild(item);
      });
    }
  } catch (error) {
    if (versionNode) versionNode.textContent = 'Unavailable';
    if (statusNode) statusNode.textContent = 'Could not load release details';
    if (button) {
      button.href = '#';
      button.setAttribute('aria-disabled', 'true');
      button.classList.add('is-disabled');
    }
    if (helpNode) helpNode.textContent = 'Please check that site-config.json is uploaded beside this page.';
    if (notesNode) notesNode.innerHTML = '<li>Release details could not be loaded.</li>';
    console.error(error);
  }
})();
