document.getElementById('capture').addEventListener('click', async () => {
  const statusEl = document.getElementById('status');
  statusEl.textContent = 'Capturando...';

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const dataUrl = await chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' });
    
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    const filename = `screenshot-${timestamp}.png`;
    
    chrome.downloads.download({
      url: dataUrl,
      filename: filename,
      saveAs: true  // Isso força o diálogo de salvamento para escolha de local
    });
    
    statusEl.textContent = 'Screenshot baixado! Escolha o local para salvar.';
  } catch (error) {
    console.error('Erro ao capturar screenshot:', error);
    statusEl.textContent = 'Erro ao capturar screenshot.';
  }
});