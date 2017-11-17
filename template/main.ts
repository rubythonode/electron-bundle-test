import { app, BrowserWindow } from 'electron';

const start = process.hrtime();
require('./module-main');
const time = process.hrtime(start);

const nanoseconds = (time[0] * 1e9) + time[1];
const milliseconds = nanoseconds / 1e6;

console.log('ms taken', milliseconds);

let mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600, });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => mainWindow = null);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
