import { useEffect } from 'react';

export const useAppRedirect = (deepLinkPath: string) => {
  useEffect(() => {
    // Detecta se está em um dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (!isMobile) {
      return; // Se não for mobile, não faz nada
    }

    // Tenta abrir o deep link
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    let appUrl = '';
    if (isIOS) {
      appUrl = `bsbeats://${deepLinkPath}`;
    } else if (isAndroid) {
      appUrl = `bsbeats://app${deepLinkPath}`;
    }

    if (appUrl) {
      // Tenta abrir o app em background
      window.location.href = appUrl;
    }
  }, [deepLinkPath]);
};
