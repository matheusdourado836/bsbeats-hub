import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.721b9750c2b24f81b61f920653cc4dc5',
  appName: 'bsbeats-hub',
  webDir: 'dist',
  server: {
    url: 'https://721b9750-c2b2-4f81-b61f-920653cc4dc5.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    App: {
      deepLinkScheme: 'bsbeats',
      deepLinkHostname: 'app'
    }
  }
};

export default config;
