
export interface UrlScannerI {
  url: string
}

export interface URLScanResultsProps {
  location: {
    state: {
      result: {
        risk_score?: number;
        malicious_count?: number;
        suspicious_count?: number;
        harmless_count?: number;
        undetected_count?: number;
        malware?: boolean;
        phishing?: boolean;
        suspicious?: boolean;
        url?: string;
        total_engines?: number;
      };
    };
  };
}
