const {ipcRenderer} = require("electron")
var Immutable = require("immutable")

//This is the expected behavior
console.log("Expected behavior:")
var map = Immutable.Map({"a": 1, "b": 2})
console.log("map:", map)
console.log("map.toJS:", map.toJS)
console.log("map.toJS():", map.toJS ? map.toJS() : undefined)
console.log("map.get:", map.get)
console.log("map.get('a'):", map.get ? map.get("a") : undefined)
console.log("map.map:", map.map)
console.log("map.map(x => x*x).toJS():", map.map ? map.map(x => x*x).toJS() : undefined)
console.log("-----------------------------------")

//Unexpected behavior with remote object
console.log("Object scrambling with Electron.remote:")
var remoteMap = require('electron').remote.getGlobal('map')
console.log("map:", remoteMap)
console.log("map.toJS:", remoteMap.toJS())
console.log("map.toJS():", remoteMap.toJS ? remoteMap.toJS() : undefined)
console.log("map.get:", remoteMap.get)
console.log("map.get('a'):", remoteMap.get ? remoteMap.get("a") : undefined)
console.log("map.map:", remoteMap.map)
console.log("map.map(x => x*x).toJS():", remoteMap.map ? remoteMap.map(x => x*x).toJS() : undefined)
console.log("-----------------------------------")

//Serialization with IPC
console.log("Serialization with ipcRenderer.sendSync:")
var ipcMap = ipcRenderer.sendSync("getMap")
console.log("map:", ipcMap)
console.log("map.toJS:", ipcMap.toJS)
console.log("map.toJS():", ipcMap.toJS ? ipcMap.toJS() : undefined)
console.log("-----------------------------------")
