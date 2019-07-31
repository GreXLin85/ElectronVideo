const electron = require("electron")
const fileExtension = require("file-extension")

//Electron libraries
const { app, BrowserWindow, dialog, ipcMain } = electron

//Variables
let window0

//Code

app.on("ready", () => {

    let videofile = dialog.showOpenDialogSync({
        properties: ['openFile'],
        filters: [
            { name: 'Videos', extensions: ['mp4', 'webm', 'ogg'] }
        ]
    })

    window0 = new BrowserWindow({ webPreferences: { nodeIntegration: true }, frame:false})

    window0.loadFile("frontend/main.html")

    ipcMain.on("kanal0", (event, args) => {
        event.returnValue = videofile
    })
    ipcMain.on("komutkanali1", (event, arg) => {
        if (arg == "altakucult") {
            window0.minimize()
        }
    })
})