const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');

let pageContent = '';
let mainWindow;

/* Init application */
const init = () => {
    /* Create the browser window */
    mainWindow = new BrowserWindow();

    /* Text content to be shown in the window */
    let content = `${app.getName()} v${app.getVersion()}`;

    /* Load plain text content */
    addContent(content);

    if (!require('electron-is-dev')) {
        autoUpdater.on('checking-for-update', () => {
            addContent('Checking for update');
        });

        autoUpdater.on('error', (error) => {
            addContent('Error while checking for updates', error);
        });

        autoUpdater.on('update-available', (updateInfo) => {
            addContent('Update is available:', updateInfo);
        });

        autoUpdater.on('update-not-available', (updateInfo) => {
            addContent('No updates are available', updateInfo);
        });

        autoUpdater.on('download-progress', (progressInfo) => {
            let logMessage = `speed ${progressInfo.bytesPerSecond} b/s; progress ${progressInfo.percent}%; downloaded ${progressInfo.transferred} out of ${progressInfo.total} bytes`;

            addContent(logMessage);
        });

        autoUpdater.on('update-downloaded', (updateInfo) => {
            addContent('Update is ready', updateInfo);
        });

        /* Check for updates manually at start */
        autoUpdater.checkForUpdates();

        /* Check updates every minute */
        setInterval(() => {
            autoUpdater.checkForUpdates();
        }, 60 * 1000);
    }
};

/**
 * Add message to window
 */
const addContent = (...content) => {
    for (let i = 0; i < content.length; i++) {
        pageContent = `${pageContent}${typeof content[i] === 'object' ? JSON.stringify(content[i]) : content[i]} `;
    }
    pageContent += `\n`;

    mainWindow.webContents.loadURL('data:text/plain;charset=utf-8,' + encodeURI(pageContent));
};

app.on('ready', init);