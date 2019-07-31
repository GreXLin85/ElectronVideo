const { app } = require("electron").remote
const shortcut = require("shortcut")
const { ipcRenderer,desktopCapturer } = require("electron")
const altakucult = document.getElementById("altakucult")
const kapat = document.getElementById("kapat")

altakucult.addEventListener("click", e => {
    ipcRenderer.send("komutkanali1", "altakucult")
})
kapat.addEventListener("click", e => {
        app.exit()
    })
    
    ipcRenderer.on("ssal", (event,arg) => {
    	if (arg == "ok") {
    		document.getElementById("screenshot").src = clipboard.readImage("clipboard")
    	}
    })