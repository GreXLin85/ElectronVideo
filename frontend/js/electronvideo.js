const {ipcRenderer} = require("electron")
const { app } = require("electron").remote
fileExtension = require("file-extension")
let videobilgi = ipcRenderer.sendSync("kanal0","BilgiVer")
let videouzanti = fileExtension(videobilgi)
document.getElementById("player").src = videobilgi
document.getElementById("player").type = "video/"+videouzanti
const altakucult = document.getElementById("altakucult")
const kapat = document.getElementById("kapat")

altakucult.addEventListener("click", e => {
    ipcRenderer.send("komutkanali1", "altakucult")
})
kapat.addEventListener("click", e => {
        app.exit()
})