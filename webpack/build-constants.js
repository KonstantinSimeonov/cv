import path from 'path';

export const BUILD_DIR = path.resolve(__dirname, '..', 'build');
export const SRC_DIR = path.resolve(__dirname, '..', 'src', 'app');
export const HTML_TEMPLATE_PATH = path.resolve(SRC_DIR, 'index.template.html');
export const APP_TITLE = 'Konstantin Simeonov - Resume';
export const DEV_SERVER_PORT = 4242;