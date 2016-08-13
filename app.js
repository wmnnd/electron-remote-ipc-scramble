const {app, ipcMain, BrowserWindow} = require("electron")
var Immutable = require("immutable")

global.map = Immutable.Map({"a": 1, "b": 2})
ipcMain.on("getMap", (event, arg) => {
    event.returnValue = map
})


app.on("ready", () => {
	let win = new BrowserWindow({width: 1024, height: 600})

	win.loadURL('file://' + __dirname + '/test.html')
	win.toggleDevTools()
})
