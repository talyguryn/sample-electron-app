const { app, BrowserWindow } = require('electron');

/* Init application */
const init = () => {
    /* Create the browser window */
    const mainWindow = new BrowserWindow();

    /* Text content to be shown in the window */
    let content = `${app.getName()} v${app.getVersion()}`;

    /* Load plain text content */
    mainWindow.webContents.loadURL('data:text/plain;charset=utf-8,' + encodeURI(content));
};

app.on('ready', init);