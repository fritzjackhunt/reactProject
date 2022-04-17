import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.essiet.myApp',
  appName: 'myApp',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.43.111:8100",
    cleartext: true
  }
};

export default config;
