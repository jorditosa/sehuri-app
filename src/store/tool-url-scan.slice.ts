import { create } from 'zustand'
import { UrlScannerI } from '../pages/tools/url-scanner/url-scanner.types'

interface UrlScanStore {
  // States
  scanResult: UrlScannerI | null;
  
  // Actions
  setScanResult: (result: UrlScannerI) => void;
  clearScan: () => void;
}

export const useToolURLScanner = create<UrlScanStore>((set) => ({
  scanResult: null,

  setScanResult: (result) => set({ scanResult: result }),
  clearScan: () => set({ scanResult: null }),
}))
