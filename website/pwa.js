let deferredPrompt = null;

function showInstallButton() {
  const button = document.getElementById('installAppButton');
  if (!button) {
    return;
  }

  button.hidden = false;
  button.disabled = false;
}

function hideInstallButton() {
  const button = document.getElementById('installAppButton');
  if (!button) {
    return;
  }

  button.hidden = true;
}

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.js');
  } catch (error) {
    console.error('Falha ao registrar o service worker:', error);
  }
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallButton();
});

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  hideInstallButton();
});

window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('installAppButton');
  if (button) {
    button.addEventListener('click', async () => {
      if (!deferredPrompt) {
        return;
      }

      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      hideInstallButton();
    });
  }

  registerServiceWorker();
});
