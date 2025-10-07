import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { App } from '@capacitor/app';

export const useDeepLinking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const setupDeepLinking = async () => {
      // Handle app URL open event
      App.addListener('appUrlOpen', (event) => {
        console.log('Deep link received:', event.url);
        
        // Parse the URL
        const url = new URL(event.url);
        const path = url.pathname;
        
        // Navigate to the appropriate route
        if (path) {
          navigate(path);
        }
      });

      // Check if app was opened with a URL
      const checkAppLaunchUrl = await App.getLaunchUrl();
      if (checkAppLaunchUrl?.url) {
        console.log('App launched with URL:', checkAppLaunchUrl.url);
        const url = new URL(checkAppLaunchUrl.url);
        const path = url.pathname;
        if (path) {
          navigate(path);
        }
      }
    };

    setupDeepLinking();

    return () => {
      App.removeAllListeners();
    };
  }, [navigate]);
};
