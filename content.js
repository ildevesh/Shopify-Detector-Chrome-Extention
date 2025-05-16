function isShopifySite() {
    try {
      if (typeof window.Shopify !== 'undefined') return true;
  
      const metas = document.getElementsByTagName('meta');
      for (let meta of metas) {
        if (meta.name === 'generator' && meta.content.toLowerCase().includes('shopify')) {
          return true;
        }
      }
  
      const scriptPattern = /cdn\.shopify\.com|myshopify\.com/i;
      for (let script of document.scripts) {
        if (scriptPattern.test(script.src)) return true;
      }
  
      return false;
    } catch {
      return false;
    }
  }
  
  function injectBanner() {
    if (document.getElementById('shopify-detector-banner')) return;
  
    const banner = document.createElement('div');
    banner.id = 'shopify-detector-banner';
  
    // Main message
    const message = document.createElement('div');
    message.textContent = 'Built with Shopify';
    message.style.fontWeight = 'bold';
  
    // Branding line
    const branding = document.createElement('div');
    branding.innerHTML = 'Built by ildevesh';
    branding.style.fontSize = '0.85em';
    branding.style.marginTop = '3px';
  
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    Object.assign(closeBtn.style, {
      position: 'absolute',
      right: '10px',
      top: '10px',
      border: 'none',
      background: 'transparent',
      color: 'white',
      fontSize: '20px',
      cursor: 'pointer',
      fontWeight: 'bold',
    });
    closeBtn.addEventListener('click', () => {
      banner.remove();
      document.body.style.marginTop = null;
    });
  
    Object.assign(banner.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      backgroundColor: '#95bf47',
      color: 'white',
      padding: '10px 40px 10px 10px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      zIndex: 9999,
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      userSelect: 'none',
      cursor: 'default',
    });
  
    banner.appendChild(message);
    banner.appendChild(branding);
    banner.appendChild(closeBtn);
    document.body.prepend(banner);
  
    document.body.style.marginTop = banner.offsetHeight + 'px';
  }
  
  setTimeout(() => {
    if (isShopifySite()) {
      injectBanner();
    }
  }, 2000);
  