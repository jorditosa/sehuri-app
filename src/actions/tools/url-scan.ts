import { UrlScannerI } from "../../pages/tools/url-scanner/url-scanner.types";


export async function scanURLAction(formData: UrlScannerI) {
  const { url } = formData;

  const res = await fetch(import.meta.env.VITE_WEBHOOK_SCANURL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": import.meta.env.VITE_WEBHOOK_API_KEY
    },
    body: JSON.stringify({ url })
  });

  
  const data = await res.json();
  return data[0]
}