import { ModelViewerElement } from '@google/model-viewer/lib/model-viewer';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
    Gleam: any;
  }
  namespace NodeJS {
    interface ProcessEnv {
      NX_API_ENDPOINT: string;
      NX_HARD_TOKEN: string;
      NX_DEBUG: string;
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
      // 'model-viewer': ModelViewerElement;
    }
  }
}
