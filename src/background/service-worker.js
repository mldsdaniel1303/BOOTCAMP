console.log('Service Worker da Captura de Tela Rápida iniciado com sucesso.');

chrome.runtime.onInstalled.addListener(() => {
  console.log('Captura de Tela Rápida instalada.');
  chrome.storage.local.set({ installTime: Date.now() }).then(() => {
    console.log('Tempo de instalação registrado.');
  });
});