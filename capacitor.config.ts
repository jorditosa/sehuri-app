import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.seckat',
  appName: 'sehuri',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Keyboard: {
      resize: 'none'
    },
    SplashScreen : {
      backgroundColor: "#60EFA4",
      showSpinner: false
    }
  },
};

export default config;
