const {app, BrowserWindow, shell, contextBridge, ipcRenderer} = require("electron");
const serve = require("electron-serve");
const path = require("path");

const appServe = app.isPackaged ? serve({
    directory: path.join(__dirname, "../out")
}) : null;

let mainWindow;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1250,
        height: 1000,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, "preload.ts"),
            nodeIntegration: false
        },

        autoHideMenuBar: true
    });

    if (app.isPackaged) {
        appServe(win).then(() => {
            win.loadURL("http://localhost:3000/");
        });
    } else {
        win.loadURL("http://localhost:3000/");
        win.webContents.on("did-fail-load", (e, code, desc) => {
            win.webContents.reloadIgnoringCache();
            console.log("test")
        });
    }

    mainWindow = win;
}

app.on("open-url", (event, data) => {
    console.log("test")
    mainWindow.webContents.send('login-success', {
        data
    })

})

app.on("ready", () => {
    createWindow();
});

app.setAsDefaultProtocolClient("motion");

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});