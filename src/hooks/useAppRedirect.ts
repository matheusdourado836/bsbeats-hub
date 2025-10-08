import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAppRedirect = (deepLinkPath: string) => {
  const navigate = useNavigate();

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
      // Tenta abrir o app
      window.location.href = appUrl;

      // Se após 2 segundos ainda estiver na página, redireciona para download
      const timeout = setTimeout(() => {
        navigate('/download');
      }, 2000);

      // Limpa o timeout se o componente for desmontado
      return () => clearTimeout(timeout);
    }
  }, [deepLinkPath, navigate]);
};
