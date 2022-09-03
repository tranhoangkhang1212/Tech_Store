import { ENV } from './src/types';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NX_API_ENDPOINT: string;
            NX_HARD_TOKEN: string;
            NX_DEBUG: string;
            NX_ENV: ENV;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            'model-viewer': any;
            // 'model-viewer': ModelViewerElement;
        }
    }
}

declare type Required<T> = {
    [P in keyof T]-?: T[P];
};
