const { app, BrowserWindow, Menu } = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    minWidth: 1100,
    minHeight: 600,
    maxHeight: 1100,
    maxWidth: 600,

    fullscreen: false,
    removeMenu: true,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  //mainWindow.webContents.openDevTools()
  Menu.setApplicationMenu(null)
})
