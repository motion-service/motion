const {shell, ipcRenderer} = require("electron");

ipcRenderer.on("login-success", (event, data) => {
    console.log(data)
})