const {ipcRenderer} = require("electron")
var Immutable = require("immutable")

//This is the expected behavior
console.log("Expected behavior:")
var map = Immutable.Map({"a": 1, "b": 2})
console.log("map:", map)
console.log("map.toJS:", map.toJS)
console.log("map.toJS():", map.toJS ? map.toJS() : undefined)
console.log("-----------------------------------")

//Unexpected behavior with remote object
console.log("Object scrambling with Electron.remote:")
var remoteMap = require('electron').remote.getGlobal('map')
console.log("map:", remoteMap)
console.log("map.toJS:", remoteMap.toJS())
console.log("map.toJS():", remoteMap.toJS ? remoteMap.toJS() : undefined)
console.log("-----------------------------------")

//Serialization with IPC
console.log("Serialization with ipcRenderer.sendSync:")
var ipcMap = ipcRenderer.sendSync("getMap")
console.log("map:", ipcMap)
console.log("map.toJS:", ipcMap.toJS)
console.log("map.toJS():", ipcMap.toJS ? ipcMap.toJS() : undefined)
console.log("-----------------------------------")
